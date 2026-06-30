import { company, SITE_URL } from "@/lib/company";
import { routes, type Locale } from "@/lib/i18n";

export function JsonLd({ locale }: { locale: Locale }) {
  const orgId = `${SITE_URL}/#organization`;
  const pageUrl = `${SITE_URL}${routes.home[locale]}`.replace(/\/$/, "") || SITE_URL;

  const identifiers = [
    { "@type": "PropertyValue", propertyID: "REA", value: company.rea },
    { "@type": "PropertyValue", propertyID: "EORI", value: company.eori },
  ];

  const organization = {
    "@type": "Corporation",
    "@id": orgId,
    name: company.legalName,
    legalName: company.legalName,
    url: SITE_URL,
    logo: { "@type": "ImageObject", "@id": `${SITE_URL}/#logo`, url: `${SITE_URL}${company.logoPath}` },
    image: { "@id": `${SITE_URL}/#logo` },
    email: company.email,
    foundingDate: company.foundingYear,
    vatID: company.vat,
    taxID: company.taxCode,
    identifier: identifiers,
    ...(company.phone ? { telephone: company.phone } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.province,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    areaServed: [
      { "@type": "Place", name: "Worldwide" },
      ...company.hubs.map((h) => ({
        "@type": "Place",
        name: `${h.name} (${h.area})`,
        address: { "@type": "PostalAddress", addressLocality: h.locality, addressCountry: h.country },
      })),
    ],
    knowsAbout: [
      "Oil and gas trading",
      "Petroleum products and by-products",
      "Diesel EN590",
      "Jet Fuel A1",
      "LPG",
      "Fuel Oil",
      "Crude Oil",
      "International commodity trading",
      "Global sourcing and procurement",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: company.email,
        availableLanguage: ["it", "en"],
        areaServed: "Worldwide",
      },
    ],
    ...(company.linkedin ? { sameAs: [company.linkedin] } : {}),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: company.legalName,
    inLanguage: ["it", "en"],
    publisher: { "@id": orgId },
    about: { "@id": orgId },
  };

  const offerCatalog = {
    "@type": "OfferCatalog",
    "@id": `${pageUrl}/#products`,
    name: "Petroleum products and by-products — Fortun SRL",
    inLanguage: locale,
    provider: { "@id": orgId },
    itemListElement: company.products.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: p,
        category: p === "Crude Oil" ? "Crude petroleum" : "Petroleum products and by-products",
      },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website, offerCatalog],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
