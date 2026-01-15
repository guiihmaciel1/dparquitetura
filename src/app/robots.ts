import { MetadataRoute } from "next";

// URL base do site - altere para o domínio real em produção
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dparquitetura.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
        ],
      },
      {
        // Bots de SEO específicos - acesso total
        userAgent: ["Googlebot", "Bingbot", "DuckDuckBot"],
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
