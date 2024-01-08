import Image from "next/image";
import Link from "next/link";

import ok from "../../../../public/svg/ok.svg";
import { Experience } from "../const";
import { getTranslation } from "@/i18n";

interface Props {
  lng: string;
  experience: Experience;
}

export const TimeLineLeft = async ({ lng, experience }: Props) => {
  const { t } = await getTranslation(lng, "experience");

  return (
    <section className="flex flex-col w-full">
      <div className="flex">
        <div
          style={{
            borderColor: `${experience.color}`,
          }}
          className={`w-full md:w-1/2 border-l-2   ${
            experience.border
              ? "border-r-0 md:border-l-0 md:border-r-2"
              : "border-none"
          }  md:order-1 order-2 flex justify-end`}
        >
          <div className="px-7 ">
            <h1 className="text-white font-bold text-xl md:text-end md:mr-5">
              {experience.title}
            </h1>
            <h2 className="text-slate-400  md:text-end md:mr-5 ">
              {experience.startDate} - {experience.endDate}
            </h2>
            <h2 className="text-slate-400 mb-5 md:text-end md:mr-5 ">
              {experience.location}
            </h2>
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
        <div className="w-5 md:w-1/2 order-1 md:order-2 ">
          <div className="md:flex flex-start  relative ">
            <Link href={experience.link} target="_blank">
              <div
                style={{
                  backgroundColor: `${experience.color}`,
                }}
                className={`p-2 w-10 h-10 md:w-20 md:h-20 flex absolute -right-5 md:-right-10 md:-left-10 items-center justify-center rounded-full `}
              >
                <Image
                  alt="Raona timeline"
                  height={60}
                  width={60}
                  src={experience.image}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
