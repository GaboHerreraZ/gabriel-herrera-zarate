import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://gabrielherrerazdev.com";
  return [
    { url: `${baseUrl}/es`, lastModified: new Date() },
    { url: `${baseUrl}/en`, lastModified: new Date() },
    { url: `${baseUrl}/es#about-me`, lastModified: new Date() },
    { url: `${baseUrl}/en#about-me`, lastModified: new Date() },
    { url: `${baseUrl}/es#skills`, lastModified: new Date() },
    { url: `${baseUrl}/en#skills`, lastModified: new Date() },
    { url: `${baseUrl}/es#experience`, lastModified: new Date() },
    { url: `${baseUrl}/en#experience`, lastModified: new Date() },
    { url: `${baseUrl}/es#projects`, lastModified: new Date() },
    { url: `${baseUrl}/en#projects`, lastModified: new Date() },
  ];
}
