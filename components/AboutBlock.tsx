import Link from 'next/link';
import Photo from '@/components/Photo';
import { aboutHome, site, stats } from '@/content/site';

export default function AboutBlock() {
  return (
    <section className="section bg-white">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lift ring-1 ring-black/5">
          <Photo name="crew" className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          {/* Years badge, anchored to the image rather than floating in the copy */}
          <div className="absolute bottom-5 left-5 rounded-xl bg-ink/92 px-5 py-4 text-white shadow-lift">
            <span className="block font-display text-3xl font-extrabold leading-none text-crimson">
              {stats.homesPainted}
            </span>
            <span className="mt-1 block text-[11px] uppercase tracking-widest text-steel-300">
              Homes painted since {site.founded}
            </span>
          </div>
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

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Get an Estimate
            </Link>
            <Link href="/our-process" className="btn-ghost">
              How We Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
