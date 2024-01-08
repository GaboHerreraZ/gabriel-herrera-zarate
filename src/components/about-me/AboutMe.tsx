import { getTranslation } from "@/i18n";
import { Profile } from "./ui/Profile";
import { TypedText } from "./ui/Typed";

export default async function AboutMe({ lng }: { lng: string }) {
  const { t } = await getTranslation(lng, "about-me");

  return (
    <main id="about-me">
      <h3 className=" font-bold text-blue-800 text-xl">{t("label")}</h3>
      {/*  <h1 className="font-bold mt-5 text-2xl text-white md:text-5xl">
        Gabriel Herrera Zarate
      </h1> */}
      <TypedText message="Gabriel Herrera Zarate." />

      <h1 className="font-bold mt-5 text-2xl text-gradient md:text-5xl">
        {t("rol")}
      </h1>
      <p className="text-slate-400 mt-5 text-xl text-justify">
        {t("description")}
      </p>
      <Profile lng={lng} />
    </main>
  );
}
