import Link from 'next/link';
import { qualityStandards, warranty } from '@/content/site';

export default function QualityControl() {
  return (
    <section className="relative overflow-hidden bg-pine-900 py-14 text-white sm:py-16">
      <div className="paint-wash absolute inset-0" aria-hidden="true" />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How we keep it right</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Our commitment to quality control
          </h2>
          <p className="mt-4 text-slate-300">
            Four things happen on every job. None of them are slogans — you can point at all four
            during the walkthrough.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2" data-reveal-stagger>
          {qualityStandards.map((s, i) => (
            <div
              key={s.title}
              className="rounded-xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-brass"
            >
              <span className="font-display text-sm font-bold uppercase tracking-widest text-brass">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Our guarantee, stated as the specific thing it is. A vaguer
            "100% satisfaction" line would be a weaker claim than this one. */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-brass/40 bg-brass-200/10 p-7 text-center">
          <p className="font-display text-xl font-bold text-brass-200 sm:text-2xl">
            {warranty.headline}
          </p>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-slate-200">{warranty.lead}</p>
          <Link href="/our-process" className="btn-brass mt-6">
            See What That Covers
          </Link>
        </div>
      </div>
    </section>
  );
}
