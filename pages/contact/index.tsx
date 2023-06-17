import Link from "next/link";
import Instagram from "../../components/Icons/Instagram";
import Contact from "../../components/Contact";

export const metadata = {
  title: 'Contact Me',
}
 

export default function About() {
  return (
    <div className="flex h-screen w-full items-center overflow-auto bg-white/10 text-white">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center space-y-12 p-10 shadow-highlight">
        <section>
          <h1 className="mb-6 text-center text-3xl font-bold uppercase tracking-widest text-blue-400">
            Let's Connect
          </h1>
          <p className="mx-auto px-4 text-center text-lg leading-relaxed text-white/75">
            If you're interested in a shoot, send me a message below and I'll
            get back to you as soon as I can!
          </p>
          <Contact />

          <p className="mx-auto mt-4 px-4 text-center text-lg leading-relaxed text-white/75">
            Got any unique requests or queries? Don't hesitate to DM me on
            Instagram for a quicker response.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://instagram.com/sondersergio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg border px-2 py-2 text-lg text-gray-200 hover:border-white/50 hover:text-white/50 shadow-md shadow-black"
            >
              <Instagram />
              Instagram
            </a>
          </div>
        </section>

        <div className="mt-8 flex justify-center">
          <Link href="/"
            className="flex items-center justify-center rounded-lg border px-4 py-1 font-bold text-white hover:border-white/10 shadow-md shadow-black">
              Back
        
          </Link>
        </div>
      </div>
    </div>
  );
}
