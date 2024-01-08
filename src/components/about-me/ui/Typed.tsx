"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const TypedText = ({ message }: { message: string }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [message],
      typeSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="font-bold mt-5 text-2xl h-14 text-white md:text-5xl">
      <span ref={el} />
    </div>
  );
};
