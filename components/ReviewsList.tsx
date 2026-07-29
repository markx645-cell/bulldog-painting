import Link from 'next/link';
import Stars from '@/components/Stars';
import type { Review } from '@/content/reviews';

export default function ReviewsList({
  reviews,
  moreHref,
  limit,
}: {
  reviews: Review[];
  moreHref?: string;
  limit?: number;
}) {
  const shown = limit ? reviews.slice(0, limit) : reviews;
  return (
    <>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
        {shown.map((r, i) => (
          <figure
            key={`${r.name}-${i}`}
            className="flex flex-col rounded-xl border border-steel-200 bg-white p-6 shadow-card"
          >
            <Stars count={r.rating} />
            <blockquote className="mt-4 flex-1 leading-relaxed text-ink">
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-steel-200 pt-4">
              <span className="block font-display text-sm font-bold text-ink">{r.name}</span>
              <span className="mt-0.5 block text-xs text-steel">
                {r.location} · {r.project}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {moreHref && (
        <div className="mt-10 text-center">
          <Link href={moreHref} className="btn-ghost">
            Read More Reviews
          </Link>
        </div>
      )}
    </>
  );
}
