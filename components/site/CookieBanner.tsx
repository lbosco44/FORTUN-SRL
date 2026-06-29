"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { routes, type Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content";

const KEY = "fortun-cookie-consent";

export function CookieBanner({ locale, content }: { locale: Locale; content: Content }) {
  const [visible, setVisible] = useState(false);
  const c = content.cookieBanner;

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(value: "all" | "necessary") {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* storage non disponibile */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-lg border border-cream/15 bg-navy/95 p-5 text-cream shadow-2xl backdrop-blur-md sm:inset-x-auto sm:right-4 sm:left-4"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <p className="flex-1 text-sm leading-relaxed text-haze">
          {c.text}{" "}
          <Link href={routes.cookie[locale]} className="text-gold underline underline-offset-2 hover:text-champagne">
            {c.privacyLink}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide("necessary")}
            className="rounded-[5px] border border-cream/25 px-4 py-2.5 text-sm font-medium text-cream transition-colors hover:border-cream/50"
          >
            {c.reject}
          </button>
          <button
            type="button"
            onClick={() => decide("all")}
            className="rounded-[5px] bg-gold px-4 py-2.5 text-sm font-semibold text-abyss transition-colors hover:bg-[#d8ab5c]"
          >
            {c.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
