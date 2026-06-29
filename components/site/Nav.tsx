"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { anchors, type Locale } from "@/lib/i18n";
import { company } from "@/lib/company";
import type { Content } from "@/lib/content";
import { GoldLink } from "@/components/site/cta";
import { cn } from "@/lib/utils";

export function Nav({
  locale,
  content,
  otherHref,
  homeHref,
}: {
  locale: Locale;
  content: Content;
  otherHref: string;
  homeHref: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { nav, langToggle } = content;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[var(--nav-h)] transition-colors duration-300",
        scrolled || open
          ? "border-b border-cream/10 bg-navy/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href={homeHref}
          className="flex items-center gap-2.5"
          aria-label={company.brand}
          onClick={() => setOpen(false)}
        >
          <Image
            src={company.logoPath}
            alt=""
            width={22}
            height={36}
            className="h-9 w-auto"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-[0.06em] text-cream">{company.brand}</span>
            <span className="mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.32em] text-gold/85">Oil &amp; Gas Trading</span>
          </span>
        </Link>

        <nav aria-label="Primaria" className="hidden items-center gap-7 lg:flex">
          {nav.items.map((i) => (
            <a
              key={i.anchor}
              href={`#${anchors[i.anchor]}`}
              className="text-[0.8rem] font-medium uppercase tracking-[0.06em] text-cream/75 transition-colors hover:text-cream"
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={otherHref}
            hrefLang={locale === "it" ? "en" : "it"}
            aria-label={langToggle.aria}
            className="hidden rounded-[4px] border border-cream/25 px-2.5 py-1.5 text-xs font-semibold tracking-wide text-cream/80 transition-colors hover:border-gold hover:text-gold sm:block"
          >
            {langToggle.short}
          </Link>
          <GoldLink href={`#${anchors.contact}`} arrow={false} className="hidden px-5 py-2.5 sm:inline-flex">
            {nav.quote}
          </GoldLink>
          <button
            type="button"
            className="text-cream lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[var(--nav-h)] bottom-0 z-40 overflow-y-auto bg-navy px-6 pb-10 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col divide-y divide-cream/10">
            {nav.items.map((i) => (
              <a
                key={i.anchor}
                href={`#${anchors[i.anchor]}`}
                onClick={() => setOpen(false)}
                className="py-4 font-display text-xl font-semibold text-cream"
              >
                {i.label}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex items-center gap-4">
            <GoldLink href={`#${anchors.contact}`} arrow={false} className="flex-1">
              {nav.quote}
            </GoldLink>
            <Link
              href={otherHref}
              hrefLang={locale === "it" ? "en" : "it"}
              onClick={() => setOpen(false)}
              className="rounded-[4px] border border-cream/25 px-4 py-3 text-sm font-semibold text-cream"
            >
              {langToggle.short}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
