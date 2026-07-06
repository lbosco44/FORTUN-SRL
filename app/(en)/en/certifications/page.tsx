import type { Metadata } from "next";
import { CertsPage } from "@/components/site/light/CertsPage";

export const metadata: Metadata = {
  title: "Certifications — Fortun SRL",
  description: "International management standards and certifications of Fortun S.r.l.: ISO 9001 and ISO 27001.",
  alternates: { canonical: "/en/certifications", languages: { it: "/certificazioni", en: "/en/certifications" } },
};

export default function Page() {
  return <CertsPage locale="en" />;
}
