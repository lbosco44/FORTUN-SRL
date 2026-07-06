import { CookieBanner } from "@/components/site/CookieBanner";
import { JsonLd } from "@/components/site/JsonLd";
import { NavLight } from "@/components/site/light/NavLight";
import { FooterLight } from "@/components/site/light/FooterLight";
import {
  HeroLight, AboutLight, NetworkLight, ProcessLight, ManifestoLight,
  SolutionsLight, ComplianceLight, CertificationsLight, ContactLight,
} from "@/components/site/light/Sections";
import { getContent } from "@/lib/content";
import { type Locale } from "@/lib/i18n";

// Home del sito: / (en, default) e /it (it).
const home = { it: "/it", en: "/" } as const;

export function HomeLightPage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const homeHref = home[locale];
  const otherHref = home[locale === "it" ? "en" : "it"];

  return (
    <div className="light-root font-grotesk min-h-dvh bg-paper text-ink">
      <JsonLd locale={locale} />
      <NavLight locale={locale} content={content} otherHref={otherHref} homeHref={homeHref} />
      <main id="main">
        <HeroLight content={content} />
        <AboutLight content={content} />
        <NetworkLight content={content} />
        <ProcessLight content={content} />
        <ManifestoLight content={content} />
        <SolutionsLight content={content} />
        <ComplianceLight content={content} />
        <CertificationsLight content={content} locale={locale} />
        <ContactLight locale={locale} content={content} />
      </main>
      <FooterLight locale={locale} content={content} otherHref={otherHref} homeHref={homeHref} />
      <CookieBanner locale={locale} content={content} />
    </div>
  );
}
