import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", lastModified: "2026-05-10" },
    { path: "/articles", lastModified: "2026-05-10" },
    { path: "/contact", lastModified: "2026-05-10" },
    { path: "/work", lastModified: "2026-05-10" },
    { path: "/about", lastModified: "2026-05-10" },
  ];

  return pages.map((page) => ({
    url: `https://wiktorchudy.me${page.path}`,
    lastModified: new Date(page.lastModified),
  }));
}
