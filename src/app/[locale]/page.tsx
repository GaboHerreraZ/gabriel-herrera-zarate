import { useTranslations } from "next-intl";
import { locales } from "@/navigation";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import Layout from "@/components/layouts/Layout";

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  console.log("locale home", locale);
  const isValidLocale = locales.some((cur) => cur === locale);
  console.log("isValidLocale", isValidLocale);

  if (!isValidLocale) notFound();

  console.log("wait what?");

  // Enable static rendering
  unstable_setRequestLocale(locale);

  console.log("wait what 2?");

  const t = useTranslations("navbar");

  //console.log(t("aboutMe"));

  console.log("wait what 3?");

  return <Layout></Layout>;
}

/*<Profile />
<h1 className="underline text-blue-900">{t("aboutMe")}</h1>
<Skills />
<Experience />
<Projects />*/
