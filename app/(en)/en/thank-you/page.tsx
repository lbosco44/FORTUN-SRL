import type { Metadata } from "next";
import { SubpageShell } from "@/components/site/Subpage";
import { ThankYou } from "@/components/site/ThankYou";
import { thankYouMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";

export const metadata: Metadata = thankYouMetadata("en");

export default function Page() {
  return (
    <SubpageShell locale="en" otherHref={routes.thankYou.it}>
      <ThankYou locale="en" />
    </SubpageShell>
  );
}
