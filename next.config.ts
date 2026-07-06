import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // La vecchia variante /light è diventata il sito principale (/). 301 dalle vecchie URL.
    return [
      { source: "/light", destination: "/", permanent: true },
      { source: "/light/certificazioni", destination: "/certificazioni", permanent: true },
      { source: "/en/light", destination: "/en", permanent: true },
      { source: "/en/light/certifications", destination: "/en/certifications", permanent: true },
    ];
  },
};

export default nextConfig;
