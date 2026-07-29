import Link from 'next/link';
import { warranty } from '@/content/site';

export default function WarrantyHighlight() {
  return (
    <section className="section bg-white">
      <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center">
        <div>
          <p className="eyebrow-dark">In writing</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            {warranty.headline}
          </h2>
          <p className="mt-4 leading-relaxed text-steel">{warranty.lead}</p>
          <Link href="/our-process" className="btn-ghost mt-7">
            See how we prep
          </Link>
        </div>

        <div className="space-y-4" data-reveal-stagger>
          {warranty.points.map((p) => (
            <div key={p.title} className="rounded-xl border border-steel-200 bg-cream p-6">
              <div className="flex items-start gap-3">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d01d21"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12 2l8 3.5v6c0 4.5-3.2 8.6-8 10.5-4.8-1.9-8-6-8-10.5v-6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <div>
                  <h3 className="font-display text-base font-bold text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel">{p.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
