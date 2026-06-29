import type { Metadata } from "next";
import { SubpageShell } from "@/components/site/Subpage";
import { LegalArticle } from "@/components/site/LegalArticle";
import { getLegal } from "@/lib/legal";
import { legalMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";

export const metadata: Metadata = legalMetadata("privacy", "it");

export default function Page() {
  return (
    <SubpageShell locale="it" otherHref={routes.privacy.en}>
      <LegalArticle doc={getLegal("privacy", "it")} />
    </SubpageShell>
  );
}
