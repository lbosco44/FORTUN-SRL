import Image from "next/image";
import {
  ShieldCheck, Globe, Ship, Activity, Layers, FileText, FlaskConical, TrendingUp,
  Search, Box, MapPin, Clock, BadgeCheck, Fuel, Plane, Droplet, Container, Network, Check,
  Users, Map, Building2,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { ProcessLine } from "@/components/site/ProcessLine";
import { NetworkMap } from "@/components/site/NetworkMap";
import { GoldLink } from "@/components/site/cta";
import { ContactForm } from "@/components/site/ContactForm";
import { company } from "@/lib/company";
import { anchors, type Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content";
import { cn } from "@/lib/utils";

const outlineClass =
  "inline-flex items-center justify-center gap-2 rounded-[5px] border border-cream/35 px-6 py-3.5 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-cream transition-colors duration-200 hover:border-gold hover:text-gold";

function Eyebrow({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={cn("readout flex items-center gap-3", dark ? "text-gold" : "text-gold-deep")}>
      <span className={cn("h-px w-10", dark ? "bg-gold/55" : "bg-gold-deep/50")} aria-hidden />
      {children}
    </p>
  );
}

function Heading({
  lead, accent, dark = true, as: Tag = "h2", className,
}: {
  lead: string; accent: string; dark?: boolean; as?: "h1" | "h2"; className?: string;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-medium leading-[1.05] tracking-[-0.015em] text-balance",
        dark ? "text-cream" : "text-navy",
        className
      )}
    >
      {lead}{" "}
      <span className={cn("italic", dark ? "text-gold" : "text-gold-deep")}>{accent}</span>
    </Tag>
  );
}

function Bg({ src, overlay, priority = false }: { src: string; overlay: string; priority?: boolean }) {
  return (
    <>
      <Image src={src} alt="" fill priority={priority} sizes="100vw" className="-z-10 object-cover" />
      <div className={cn("absolute inset-0 -z-10", overlay)} aria-hidden />
    </>
  );
}

