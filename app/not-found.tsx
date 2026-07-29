import Link from 'next/link';
import { services } from '@/content/services';
import { site } from '@/content/site';

export default function NotFound() {
  return (
    <section className="section bg-cream">
      <div className="container-x max-w-2xl py-16 text-center">
        <p className="eyebrow-dark">404</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
          That page has been painted over
        </h1>
        <p className="mt-4 leading-relaxed text-steel">
          The link is broken or the page has moved. Here is where most people are heading.
        </p>

        <ul className="mx-auto mt-8 flex flex-wrap justify-center gap-2">
          {services.slice(0, 8).map((s) => (
            <li key={s.slug}>
              <Link
                href={`/${s.slug}`}
                className="inline-block rounded-full border border-steel-300 bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-crimson hover:text-crimson"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <a href={site.phoneHref} className="btn-ghost">
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
