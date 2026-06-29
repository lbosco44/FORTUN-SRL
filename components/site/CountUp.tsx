"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate, useReducedMotion } from "motion/react";

export function CountUp({
  value,
  duration = 1.6,
  className,
  prefix = "",
  suffix = "",
}: {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const mv = useMotionValue(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      if (ref.current) ref.current.textContent = `${prefix}${value}${suffix}`;
      return;
    }
    const controls = animate(mv, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, duration, mv, reduce, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      0
      {suffix}
    </span>
  );
}
