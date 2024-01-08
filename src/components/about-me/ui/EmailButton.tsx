"use client";

import confetti from "canvas-confetti";
import email from "../../../../public/svg/email.svg";
import Image from "next/image";

export const EmailButton = ({ label }: { label: string }) => {
  const onClick = () => {
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 0,
        y: 0,
      },
    });
  };

  return (
    <a href="mailto:gaboghz654@gmail.com">
      <button
        onClick={onClick}
        className="flex w-full justify-center items-center gap-2 bg-slate-700 h-10 rounded-full text-slate-400 hover:font-bold text-sm shadow-sm  px-6 py-1"
        type="button"
      >
        <Image src={email} alt="email" height={25} width={25} />
        {label}
      </button>
    </a>
  );
};
