import { CookieBanner } from "@/components/site/CookieBanner";
import { NavLight } from "@/components/site/light/NavLight";
import { FooterLight } from "@/components/site/light/FooterLight";
import { Reveal } from "@/components/site/Reveal";
import { Display } from "@/components/site/light/ui";
import { getContent } from "@/lib/content";
import { type Locale } from "@/lib/i18n";

const lightHome = { it: "/light", en: "/en/light" } as const;
const certsHref = { it: "/light/certificazioni", en: "/en/light/certifications" } as const;

type Cert = { num: string; year: string; file: string; title: string; desc: string };

const DATA: Record<Locale, { headLead: string; headAccent: string; intro: string; note: string; certs: Cert[] }> = {
  it: {
    headLead: "Standard e",
    headAccent: "certificazioni.",
    intro:
      "Le nostre attività seguono i principali standard internazionali di gestione: qualità, ambiente, sicurezza e conformità. Di seguito le certificazioni di riferimento.",
    note: "Badge a scopo puramente illustrativo (mock). Da sostituire con le immagini reali dei certificati forniti dal cliente.",
    certs: [
      { num: "9001", year: "2015", file: "iso-9001", title: "Gestione della qualità", desc: "Sistema di gestione per la qualità di processi e servizi." },
      { num: "14001", year: "2015", file: "iso-14001", title: "Gestione ambientale", desc: "Controllo e riduzione degli impatti ambientali delle attività." },
      { num: "45001", year: "2018", file: "iso-45001", title: "Salute e sicurezza", desc: "Tutela della salute e della sicurezza nei luoghi di lavoro." },
      { num: "27001", year: "2022", file: "iso-27001", title: "Sicurezza delle informazioni", desc: "Protezione dei dati e dei sistemi informativi." },
      { num: "50001", year: "2018", file: "iso-50001", title: "Gestione dell'energia", desc: "Efficienza e uso responsabile dell'energia." },
      { num: "29001", year: "2020", file: "iso-29001", title: "Settore Oil & Gas", desc: "Requisiti di qualità specifici per l'industria petrolifera." },
    ],
  },
  en: {
    headLead: "Standards and",
    headAccent: "certifications.",
    intro:
      "Our operations follow the main international management standards: quality, environment, safety and compliance. Below are our reference certifications.",
    note: "Placeholder badges, for illustration only (mock). To be replaced with the client's real certificate images.",
    certs: [
      { num: "9001", year: "2015", file: "iso-9001", title: "Quality management", desc: "Management system for the quality of processes and services." },
      { num: "14001", year: "2015", file: "iso-14001", title: "Environmental management", desc: "Control and reduction of the environmental impact of operations." },
      { num: "45001", year: "2018", file: "iso-45001", title: "Health & safety", desc: "Protection of health and safety in the workplace." },
      { num: "27001", year: "2022", file: "iso-27001", title: "Information security", desc: "Protection of data and information systems." },
      { num: "50001", year: "2018", file: "iso-50001", title: "Energy management", desc: "Efficiency and responsible use of energy." },
      { num: "29001", year: "2020", file: "iso-29001", title: "Oil & Gas sector", desc: "Quality requirements specific to the petroleum industry." },
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

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.certs.map((c, i) => (
              <Reveal key={c.file} delay={i * 0.06}>
                <article className="flex h-full flex-col items-center rounded-2xl border border-ink/10 bg-white/60 p-8 text-center transition-colors duration-300 hover:border-gold-deep/40 hover:bg-white/85">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/bg/light/certs/${c.file}.svg`}
                    alt={`Certificazione ISO ${c.num}:${c.year} — ${c.title}`}
                    width={128}
                    height={128}
                    className="h-32 w-32"
                  />
                  <h2 className="mt-6 font-grotesk text-xl font-bold tracking-[-0.02em] text-ink">
                    ISO {c.num}:{c.year}
                  </h2>
                  <p className="readout mt-1.5 text-gold-deep">{c.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.desc}</p>
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
