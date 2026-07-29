import Link from 'next/link';
import Logo from '@/components/Logo';
import Stars from '@/components/Stars';
import { stats } from '@/content/site';
import { reviewsArePlaceholder } from '@/content/reviews';

/**
 * Trust strip: claims on the left, brand mark in the middle, ratings on the
 * right.
 *
 * Each claim has to be defensible — these are the three things about Bulldog
 * that are true regardless of which job you book.
 *
 * The platforms are printed as names and scores rather than Google/Angi/Yelp
 * logos: a logo implies a verified profile, and each of those marks has its own
 * usage rules. Swap in real badges once the profiles exist.
 */
const claims = ['Interiors & Exteriors', 'Residential & Commercial', 'Licensed & Insured'];

function Tick() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C08A2E"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function RatingStrip() {
  return (
    <section className="bg-pine-900 py-9">
      <div className="container-x">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          {/* Claims */}
          <ul className="order-2 space-y-2.5 justify-self-center lg:order-1 lg:justify-self-start">
            {claims.map((c) => (
              <li
                key={c}
                className="flex items-center gap-2.5 font-display text-sm font-extrabold uppercase italic tracking-wide text-white sm:text-base"
              >
                {c}
                <Tick />
              </li>
            ))}
          </ul>

          {/* Brand mark */}
          <div className="order-1 justify-self-center lg:order-2">
            <Logo className="h-24 w-auto sm:h-28" />
          </div>

          {/* Ratings */}
          <div className="order-3 flex flex-col items-center gap-3 justify-self-center lg:items-end lg:justify-self-end">
            <Stars count={5} />
            <p className="font-display text-sm font-extrabold uppercase italic tracking-wide text-white sm:text-base">
              {stats.googleRating}/5 · {stats.reviewsLabel}
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-2 lg:justify-end">
              {stats.ratings.map((r) => (
                <li
                  key={r.platform}
                  className="flex items-baseline gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5"
                >
                  <span className="font-display text-base font-extrabold leading-none text-brass-200">
                    {r.score}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-300">
                    {r.platform}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/reviews"
              className="font-display text-[11px] font-bold uppercase tracking-widest text-brass hover:underline"
            >
              Read the reviews
            </Link>
          </div>
        </div>

        {reviewsArePlaceholder && (
          <p className="mt-8 text-center text-[11px] leading-relaxed text-slate-400">
            Build note — these scores are placeholders. Replace them in{' '}
            <code>content/site.ts</code> with the real profile ratings before launch.
          </p>
        )}
      </div>
    </section>
  );
}
