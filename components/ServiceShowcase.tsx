import Link from 'next/link';
import Photo from '@/components/Photo';
import type { MediaKey } from '@/content/media';

export type ShowcaseCard = {
  title: string;
  body: string;
  href: string;
  image: MediaKey;
};

/**
 * Big picture-led cards for a service line. Used twice on the homepage — once
 * for residential, once for commercial — so the two halves of the business
 * each get their own block instead of sharing one flat list.
 */
export default function ServiceShowcase({
  eyebrow,
  heading,
  lead,
  cards,
  cta,
  tone = 'cream',
}: {
  eyebrow: string;
  heading: string;
  lead: string;
  cards: ShowcaseCard[];
  cta?: { label: string; href: string };
  tone?: 'cream' | 'white';
}) {
  const dark = false;
  return (
    <section className={`section ${tone === 'cream' ? 'bg-cream' : 'bg-white'}`}>
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-dark">{eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-steel">{lead}</p>
        </div>

        <div
          // Four across once there are four or more. At three columns a
          // ten-card set leaves a single orphan on the last row; four leaves a
          // pair, which reads as a grid rather than a mistake.
          className={`mt-12 grid gap-6 ${
            cards.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3'
          }`}
          data-reveal-stagger
        >
          {cards.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-card transition-all hover:-translate-y-1 hover:border-crimson hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Photo
                  name={c.image}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span
                  className="absolute inset-x-0 bottom-0 h-1/2"
                  style={{
                    backgroundImage:
                      'linear-gradient(to top, rgba(17,12,9,0.65) 0%, rgba(17,12,9,0) 100%)',
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-ink group-hover:text-crimson">
                  {c.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{c.body}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-widest text-crimson">
                  Learn more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {cta && (
          <div className="mt-10 text-center">
            <Link href={cta.href} className={dark ? 'btn-secondary' : 'btn-ghost'}>
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
