import Image from "next/image";
import Port from "../public/serg.png";
import Link from "next/link";

const About = ({ className = "" }) => {
  return (
    <div
      className={`${className} container col-span-1 hidden h-[629px] flex-col overflow-y-auto rounded-lg bg-white/10 px-6 text-white shadow-highlight md:block`}
    >
      <div className="flex justify-center">
        <Image
          src={Port}
          alt="Serg"
          width={300}
          height={300}
          className="mb-5 mt-10 rounded-full"
        />
      </div>

      <h1 className="mb-5 text-center text-2xl font-bold uppercase tracking-widest">
        About Me
      </h1>
      <p className="mx-auto px-4 text-center text-lg text-white/75 lg:hidden">
        I'm a web developer with a deep passion for photography. I freeze
        moments in time and tell unique stories through my images.
      </p>
      <p className="mx-auto hidden px-4 text-center text-lg text-white/75 lg:block">
        I am a web developer with a deep passion in the art of photography. With
        every click of the shutter, I freeze moments in time and preserve
        memories that tell unique stories. I strive to create an immersive
        experience where each image transports you to a different place and
        evokes a myriad of emotions.
      </p>
      <div className="text-center">
        <Link
          href="/contact"
          className="mt-4 bg-white/10 inline-flex items-center justify-center rounded-lg px-4 py-2 shadow-highlight text-white hover:white-white/20"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default About;