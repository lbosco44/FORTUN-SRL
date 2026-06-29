import Link from "next/link";
import { company } from "@/lib/company";
import { anchors, routes, type Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content";

export function Footer({
  locale,
  content,
  otherHref,
}: {
  locale: Locale;
  content: Content;
  otherHref: string;
}) {
  const { footer, nav, legal, langToggle } = content;
  const home = routes.home[locale];

  return (
    <footer className="bg-abyss text-cream">
      <div className="h-px w-full hairline-gold" />
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-10">
        <p className="max-w-xl font-display text-lg font-medium leading-snug text-cream/90 text-balance">
          {footer.tagline}
        </p>

        <div className="mt-12 grid gap-10 border-t border-cream/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
              {footer.navTitle}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-haze">
              {nav.items.map((i) => (
                <li key={i.anchor}>
                  <Link
                    className="transition-colors hover:text-cream"
                    href={`${home}#${anchors[i.anchor]}`}
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
              {footer.contactTitle}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-haze">
              <li>
                <a className="transition-colors hover:text-cream" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
              <li className="break-all">{company.pec}</li>
              <li>
                {company.address.street}, {company.address.postalCode} {company.address.city} (
                {company.address.province})
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
              {footer.companyTitle}
            </h2>
            <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-haze sm:grid-cols-2">
              <Row k={locale === "it" ? "Ragione sociale" : "Legal name"} v={company.legalName} />
              <Row k="P.IVA / C.F." v={company.vat} />
              <Row k="REA" v={company.rea} />
              <Row k={locale === "it" ? "Codice EORI" : "EORI number"} v={company.eori} />
              <Row
                k={locale === "it" ? "Capitale sociale" : "Share capital"}
                v={company.shareCapital[locale]}
              />
            </dl>
          </div>
        </div>
      </div>

      {/* Wordmark monumentale edge-to-edge */}
      <div aria-hidden className="overflow-hidden px-2 pb-4 select-none">
        <span className="block w-full text-center font-display font-black leading-[0.8] tracking-[-0.04em] text-cream/[0.06] [font-size:23vw]">
          FORTUN
        </span>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-haze sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {company.copyrightYear} {company.legalName}. {footer.rights}
          </p>
          <nav className="flex items-center gap-5">
            <Link className="transition-colors hover:text-cream" href={routes.privacy[locale]}>
              {legal.privacy}
            </Link>
            <Link className="transition-colors hover:text-cream" href={routes.cookie[locale]}>
              {legal.cookie}
            </Link>
            <Link
              className="font-semibold text-gold transition-colors hover:text-champagne"
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
    <div className="flex justify-between gap-4 border-b border-cream/[0.06] py-1.5">
      <dt className="text-haze/70">{k}</dt>
      <dd className="text-right text-cream/90">{v}</dd>
    </div>
  );
}
