"use client";
import { useTranslations } from "next-intl";

import { Typography, Button, Link, Grid } from "@mui/material";
import confetti from "canvas-confetti";
import { Fade } from "react-awesome-reveal";

export const Welcome = () => {
  const lang = useTranslations("welcome");

  const onCanvas = () => {
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 0,
        y: 0,
      },
    });
  };

  return (
    <Grid mt={5} mb={5}>
      <Fade delay={100}>
        <Typography
          variant="h6"
          component="h5"
          color="#121fcf"
          fontFamily="var(--font-family-text)"
        >
          {lang("label")}
        </Typography>
      </Fade>
      <Fade delay={300}>
        <Typography
          variant="h2"
          mt={2}
          component="h5"
          sx={{
            fontFamily: "var(--font-family-text) !important",
            typography: { md: "h2", sm: "h3", xs: "h4" },
          }}
        >
          Gabriel Herrera Zarate
        </Typography>
      </Fade>
      <Fade delay={500}>
        <Typography
          variant="h2"
          component="h5"
          className="text-gradient"
          sx={{
            fontFamily: "var(--font-family-text) !important",
            typography: { md: "h2", sm: "h3", xs: "h4" },
          }}
        >
          {lang("rol")}
        </Typography>
      </Fade>
      <Fade delay={800}>
        <Typography
          mt={2}
          mb={5}
          color="#7d7d7d"
          fontFamily="var(--font-family-text)"
          sx={{
            textAlign: "justify",
            fontSize: { md: "16px", sm: "14px", xs: "14px" },
          }}
        >
          {lang("description")}
        </Typography>
      </Fade>

      <Fade delay={1200}>
        <Button
          onClick={onCanvas}
          sx={{ marginTop: "5rem" }}
          size="small"
          variant="outlined"
        >
          <Link
            sx={{ textDecoration: "none" }}
            href="mailto:gaboghz654@gmail.com"
          >
            {lang("contact")}
          </Link>
        </Button>
      </Fade>
    </Grid>
  );
};
