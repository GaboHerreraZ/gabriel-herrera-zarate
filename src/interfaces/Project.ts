import { Skill } from "./Skill";

export interface Project {
  title: string;
  description: string;
  image: string;
  skills: Skill[];
  url: string;
}
