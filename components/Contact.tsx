// Import necessary dependencies and components
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// Define Contact component
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
          alert("Thank you. I will get back to you within 5 business days!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong.");
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
            <span className="font-medium text-white text-center">Your Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="rounded-lg border-2 border-none border-white bg-white/25 px-6 py-4 text-center font-medium text-white outline-none placeholder:text-white/50"
            />
          </label>

          <label className="flex flex-col">
            <span className="rounded px-3 font-medium text-white text-center">Your Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="rounded-lg border-2 border-none border-white bg-white/25 px-6 py-4 text-center font-medium text-white outline-none placeholder:text-white/50"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium text-white text-center">Your Message</span>
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Make Sure To Add Phone #, Date, and Location."
              className="rounded-lg border-2 border-none border-white px-6 py-4 text-center font-medium text-white outline-none placeholder:text-white/50 bg-white/25"
            />
          </label>

          <div className="flex flex-col items-center sm:flex-row sm:justify-center">
            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-white px-8 py-3 font-bold text-black shadow-lg shadow-black outline-none sm:w-auto active:bg-slate-500 hover:bg-slate-500"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
