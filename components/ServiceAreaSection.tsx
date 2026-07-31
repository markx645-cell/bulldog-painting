import Link from 'next/link';
import Image from 'next/image';
import { serviceCounties, serviceCommunities, communityCount, featuredPlaces } from '@/content/areas';

/**
 * Coverage block. Two renderings:
 *
 *   default  — map, a curated county/city summary, and every community behind a
 *              collapsed <details>. Used on the homepage.
 *   compact  — a single pill row, used at the foot of service pages where the
 *              full treatment would be repetitive.
 *
 * Ported from the same section on bulldogremodelgroup.com (the sibling project),
 * with two deliberate differences: no icon library here, so the chevron and pin
 * are inline SVG like the rest of this site; and the palette uses this project's
 * tokens rather than that project's glass/opacity utilities.
 *
 * Community names are PLAIN TEXT, not links, and must stay that way. The sibling
 * links each one to a per-location page — this site has none by design (see the
 * Routing section of CLAUDE.md), so linking them would produce 170 dead ends.
 *
 * Coverage is defined in content/areas.ts. Add a county or community there and
 * it appears here, on /service-areas, and in the footer.
 */

/**
 * A recognisable handful per county for the summary block, curated for name
 * recognition rather than taken alphabetically.
 *
 * ⚠ Every entry is checked against content/areas.ts — each city exists AND is
 * filed under the county named here. This block is a claim about where the
 * company works, so do not add a place that is not in the coverage data.
 * Cincinnati appears as a label rather than a place because it is the parent of
 * 52 neighbourhoods rather than an entry of its own.
 */
const FEATURED_CITIES: {
  county: string;
  /** Spelled out rather than sliced off `county` — a county string written any
   *  other way would silently produce a two-letter suffix of nonsense. */
  state: string;
  extra?: string[];
  cities: string[];
}[] = [
  { county: 'Hamilton County, OH', state: 'OH', extra: ['Cincinnati'], cities: ['Blue Ash', 'Norwood', 'Montgomery'] },
  { county: 'Butler County, OH', state: 'OH', cities: ['West Chester', 'Hamilton', 'Fairfield'] },
  { county: 'Warren County, OH', state: 'OH', cities: ['Mason', 'South Lebanon', 'Maineville'] },
  { county: 'Clermont County, OH', state: 'OH', cities: ['Milford', 'Batavia', 'New Richmond'] },
  { county: 'Kenton County, KY', state: 'KY', cities: ['Covington', 'Fort Mitchell', 'Erlanger'] },
  { county: 'Campbell County, KY', state: 'KY', cities: ['Newport', 'Fort Thomas', 'Bellevue'] },
  { county: 'Boone County, KY', state: 'KY', cities: ['Florence', 'Union', 'Burlington'] },
  { county: 'Dearborn County, IN', state: 'IN', cities: ['Lawrenceburg', 'Aurora', 'Greendale'] },
];

function PinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-crimson"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="2.8" />
    </svg>
  );
}

export default function ServiceAreaSection({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="section border-t border-steel-200 bg-white">
        <div className="container-x text-center">
          <p className="eyebrow-dark">Where we work</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Cincinnati &amp; surrounding areas
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-steel">
            {communityCount} communities across {serviceCounties.length} counties in Ohio, Kentucky,
            and Indiana — and crews based close enough to reach any of it inside an hour.
          </p>

          <ul className="mx-auto mt-7 flex max-w-4xl flex-wrap justify-center gap-2">
            {featuredPlaces.map((p) => (
              <li
                key={p}
                className="inline-block rounded-full border border-steel-300 bg-cream px-3.5 py-1.5 text-xs font-semibold text-ink"
              >
                {p}
              </li>
            ))}
          </ul>
          <Link
            href="/service-areas"
            className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-crimson hover:underline"
          >
            See all {communityCount} communities
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section border-t border-steel-200 bg-cream">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-dark">Where we work</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Proudly serving the Tri-State
          </h2>
          <p className="mt-4 leading-relaxed text-steel">
            Greater Cincinnati, Northern Kentucky and southeastern Indiana — {communityCount}{' '}
            communities across {serviceCounties.length} counties, covered by our own crews.
          </p>
        </div>

        {/* Map and county list side by side from lg up, split 37/63. An explicit
            fr template rather than column spans because twelfths cannot express
            37% — 4/12 is 33% and 5/12 is 42%. Below lg they stack, map first,
            since a third of a phone screen is unreadable. */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[37fr_63fr] lg:items-start lg:gap-12">
          <figure className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-card">
              <Image
                src="/photos/service-area-map.webp"
                alt="Map of the Greater Cincinnati region covering our service area across southwest Ohio, Northern Kentucky and southeastern Indiana"
                width={768}
                height={768}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 24rem, 37vw"
              />
            </div>
            {/* Attribution for the map data. Remove only if the map is replaced
                with one whose licence does not require it. */}
            <figcaption className="mt-3 text-center text-xs text-steel">
              Map data © OpenStreetMap contributors
            </figcaption>
          </figure>

          {/* ---------- COUNTIES & CITIES ---------- */}
          <div>
            <p className="text-center font-display text-sm font-bold uppercase tracking-wide text-ink lg:text-left">
              Counties &amp; cities we serve
            </p>
            <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_CITIES.map((f) => (
                <div key={f.county}>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
                    {f.county}
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {(f.extra ?? []).map((c) => (
                      <li key={c} className="text-sm text-steel">
                        {c}
                      </li>
                    ))}
                    {f.cities.map((c) => (
                      <li key={c} className="text-sm text-steel">
                        {c}, {f.state}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Collapsed by default — 170 names would otherwise dominate the page.
            <details> rather than conditional rendering: the names stay in the
            static HTML either way, so they are still indexed and readable with
            JavaScript off. */}
        <details className="group mt-14 overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-card">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-sm font-bold uppercase tracking-wide text-crimson transition-colors hover:text-crimson-600 [&::-webkit-details-marker]:hidden">
            <span>View all {communityCount} neighborhoods we serve</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              className="shrink-0 transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>

          <div className="space-y-10 border-t border-steel-200 p-5 sm:p-6">
            {serviceCommunities.map((g) => (
              <div key={g.county}>
                <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-ink">
                  <PinIcon />
                  {g.county}
                  <span className="font-normal normal-case tracking-normal text-steel">
                    ({g.places.length})
                  </span>
                </h3>
                {/* Plain text, not links — see the note at the top of this file. */}
                <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
                  {g.places.map((p) => (
                    <li key={p} className="text-sm text-steel">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
