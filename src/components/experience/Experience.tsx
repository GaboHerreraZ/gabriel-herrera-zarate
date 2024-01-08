import { getTranslation } from "@/i18n";
import { TimeLine } from "./ui/TimeLine";

export const Experience = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "experience");

  return (
    <section id="experience" className="mt-10 scroll-smooth">
      <h3 className="text-bold text-center text-gradient  text-2xl ">
        {t("title")}
      </h3>
      <TimeLine lng={lng} />
    </section>
  );
};
