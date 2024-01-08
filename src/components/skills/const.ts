import angular from "../../../public/svg/angular.svg";
import javascript from "../../../public/svg/javascript.svg";
import jasmine from "../../../public/svg/jasmine.svg";
import react from "../../../public/svg/react.svg";
import html from "../../../public/svg/html.svg";
import css from "../../../public/svg/css.svg";
import sass from "../../../public/svg/sass.svg";
import tailwind from "../../../public/svg/tailwind.svg";
import karma from "../../../public/svg/karma.svg";
import jest from "../../../public/svg/jest.svg";
import next from "../../../public/svg/next.svg";
import primeng from "../../../public/svg/primeng.svg";

import sqlserver from "../../../public/svg/sqlserver.svg";
import oracle from "../../../public/svg/oracle.svg";
import mongo from "../../../public/svg/mongo.svg";

import node from "../../../public/svg/node.svg";
import netcore from "../../../public/svg/netcore.svg";
import express from "../../../public/svg/express.svg";
import nest from "../../../public/svg/nest.svg";

import azure from "../../../public/svg/azure.svg";
import firebase from "../../../public/svg/firebase.svg";

export interface Skill {
  title: string;
  svg: any;
  width: number;
  height: number;
}

export const frontend: Skill[] = [
  {
    title: "Javascript",
    svg: javascript,
    width: 30,
    height: 30,
  },
  {
    title: "Angular",
    svg: angular,
    width: 40,
    height: 40,
  },
  {
    title: "React",
    svg: react,
    width: 40,
    height: 40,
  },
  {
    title: "Next Js",
    svg: next,
    width: 40,
    height: 40,
  },
  {
    title: "Prime Ng",
    svg: primeng,
    width: 40,
    height: 40,
  },
  {
    title: "Html",
    svg: html,
    width: 40,
    height: 40,
  },
  {
    title: "Css",
    svg: css,
    width: 40,
    height: 40,
  },
  {
    title: "Sass",
    svg: sass,
    width: 40,
    height: 40,
  },
  {
    title: "Tailwindcss",
    svg: tailwind,
    width: 40,
    height: 40,
  },
  {
    title: "Karma",
    svg: karma,
    width: 40,
    height: 40,
  },
  {
    title: "Jasmine",
    svg: jasmine,
    width: 40,
    height: 40,
  },
  {
    title: "Jest",
    svg: jest,
    width: 40,
    height: 40,
  },
];

export const backend: Skill[] = [
  {
    title: "Node Js",
    svg: node,
    width: 40,
    height: 40,
  },
  {
    title: "Nest Js",
    svg: nest,
    width: 40,
    height: 40,
  },
  {
    title: ".Net Core",
    svg: netcore,
    width: 40,
    height: 40,
  },
  {
    title: "Express Js",
    svg: express,
    width: 40,
    height: 40,
  },
];

export const databases: Skill[] = [
  {
    title: "Oracle",
    svg: oracle,
    width: 40,
    height: 40,
  },
  {
    title: "Sql Server",
    svg: sqlserver,
    width: 40,
    height: 40,
  },
  {
    title: "MongoDb",
    svg: mongo,
    width: 40,
    height: 40,
  },
];

export const cloud: Skill[] = [
  {
    title: "Firebase",
    svg: firebase,
    height: 40,
    width: 40,
  },
  {
    title: "Azure Devops",
    svg: azure,
    height: 40,
    width: 40,
  },
];
