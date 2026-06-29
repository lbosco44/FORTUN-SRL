import type { Metadata } from "next";
import { HomeLightPage } from "@/components/site/light/HomeLight";
import { getContent } from "@/lib/content";

const content = getContent("en");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  robots: { index: false, follow: false }, // working variant, not indexed
  alternates: { canonical: "/en/light" },
};

export default function Page() {
  return <HomeLightPage locale="en" />;
}
