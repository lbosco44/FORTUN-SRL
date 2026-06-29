import type { Metadata } from "next";
import { SubpageShell } from "@/components/site/Subpage";
import { LegalArticle } from "@/components/site/LegalArticle";
import { getLegal } from "@/lib/legal";
import { legalMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";

export const metadata: Metadata = legalMetadata("cookie", "it");

export default function Page() {
  return (
    <SubpageShell locale="it" otherHref={routes.cookie.en}>
      <LegalArticle doc={getLegal("cookie", "it")} />
    </SubpageShell>
  );
}