/* 1 — HERO */
export function Hero({ content }: { content: Content }) {
  const { hero } = content;
  const icons = [ShieldCheck, Globe, Ship, Activity];
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden text-cream">
      <Image src="/bg/hero.webp" alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-abyss/92 via-abyss/55 to-abyss/15" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-abyss via-abyss/20 to-abyss/40" aria-hidden />

      <div className="mx-auto w-full max-w-7xl px-6 pb-14 pt-[calc(var(--nav-h)+3rem)] lg:px-10 lg:pb-20">
        <Reveal>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <Heading
            as="h1"
            lead={hero.headLead}
            accent={hero.headAccent}
            className="mt-7 max-w-4xl text-[clamp(2.6rem,6vw,5.25rem)]"
          />
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-cream/75 lg:text-lg">{hero.sub}</p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <GoldLink href={`#${anchors.contact}`}>{hero.ctaPrimary}</GoldLink>
            <a href={`#${anchors.process}`} className={outlineClass}>{hero.ctaSecondary}</a>
          </div>
        </Reveal>
        <Reveal delay={0.32}>
          <ul className="mt-14 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-4 border-t border-cream/15 pt-7 sm:grid-cols-4">
            {hero.features.map((f, i) => {
              const Icon = icons[i];
              return (
                <li key={f} className="flex items-center gap-2.5 text-sm text-cream/85">
                  <Icon className="size-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden />
                  {f}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* 2 — CHI SIAMO + stat card + badge */
export function About({ content }: { content: Content }) {
  const { about } = content;
  const featIcons = [ShieldCheck, Globe, Layers];
  const statIcons = [Building2, Globe, MapPin, Droplet];
  const badgeIcons = [Map, MapPin, Users, Globe];
  return (
    <section id={anchors.about} className="section-y relative isolate overflow-hidden bg-cream">
      <div
        className="pointer-events-none absolute -left-48 -top-48 size-[42rem] rounded-full opacity-60"
        style={{ background: "repeating-radial-gradient(circle, color-mix(in srgb, var(--color-navy) 6%, transparent) 0 1px, transparent 1px 40px)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          {/* LEFT */}
          <div className="flex flex-col">
            <Reveal>
              <Heading dark={false} lead={about.headLead} accent={about.headAccent} className="text-[clamp(2.1rem,3.8vw,3.15rem)] leading-[0.98]" />
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">{about.body}</p>
            </Reveal>
            <div className="lg:mt-auto">
              <div className="mt-9 h-px w-16 bg-gold-deep/40" aria-hidden />
              <div className="mt-8 space-y-7">
                {about.features.map((f, i) => {
                  const Icon = featIcons[i];
                  return (
                    <Reveal key={f.title} delay={0.14 + i * 0.06}>
                      <div className="flex gap-4">
                        <span className="mt-0.5 flex size-12 shrink-0 items-center justify-center rounded-full border border-gold-deep/35 text-gold-deep">
                          <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-medium text-navy">{f.title}</h3>
                          <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{f.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: dark stat card */}
          <Reveal delay={0.12} className="lg:h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl p-8 text-cream shadow-2xl lg:p-10">
              <Image
                src="/bg/about-card.webp"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="-z-10 object-cover object-right"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-abyss via-abyss/80 to-transparent" aria-hidden />
              <Image
                src={company.logoPath}
                alt=""
                width={60}
                height={98}
                className="pointer-events-none absolute right-6 top-6 h-11 w-auto opacity-55"
              />
              <dl className="relative flex h-full max-w-[62%] flex-col justify-center">
                {about.stats.map((s, i) => {
                  const Icon = statIcons[i];
                  return (
                    <div key={s.label} className="flex gap-5 border-t border-cream/10 py-7 first:border-t-0 first:pt-0">
                      <Icon className="mt-1.5 size-8 shrink-0 text-gold" strokeWidth={1.25} aria-hidden />
                      <div>
                        <dt className="readout text-gold">{s.label}</dt>
                        <dd className="mt-1.5 font-display text-[clamp(2.5rem,4vw,3.25rem)] font-medium leading-none tabular-nums">
                          <CountUp value={s.num} suffix={s.suffix} />
                        </dd>
                        <p className="mt-2.5 text-sm leading-relaxed text-haze">{s.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </div>
          </Reveal>
        </div>

        {/* BADGES */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-navy/10 pt-10 sm:grid-cols-4 sm:divide-x sm:divide-navy/10">
            {about.badges.map((b, i) => {
              const Icon = badgeIcons[i];
              return (
                <div key={b.label} className="flex items-center gap-4 sm:justify-center">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-gold-deep/30 bg-navy text-gold">
                    <Icon className="size-6" strokeWidth={1.5} aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-[1.75rem] font-medium leading-none text-gold-deep">{b.value}</p>
                    <p className="readout mt-1 text-muted">{b.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 3 — MERCATI & NETWORK (mappa con connessioni) */
export function Network_({ content }: { content: Content }) {
  const { network } = content;
  return (
    <section id={anchors.network} className="section-y relative isolate overflow-hidden bg-abyss text-cream">
      {/* Mappa edge-to-edge con titolo al centro */}
      <Reveal delay={0.05}>
        <div className="relative w-full overflow-hidden">
          <NetworkMap className="block h-[56vw] max-h-[820px] min-h-[440px] w-full" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-abyss to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-abyss to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-abyss to-transparent sm:w-28" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-abyss to-transparent sm:w-28" aria-hidden />

          {/* Titolo al centro della mappa */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
            <div className="relative text-center">
              <div
                className="absolute left-1/2 top-1/2 h-[150%] w-[160%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(10,14,20,0.72)_0%,rgba(10,14,20,0.35)_45%,transparent_72%)]"
                aria-hidden
              />
              <Heading
                lead={network.headLead}
                accent={network.headAccent}
                className="relative text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[0.98] [text-shadow:0_2px_30px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>

          {/* Legenda: distinzione hub vs sedi */}
          <div className="pointer-events-none absolute bottom-3 right-4 z-10 flex flex-col gap-1.5 sm:bottom-5 sm:right-6">
            <span className="flex items-center gap-2 text-[0.7rem] font-medium tracking-wide text-cream/85">
              <span className="size-2.5 rounded-full bg-gold shadow-[0_0_8px_rgba(201,154,78,0.9)]" aria-hidden />
              {network.mapHubs}
            </span>
            <span className="flex items-center gap-2 text-[0.7rem] font-medium tracking-wide text-cream/70">
              <span className="size-2 rounded-full border border-champagne/90" aria-hidden />
              {network.mapSedi}
            </span>
          </div>
        </div>
      </Reveal>

      {/* Testi sotto la mappa */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between lg:mt-12">
          <Reveal>
            <p className="max-w-xl text-base leading-relaxed text-cream/75">{network.body}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <a href={`#${anchors.process}`} className={cn(outlineClass, "shrink-0")}>{network.cta}</a>
          </Reveal>
        </div>
        <ul className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-3 lg:mt-14">
          {network.points.map((p, i) => (
            <li key={p}>
              <Reveal delay={i * 0.08}>
                <div className="flex items-start gap-3 border-t border-cream/15 pt-5">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={2} aria-hidden />
                  <span className="text-sm leading-relaxed text-cream/85">{p}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 4 — COME OPERIAMO (processo 5 step) */
export function Process({ content }: { content: Content }) {
  const { process } = content;
  const stepIcons = [Search, Box, Ship, FlaskConical, MapPin];
  return (
    <section id={anchors.process} className="section-y relative isolate overflow-hidden text-cream">
      <Bg src="/bg/process.webp" overlay="bg-abyss/85" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal><Eyebrow>{process.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.08}>
            <Heading lead={process.headLead} accent={process.headAccent} className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)]" />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-base leading-relaxed text-cream/75">{process.intro}</p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <ProcessLine />
          <ol className="grid gap-x-6 gap-y-10 md:grid-cols-5">
            {process.steps.map((s, i) => {
              const Icon = stepIcons[i];
              const n = String(i + 1).padStart(2, "0");
              return (
                <li key={s.title}>
                  <Reveal delay={i * 0.1}>
                    <div className="flex items-center gap-3">
                      <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-gold/40 bg-abyss text-gold">
                        <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                      </span>
                      <span className="font-display text-2xl font-medium text-gold/80">{n}</span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-medium text-cream">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.desc}</p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-cream/12 bg-white/[0.03] p-7 sm:flex-row sm:items-center lg:p-8">
            <span className="frame-gold flex size-12 shrink-0 items-center justify-center rounded-lg text-gold">
              <ShieldCheck className="size-6" strokeWidth={1.5} aria-hidden />
            </span>
            <div>
              <h3 className="font-display text-lg font-medium text-gold">{process.note.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-cream/75">{process.note.body}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 5 — SOLUZIONI (prodotti + servizi) */
export function Solutions({ content }: { content: Content }) {
  const { solutions } = content;
  const prodIcons = [Fuel, Plane, Container, Ship, Droplet];
  const servIcons = [Box, Ship, Network, Layers];
  return (
    <section id={anchors.solutions} className="section-y relative isolate overflow-hidden text-cream">
      <Bg src="/bg/solutions.webp" overlay="bg-abyss/88" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal><Eyebrow>{solutions.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.08}>
            <Heading lead={solutions.headLead} accent={solutions.headAccent} className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)]" />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-base leading-relaxed text-cream/75">{solutions.intro}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="readout mt-14 text-gold">{solutions.productsTitle}</p>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.products.map((p, i) => {
            const Icon = prodIcons[i];
            return (
              <Reveal key={p.name} delay={i * 0.06}>
                <div className="group h-full rounded-xl border border-cream/12 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-gold/40">
                  <div className="flex items-center justify-between">
                    <Icon className="size-7 text-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} aria-hidden />
                    <span className="readout text-haze">{p.spec}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-medium text-cream">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{p.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="readout mt-16 text-gold">{solutions.servicesTitle}</p>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.services.map((s, i) => {
            const Icon = servIcons[i];
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-cream/12 bg-navy/40 p-6">
                  <Icon className="size-6 text-gold" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-4 font-display text-lg font-medium text-cream">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* 6 — COMPLIANCE */
export function Compliance({ content }: { content: Content }) {
  const { compliance } = content;
  const cardIcons = [BadgeCheck, FileText, FlaskConical, TrendingUp];
  return (
    <section id={anchors.compliance} className="section-y relative isolate overflow-hidden">
      <Bg src="/bg/compliance.webp" overlay="bg-cream/85" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal><Eyebrow dark={false}>{compliance.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.08}>
            <Heading dark={false} lead={compliance.headLead} accent={compliance.headAccent} className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)]" />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-base leading-relaxed text-muted">{compliance.body}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {compliance.cards.map((c, i) => {
            const Icon = cardIcons[i];
            return (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-navy/12 bg-white/55 p-6">
                  <span className="frame-gold flex size-11 items-center justify-center rounded-lg text-gold-deep">
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-medium text-navy">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 border-l-2 border-gold pl-5 font-display text-lg italic text-navy/80">{compliance.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* 7 — CONTATTI */
export function Contact({ locale, content }: { locale: Locale; content: Content }) {
  const { contact } = content;
  const reIcons = [Clock, Globe, ShieldCheck];
  return (
    <section id={anchors.contact} className="section-y relative isolate overflow-hidden text-cream">
      <Bg src="/bg/contact.webp" overlay="bg-gradient-to-br from-abyss/95 via-abyss/85 to-abyss/70" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <Reveal><Eyebrow>{contact.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.08}>
            <Heading lead={contact.headLead} accent={contact.headAccent} className="mt-6 text-[clamp(2rem,4vw,3.25rem)]" />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75">{contact.microcopy}</p>
          </Reveal>

          <Reveal delay={0.16}>
            <ul className="mt-10 grid gap-5 sm:grid-cols-3">
              {contact.reassure.map((r, i) => {
                const Icon = reIcons[i];
                return (
                  <li key={r.title}>
                    <Icon className="size-5 text-gold" strokeWidth={1.5} aria-hidden />
                    <p className="mt-2 text-sm font-medium text-cream">{r.title}</p>
                    <p className="text-xs leading-relaxed text-cream/65">{r.desc}</p>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-10 space-y-4 border-t border-cream/12 pt-8 text-sm">
              <Row label={contact.labels.office}>
                {company.address.street}, {company.address.postalCode} {company.address.city} ({company.address.province})
              </Row>
              <Row label={contact.labels.email}>
                <a className="text-cream hover:text-gold" href={`mailto:${company.email}`}>{company.email}</a>
              </Row>
              <Row label={contact.labels.phone}>
                {company.phone ? (
                  <a className="text-cream hover:text-gold" href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
                ) : (
                  <span className="text-haze/70">{contact.phoneTodo}</span>
                )}
              </Row>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="frame-gold rounded-2xl bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
            <ContactForm locale={locale} content={content} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
      <dt className="readout w-24 shrink-0 text-gold">{label}</dt>
      <dd className="text-cream/90">{children}</dd>
    </div>
  );
}
