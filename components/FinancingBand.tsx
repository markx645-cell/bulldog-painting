import Link from 'next/link';
import { financing } from '@/content/site';

export default function FinancingBand() {
  return (
    <section className="section bg-crimson text-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Financing</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{financing.headline}</h2>
          <p className="mt-4 text-steel-200">{financing.lead}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          {financing.points.map((p) => (
            <div key={p.big} className="rounded-xl border border-white/20 bg-white/5 p-6 text-center">
              <span className="block font-display text-3xl font-extrabold text-bone">{p.big}</span>
              <span className="mt-2 block text-sm leading-snug text-steel-200">{p.small}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/financing" className="btn-secondary">
            See Financing Options
          </Link>
          <p className="mt-3 text-xs text-steel-300">
            On approved credit. Terms vary by lender and project size.
          </p>
        </div>
      </div>
    </section>
  );
}
