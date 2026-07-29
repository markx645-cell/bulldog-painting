import Link from 'next/link';
import Stars from '@/components/Stars';
import { stats } from '@/content/site';
import { reviewsArePlaceholder } from '@/content/reviews';

/**
 * Review-platform scores, directly under the trust bar.
 *
 * Deliberately renders the platform NAMES rather than their logos: using
 * Google/Angi/Yelp marks implies a verified profile and each has its own brand
 * rules about it. Swap in real badges once the profiles exist and the scores
 * in content/site.ts are the real ones.
 */
export default function RatingStrip() {
  return (
    <section className="bg-pine-900 py-7">
      <div className="container-x">
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-3 text-center lg:text-left">
            <Stars count={5} />
            <p className="font-display text-sm font-bold uppercase tracking-widest text-white">
              {stats.googleRating}/5 · {stats.reviewsLabel}
            </p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-4">
            {stats.ratings.map((r) => (
              <li
                key={r.platform}
                className="flex items-baseline gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2"
              >
                <span className="font-display text-lg font-extrabold leading-none text-brass-200">
                  {r.score}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-slate-300">
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

        {reviewsArePlaceholder && (
          <p className="mt-5 text-center text-[11px] leading-relaxed text-slate-400">
            Build note — these scores are placeholders. Replace them in{' '}
            <code>content/site.ts</code> with the real profile ratings before launch.
          </p>
        )}
      </div>
    </section>
  );
}
