import Image from "next/image";
import { Skill } from "../const";

export const SkillCard = ({ title, svg, width, height }: Skill) => {
  return (
    <label className="flex gap-2 h-14 items-center justify-center bg-slate-700 w-[150px] p-2 rounded-full text-slate-400">
      <Image alt={title} width={width} height={height} src={svg} />
      <span>{title}</span>
    </label>
  );
};
