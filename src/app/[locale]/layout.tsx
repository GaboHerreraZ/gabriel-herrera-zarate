import "./globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Inconsolata } from "next/font/google";
import { unstable_setRequestLocale } from "next-intl/server";
import Navigation from "@/components/navbar/Navbar";

const inconsolata = Inconsolata({ subsets: ["latin"] });

const locales = ["en", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: any;
  params: any;
}) {
  console.log("LocaleLayout ", locale);

  if (!locales.includes(locale as any)) notFound();

  unstable_setRequestLocale(locale);

  console.log("is ok");

  return (
    <html className={`${inconsolata.className} scroll-smooth`} lang={locale}>
      <body className="bg-slate-700 p-4 ">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
