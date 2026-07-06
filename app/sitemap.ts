import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const homeAlternates = {
    languages: {
      it: `${SITE_URL}/it`,
      en: `${SITE_URL}/`,
      "x-default": `${SITE_URL}/`,
    },
  };
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1, alternates: homeAlternates },
    { url: `${SITE_URL}/it`, lastModified: now, changeFrequency: "monthly", priority: 1, alternates: homeAlternates },
    { url: `${SITE_URL}/certifications`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/it/certificazioni`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/it/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/cookie-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/it/cookie`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
