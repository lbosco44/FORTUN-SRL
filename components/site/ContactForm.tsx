"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { routes, type Locale } from "@/lib/i18n";
import { company } from "@/lib/company";
import type { Content } from "@/lib/content";

const fieldClass =
  "w-full rounded-[5px] border border-cream/15 bg-white/[0.04] px-4 py-3 text-cream placeholder:text-haze/50 outline-none transition-colors focus:border-gold";
const labelClass = "mb-1.5 block readout text-haze";

const INCOTERMS = ["FOB", "CIF", "CFR", "FCA", "DAP", "EXW"];

export function ContactForm({ locale, content }: { locale: Locale; content: Content }) {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const { fields, placeholders, consent, submit, sending: sendingLabel, selectDefault, optional } = content.contact;

  // MOCK: nessun invio reale al backend. Al submit si va alla pagina di conferma.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    router.push(routes.thankYou[locale]);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="cf-name">{fields.name}</label>
          <input id="cf-name" name="name" required autoComplete="name" placeholder={placeholders.name} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-company">{fields.company}</label>
          <input id="cf-company" name="company" required autoComplete="organization" placeholder={placeholders.company} className={fieldClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="cf-email">{fields.email}</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder={placeholders.email} className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-product">{fields.product}</label>
          <select id="cf-product" name="product" required defaultValue="" className={fieldClass}>
            <option value="" disabled>{selectDefault}</option>
            {company.products.map((p) => (
              <option key={p} value={p} className="bg-navy">{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="cf-volume">
            {fields.volume} <span className="lowercase tracking-normal text-haze/50">· {optional}</span>
          </label>
          <input id="cf-volume" name="volume" placeholder="5.000 MT" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-incoterm">
            {fields.incoterm} <span className="lowercase tracking-normal text-haze/50">· {optional}</span>
          </label>
          <select id="cf-incoterm" name="incoterm" defaultValue="" className={fieldClass}>
            <option value="">{selectDefault}</option>
            {INCOTERMS.map((i) => (
              <option key={i} value={i} className="bg-navy">{i}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="cf-destination">
          {fields.destination} <span className="lowercase tracking-normal text-haze/50">· {optional}</span>
        </label>
        <input id="cf-destination" name="destination" placeholder="Rotterdam / Houston / Fujairah…" className={fieldClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="cf-message">{fields.message}</label>
        <textarea id="cf-message" name="message" rows={3} placeholder={placeholders.message} className={`${fieldClass} resize-y`} />
      </div>

      <label className="flex items-start gap-3 text-sm text-haze">
        <input type="checkbox" name="consent" required className="mt-1 size-4 shrink-0 accent-[#c99a4e]" />
        <span>
          {consent.pre}
          <Link href={routes.privacy[locale]} className="text-gold underline underline-offset-2 hover:text-champagne">{consent.link}</Link>
          {consent.post}
        </span>
      </label>

      <button
        type="submit"
        disabled={sending}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-[5px] bg-gold px-6 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.06em] text-abyss transition-[transform,background-color] duration-150 ease-out hover:bg-[#d8ab5c] active:scale-[0.98] disabled:opacity-60"
      >
        {sending ? sendingLabel : submit}
        {!sending && <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />}
      </button>
    </form>
  );
}
