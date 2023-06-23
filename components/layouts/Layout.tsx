"use client";
import { ReactNode, FC } from "react";
import { Container } from "@mui/material";

import styles from "./Layout.module.css";
import { Navbar } from "../navbar";
interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
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
