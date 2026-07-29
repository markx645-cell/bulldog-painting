import Link from 'next/link';
import { offers } from '@/content/site';

export default function OffersGrid() {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-dark">What we are running</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Two offers. Both real.
          </h2>
          <p className="mt-4 text-steel">
            No countdown timers and no &ldquo;today only&rdquo; pricing. These two stand year-round.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2" data-reveal-stagger>
          {offers.map((o) => (
            <div
              key={o.headline}
              className="flex flex-col rounded-2xl border border-steel-200 bg-white p-8 shadow-card"
            >
              <span className="self-start rounded-full bg-bone px-3 py-1 font-display text-[11px] font-bold uppercase tracking-widest text-ink">
                {o.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink">{o.headline}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-steel">{o.body}</p>
              <Link href={o.href} className="btn-primary mt-6 self-start">
                {o.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
