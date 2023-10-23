"use client";
import { Typography, Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { CardSkill } from "./CardSkill";
import { Skill } from "../../interfaces/Skill";

import { JackInTheBox } from "react-awesome-reveal";

export const Skills = () => {
  const langNavbar = useTranslations("navbar");
  const lang = useTranslations("skills");

  const frontend: Skill[] = [
    {
      title: "Javascript",
      svg: "/svg/javascript.svg",
      rating: 4,
      width: 40,
      height: 40,
    },
    {
      title: "Angular",
      svg: "/svg/angular.svg",
      rating: 4,
      width: 40,
      height: 40,
    },
    {
      title: "React",
      svg: "/svg/react.svg",
      rating: 3,
      width: 40,
      height: 40,
    },
    {
      title: "Next Js",
      svg: "/svg/next.svg",
      rating: 3,
      width: 40,
      height: 40,
    },
    {
      title: "Html",
      svg: "/svg/html.svg",
      rating: 3,
      width: 40,
      height: 40,
    },
    {
      title: "Css",
      svg: "/svg/css.svg",
      rating: 3,
      width: 40,
      height: 40,
    },
    {
      title: "Sass",
      svg: "/svg/sass.svg",
      rating: 3,
      width: 40,
      height: 40,
    },
    {
      title: "Tailwindcss",
      svg: "/svg/tailwind.svg",
      rating: 3,
      width: 40,
      height: 40,
    },
    {
      title: "Karma",
      svg: "/svg/karma.svg",
      rating: 3,
      width: 40,
      height: 40,
    },
    {
      title: "Jasmine",
      svg: "/svg/jasmine.svg",
      rating: 3,
      width: 40,
      height: 40,
    },
    {
      title: "Jest",
      svg: "/svg/jest.svg",
      rating: 3,
      width: 40,
      height: 40,
    },
  ];

  const backend: Skill[] = [
    {
      title: "Node Js",
      svg: "/svg/node.svg",
      rating: 3.5,
      width: 40,
      height: 40,
    },
    {
      title: ".Net Core",
      svg: "/svg/netcore.svg",
      rating: 3,
      width: 40,
      height: 40,
    },
    {
      title: "Express Js",
      svg: "/svg/express.svg",
      rating: 3,
      width: 40,
      height: 40,
    },
  ];

  const databases: Skill[] = [
    {
      title: "Oracle",
      svg: "/svg/oracle.svg",
      rating: 3.5,
      width: 40,
      height: 40,
    },
    {
      title: "Sql Server",
      svg: "/svg/sqlserver.svg",
      rating: 3.5,
      width: 40,
      height: 40,
    },
    {
      title: "MongoDb",
      svg: "/svg/mongo.svg",
      rating: 3,
      width: 40,
      height: 40,
    },
  ];

  const cloud: Skill[] = [
    {
      title: "Firebase",
      rating: 3.5,
      svg: "/svg/firebase.svg",
      height: 40,
      width: 40,
    },
    {
      title: "Azure Devops",
      rating: 3,
      svg: "/svg/azure.svg",
      height: 40,
      width: 40,
    },
  ];

  return (
    <Grid mt={10}>
      <JackInTheBox>
        <Typography
          id="#skills"
          mt={5}
          mb={5}
          variant="h5"
          textAlign="center"
          fontFamily="var(--font-family-text)"
          color="#121fcf"
        >
          {langNavbar("skills")}
        </Typography>
      </JackInTheBox>

      <Typography
        mb={5}
        className="text-gradient"
        textAlign="center"
        variant="h4"
        fontFamily="var(--font-family-text)"
      >
        {lang("frontEnd")}
      </Typography>

      <Grid container spacing={2}>
        {frontend.map((item, i) => (
          <Grid key={i} item sm={2} xs={3}>
            <CardSkill item={item} />
          </Grid>
        ))}
      </Grid>

      <Typography
        mt={5}
        mb={5}
        className="text-gradient"
        textAlign="center"
        variant="h4"
        fontFamily="var(--font-family-text)"
      >
        {lang("backEnd")}
      </Typography>

      <Grid container spacing={2}>
        {backend.map((item, i) => (
          <Grid key={i} item sm={2}>
            <CardSkill item={item} />
          </Grid>
        ))}
      </Grid>

      <Typography
        mt={5}
        mb={5}
        className="text-gradient"
        textAlign="center"
        variant="h4"
        fontFamily="var(--font-family-text)"
      >
        {lang("databases")}
      </Typography>

      <Grid container spacing={2}>
        {databases.map((item, i) => (
          <Grid key={i} item sm={2}>
            <CardSkill item={item} />
          </Grid>
        ))}
      </Grid>

      <Typography
        mt={5}
        mb={5}
        className="text-gradient"
        textAlign="center"
        variant="h4"
        fontFamily="var(--font-family-text)"
      >
        {lang("cloud")}
      </Typography>

      <Grid id="experience" container spacing={2}>
        {cloud.map((item, i) => (
          <Grid key={i} item sm={2}>
            <CardSkill item={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
