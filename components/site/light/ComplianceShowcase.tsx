"use client";

import { useState } from "react";
import { BadgeCheck, FileText, FlaskConical, TrendingUp, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: LucideIcon[] = [BadgeCheck, FileText, FlaskConical, TrendingUp];

/* Accordion orizzontale espandibile: i pilastri si allargano al hover/focus/click
   rivelando la descrizione. Un solo pilastro "attivo" alla volta → niente schede,
   niente muro di testo. Su mobile diventa un accordion verticale. */
export function ComplianceShowcase({ items }: { items: { title: string; desc: string }[] }) {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Desktop — pannelli orizzontali */}
      <div className="mt-14 hidden gap-3 lg:flex lg:h-[clamp(24rem,33vw,30rem)]">
        {items.map((c, i) => {
          const Icon = ICONS[i] ?? BadgeCheck;
          const open = active === i;
          return (
            <button
              key={c.title}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-expanded={open}
              aria-label={c.title}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border text-left outline-none transition-[flex-grow,background-color,border-color] duration-500 ease-expo focus-visible:ring-2 focus-visible:ring-gold/60",
                open
                  ? "flex-[3.4] border-transparent bg-ink text-paper"
                  : "flex-[1] border-ink/12 bg-paper/55 hover:bg-paper"
              )}
            >
              <span
                className={cn(
                  "p-6 font-grotesk text-sm font-semibold tracking-[0.12em]",
                  open ? "text-gold" : "text-ink/30"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Collassato: titolo verticale, centrato nello spazio residuo */}
              <span
                className={cn(
                  "flex flex-1 items-center justify-center px-4 pb-8 transition-opacity duration-300",
                  open ? "pointer-events-none absolute inset-0 opacity-0" : "opacity-100"
                )}
                aria-hidden={open}
              >
                <span className="rotate-180 font-grotesk text-[0.95rem] font-semibold tracking-[-0.01em] text-ink [writing-mode:vertical-rl]">
                  {c.title}
                </span>
              </span>

              {/* Aperto: icona + titolo + descrizione */}
              <span
                className={cn(
                  "mt-auto flex flex-col gap-5 p-8 transition-all duration-500 ease-expo",
                  open ? "translate-y-0 opacity-100 delay-100" : "pointer-events-none absolute translate-y-4 opacity-0"
                )}
                aria-hidden={!open}
              >
                <Icon className="size-9 text-gold" strokeWidth={1.4} aria-hidden />
                <span className="font-grotesk text-[clamp(1.7rem,2.5vw,2.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-paper">
                  {c.title}
                </span>
                <span className="max-w-md text-[0.95rem] leading-relaxed text-paper/70">{c.desc}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile/tablet — accordion verticale */}
      <div className="mt-10 flex flex-col border-t border-ink/12 lg:hidden">
        {items.map((c, i) => {
          const Icon = ICONS[i] ?? BadgeCheck;
          const open = active === i;
          return (
            <button
              key={c.title}
              type="button"
              onClick={() => setActive(open ? -1 : i)}
              aria-expanded={open}
              className="flex flex-col border-b border-ink/12 py-5 text-left outline-none"
            >
              <span className="flex items-center gap-4">
                <Icon
                  className={cn("size-6 shrink-0 transition-colors", open ? "text-gold-deep" : "text-ink/40")}
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="flex-1 font-grotesk text-xl font-bold tracking-[-0.02em] text-ink">{c.title}</span>
                <span
                  className={cn(
                    "font-grotesk text-2xl leading-none text-ink/40 transition-transform duration-300",
                    open && "rotate-45"
                  )}
                  aria-hidden
                >
                  +
                </span>
              </span>
              <span
                className={cn(
                  "grid transition-all duration-300 ease-expo",
                  open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <span className="overflow-hidden">
                  <span className="block pl-10 text-sm leading-relaxed text-ink-soft">{c.desc}</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
