import type { Metadata } from "next";
import { CertsPage } from "@/components/site/light/CertsPage";

export const metadata: Metadata = {
  title: "Certifications — Fortun SRL",
  description: "International management standards and certifications of Fortun SRL.",
  robots: { index: false, follow: false }, // work variant, not indexed
  alternates: { canonical: "/en/light/certifications" },
};

export default function Page() {
  return <CertsPage locale="en" />;
}
