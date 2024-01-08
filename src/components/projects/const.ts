import { Skill } from "../skills/const";
import taicenter from "../../../public/img/taicenter.jpg";
import grupoCedroAzul from "../../../public/img/grupo-cedro-azul.jpg";
import dominican from "../../../public/img/dominican-master-blue.jpg";

import angular from "../../../public/svg/angular.svg";
import firebase from "../../../public/svg/firebase.svg";
import primeng from "../../../public/svg/primeng.svg";
import tailwind from "../../../public/svg/tailwind.svg";
import next from "../../../public/svg/next.svg";
import nest from "../../../public/svg/nest.svg";

export interface Project {
  title: string;
  description: string;
  image: any;
  skills: Skill[];
  url: string;
  detail: string;
  considerations: string[];
  date: string;
}

export const projects: Project[] = [
  {
    title: "Dominican MasterBlue",
    date: "2023",
    description: "inversionesCedroAzul",
    detail: "taiCenterDetail",
    image: dominican,
    skills: [
      {
        title: "NextJs",
        height: 30,
        width: 30,
        svg: next,
      },
      {
        title: "NestJs",
        height: 30,
        width: 30,
        svg: nest,
      },

      {
        title: "Firebase",
        height: 30,
        width: 30,
        svg: firebase,
      },
      {
        title: "TailwindCss",
        height: 30,
        width: 30,
        svg: tailwind,
      },
    ],
    url: "https://dominicanmasterblue.com",
    considerations: [
      "dominicanConsideration2",
      "dominicanConsideration3",
      "dominicanConsideration4",
      "dominicanConsideration5",
      "dominicanConsideration6",
      "dominicanConsideration9",
      "dominicanConsideration10",
    ],
  },
  {
    title: "Inversiones Cedro Azul",
    date: "2023",
    description: "inversionesCedroAzul",
    detail: "taiCenterDetail",
    image: grupoCedroAzul,
    skills: [
      {
        title: "NextJs",
        height: 30,
        width: 30,
        svg: next,
      },
      {
        title: "TailwindCss",
        height: 30,
        width: 30,
        svg: tailwind,
      },
    ],
    url: "https://www.grupocedroazul.com",
    considerations: [
      "inversionesConsideration1",
      "inversionesConsideration2",
      "inversionesConsideration3",
      "inversionesConsideration4",
    ],
  },
  {
    title: "Tai Center",
    date: "2022",
    description: "taiCenter",
    detail: "taiCenterDetail",
    image: taicenter,
    skills: [
      {
        title: "Angular",
        height: 30,
        width: 30,
        svg: angular,
      },
      {
        title: "Firebase",
        height: 30,
        width: 30,
        svg: firebase,
      },
      {
        title: "Prime Ng",
        height: 30,
        width: 30,
        svg: primeng,
      },
    ],
    url: "https://www.taicenter.es/#/inicio",
    considerations: [
      "taiCenterConsideration1",
      "taiCenterConsideration2",
      "taiCenterConsideration3",
      "taiCenterConsideration4",
      "taiCenterConsideration5",
      "taiCenterConsideration6",
    ],
  },
];
