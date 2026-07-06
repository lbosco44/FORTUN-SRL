import type { Metadata } from "next";
import "../globals.css";
import { fraunces, hanken, generalSans } from "@/lib/fonts";
import { company, SITE_URL } from "@/lib/company";
import { SmoothScroll } from "@/components/site/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Fortun SRL — Trading di prodotti petroliferi e sottoprodotti petroliferi", template: "%s" },
  applicationName: company.legalName,
  openGraph: { siteName: company.legalName },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }, { url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function ItRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${fraunces.variable} ${hanken.variable} ${generalSans.variable}`}>
      <body className="min-h-dvh bg-cream antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-abyss"
        >
          Vai al contenuto
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
