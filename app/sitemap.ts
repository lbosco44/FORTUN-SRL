import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const homeAlternates = {
    languages: {
      it: `${SITE_URL}/`,
      en: `${SITE_URL}/en`,
      "x-default": `${SITE_URL}/en`,
    },
  };
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1, alternates: homeAlternates },
    { url: `${SITE_URL}/en`, lastModified: now, changeFrequency: "monthly", priority: 1, alternates: homeAlternates },
    { url: `${SITE_URL}/certificazioni`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/en/certifications`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/en/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/cookie`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/en/cookie-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
