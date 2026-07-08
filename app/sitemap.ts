import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [{ path: '', lastModified: '2026-07-08' }];

  return pages.map((page) => ({
    url: `https://wiktorchudy.me${page.path}`,
    lastModified: new Date(page.lastModified),
  }));
}
