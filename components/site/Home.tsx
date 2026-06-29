import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/site/CookieBanner";
import { JsonLd } from "@/components/site/JsonLd";
import { Hero, About, Network_, Process, Solutions, Compliance, Contact } from "@/components/site/sections";
import { getContent } from "@/lib/content";
import { routes, otherLocale, type Locale } from "@/lib/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const otherHref = routes.home[otherLocale(locale)];
  const homeHref = routes.home[locale];

  return (
    <>
      <JsonLd locale={locale} />
      <Nav locale={locale} content={content} otherHref={otherHref} homeHref={homeHref} />
      <main id="main">
        <Hero content={content} />
        <About content={content} />
        <Network_ content={content} />
        <Process content={content} />
        <Solutions content={content} />
        <Compliance content={content} />
        <Contact locale={locale} content={content} />
      </main>
      <Footer locale={locale} content={content} otherHref={otherHref} />
      <CookieBanner locale={locale} content={content} />
    </>
  );
}
