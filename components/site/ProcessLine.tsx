"use client";

import { motion, useReducedMotion } from "motion/react";

export function ProcessLine() {
  const reduce = useReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-x-0 top-6 hidden md:block" aria-hidden>
      <motion.div
        className="h-px origin-left bg-gradient-to-r from-gold/10 via-gold/50 to-gold/10"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "0px 0px -20% 0px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
