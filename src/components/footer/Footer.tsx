import { getTranslation } from "@/i18n";
import Link from "next/link";

export const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "footer");

  return (
    <footer className="flex  justify-end items-center text-center border-t-[1px] border-slate-400 text-slate-400 mt-20">
      <p className="text-xs ">
        {t("designed")}
        <Link className="underline cursor-pointer" href={"https://nextjs.org/"}>
          NextJs
        </Link>
      </p>
    </footer>
  );
};
