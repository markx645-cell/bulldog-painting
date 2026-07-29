import Link from 'next/link';
import { site } from '@/content/site';

export type Crumb = { label: string; href: string };

/** Visible breadcrumb trail + BreadcrumbList JSON-LD.
 *  Pass every crumb including the current page (last one is not linked). */
export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const items = [{ label: 'Home', href: '/' }, ...trail];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: `${site.url}${c.href}`,
    })),
  };

  return (
    // Dark to match the header and the hero it sits between — a light strip
    // here would reintroduce the seam the dark header exists to remove.
    <nav aria-label="Breadcrumb" className="bg-pine-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="container-x flex flex-wrap items-center gap-x-2 gap-y-1 pt-4 text-xs text-slate-400">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-2">
              {last ? (
                <span className="font-semibold text-white" aria-current="page">
                  {c.label}
                </span>
              ) : (
                <>
                  <Link href={c.href} className="hover:text-brass">
                    {c.label}
                  </Link>
                  <span aria-hidden="true" className="text-slate-400/60">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
