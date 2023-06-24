"use client";
import { ReactNode, FC } from "react";
import { Container, Typography, Link, Box } from "@mui/material";

import styles from "./Layout.module.css";
import { Navbar } from "../navbar";
interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box className={styles.content} sx={{ display: {} }}>
        <Typography
          className={styles.email}
          fontFamily="var(--font-family-text)"
        >
          <Link
            color="#7d7d7d"
            sx={{ textDecoration: "none" }}
            href="mailto:gaboghz654@gmail.com"
          >
            gaboghz654@gmail.com
          </Link>
        </Typography>
      </Box>
      <Container
        maxWidth="md"
        sx={{ padding: { sm: "50px" } }}
        className={styles.container}
      >
        {children}
      </Container>
    </>
  );
};
