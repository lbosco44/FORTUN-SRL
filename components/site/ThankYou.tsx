import { CheckCircle2 } from "lucide-react";
import { GoldLink } from "@/components/site/cta";
import { getContent } from "@/lib/content";
import { routes, type Locale } from "@/lib/i18n";

export function ThankYou({ locale }: { locale: Locale }) {
  const c = getContent(locale).thankYou;
  return (
    <div className="mx-auto max-w-2xl px-6 py-28 text-center lg:py-36">
      <CheckCircle2 className="mx-auto size-12 text-gold" strokeWidth={1.5} />
      <h1 className="mt-6 font-display text-4xl font-bold tracking-[-0.01em] text-navy">{c.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{c.message}</p>
      <p className="mt-3 leading-relaxed text-muted">{c.responseLine}</p>
      <div className="mt-10 flex justify-center">
        <GoldLink href={routes.home[locale]} arrow={false}>
          {c.back}
        </GoldLink>
      </div>
    </div>
  );
}
