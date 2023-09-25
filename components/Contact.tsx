import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Alert from "./Alert"; 

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // New states for Alert control
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_q05niu8",
        "Sergio",
        {
          from_name: form.name,
          to_name: "Sergio Urbina",
          from_email: form.email,
          to_email: "sergio@uncut.video",
          message: form.message,
        },
        "x1z0XVxJpE0k6XVbU"
      )
      .then(
        () => {
          setLoading(false);
          setAlertMessage(
            "Thank you. I will get back to you within 5 business days!"
          );
          setShowAlert(true);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setAlertMessage("Something went wrong.");
          setShowAlert(true);
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md rounded-2xl p-10">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col space-y-3"
        >
          <label className="flex flex-col">
            <span className="text-center font-medium text-black">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="rounded-lg border-2 border-none border-white bg-white/25 px-6 py-4 text-center font-medium text-black outline-none placeholder:text-black/50"
            />
          </label>

          <label className="flex flex-col">
            <span className="rounded px-3 text-center font-medium text-black">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="rounded-lg border-2 border-none border-white bg-white/25 px-6 py-4 text-center font-medium text-black outline-none placeholder:text-black/50"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-center font-medium text-black">
              Your Message
            </span>
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Make Sure To Add Phone #, Date, and Location."
              className="rounded-lg border-2 border-none border-white bg-white/25 px-6 py-4 text-center font-medium text-black outline-none placeholder:text-black/50"
            />
          </label>

          <div className="flex flex-col items-center sm:flex-row sm:justify-center">
            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-white px-8 py-3 font-bold text-black shadow-lg shadow-black outline-none hover:bg-white/20 active:bg-white/20 sm:w-auto"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>

        <Alert
          isOpen={showAlert}
          message={alertMessage}
          onClose={() => setShowAlert(false)}
        />
      </div>
    </div>
  );
};

export default Contact;
