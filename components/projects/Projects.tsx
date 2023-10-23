import { Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { JackInTheBox } from "react-awesome-reveal";
import { Project } from "../../interfaces/Project";
import { CardProject } from "./CardProject";

export const Projects = () => {
  const langNavbar = useTranslations("navbar");

  const projects: Project[] = [
    {
      title: "Tai Center",
      description: "taiCenter",
      image: "/img/tai-center.png",
      skills: [
        {
          title: "Angular",
          svg: "/svg/angular.svg",
        },
        {
          title: "Firebase",
          svg: "/svg/firebase.svg",
        },
      ],
      url: "https://www.taicenter.es/#/inicio",
    },
    {
      title: "Inversiones Cedro Azul",
      description: "inversionesCedroAzul",
      image: "/img/logo-cedro-azul.png",
      skills: [
        {
          title: "Next js",
          svg: "/svg/next.svg",
        },
        {
          title: "Tailwindcss",
          svg: "/svg/tailwind.svg",
        },
      ],
      url: "https://www.grupocedroazul.com/es",
    },
  ];

  return (
    <Grid id="projects" mt={10} mb={5}>
      <JackInTheBox>
        <Typography
          mt={5}
          mb={5}
          variant="h5"
          textAlign="center"
          fontFamily="var(--font-family-text)"
          color="#121fcf"
        >
          {langNavbar("projects")}
        </Typography>
      </JackInTheBox>
      <Grid container>
        {projects.map((project, i) => {
          return (
            <Grid item p={1} md={4} sm={6} xs={12} key={i}>
              <CardProject project={project} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
