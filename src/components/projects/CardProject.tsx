import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Project } from "../../interfaces/Project";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export const CardProject = ({ project }: { project: Project }) => {
  const lang = useTranslations("projects");

  return (
    <Fade>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={project.image}
            alt={project.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              fontFamily="var(--font-family-text)"
              variant="h5"
              component="div"
            >
              {project.title}
            </Typography>
            <Typography
              fontFamily="var(--font-family-text)"
              variant="body2"
              color="text.secondary"
              textAlign="justify"
            >
              {lang(project.description)}
            </Typography>
            <Grid mt={2} container justifyContent={"center"}>
              {project.skills.map((s, i) => {
                return (
                  <Grid key={i} item>
                    <Image
                      alt={s.title}
                      height={40}
                      width={40}
                      src={s.svg}
                    ></Image>
                  </Grid>
                );
              })}
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link
              href={project.url}
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              {lang("seeMore")}
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Fade>
  );
};
