/**
 * Dati aziendali ufficiali Fortun S.r.l.
 * Fonte: visura Camera di Commercio di Roma (Esito evasione protocollo 178266/2026, 05/05/2026)
 * + Codice EORI fornito dal titolare.
 *
 * Unica fonte di verità per i dati legali del sito (footer, contatti, schema.org).
 * I campi marcati TODO sono mock/da confermare dal cliente.
 */

export const company = {
  legalName: "Fortun S.r.l.",
  brand: "FORTUN",
  vat: "16828791000", // P.IVA = Codice Fiscale
  taxCode: "16828791000",
  rea: "RM-1678563",
  eori: "IT16828791000",
  shareCapital: { it: "€ 10.000,00 (versato € 2.500,00)", en: "€ 10,000.00 (paid-in € 2,500.00)" },
  foundingYear: "2022",
  copyrightYear: "2022",
  address: {
    street: "Via Aldo Sandulli 91",
    postalCode: "00156",
    city: "Roma",
    province: "RM",
    region: "Lazio",
    country: "IT",
    countryName: { it: "Italia", en: "Italy" },
  },
  email: "info@fortunsrl.com",
  pec: "16828791000@impresa.italia.it",
  // TODO[cliente]: telefono pubblico non presente in visura — placeholder, da fornire.
  phone: null as string | null,
  // TODO[cliente]: confermare dominio definitivo (coerente con il dominio email/PEC).
  domain: "https://www.fortunsrl.com",
  // TODO[cliente]: URL LinkedIn / profili reali; finché null, sameAs viene omesso dallo schema.
  linkedin: null as string | null,
  responseTime: { it: "1–2 giorni lavorativi", en: "1–2 business days" },
  logoPath: "/fortun-logo.png",
  hubs: [
    { name: "Rotterdam", area: "ARA", locality: "Rotterdam", country: "NL" },
    { name: "Houston", area: "US Gulf", locality: "Houston", region: "TX", country: "US" },
    { name: "Fujairah", area: "Middle East", locality: "Fujairah", country: "AE" },
  ],
  products: ["Diesel EN590", "Jet Fuel A1", "LPG", "Fuel Oil", "Crude Oil"],
} as const;

export const SITE_URL = company.domain;
