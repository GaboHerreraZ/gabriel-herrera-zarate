import { getTranslation } from "@/i18n";
import { backend, cloud, databases, frontend } from "./const";
import { SkillCard } from "./ui/SkillCard";

export const Skills = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "skills");

  return (
    <section
      id="skills"
      className="w-full scroll-smooth text-center my-28 px-0 lg:px-10"
    >
      <h3 className="text-bold text-gradient  text-2xl ">{t("title")}</h3>
      <h2 className="mt-20 font-bold text-white text-3xl">{t("frontEnd")}</h2>
      <div className="grid grid-cols-2 place-items-center lg:grid-cols-5 md:grid-cols-3 gap-2 mt-20  ">
        {frontend.map((item, index) => (
          <SkillCard key={index} {...item} />
        ))}
      </div>
      <h2 className="mt-20 font-bold text-white text-3xl">{t("backEnd")}</h2>
      <div className="grid grid-cols-2 place-items-center lg:grid-cols-5 md:grid-cols-3 gap-4 mt-20">
        {backend.map((item, index) => (
          <SkillCard key={index} {...item} />
        ))}
      </div>
      <h2 className="mt-20 font-bold text-white text-3xl">{t("databases")}</h2>
      <div className="grid grid-cols-2 place-items-center lg:grid-cols-5 md:grid-cols-3 gap-4 mt-20  ">
        {databases.map((item, index) => (
          <SkillCard key={index} {...item} />
        ))}
      </div>

      <h2 className="mt-20 font-bold text-white text-3xl">{t("cloud")}</h2>
      <div className="grid grid-cols-2 place-items-center lg:grid-cols-5 md:grid-cols-3 gap-4 mt-20  ">
        {cloud.map((item, index) => (
          <SkillCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
