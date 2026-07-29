import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { services } from '@/content/services';

const STATIC_ROUTES = [
  { path: '', priority: 1.0 },
  { path: 'contact', priority: 0.9 },
  { path: 'our-process', priority: 0.7 },
  { path: 'projects', priority: 0.7 },
  { path: 'reviews', priority: 0.7 },
  { path: 'service-areas', priority: 0.7 },
  { path: 'financing', priority: 0.6 },
];

// Required by `output: 'export'` — metadata routes must be explicitly static.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static export runs this at build time; a fixed date keeps output deterministic.
  const lastModified = new Date('2026-07-28');

  const staticPages = STATIC_ROUTES.map((r) => ({
    url: `${site.url}/${r.path ? `${r.path}/` : ''}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: r.priority,
  }));

  const servicePages = services.map((s) => ({
    url: `${site.url}/${s.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
