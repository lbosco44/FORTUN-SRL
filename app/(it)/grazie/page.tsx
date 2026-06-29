import type { Metadata } from "next";
import { SubpageShell } from "@/components/site/Subpage";
import { ThankYou } from "@/components/site/ThankYou";
import { thankYouMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";

export const metadata: Metadata = thankYouMetadata("it");

export default function Page() {
  return (
    <SubpageShell locale="it" otherHref={routes.thankYou.en}>
      <ThankYou locale="it" />
    </SubpageShell>
  );
}
