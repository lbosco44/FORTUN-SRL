import type { Metadata } from "next";
import { HomeLightPage } from "@/components/site/light/HomeLight";
import { getContent } from "@/lib/content";

const content = getContent("it");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  robots: { index: false, follow: false }, // variante di lavoro, non indicizzata
  alternates: { canonical: "/light" },
};

export default function Page() {
  return <HomeLightPage locale="it" />;
}
