"use client";
import { AppBar, Toolbar, Box, Button, Link, IconButton } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { DrawerContent } from "./Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

export const Navbar = () => {
  const navItems = [
    {
      url: "about-me",
      label: "aboutMe",
    },
    {
      url: "skills",
      label: "skills",
    },
    {
      url: "experience",
      label: "experience",
    },
    {
      url: "projects",
      label: "projects",
    },
  ];

  const langs = useTranslations("navbar");

  const [url, setUrl] = useState("");

  const onRedirect = (href: string) => {
    setUrl(href);
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = <h1></h1>;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { sm: "space-between", xs: "space-between" },
            backgroundColor: "#121212",
            boxShadow: "0px 15px 10px -15px grey",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 0, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Image
            alt="Gabriel Herrera Z"
            width={150}
            height={50}
            src="/svg/gabriel-herrera-z-logo.svg"
          ></Image>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                gap: "25px",
              },
            }}
          >
            {navItems.map((item) => (
              <Button
                className={`${url === item.url && "text-gradient"}`}
                onClick={() => onRedirect(item.url)}
                key={item.url}
                sx={{
                  color: "#fff",
                  fontFamily: "var(--font-family-text)",
                }}
              >
                <Link
                  href={`#${item.url}`}
                  sx={{ textDecoration: "none", color: "#fff" }}
                >
                  {langs(item.label)}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
        <Box component="main"></Box>
      </AppBar>
      <Box component="nav">
        <DrawerContent
          url={url}
          mobileOpen={mobileOpen}
          navItems={navItems}
          onRedirect={onRedirect}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>
    </Box>
  );
};
