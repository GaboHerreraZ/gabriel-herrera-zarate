import createMiddleware from "next-intl/middleware";
import { pathnames, locales } from "./navigation";

export default createMiddleware({
  defaultLocale: "es",
  locales,
  pathnames,
});

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};
