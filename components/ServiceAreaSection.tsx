import Link from 'next/link';
import Photo from '@/components/Photo';
import { serviceCounties, serviceCommunities, communityCount, featuredPlaces } from '@/content/areas';

/**
 * Coverage block. `compact` drops the map and per-county community lists down to
 * a single pill row — used at the foot of service pages where the full treatment
 * would be repetitive.
 *
 * Coverage is defined in content/areas.ts. Add a county or community there and
 * it appears here, on /service-areas, and in the footer.
 */
/** Nine headline places for the homepage card grid. */
const CARD_PLACES = featuredPlaces.slice(0, 9);

export default function ServiceAreaSection({
  compact = false,
  variant = 'full',
}: {
  compact?: boolean;
  variant?: 'full' | 'cards';
}) {
  if (variant === 'cards') {
    return (
      <section className="section bg-white">
        <div className="container-x text-center">
          <p className="eyebrow-dark">Where we work</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-graphite sm:text-4xl">
            Areas we serve
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate">
            {communityCount}+ communities across {serviceCounties.length} counties in Ohio, Kentucky,
            and Indiana.
          </p>

          <ul
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3"
            data-reveal-stagger
          >
            {CARD_PLACES.map((p) => (
              <li
                key={p}
                className="rounded-xl border border-slate-200 bg-cream px-4 py-5 transition-colors hover:border-pine"
              >
                <span className="flex items-center justify-center gap-2 font-display text-sm font-bold text-graphite">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C08A2E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="2.8" />
                  </svg>
                  {p}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-slate">
            Not sure if we reach you?{' '}
            <Link href="/service-areas" className="font-semibold text-pine hover:underline">
              See every community we cover
            </Link>
            , or call and we will tell you straight.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={`section ${compact ? 'bg-white' : 'bg-cream'}`}>
      <div className="container-x text-center">
        <p className="eyebrow-dark">Where we work</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-graphite sm:text-4xl">
          Cincinnati &amp; surrounding areas
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate">
          {communityCount}+ communities across {serviceCounties.length} counties in Ohio, Kentucky, and
          Indiana — and crews based close enough to reach any of it inside an hour.
        </p>

        {compact ? (
          <>
            <ul className="mx-auto mt-7 flex max-w-4xl flex-wrap justify-center gap-2">
              {featuredPlaces.map((p) => (
                <li
                  key={p}
                  className="inline-block rounded-full border border-slate-300 bg-cream px-3.5 py-1.5 text-xs font-semibold text-graphite"
                >
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/service-areas"
              className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-pine hover:underline"
            >
              See all {communityCount}+ communities
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
          </>
        ) : (
          <>
            <div className="relative mx-auto mt-8 aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-2xl shadow-lift ring-1 ring-black/5">
              <Photo
                name="serviceAreaMap"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            <p className="mt-10 font-display text-sm font-bold uppercase tracking-wide text-graphite">
              Counties we serve
            </p>
            <ul className="mx-auto mt-4 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
              {serviceCounties.map((c) => (
                <li
                  key={c.name}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-graphite"
                >
                  {c.name}, {c.state}
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-10 max-w-4xl gap-x-8 text-left sm:columns-2 lg:columns-3">
              {serviceCommunities.map((g) => (
                <div key={g.county} className="mb-5 break-inside-avoid">
                  <p className="font-display text-sm font-bold text-graphite">{g.county}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate">
                    {g.places.slice(0, 6).join(' · ')}
                    {g.places.length > 6 ? ` and ${g.places.length - 6} more` : ''}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/service-areas" className="btn-ghost mt-8">
              See Every Community
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
