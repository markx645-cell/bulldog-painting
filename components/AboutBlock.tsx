import Photo from '@/components/Photo';
import { aboutHome } from '@/content/site';

export default function AboutBlock() {
  return (
    <section className="section bg-cream">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* No stat badge over the photo. The same figure is already in the copy
            beside it, in the hero, and in TrustBar. */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lift ring-1 ring-black/5">
          <Photo name="crew" className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>

        <div>
          <p className="eyebrow-dark">{aboutHome.eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            {aboutHome.headline}
          </h2>
          <div className="prose-body max-w-xl">
            {aboutHome.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-7 space-y-2.5">
            {aboutHome.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-ink">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d01d21"
                  strokeWidth="2.6"
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
          {/* No CTA pair here. The header keeps an estimate button and the phone
              number on screen throughout, and CTASection closes the page. */}
        </div>
      </div>
    </section>
  );
}
