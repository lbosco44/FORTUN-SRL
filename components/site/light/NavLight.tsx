"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { anchors, type Locale } from "@/lib/i18n";
import { company } from "@/lib/company";
import type { Content } from "@/lib/content";
import { cn } from "@/lib/utils";
import { inkButtonClass, Dot } from "@/components/site/light/ui";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/site/light/resizable-navbar";

function Logo({ homeHref, onClick }: { homeHref: string; onClick?: () => void }) {
  return (
    <Link
      href={homeHref}
      onClick={onClick}
      aria-label={company.brand}
      className="relative z-20 flex shrink-0 items-center gap-2.5 px-2"
    >
      <Image src={company.logoPath} alt="" width={22} height={36} className="h-9 w-auto" priority />
      <span className="flex flex-col leading-none">
        <span className="font-grotesk text-xl font-bold tracking-[-0.02em] text-ink">{company.brand}</span>
        <span className="mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-gold-deep">
          Oil &amp; Gas Trading
        </span>
      </span>
    </Link>
  );
}

export function NavLight({
  locale,
  content,
  otherHref,
  homeHref,
  anchorBase = "",
}: {
  locale: Locale;
  content: Content;
  otherHref: string;
  homeHref: string;
  /** Prefisso per le ancore: "" sulla home, homeHref su pagine separate (es. Certificazioni). */
  anchorBase?: string;
}) {
  const [open, setOpen] = useState(false);
  const { nav, langToggle } = content;
  const items = nav.items.map((i) => ({ name: i.label, link: `${anchorBase}#${anchors[i.anchor]}` }));
  const contactHref = `${anchorBase}#${anchors.contact}`;

  const langLink = (
    <Link
      href={otherHref}
      hrefLang={locale === "it" ? "en" : "it"}
      aria-label={langToggle.aria}
      onClick={() => setOpen(false)}
      className="rounded-full border border-ink/20 px-3 py-1.5 font-grotesk text-xs font-semibold text-ink-soft transition-colors hover:border-ink hover:text-ink"
    >
      {langToggle.short}
    </Link>
  );

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <Logo homeHref={homeHref} />
        <NavItems items={items} />
        <div className="relative z-20 flex items-center gap-2.5">
          <span className="hidden xl:block">{langLink}</span>
          <a href={contactHref} className={cn(inkButtonClass, "px-5 py-2.5 text-[0.82rem]")}>
            {nav.quote}
          </a>
          <a
            href={contactHref}
            aria-hidden
            tabIndex={-1}
            className="flex size-10 items-center justify-center rounded-full bg-ink text-paper transition-transform duration-200 hover:scale-105"
          >
            <ArrowUpRight className="size-5" strokeWidth={2} aria-hidden />
          </a>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader className="relative">
          <span className="absolute left-1/2 -translate-x-1/2">
            <Logo homeHref={homeHref} onClick={() => setOpen(false)} />
          </span>
          <span className="ml-auto">
            <MobileNavToggle
              isOpen={open}
              onClick={() => setOpen((v) => !v)}
              label={{ open: nav.menuOpen, close: nav.menuClose }}
            />
          </span>
        </MobileNavHeader>
        <MobileNavMenu isOpen={open} onClose={() => setOpen(false)}>
          <nav aria-label="Mobile" className="flex w-full flex-col divide-y divide-ink/10">
            {nav.items.map((i) => (
              <a
                key={i.anchor}
                href={`${anchorBase}#${anchors[i.anchor]}`}
                onClick={() => setOpen(false)}
                className="py-3.5 font-grotesk text-xl font-bold tracking-[-0.02em] text-ink"
              >
                {i.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex w-full items-center gap-3">
            <a
              href={contactHref}
              onClick={() => setOpen(false)}
              className={cn(inkButtonClass, "flex-1")}
            >
              <Dot />
              {nav.quote}
            </a>
            {langLink}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
