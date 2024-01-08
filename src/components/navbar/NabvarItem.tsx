"use client";
import { clsx } from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

export const NavbarItem = ({ url, label }: { url: string; label: string }) => {
  const [path, setPath] = useState<string | null>(null);

  useEffect(() => {
    setPath(window.location.hash);
  }, [path]);

  return (
    <li
      onClick={() => setPath(url)}
      className={clsx("", {
        "text-gradient": path === `${url}`,
        "text-gradient-hover": path !== `${url}`,
      })}
    >
      <Link href={`${url}`}>{label}</Link>
    </li>
  );
};
