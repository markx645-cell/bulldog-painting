import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewsList from '@/components/ReviewsList';
import TrustBar from '@/components/TrustBar';
import CTASection from '@/components/CTASection';
import Stars from '@/components/Stars';
import { reviews, reviewsArePlaceholder } from '@/content/reviews';
import { stats } from '@/content/site';

export const metadata: Metadata = {
  title: 'Reviews',
  description:
    'What Greater Cincinnati and Northern Kentucky homeowners say about Bulldog Painting — interior, exterior, and cabinet work.',
  alternates: { canonical: '/reviews/' },
};

export default function ReviewsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: 'Reviews', href: '/reviews' }]} />

      <section className="relative overflow-hidden bg-ink">
        <div className="paint-wash absolute inset-0" aria-hidden="true" />
        <div className="container-x relative py-12 text-center lg:py-16">
          <p className="eyebrow">In their words</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            {stats.googleRating} stars, {stats.reviewsLabel}
          </h1>
          <div className="mt-4 flex justify-center">
            <Stars count={5} animate />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-steel-200">
            Across Google, Facebook, BBB, and Angi. Every one of them from a homeowner in Greater
            Cincinnati or Northern Kentucky.
          </p>

          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.ratings.map((r) => (
              <div key={r.platform} className="rounded-xl border border-white/20 bg-white/5 p-4">
                <span className="block font-display text-2xl font-extrabold text-bone">
                  {r.score}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-widest text-steel-300">
                  {r.platform}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="section bg-cream">
        <div className="container-x">
          {reviewsArePlaceholder && (
            <div className="mx-auto mb-10 max-w-3xl rounded-xl border border-crimson bg-bone/50 p-5 text-sm leading-relaxed text-ink">
              <strong className="font-display uppercase tracking-widest">Build note — remove before launch.</strong>{' '}
              The reviews below are placeholder text, not real customer feedback. Replace them in{' '}
              <code>content/reviews.ts</code> with genuine reviews pulled from your Google, Facebook, BBB,
              or Angi profiles, then set <code>reviewsArePlaceholder</code> to <code>false</code> so the
              rating schema publishes.
            </div>
          )}
          <ReviewsList reviews={reviews} />
        </div>
      </section>

      <CTASection withForm />
    </>
  );
}
