import { useTranslations, useLocale } from "next-intl";
import { Welcome } from "../../components";
import { Grid, Typography, Button, Link } from "@mui/material";
import Image from "next/image";
import confetti from "canvas-confetti";

import { Fade, JackInTheBox } from "react-awesome-reveal";

export const Profile = () => {
  const lang = useTranslations("profile");
  const langNavbar = useTranslations("navbar");
  const locale = useLocale();

  const onCanvas = () => {
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <>
      <Welcome />
      <Grid mt={15} mb={5}>
        <JackInTheBox>
          <Typography
            mt={5}
            mb={5}
            variant="h5"
            sx={{ textAlign: "center" }}
            fontFamily="var(--font-family-text)"
            color="#121fcf"
          >
            {langNavbar("aboutMe")}
          </Typography>
        </JackInTheBox>

        <Grid container spacing={1}>
          <Grid
            item
            md={6}
            sm={12}
            sx={{ width: "100%", textAlign: { md: "left", xs: "center" } }}
          >
            <Fade delay={300}>
              <Image
                style={{ borderRadius: "10px" }}
                alt=""
                width={350}
                height={280}
                src="/img/profile.jpg"
              />
            </Fade>
          </Grid>
          <Grid sx={{ textAlign: "center" }} item md={6} sm={12}>
            <Fade delay={1e3} cascade damping={1e-1}>
              <Typography
                color="#7d7d7d"
                fontFamily="var(--font-family-text)"
                sx={{
                  textAlign: "justify",
                  fontSize: { md: "16px", sm: "14px", xs: "14px" },
                }}
              >
                {lang("description")}
              </Typography>
              <Button
                onClick={onCanvas}
                sx={{ marginTop: "5rem" }}
                size="small"
                variant="outlined"
              >
                <Link
                  download={true}
                  sx={{ textDecoration: "none" }}
                  href={`/documents/GabrielGiovany_HerreraZarate_CV_${locale}.pdf`}
                >
                  {lang("download")}
                </Link>
              </Button>
            </Fade>
          </Grid>
        </Grid>
        <Grid container mt={10}>
          <Grid item md={6} sm={6} xs={6} textAlign="center">
            <Typography mb={2}>{lang("github")}</Typography>
            <Link href="https://github.com/GaboHerreraZ" target="_blank">
              <Image
                alt="GitHub"
                width={50}
                height={50}
                src="/svg/github.svg"
              ></Image>
            </Link>
          </Grid>
          <Grid id="skills" item md={6} sm={6} xs={6} textAlign="center">
            <Typography mb={2}>{lang("linkedin")}</Typography>
            <Link
              href="https://www.linkedin.com/in/gabriel-herrera-z%C3%A1rate-810881a0/?originalSubdomain=es"
              target="_blank"
            >
              <Image
                alt="Linkedin"
                width={60}
                height={60}
                src="/svg/linkedin.svg"
              ></Image>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
