import type { Metadata } from "next";
import { HomeLightPage } from "@/components/site/light/HomeLight";
import { homeMetadata } from "@/lib/seo";

export const metadata: Metadata = homeMetadata("en");

export default function Page() {
  return <HomeLightPage locale="en" />;
}
