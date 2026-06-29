"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Box, Ship, FlaskConical, MapPin, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: LucideIcon[] = [Search, Box, Ship, FlaskConical, MapPin];

/* Flip-card: fronte = contenuto, retro = foto.
   Desktop → flip su hover. Mobile/touch → toggle al click (clic 1 testo→foto, clic 2 foto→testo). */
export function ProcessCard({
  n,
  title,
  desc,
  img,
  index,
}: {
  n: string;
  title: string;
  desc: string;
  img: string;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const Icon = ICONS[index] ?? Search;
  const toggle = () => setFlipped((v) => !v);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={title}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
      className="group h-[19rem] cursor-pointer select-none rounded-2xl outline-none [perspective:1200px] focus-visible:ring-2 focus-visible:ring-gold/60"
    >
      <div
        className={cn(
          "relative h-full w-full rounded-2xl transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] motion-reduce:transition-none",
          flipped && "[transform:rotateY(180deg)]"
        )}
      >
        {/* FRONTE */}
        <div className="absolute inset-0 flex flex-col rounded-2xl border border-ink/10 bg-white/70 p-6 [backface-visibility:hidden]">
          <div className="flex items-center justify-between">
            <span className="display-tight text-3xl text-ink/20">{n}</span>
            <Icon className="size-6 text-gold-deep" strokeWidth={1.5} aria-hidden />
          </div>
          <h3 className="mt-6 font-grotesk text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
        </div>
        {/* RETRO (foto) */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 20vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/35 to-abyss/10" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <span className="display-tight text-2xl text-paper/45">{n}</span>
            <h3 className="mt-1 font-grotesk text-lg font-semibold text-paper">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
