import { FileText, FileClock } from "lucide-react";
import { CookieBanner } from "@/components/site/CookieBanner";
import { NavLight } from "@/components/site/light/NavLight";
import { FooterLight } from "@/components/site/light/FooterLight";
import { Reveal } from "@/components/site/Reveal";
import { Display, inkButtonClass } from "@/components/site/light/ui";
import { getContent } from "@/lib/content";
import { type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const lightHome = { it: "/it", en: "/" } as const;
const certsHref = { it: "/it/certificazioni", en: "/certifications" } as const;

// pdf = base del certificato in /certs → poi -it/-en.pdf (documento) e /certs/preview/…-it/-en.jpg (anteprima 1ª pagina)
type Cert = { num: string; year: string; pdf?: string; title: string; desc: string; status: "active" | "upcoming" };

const DATA: Record<Locale, { headLead: string; headAccent: string; intro: string; view: string; upcoming: string; note: string; certs: Cert[] }> = {
  it: {
    headLead: "Standard e",
    headAccent: "certificazioni.",
    intro:
      "Operiamo nel rispetto dei principali standard internazionali di gestione. Di seguito i certificati ufficiali di Fortun S.r.l., consultabili e scaricabili in formato PDF.",
    view: "Visualizza (PDF)",
    upcoming: "In fase di certificazione",
    note: "Certificati ufficiali rilasciati a Fortun S.r.l. — disponibili in versione italiana e inglese.",
    certs: [
      { num: "9001", year: "2015", pdf: "iso-9001", title: "Gestione della qualità", desc: "Sistema di gestione per la qualità di processi e servizi.", status: "active" },
      { num: "27001", year: "2022", pdf: "iso-27001", title: "Sicurezza delle informazioni", desc: "Protezione dei dati e dei sistemi informativi.", status: "active" },
      { num: "14001", year: "2015", title: "Gestione ambientale", desc: "Sistema di gestione ambientale delle attività.", status: "upcoming" },
      { num: "45001", year: "2018", title: "Salute e sicurezza sul lavoro", desc: "Sistema di gestione della salute e sicurezza sul lavoro.", status: "upcoming" },
    ],
  },
  en: {
    headLead: "Standards and",
    headAccent: "certifications.",
    intro:
      "We operate in line with the main international management standards. Below are Fortun S.r.l.'s official certificates, viewable and downloadable as PDF.",
    view: "View (PDF)",
    upcoming: "Certification in progress",
    note: "Official certificates issued to Fortun S.r.l. — available in Italian and English.",
    certs: [
      { num: "9001", year: "2015", pdf: "iso-9001", title: "Quality management", desc: "Management system for the quality of processes and services.", status: "active" },
      { num: "27001", year: "2022", pdf: "iso-27001", title: "Information security", desc: "Protection of data and information systems.", status: "active" },
      { num: "14001", year: "2015", title: "Environmental management", desc: "Environmental management system.", status: "upcoming" },
      { num: "45001", year: "2018", title: "Health & safety", desc: "Occupational health and safety management system.", status: "upcoming" },
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

          <div className="mt-14 grid max-w-4xl gap-8 sm:grid-cols-2">
            {d.certs.map((c, i) => {
              const active = c.status === "active";
              const pdfHref = `/certs/${c.pdf}-${locale}.pdf`;
              const previewHref = `/certs/preview/${c.pdf}-${locale}.jpg`;
              return (
                <Reveal key={`${c.num}-${c.year}`} delay={i * 0.08}>
                  <article
                    className={cn(
                      "flex h-full flex-col rounded-2xl border p-4 transition-colors duration-300 sm:p-5",
                      active ? "border-ink/10 bg-white/60 hover:border-gold-deep/40" : "border-ink/10 bg-white/40"
                    )}
                  >
                    {active ? (
                      // Anteprima reale della 1ª pagina del certificato (cliccabile → PDF intero)
                      <a
                        href={pdfHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mx-auto block w-fit overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm"
                        aria-label={`${d.view} — ISO ${c.num}:${c.year}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={previewHref}
                          alt={`Certificato ISO ${c.num}:${c.year} — ${c.title}`}
                          loading="lazy"
                          className="max-h-[20rem] w-auto transition-transform duration-500 group-hover:scale-[1.015] lg:max-h-[22rem]"
                        />
                      </a>
                    ) : (
                      // Placeholder "in fase di certificazione"
                      <div className="flex h-[20rem] flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-ink/20 bg-sand/40 px-6 text-center lg:h-[22rem]">
                        <span className="flex size-16 items-center justify-center rounded-full border border-gold-deep/30 text-gold-deep">
                          <FileClock className="size-7" strokeWidth={1.4} aria-hidden />
                        </span>
                        <p className="readout text-gold-deep">{d.upcoming}</p>
                      </div>
                    )}

                    <div className="mt-5 flex items-end justify-between gap-4">
                      <div>
                        <h2 className="font-grotesk text-lg font-bold tracking-[-0.02em] text-ink">
                          ISO {c.num}:{c.year}
                        </h2>
                        <p className="readout mt-1 text-gold-deep">{c.title}</p>
                        <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">{c.desc}</p>
                      </div>
                      {active ? (
                        <a
                          href={pdfHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(inkButtonClass, "shrink-0 px-5 py-2.5 text-[0.8rem]")}
                        >
                          <FileText className="size-4" strokeWidth={2} aria-hidden />
                          {d.view}
                        </a>
                      ) : (
                        <span className="shrink-0 rounded-full border border-gold-deep/40 px-4 py-2 text-[0.75rem] font-semibold text-gold-deep">
                          {d.upcoming}
                        </span>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-ink-soft/70">{d.note}</p>
        </div>
      </main>
      <FooterLight locale={locale} content={content} otherHref={otherHref} homeHref={homeHref} />
      <CookieBanner locale={locale} content={content} />
    </div>
  );
}
