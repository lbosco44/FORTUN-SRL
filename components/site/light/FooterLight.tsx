import Link from "next/link";
import { company } from "@/lib/company";
import { anchors, routes, type Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content";

export function FooterLight({
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
  const { footer, nav, legal, langToggle } = content;

  return (
    <footer className="bg-paper-200 text-ink">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10">
        <p className="max-w-xl font-grotesk text-lg font-medium leading-snug text-ink text-balance">
          {footer.tagline}
        </p>

        <div className="mt-12 grid gap-10 border-t border-ink/12 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="readout text-gold-deep">{footer.navTitle}</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {nav.items.map((i) => (
                <li key={i.anchor}>
                  <Link className="transition-colors hover:text-ink" href={`${homeHref}#${anchors[i.anchor]}`}>
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="readout text-gold-deep">{footer.contactTitle}</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>
                <a className="transition-colors hover:text-ink" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
              <li>
                {company.address.street}, {company.address.postalCode} {company.address.city} ({company.address.province})
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="readout text-gold-deep">{footer.companyTitle}</h2>
            <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-ink-soft sm:grid-cols-2">
              <Row k={locale === "it" ? "Ragione sociale" : "Legal name"} v={company.legalName} />
              <Row k="P.IVA / C.F." v={company.vat} />
              <Row k={locale === "it" ? "Codice EORI" : "EORI number"} v={company.eori} />
            </dl>
          </div>
        </div>
      </div>

      {/* Wordmark monumentale */}
      <div aria-hidden className="select-none overflow-hidden px-2 pb-4">
        <span className="block w-full text-center font-grotesk font-bold leading-[0.8] tracking-[-0.04em] text-ink/[0.07] [font-size:23vw]">
          FORTUN
        </span>
      </div>

      <div className="border-t border-ink/12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {company.copyrightYear} {company.legalName}. {footer.rights}
          </p>
          <nav className="flex items-center gap-5">
            <Link
              className="transition-colors hover:text-ink"
              href={locale === "it" ? "/light/certificazioni" : "/en/light/certifications"}
            >
              {locale === "it" ? "Certificazioni" : "Certifications"}
            </Link>
            <Link className="transition-colors hover:text-ink" href={routes.privacy[locale]}>
              {legal.privacy}
            </Link>
            <Link className="transition-colors hover:text-ink" href={routes.cookie[locale]}>
              {legal.cookie}
            </Link>
            <Link
              className="font-semibold text-gold-deep transition-colors hover:text-ink"
              href={otherHref}
              hrefLang={locale === "it" ? "en" : "it"}
              aria-label={langToggle.aria}
            >
              {langToggle.short}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-ink/[0.08] py-1.5">
      <dt className="text-ink-soft/80">{k}</dt>
      <dd className="text-right text-ink/90">{v}</dd>
    </div>
  );
}
