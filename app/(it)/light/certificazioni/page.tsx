import type { Metadata } from "next";
import { CertsPage } from "@/components/site/light/CertsPage";

export const metadata: Metadata = {
  title: "Certificazioni — Fortun SRL",
  description: "Certificazioni e standard internazionali di gestione di Fortun SRL.",
  robots: { index: false, follow: false }, // variante di lavoro, non indicizzata
  alternates: { canonical: "/light/certificazioni" },
};

export default function Page() {
  return <CertsPage locale="it" />;
}
