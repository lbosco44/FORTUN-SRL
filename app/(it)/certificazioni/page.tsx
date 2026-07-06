import type { Metadata } from "next";
import { CertsPage } from "@/components/site/light/CertsPage";

export const metadata: Metadata = {
  title: "Certificazioni — Fortun SRL",
  description: "Certificazioni e standard internazionali di gestione di Fortun S.r.l.: ISO 9001 e ISO 27001.",
  alternates: { canonical: "/certificazioni", languages: { it: "/certificazioni", en: "/en/certifications" } },
};

export default function Page() {
  return <CertsPage locale="it" />;
}
