"use client";
import "./globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Layout } from "../../components";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "../../themes";
import { inconsolata } from "../../styles/fonts";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: any;
  params: any;
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale} className={`${inconsolata.variable}`}>
      <head></head>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Layout>{children}</Layout>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
