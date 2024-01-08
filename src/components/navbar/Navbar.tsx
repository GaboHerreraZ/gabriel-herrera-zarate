import Image from "next/image";
import logo from "../../../public/img/gabriel-herrera-z-logo.png";
import { NavbarItem } from "./NabvarItem";
import { getTranslation } from "@/i18n";

export default async function Navigation({ lng }: { lng: string }) {
  const { t } = await getTranslation(lng, "navigation");

  const navItems = [
    {
      url: `#about-me`,
      label: t("aboutMe"),
    },
    {
      url: `#skills`,
      label: t("skills"),
    },
    {
      url: `#experience`,
      label: t("experience"),
    },
    {
      url: `#projects`,
      label: t("projects"),
    },
  ];

  return (
    <nav className="flex relative md:h-14 md:justify-between  md:px-10  md:shadow-md  md:shadow-white/20 md:rounded-lg">
      <input type="checkbox" id="menu" className="peer hidden" />
      <label
        htmlFor="menu"
        className="bg-open-menu self-start peer-checked:bg-close-menu transition-all z-50 md:hidden absolute bg-center bg-cover cursor-pointer m-4 p-4 w-7"
      ></label>
      <div className="hidden self-center md:flex justify-center w-full md:w-40">
        <Image
          alt="Gabo-herrera-zarate-logo"
          src={logo}
          height={40}
          width={150}
        />
      </div>
      <div className="fixed inset-0 h-screen  translate-x-full peer-checked:translate-x-0 md:static md:translate-x-0 bg-slate-400/40 bg-opacity-70 md:h-14  md:bg-slate-900 transition-transform ">
        <ul className="flex flex-col   m-2 mt-20 py-10 md:flex-row md:m-0 md:p-2 md:justify-end justify-start sm:gap-5 rounded-xl items-center md:h-full">
          {navItems.map((nav, index) => (
            <NavbarItem key={index} label={nav.label} url={nav.url} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
