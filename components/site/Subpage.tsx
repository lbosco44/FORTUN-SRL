import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/site/Footer";
import { getContent } from "@/lib/content";
import { routes, type Locale } from "@/lib/i18n";
import { company } from "@/lib/company";

export function SubpageShell({
  locale,
  otherHref,
  children,
}: {
  locale: Locale;
  otherHref: string;
  children: React.ReactNode;
}) {
  const content = getContent(locale);
  return (
    <>
      <header className="border-b border-navy/10 bg-navy">
        <div className="mx-auto flex h-[var(--nav-h)] max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href={routes.home[locale]} className="flex items-center gap-2.5" aria-label={company.brand}>
            <Image src={company.logoPath} alt="" width={22} height={36} className="h-9 w-auto" priority />
            <span className="font-display text-lg font-extrabold tracking-[-0.02em] text-cream">
              {company.brand}
            </span>
          </Link>
          <Link
            href={otherHref}
            hrefLang={locale === "it" ? "en" : "it"}
            aria-label={content.langToggle.aria}
            className="rounded-[4px] border border-cream/25 px-2.5 py-1.5 text-xs font-semibold tracking-wide text-cream/80 transition-colors hover:border-gold hover:text-gold"
          >
            {content.langToggle.short}
          </Link>
        </div>
      </header>
      <main id="main" className="bg-cream">
        {children}
      </main>
      <Footer locale={locale} content={content} otherHref={otherHref} />
    </>
  );
}
