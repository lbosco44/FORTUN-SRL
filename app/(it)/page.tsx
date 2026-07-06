import type { Metadata } from "next";
import { HomeLightPage } from "@/components/site/light/HomeLight";
import { homeMetadata } from "@/lib/seo";

export const metadata: Metadata = homeMetadata("it");

export default function Page() {
  return <HomeLightPage locale="it" />;
}
