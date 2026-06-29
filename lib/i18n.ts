export type Locale = "it" | "en";
export const locales: Locale[] = ["it", "en"];
export const defaultLocale: Locale = "it";

/** Mappa pagina -> path per ciascuna lingua. Single source per nav, toggle e hreflang. */
export const routes = {
  home: { it: "/", en: "/en" },
  privacy: { it: "/privacy", en: "/en/privacy" },
  cookie: { it: "/cookie", en: "/en/cookie-policy" },
  thankYou: { it: "/grazie", en: "/en/thank-you" },
} as const;

export type RouteKey = keyof typeof routes;

/** Ancore interne della home (identiche su IT/EN). */
export const anchors = {
  about: "chi-siamo",
  network: "mercati",
  process: "come-operiamo",
  solutions: "soluzioni",
  compliance: "compliance",
  contact: "contatti",
} as const;

/**
 * Genera l'oggetto `alternates` per la Metadata di Next:
 * canonical sulla lingua corrente + hreflang it/en + x-default su /en (pubblico internazionale).
 */
export function alternatesFor(page: RouteKey, locale: Locale) {
  const it = routes[page].it;
  const en = routes[page].en;
  return {
    canonical: routes[page][locale],
    languages: {
      it,
      en,
      "x-default": en,
    },
  };
}

export const otherLocale = (l: Locale): Locale => (l === "it" ? "en" : "it");
