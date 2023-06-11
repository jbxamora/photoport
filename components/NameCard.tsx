import React, { useState } from "react";
import Bridge from "./Icons/Bridge";
import Logo from "./Icons/Logo";

interface NameCardProps {
  className?: string;
}

const NameCard: React.FC<NameCardProps> = ({ className = "" }) => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

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

      <div className="hidden lg:block">
        <Logo />
      </div>
      <div className="mb-15 block text-3xl font-bold text-slate-300 lg:hidden">
        Sergio Urbina
      </div>
      <p className="text-white/75 ">San Francisco, CA</p>

      <h1 className="mb-4 mt-8 text-2xl font-bold uppercase tracking-widest">
        Gallery
      </h1>
      <p className="text-white/75 ">Capturing Amazing Moments Since 2017</p>

      <button
        className="z-10 mt-4 rounded-lg bg-white/10 px-4 py-2 text-white shadow-highlight hover:bg-white/20 lg:hidden"
        onClick={handleContactClick}
      >
        Get In Touch
      </button>

      {showContact && (
        <div className="relative z-10 mt-4 font-bold text-white sm:hidden">
          <h1 className="py-1">Contact Info</h1>
          <p className="py-1">
            Email:
            <a
              href="mailto:sergiourbina1@yahoo.com?subject=Exciting%20Collaboration%20Opportunity&body=Hey%20Sergio,%0A%0AHope this email finds you well!%0A%0AI saw your photo gallery and wanted to reach out to discuss a potential collaboration%0A%0AI have an exciting project in mind where your unique artistic vision and expertise can shine.%0A%0A[About Your Project]%0A%0APlease let me know your availability for a quick call or meeting. I'm eager to hear your thoughts and ideas.%0A%0AThank you for considering this invitation.%0A%0A[Your Name]"
              className="z-11 ml-2 font-bold text-blue-500 hover:text-blue-700"
            >
              sergiourbina1@yahoo.com
            </a>
          </p>
          <p className="py-1">
            Phone:
            <a
              href="tel:+11234567890"
              className="z-11 ml-2 font-bold text-blue-500 hover:text-blue-700"
            >
              +1 (123) 456-7890
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default NameCard;
