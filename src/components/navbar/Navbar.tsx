import { useTranslations } from "next-intl";
import Image from "next/legacy/image";
import logo from "../../../public/svg/gabriel-herrera-z-logo.svg";
import Link from "next/link";

export default function Navigation() {
  const navItems = [
    {
      url: "about-me",
      label: "aboutMe",
    },
    {
      url: "skills",
      label: "skills",
    },
    {
      url: "experience",
      label: "experience",
    },
    {
      url: "projects",
      label: "projects",
    },
  ];

  const t = useTranslations("navbar");

  /*const [url, setUrl] = useState("");

  const onRedirect = (href: string) => {
    setUrl(href);
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };*/

  return (
    <nav className="flex relative md:h-14 md:justify-between  md:px-5  md:shadow-md  md:shadow-b-slate-100 md:rounded-lg">
      <input type="checkbox" id="menu" className="peer hidden" />
      <label
        htmlFor="menu"
        className="bg-open-menu self-start peer-checked:bg-close-menu transition-all z-50 md:hidden absolute bg-center bg-cover cursor-pointer m-4 p-4 w-7 h-7"
      ></label>
      <Image
        className="hidden md:block"
        src={logo}
        layout="intrinsic"
        height={50}
        width={100}
      />
      <div className="fixed inset-0 h-screen  translate-x-full peer-checked:translate-x-0 md:static md:translate-x-0 bg-slate-400 bg-opacity-70 md:h-14  md:bg-slate-700 transition-transform ">
        <ul className="flex  flex-col  bg-slate-700 m-20 py-10 md:flex-row md:m-0 md:p-2 md:justify-end justify-start   rounded-xl items-center md:h-full">
          {navItems.map((nav, index) => (
            <li
              key={index}
              className="text-white font-bold py-3 md:px-3 md:py-0 text-lg hover:scale-105 duration-1000 hover:text-violet-600"
            >
              <Link href={`#${nav.url}`}>{t(nav.label)}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/**
 *<div className="w-full hidden md:flex md:h-16 md:bg-none  peer-checked:flex  justify-center items-center py-10 md:py-0 peer-checked:bg-slate-400 peer-checked:bg-opacity-60 peer-checked:h-screen">
        <ul className="p-8 w-1/2 h-72 bg-slate-900 rounded-lg  shadow-2xl   md:flex md:flex-row md:items-center   md:my-2  md:h-14 md:bg-transparent md:shadow-none   peer-checked:flex-col ">
          {navItems.map((nav) => (
            <li className="text-white font-bold py-3 md:px-3 md:py-0 text-lg">
              <Link href={`#${nav.url}`}>{t(nav.label)}</Link>
            </li>
          ))}
        </ul>
      </div>
 *
 *
 */
