import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "es"] as const;

export const pathnames = {
  "/": "/",
  "/about": {
    en: "/about",
    es: "/sobre-nostros",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
  });
