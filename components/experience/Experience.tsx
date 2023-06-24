import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { Experience as Exp } from "../../interfaces/Experience";
import Image from "next/image";
import Link from "next/link";

import { JackInTheBox, Fade } from "react-awesome-reveal";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

export const Experience = () => {
  const langNavbar = useTranslations("navbar");
  const lang = useTranslations("experience");

  const experiences: Exp[] = [
    {
      title: "Raona",
      location: "Valencia - España",
      role: "Front End Developer",
      startDate: "02/2022",
      endDate: "Currently",
      image: "/img/raona.png",
      width: 144,
      height: 30,
      experiences: [
        "raona.experience1",
        "raona.experience2",
        "raona.experience3",
        "raona.experience4",
        "raona.experience5",
      ],
      link: "https://www.raona.com/",
    },
    {
      title: "Hiberus",
      location: "Valencia - España",
      role: "Full Stack Developer",
      startDate: "08/2019",
      endDate: "02/2022",
      image: "/img/hibe.png",
      width: 144,
      height: 30,
      experiences: [
        "hiberus.experience1",
        "hiberus.experience2",
        "hiberus.experience3",
        "hiberus.experience4",
        "hiberus.experience5",
      ],
      link: "https://www.hiberus.com/",
    },
    {
      title: "Banco Falabella",
      location: "Bogotá - Colombia",
      role: "Full Stack Developer",
      startDate: "04/2018",
      endDate: "07/2019",
      image: "/svg/falabella.svg",
      width: 144,
      height: 30,
      experiences: [
        "falabella.experience1",
        "falabella.experience2",
        "falabella.experience3",
        "falabella.experience4",
        "falabella.experience5",
      ],
      link: "https://www.bancofalabella.com.co/",
    },

    {
      title: "Asesoftware",
      location: "Bogotá - Colombia",
      role: "Full Stack Developer",
      startDate: "01/2017",
      endDate: "04/2018",
      image: "/img/asesoftware.png",
      width: 144,
      height: 60,
      experiences: [
        "asesoftware.experience1",
        "asesoftware.experience2",
        "asesoftware.experience3",
      ],
      link: "https://asesoftware.com/",
    },
  ];

  return (
    <Grid mt={10}>
      <JackInTheBox>
        <Typography
          mt={5}
          mb={5}
          variant="h5"
          textAlign="center"
          fontFamily="var(--font-family-text)"
          color="#121fcf"
        >
          {langNavbar("experience")}
        </Typography>
      </JackInTheBox>

      <Grid container>
        {experiences.map((exp, i) => {
          return (
            <Grid key={exp.title} item md={4} sm={6} textAlign="center">
              <Fade delay={400} cascade damping={0.1}>
                <Link href={exp.link} target="_blank">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    width={exp.width}
                    height={exp.height}
                  ></Image>
                </Link>

                <Typography
                  color="#7d7d7d"
                  fontFamily="var(--font-family-text)"
                  sx={{
                    fontSize: { md: "16px", sm: "14px", xs: "14px" },
                  }}
                >
                  {exp.role}
                </Typography>
                <Typography
                  color="#7d7d7d"
                  fontFamily="var(--font-family-text)"
                  sx={{
                    fontSize: { md: "16px", sm: "14px", xs: "14px" },
                  }}
                >
                  {`${exp.startDate} - ${exp.endDate}`}
                </Typography>
              </Fade>
              <Fade delay={400} cascade damping={0.1}>
                <List>
                  {exp.experiences.map((e, i) => {
                    return (
                      <ListItem key={i}>
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                          <TaskAltOutlinedIcon
                            color="secondary"
                            sx={{ width: "1rem" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography
                            color="#7d7d7d"
                            fontFamily="var(--font-family-text)"
                            sx={{
                              fontSize: { md: "14px", sm: "14px", xs: "14px" },
                            }}
                          >
                            {lang(e)}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </Fade>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
