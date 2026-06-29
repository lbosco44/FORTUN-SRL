import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { company } from "@/lib/company";
import { alternatesFor, routes, type Locale } from "@/lib/i18n";

const ogLocale = (l: Locale) => (l === "it" ? "it_IT" : "en_US");

export function homeMetadata(locale: Locale): Metadata {
  const c = getContent(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: alternatesFor("home", locale),
    openGraph: {
      type: "website",
      siteName: company.legalName,
      title: c.meta.title,
      description: c.meta.description,
      url: routes.home[locale],
      locale: ogLocale(locale),
      alternateLocale: ogLocale(locale === "it" ? "en" : "it"),
    },
    twitter: { card: "summary_large_image", title: c.meta.title, description: c.meta.description },
  };
}

const legalTitles = {
  privacy: {
    it: { title: "Privacy Policy — Fortun SRL", description: "Informativa sul trattamento dei dati personali ai sensi del GDPR (Reg. UE 2016/679) di Fortun S.r.l." },
    en: { title: "Privacy Policy — Fortun SRL", description: "Personal data processing notice under the GDPR (EU Reg. 2016/679) for Fortun S.r.l." },
  },
  cookie: {
    it: { title: "Cookie Policy — Fortun SRL", description: "Informativa sull'uso dei cookie e delle tecnologie di tracciamento sul sito di Fortun S.r.l." },
    en: { title: "Cookie Policy — Fortun SRL", description: "Information on the use of cookies and tracking technologies on the Fortun S.r.l. website." },
  },
} as const;

export function legalMetadata(page: "privacy" | "cookie", locale: Locale): Metadata {
  const t = legalTitles[page][locale];
  return {
    title: t.title,
    description: t.description,
    alternates: alternatesFor(page, locale),
  };
}

export function thankYouMetadata(locale: Locale): Metadata {
  const t =
    locale === "it"
      ? { title: "Richiesta inviata — Fortun SRL", description: "Abbiamo ricevuto la tua richiesta. Il team Fortun SRL ti risponderà al più presto." }
      : { title: "Request received — Fortun SRL", description: "We have received your request. The Fortun SRL desk will get back to you shortly." };
  return {
    title: t.title,
    description: t.description,
    robots: { index: false, follow: true },
    alternates: { canonical: routes.thankYou[locale] },
  };
}
