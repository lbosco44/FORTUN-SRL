import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // La vecchia variante /light è diventata il sito principale (/). 301 dalle vecchie URL.
    return [
      { source: "/light", destination: "/", permanent: true },
      { source: "/light/certificazioni", destination: "/certificazioni", permanent: true },
      { source: "/en/light", destination: "/en", permanent: true },
      { source: "/en/light/certifications", destination: "/en/certifications", permanent: true },
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
