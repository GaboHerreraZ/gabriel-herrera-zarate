import Image from "next/image";

import { Experience } from "../const";
import ok from "../../../../public/svg/ok.svg";
import { getTranslation } from "@/i18n";
import Link from "next/link";

interface Props {
  lng: string;
  experience: Experience;
}

export const TimeLineRight = async ({ lng, experience }: Props) => {
  const { t } = await getTranslation(lng, "experience");

  return (
    <section className="flex flex-col  w-full">
      <div className="flex">
        <div className="w-5 md:w-1/2   ">
          <div className="md:flex flex-start  relative ">
            <Link href={experience.link} target="_blank">
              <div
                style={{
                  backgroundColor: `${experience.color}`,
                }}
                className={`p-2  h-10 w-10 md:w-20 md:h-20 flex absolute -right-5 md:-right-10 items-center justify-center rounded-full `}
              >
                <Image
                  alt="Raona timeline"
                  height={50}
                  width={50}
                  src={experience.image}
                />
              </div>
            </Link>
          </div>
        </div>
        <div
          style={{
            borderColor: `${experience.color}`,
          }}
          className={`w-full md:w-1/2 ${
            experience.border ? "border-l-2" : "border-none"
          }`}
        >
          <div className="md:flex justify-start  ">
            <div className="px-7 md:px-1 md:ml-10">
              <h1 className="text-white  font-bold text-xl">
                {experience.title}
              </h1>
              <h2 className="text-slate-400">
                {experience.startDate} - {experience.endDate}
              </h2>
              <h2 className="text-slate-400 mb-5 ">{experience.location}</h2>
              <article className="shadow-sm rounded-lg text-slate-400 shadow-white/20  p-2">
                <ul className="flex flex-col gap-2">
                  {experience.experiences.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <Image src={ok} alt="ok-experience" width={15} />
                      <label className="text-sm">{t(item)}</label>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
