import Image from "next/image";
import Link from "next/link";
import { Project } from "../const";
import { getTranslation } from "@/i18n";
import ok from "../../../../public/svg/ok.svg";

export const ProjectCard = async ({
  project,
  lng,
}: {
  project: Project;
  lng: string;
}) => {
  const { t } = await getTranslation(lng, "projects");

  return (
    <div className="flex flex-col text-center mb-20 rounded group cursor-pointer h-[430px]    ">
      <Image
        className="group-hover:hidden mt-5  rounded"
        alt="tai-center"
        src={project.image}
      />
      <div className="group-hover:block group-hover:opacity-100 h-0 hidden opacity-0   transition-opacity  ease-in-out duration-500 rounded   text-white ">
        <h1 className="font-bold  mt-4 text-gradient text-center text-sm md:text-xl uppercase ">
          {t(project.title)}
        </h1>
        <small className="mb-4 italic text-slate-400">{project.date}</small>
        <p className=" text-justify text-sm md:text-lg px-1 md:px-10">
          <span>{t(project.description)}</span>
        </p>
        <div className="py-4 justify-center flex">
          {project.skills.map((skill, idx) => {
            return (
              <div key={idx} className="flex items-center ml-4">
                <Image
                  alt="tai-center"
                  src={skill.svg}
                  height={skill.height}
                  width={skill.width}
                />
              </div>
            );
          })}
        </div>
        <h2 className="text-justify text-sm md:text-xl px-1 md:px-10 py-1 md:py-2 font-bold">
          {t(project.detail)}
        </h2>
        <div className="lg:grid  grid-cols-3 gap-2">
          {project.considerations.map((consideration, idx) => {
            return (
              <div key={idx} className="flex items-center px-1 md:px-10 gap-2">
                <Image alt="tai-center" src={ok} height={20} width={20} />
                <p className="text-[10px] md:text-xs">{t(consideration)}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center text-center mt-4">
          <Link
            className="w-fit py-2 rounded px-2 bg-slate-400/20 hover:animate-bounce "
            href={project.url}
            target="_blank"
          >
            {t("seeProject")}
          </Link>
        </div>
      </div>
    </div>
  );
};
