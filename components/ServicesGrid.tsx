import Link from 'next/link';
import { interiorServices, exteriorServices, commercialServices } from '@/content/services';

function Column({
  title,
  blurb,
  items,
}: {
  title: string;
  blurb: string;
  items: { slug: string; name: string; lead: string }[];
}) {
  return (
    <div className="rounded-2xl border border-steel-200 bg-white p-7 shadow-card">
      <h3 className="font-display text-xl font-bold text-crimson">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-steel">{blurb}</p>
      <ul className="mt-5 space-y-1">
        {items.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/${s.slug}`}
              className="group flex items-start justify-between gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-cream"
            >
              <span className="font-display text-sm font-semibold text-ink group-hover:text-crimson">
                {s.name}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="mt-0.5 shrink-0 text-steel-400 transition-transform group-hover:translate-x-0.5 group-hover:text-crimson"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-dark">What we do</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Every surface, inside and out
          </h2>
          <p className="mt-4 text-steel">
            One crew for the whole property — walls, cabinets, trim, siding, brick, decks, and floors.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3" data-reveal-stagger>
          <Column
            title="Interior"
            blurb="Occupied-house work, room by room, with everything put back each evening."
            items={interiorServices.map((s) => ({ slug: s.slug, name: s.name, lead: s.lead }))}
          />
          <Column
            title="Exterior"
            blurb="Washed, scraped, primed, two-coated — and lead-safe on any pre-1978 home."
            items={exteriorServices.map((s) => ({ slug: s.slug, name: s.name, lead: s.lead }))}
          />
          <Column
            title="Commercial"
            blurb="Offices, retail, multifamily, and light industrial, scheduled around your hours."
            items={commercialServices.map((s) => ({ slug: s.slug, name: s.name, lead: s.lead }))}
          />
        </div>
      </div>
    </section>
  );
}
