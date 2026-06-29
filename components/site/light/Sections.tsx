import Image from "next/image";
import {
  ShieldCheck, Layers, Box, Ship, Network,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { NetworkMap } from "@/components/site/NetworkMap";
import { ContactForm } from "@/components/site/ContactForm";
import { company } from "@/lib/company";
import { anchors, type Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Display, inkButtonClass, Dot } from "@/components/site/light/ui";
import { ComplianceShowcase } from "@/components/site/light/ComplianceShowcase";
import { ProcessCard } from "@/components/site/light/ProcessCard";

/* ───────────────────────── 1 — HERO (immagine + card sovrapposta, stile Ally) ───────────────────────── */
export function HeroLight({ content }: { content: Content }) {
  const { hero } = content;
  return (
    <section className="relative bg-paper pt-6 pb-0 lg:pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="relative">
          {/* Immagine grande arrotondata */}
          <Image
            src="/bg/light/hero-open.webp"
            alt="Petroliera carica di prodotti raffinati in navigazione in mare aperto"
            width={1400}
            height={787}
            priority
            sizes="100vw"
            className="h-[clamp(23.75rem,52vw,45rem)] w-full rounded-[1.75rem] object-cover"
          />

          {/* Card di testo sovrapposta in basso a destra */}
          <Reveal
            y={28}
            className="relative -mt-20 mx-auto w-[92%] sm:-mt-24 sm:w-[78%] lg:absolute lg:bottom-0 lg:right-0 lg:mx-0 lg:mt-0 lg:w-[46%] lg:max-w-[38rem]"
          >
            <div className="rounded-2xl bg-paper p-6 sm:p-8 lg:rounded-none lg:rounded-tl-[1.25rem] lg:rounded-br-[1.75rem] lg:p-10">
              <h1 className="sr-only">{hero.headLead} {hero.headAccent}</h1>
              <div aria-hidden className="display-tight text-ink text-[clamp(1.6rem,2.4vw,2.5rem)]">
                {hero.headLead}{" "}
                <span className="mark-gold">{hero.headAccent}</span>
              </div>
              <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-ink-soft lg:mt-6">{hero.sub}</p>
              <div className="mt-7 flex justify-center lg:justify-start">
                <a href={`#${anchors.contact}`} className={inkButtonClass}>
                  <Dot />
                  {hero.ctaPrimary}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 2 — CHI SIAMO (titolo gigante + sticky intro + numeri scrolling, stile Ally) ───────────────────────── */
export function AboutLight({ content }: { content: Content }) {
  const { about } = content;
  return (
    <section id={anchors.about} className="bg-paper pt-[clamp(6rem,10vw,10rem)] pb-[clamp(5rem,10vw,10rem)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Banner corto gigante (stile "Because Access Matters") */}
        <Reveal>
          <h2 className="display-tight mx-auto max-w-5xl text-center text-ink text-[clamp(2.75rem,8vw,7rem)]">
            {"Perché l'"}
            <span className="mark-gold">affidabilità</span>
            {" conta."}
          </h2>
        </Reveal>

        {/* Contenuto: intro sticky a sinistra + numeri scrolling a destra */}
        <div className="mt-[clamp(6rem,10vw,10rem)] flex flex-col gap-14 lg:flex-row lg:items-start lg:gap-16">
          {/* SINISTRA — resta ferma (sticky) */}
          <article className="lg:sticky lg:top-[calc(var(--nav-h)+1.5rem)] lg:w-[38%] lg:self-start">
            <figure className="overflow-hidden rounded-2xl">
              <Image
                src="/bg/light/about.webp"
                alt="Complesso di raffineria al crepuscolo"
                width={1200}
                height={798}
                sizes="(max-width: 1024px) 100vw, 460px"
                className="h-[clamp(13.75rem,34vw,25rem)] w-full object-cover"
              />
            </figure>
            <h3 className="mt-7 font-grotesk text-2xl font-semibold tracking-[-0.02em] text-ink">{about.eyebrow}</h3>
            <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">{about.body}</p>
          </article>

          {/* DESTRA — titolo lungo + numeri grandi che scorrono */}
          <div className="lg:flex-1">
            <Reveal>
              <Display
                as="h3"
                lead={about.headLead}
                accent={about.headAccent}
                className="text-[clamp(1.75rem,3.4vw,3.1rem)]"
              />
            </Reveal>
            <ul className="mt-12 lg:mt-16">
              {about.stats.map((s, i) => (
                <li key={s.label} className="border-t border-ink/15 py-9 lg:py-11">
                  <Reveal delay={i * 0.05}>
                    <div className="flex items-start justify-between gap-6 sm:gap-10">
                      <span className="display-tight tabular-nums text-ink text-[clamp(3.25rem,9vw,8rem)] leading-[0.85]">
                        <CountUp value={s.num} suffix={s.suffix} />
                      </span>
                      <div className="max-w-[44%] shrink-0 pt-2 sm:max-w-[40%] sm:pt-3">
                        <p className="text-[0.95rem] leading-relaxed text-ink sm:text-base">{s.desc}</p>
                        <p className="readout mt-3 text-gold-deep">{s.label}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 3 — MERCATI (banda scura con mappa) ───────────────────────── */
export function NetworkLight({ content }: { content: Content }) {
  const { network } = content;
  return (
    <section id={anchors.network} className="section-y relative isolate overflow-hidden bg-abyss text-paper">
      <Reveal delay={0.05}>
        <div className="relative w-full overflow-hidden">
          <NetworkMap className="block aspect-[1000/478] w-full sm:aspect-auto sm:h-[56vw] sm:max-h-[51.25rem] sm:min-h-[27.5rem]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-abyss to-transparent sm:h-28" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-abyss to-transparent sm:h-32" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-abyss to-transparent sm:w-28" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-abyss to-transparent sm:w-28" aria-hidden />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
            <div className="relative text-center">
              <div
                className="absolute left-1/2 top-1/2 h-[150%] w-[160%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(10,14,20,0.72)_0%,rgba(10,14,20,0.35)_45%,transparent_72%)]"
                aria-hidden
              />
              <Display
                lead={network.headLead}
                accent={network.headAccent}
                className="relative text-[clamp(2.25rem,5.5vw,4.25rem)] text-paper [text-shadow:0_2px_30px_rgba(0,0,0,0.55)]"
                accentClassName="text-gold"
              />
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ul className="mt-14 grid border-t border-paper/15 divide-y divide-paper/10 sm:mt-20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {network.points.map((p, i) => (
            <li key={p}>
              <Reveal delay={i * 0.08}>
                <div className="flex h-full flex-col gap-5 py-8 sm:px-8 sm:py-10 sm:first:pl-0">
                  <span className="display-tight text-3xl text-gold/90">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-base leading-relaxed text-paper/85">{p}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── 4 — COME OPERIAMO (chiara, flip-card) ───────────────────────── */
export function ProcessLight({ content }: { content: Content }) {
  const { process } = content;
  const stepImg = ["approvvigionamento", "stoccaggio", "trasporto", "qc", "consegna"];
  return (
    <section id={anchors.process} className="section-y relative bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <Display
              lead={process.headLead}
              accent={process.headAccent}
              className="text-[clamp(2.1rem,4.4vw,3.4rem)]"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">{process.intro}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {process.steps.map((s, i) => {
            const n = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <ProcessCard
                  n={n}
                  title={s.title}
                  desc={s.desc}
                  img={`/bg/light/process/${stepImg[i]}.webp`}
                  index={i}
                />
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white/60 p-7 sm:flex-row sm:items-center lg:p-8">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold-deep/40 text-gold-deep">
              <ShieldCheck className="size-6" strokeWidth={1.5} aria-hidden />
            </span>
            <div>
              <h3 className="font-grotesk text-lg font-semibold text-gold-deep">{process.note.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{process.note.body}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <a href={`#${anchors.contact}`} className={inkButtonClass}>
              <Dot />
              {content.nav.quote}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── 5 — MANIFESTO (banda oro full-bleed) ───────────────────────── */
export function ManifestoLight({ content }: { content: Content }) {
  const { compliance } = content;
  return (
    <section className="relative overflow-hidden bg-gold text-ink">
      <div className="grain opacity-[0.07]" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center lg:py-32">
        <Reveal>
          <p className="display-tight max-w-4xl text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.04] text-ink text-balance">
            {compliance.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── 6 — SOLUZIONI (chiaro) ───────────────────────── */
export function SolutionsLight({ content }: { content: Content }) {
  const { solutions } = content;
  const servIcons = [Box, Ship, Network, Layers];
  return (
    <section id={anchors.solutions} className="section-y relative bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <Display lead={solutions.headLead} accent={solutions.headAccent} className="text-[clamp(2.1rem,4.4vw,3.4rem)]" />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">{solutions.intro}</p>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <p className="readout mt-14 text-gold-deep">{solutions.productsTitle}</p>
        </Reveal>
        {/* Bento prodotti (stile Tailark features-8): 3 card sopra + 2 larghe sotto.
            Illustrazione line-art su tile scura + spec/nome/descrizione. */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-6">
          {solutions.products.map((p, i) => {
            const wide = i >= 3; // gli ultimi due prodotti occupano metà riga ciascuno
            return (
              <Reveal
                key={p.name}
                delay={i * 0.05}
                className={cn("group", wide ? "sm:col-span-3" : "sm:col-span-2")}
              >
                <div
                  className={cn(
                    "h-full overflow-hidden rounded-2xl border border-paper/10 bg-abyss transition-colors duration-300 hover:border-gold/45",
                    wide && "sm:grid sm:grid-cols-2 sm:items-stretch"
                  )}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden bg-abyss",
                      wide ? "aspect-[5/3] sm:aspect-auto sm:h-full sm:min-h-[13rem]" : "aspect-[5/3]"
                    )}
                  >
                    <Image
                      src={`/bg/light/products/prod${i + 1}.webp`}
                      alt={`${p.name} ${p.spec}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col p-6 sm:p-7">
                    <span className="w-fit rounded-full bg-paper/10 px-3 py-1 font-grotesk text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-paper/75">
                      {p.spec}
                    </span>
                    <h3 className="mt-5 font-grotesk text-2xl font-bold tracking-[-0.02em] text-paper">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/65">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.08}>
          <p className="readout mt-16 text-gold-deep">{solutions.servicesTitle}</p>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.services.map((s, i) => {
            const Icon = servIcons[i];
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl bg-ink p-6 text-paper">
                  <Icon className="size-6 text-gold" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-5 font-grotesk text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 7 — COMPLIANCE (chiaro, panel sand) ───────────────────────── */
export function ComplianceLight({ content }: { content: Content }) {
  const { compliance } = content;
  return (
    <section id={anchors.compliance} className="section-y relative bg-sand">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <Display lead={compliance.headLead} accent={compliance.headAccent} className="text-[clamp(2.1rem,4.4vw,3.4rem)]" />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">{compliance.body}</p>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <ComplianceShowcase items={compliance.cards} />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── 8 — CONTATTI (card scura) ───────────────────────── */
export function ContactLight({ locale, content }: { locale: Locale; content: Content }) {
  const { contact } = content;
  return (
    <section id={anchors.contact} className="relative bg-paper px-6 pb-20 pt-4 lg:px-10 lg:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-abyss text-paper">
        <div className="relative grid gap-12 p-8 lg:grid-cols-2 lg:gap-16 lg:p-14">
          <Image src="/bg/light/contact.webp" alt="" fill sizes="100vw" className="-z-0 object-cover opacity-25" />
          <div className="absolute inset-0 -z-0 bg-gradient-to-br from-abyss via-abyss/90 to-abyss/70" aria-hidden />
          <div className="relative">
            <Display
              lead={contact.headLead}
              accent={contact.headAccent}
              className="text-[clamp(2rem,4vw,3.1rem)] text-paper"
              accentClassName="text-gold"
            />
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/75">{contact.microcopy}</p>

            <dl className="mt-10 space-y-4 border-t border-paper/12 pt-8 text-sm">
              <Row label={contact.labels.office}>
                {company.address.street}, {company.address.postalCode} {company.address.city} ({company.address.province})
              </Row>
              <Row label={contact.labels.email}>
                <a className="text-paper hover:text-gold" href={`mailto:${company.email}`}>{company.email}</a>
              </Row>
              <Row label={contact.labels.pec}><span className="break-all">{company.pec}</span></Row>
              <Row label={contact.labels.phone}>
                {company.phone ? (
                  <a className="text-paper hover:text-gold" href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
                ) : (
                  <span className="text-haze/80">{contact.phoneTodo}</span>
                )}
              </Row>
            </dl>
          </div>

          <div className="relative rounded-2xl border border-paper/12 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
            <ContactForm locale={locale} content={content} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
      <dt className="readout w-24 shrink-0 text-gold">{label}</dt>
      <dd className="text-paper/90">{children}</dd>
    </div>
  );
}
