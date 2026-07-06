import { FileText } from "lucide-react";
import { CookieBanner } from "@/components/site/CookieBanner";
import { NavLight } from "@/components/site/light/NavLight";
import { FooterLight } from "@/components/site/light/FooterLight";
import { Reveal } from "@/components/site/Reveal";
import { Display, inkButtonClass } from "@/components/site/light/ui";
import { getContent } from "@/lib/content";
import { type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const lightHome = { it: "/light", en: "/en/light" } as const;
const certsHref = { it: "/light/certificazioni", en: "/en/light/certifications" } as const;

// slug = badge SVG in /bg/light/certs · pdf = base del certificato in /certs (poi -it/-en.pdf)
type Cert = { num: string; year: string; slug: string; pdf: string; title: string; desc: string };

const DATA: Record<Locale, { headLead: string; headAccent: string; intro: string; view: string; note: string; certs: Cert[] }> = {
  it: {
    headLead: "Standard e",
    headAccent: "certificazioni.",
    intro:
      "Operiamo nel rispetto dei principali standard internazionali di gestione. Le nostre certificazioni sono disponibili qui in formato PDF, in versione italiana e inglese.",
    view: "Visualizza il certificato (PDF)",
    note: "Certificati ufficiali rilasciati a Fortun S.r.l.",
    certs: [
      { num: "9001", year: "2015", slug: "iso-9001", pdf: "iso-9001", title: "Gestione della qualità", desc: "Sistema di gestione per la qualità di processi e servizi." },
      { num: "27001", year: "2022", slug: "iso-27001", pdf: "iso-27001", title: "Sicurezza delle informazioni", desc: "Protezione dei dati e dei sistemi informativi." },
    ],
  },
  en: {
    headLead: "Standards and",
    headAccent: "certifications.",
    intro:
      "We operate in line with the main international management standards. Our certifications are available here as PDF, in Italian and English versions.",
    view: "View the certificate (PDF)",
    note: "Official certificates issued to Fortun S.r.l.",
    certs: [
      { num: "9001", year: "2015", slug: "iso-9001", pdf: "iso-9001", title: "Quality management", desc: "Management system for the quality of processes and services." },
      { num: "27001", year: "2022", slug: "iso-27001", pdf: "iso-27001", title: "Information security", desc: "Protection of data and information systems." },
    ],
  },
};

export function CertsPage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const d = DATA[locale];
  const homeHref = lightHome[locale];
  const otherHref = certsHref[locale === "it" ? "en" : "it"];

  return (
    <div className="light-root font-grotesk min-h-dvh bg-paper text-ink">
      <NavLight locale={locale} content={content} otherHref={otherHref} homeHref={homeHref} anchorBase={homeHref} />
      <main id="main" className="px-6 pb-24 pt-[calc(var(--nav-h)+3rem)] lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Display lead={d.headLead} accent={d.headAccent} as="h1" className="max-w-4xl text-[clamp(2.4rem,5vw,4rem)]" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">{d.intro}</p>
          </Reveal>

          <div className="mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            {d.certs.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08}>
                <article className="flex h-full flex-col items-center rounded-2xl border border-ink/10 bg-white/60 p-8 text-center transition-colors duration-300 hover:border-gold-deep/40 hover:bg-white/85">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/bg/light/certs/${c.slug}.svg`}
                    alt={`Certificazione ISO ${c.num}:${c.year} — ${c.title}`}
                    width={132}
                    height={132}
                    className="h-32 w-32"
                  />
                  <h2 className="mt-6 font-grotesk text-2xl font-bold tracking-[-0.02em] text-ink">
                    ISO {c.num}:{c.year}
                  </h2>
                  <p className="readout mt-1.5 text-gold-deep">{c.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.desc}</p>
                  <a
                    href={`/certs/${c.pdf}-${locale}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(inkButtonClass, "mt-7 px-6 py-3 text-[0.85rem]")}
                  >
                    <FileText className="size-4" strokeWidth={2} aria-hidden />
                    {d.view}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-ink-soft/70">{d.note}</p>
        </div>
      </main>
      <FooterLight locale={locale} content={content} otherHref={otherHref} homeHref={homeHref} />
      <CookieBanner locale={locale} content={content} />
    </div>
  );
}
