import { getTranslation } from "@/i18n";
import { ProjectCard } from "./ui/Project";
import { projects } from "./const";

export const Projects = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "projects");

  return (
    <section id="projects" className="mt-20 scroll-smooth ">
      <h3 className="text-bold text-center text-gradient  text-2xl ">
        {t("title")}
      </h3>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 mt-10 justify-center ">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} lng={lng} />
        ))}
      </div>
    </section>
  );
};
