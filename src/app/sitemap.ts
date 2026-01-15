import { MetadataRoute } from "next";

// URL base do site - altere para o domínio real em produção
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dparquitetura.vercel.app";

// Projetos disponíveis (mesmos do portfólio)
const projectSlugs = [
  "residencia-contemporanea",
  "apartamento-moderno",
  "clinica-odontologica",
  "casa-de-campo",
  "escritorio-corporativo",
  "living-integrado",
  "residencia-urbana",
  "loja-conceito",
  "suite-master",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Páginas principais
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/sobre`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projetos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/servicos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contato`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacidade`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/termos`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Páginas de projetos individuais
  const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/projetos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...mainPages, ...projectPages];
}
