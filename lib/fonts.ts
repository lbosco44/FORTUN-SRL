import { Fraunces, Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";

// Serif display (mockup): elegante, editoriale, con asse optical-size per i titoloni.
export const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

// Grotesque sobria per corpo, UI e numeri (tabular).
export const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-hanken",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// General Sans (Fontshare) — grotesque caratteristica per la variante /light (stile Ally).
// preload:false → non viene caricata sulle pagine dark che non la usano.
export const generalSans = localFont({
  variable: "--font-general",
  display: "swap",
  preload: false,
  src: [
    { path: "../public/fonts/GeneralSans-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/GeneralSans-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/GeneralSans-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/GeneralSans-700.woff2", weight: "700", style: "normal" },
  ],
});

export const fontVariables = `${fraunces.variable} ${hanken.variable} ${generalSans.variable}`;
