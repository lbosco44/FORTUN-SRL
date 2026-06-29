"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = { name: string; spec: string; desc: string };

export function ProductsShowcase({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="space-y-3">
      {items.map((p, i) => {
        const active = i === open;
        const showSpec = p.spec && p.spec.toLowerCase() !== p.name.toLowerCase();
        return (
          <div
            key={p.name}
            className={cn(
              "overflow-hidden rounded-2xl border transition-colors duration-300",
              active
                ? "border-gold/40 bg-navy text-cream"
                : "border-navy/12 bg-white/50 text-navy hover:border-navy/30"
            )}
          >
            <h3 className="m-0">
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-expanded={active}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left lg:p-7"
              >
                <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-display text-2xl font-bold lg:text-3xl">{p.name}</span>
                  {showSpec && (
                    <span className={cn("readout", active ? "text-gold" : "text-gold-deep")}>{p.spec}</span>
                  )}
                </span>
                <Plus
                  className={cn(
                    "size-5 shrink-0 transition-transform duration-300",
                    active ? "rotate-45 text-gold" : "text-muted"
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl px-6 pb-7 text-base leading-relaxed text-haze lg:px-7">{p.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
