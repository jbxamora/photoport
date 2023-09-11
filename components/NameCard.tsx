import React from "react";
import Bridge from "./Icons/Bridge";
import Logo from "./Icons/Logo";
import Link from "next/link";

interface NameCardProps {
  className?: string;
}

const NameCard: React.FC<NameCardProps> = ({ className = "" }) => {
  return (
    <div
      className={`${className} relative mb-5 flex h-[629px] w-[600px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0`}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <span className="flex max-h-full max-w-full items-center justify-center">
          <Bridge />
        </span>
        <span className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
      </div>

      <div className="block">
        <Logo />
      </div>
   
      <p className="text-white/75 tracking-wide mb-6">San Francisco, CA</p>

      <h1 className="mb-4 mt-8 text-2xl font-bold uppercase tracking-widest">
                                       
      </h1>
      <p className="text-white/75 mb-6 mt-4 tracking-widest ">
        Capturing Amazing Moments Since 2017
      </p>

      <Link
        href="/contact"
        className="z-50 mt-4 rounded-lg bg-white/10 px-4 py-2 text-white shadow-highlight hover:bg-white/20 md:hidden"
      >
        Get In Touch
      </Link>
    </div>
  );
};

export default NameCard;
