import "./globals.css";
import { Inconsolata } from "next/font/google";
import Navigation from "@/components/navbar/Navbar";
import { Metadata } from "next";
import { getTranslation } from "@/i18n";
import { Whatsapp } from "@/components/contact/Whatsapp";

const inconsolata = Inconsolata({ subsets: ["latin"] });

const locales = ["en", "es"];

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}): Promise<Metadata> {
  const { t } = await getTranslation(lng, "seo");

  return {
    metadataBase: new URL("https://www.dominicanmasterblue.com"),
    title: {
      default: "Gabo Herrera Z",
      template: "%s | Gabo Herrera Z",
    },
    description: t("description"),
    verification: {
      google: "",
    },
  };
}

export function generateStaticParams() {
  return locales.map((lng) => ({ lng }));
}

export default async function LocaleLayout({
  children,
  params: { lng },
}: {
  children: any;
  params: any;
}) {
  return (
    <html
      className={`${inconsolata.className} scroll-smooth antialiased`}
      lang={lng}
    >
      <body className="bg-slate-900 p-4 ">
        <Navigation lng={lng} />
        <div className="mx-2 mt-20  md:mx-40 ">{children}</div>
        <Whatsapp />
      </body>
    </html>
  );
}
