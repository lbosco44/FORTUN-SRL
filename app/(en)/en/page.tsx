import type { Metadata } from "next";
import { HomePage } from "@/components/site/Home";
import { homeMetadata } from "@/lib/seo";

export const metadata: Metadata = homeMetadata("en");

export default function Page() {
  return <HomePage locale="en" />;
}
