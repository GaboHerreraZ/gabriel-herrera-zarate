import Link from "next/link";
import Image from "next/image";

import { getTranslation } from "@/i18n";
import me from "../../../../public/img/profile.jpg";
import linkedin from "../../../../public/svg/linkedin.svg";
import git from "../../../../public/svg/github.svg";
import curriculum from "../../../../public/svg/curriculum.svg";

import { EmailButton } from "./EmailButton";

export const Profile = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "about-me");

  return (
    <section className="w-full text-center my-20 ">
      <h3 className="text-bold text-gradient  text-2xl ">{t("title")}</h3>
      <article className="flex flex-col items-center lg:flex-row gap-2 mt-10 md:justify-center">
        <Image src={me} alt="Gabriel Herrera Zarate" width={280} height={350} />
        <p className="w-full lg:w-1/3 text-justify text-xl px-2 text-slate-400">
          {t("aboutMe")}
        </p>
      </article>
      <div className="grid  grid-cols-2  md:flex  md:flex-row mt-10 lg:px-10 gap-10 justify-center">
        <Link
          href="https://www.linkedin.com/in/gabriel-herrera-z%C3%A1rate-810881a0/?originalSubdomain=es"
          target="_blank"
          className="flex group justify-center gap-2 items-center px-6 h-10 bg-slate-700 rounded-full "
        >
          <Image height={30} src={linkedin} alt="Linkedin Gabriel Herrera Z" />
          <h1 className="group-hover:font-extrabold text-slate-400 m-0 font-bold text-sm ">
            {t("linkedin")}
          </h1>
        </Link>
        <Link
          href="https://github.com/GaboHerreraZ"
          target="_blank"
          className="flex group justify-center gap-2 items-center px-6 h-10 bg-slate-700 rounded-full "
        >
          <Image height={30} src={git} alt="GitHub Gabriel Herrera Z" />
          <h1 className="text-slate-400 group-hover:font-extrabold m-0 font-bold text-sm ">
            {t("github")}
          </h1>
        </Link>
        <EmailButton label={t("contact")} />
        <Link
          download={true}
          href={`/documents/GabrielGiovany_HerreraZarate_CV_${lng.toUpperCase()}.pdf`}
          locale={false}
          target="_blank"
          rel="noopener noreferrer"
          className="flex group justify-center gap-2 items-center px-6 h-10 bg-slate-700 rounded-full "
        >
          <Image height={25} src={curriculum} alt="Cv Gabriel Herrera Z" />
          <h1 className="text-slate-400 group-hover:font-extrabold m-0 font-bold text-sm ">
            {t("download")}
          </h1>
        </Link>
      </div>
    </section>
  );
};
