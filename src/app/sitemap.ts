import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/metodo",
    "/autor",
    "/livro",
    "/curso-online",
    "/curso-presencial",
    "/eventos",
    "/blog",
    "/artigos-cientificos",
    "/depoimentos",
    "/faq",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
    "/direitos-autorais",
  ];

  return routes.map((route) => ({
      url: `https://metodohmp.com.br${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
    }));
}
