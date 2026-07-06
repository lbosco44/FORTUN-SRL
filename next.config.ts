import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Vecchia variante /light (ora inglese a root, italiano su /it)
      { source: "/light", destination: "/it", permanent: true },
      { source: "/light/certificazioni", destination: "/it/certificazioni", permanent: true },
      { source: "/en/light", destination: "/", permanent: true },
      { source: "/en/light/certifications", destination: "/certifications", permanent: true },

      // Lingua di default = inglese: EN passa da /en a root
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/certifications", destination: "/certifications", permanent: true },
      { source: "/en/privacy", destination: "/privacy", permanent: true },
      { source: "/en/cookie-policy", destination: "/cookie-policy", permanent: true },
      { source: "/en/thank-you", destination: "/thank-you", permanent: true },

      // Vecchie URL italiane (erano su root) ora sotto /it
      { source: "/certificazioni", destination: "/it/certificazioni", permanent: true },
      { source: "/cookie", destination: "/it/cookie", permanent: true },
      { source: "/grazie", destination: "/it/grazie", permanent: true },

      // Dominio canonico = www: apex fortunsrl.com → www.fortunsrl.com (301)
      {
        source: "/:path*",
        has: [{ type: "host", value: "fortunsrl.com" }],
        destination: "https://www.fortunsrl.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
