import Link from 'next/link';
import { services } from '@/content/services';
import { site } from '@/content/site';

export default function NotFound() {
  return (
    // Dark at the top like every other page — the header overlays it with no
    // background of its own, so a light first section would swallow the nav.
    <section className="under-header relative overflow-hidden bg-pine-900">
      <div className="paint-wash absolute inset-0" aria-hidden="true" />
      <div className="container-x relative max-w-2xl pb-20 pt-6 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">
          That page has been painted over
        </h1>
        <p className="mt-4 leading-relaxed text-slate-300">
          The link is broken or the page has moved. Here is where most people are heading.
        </p>

        <ul className="mx-auto mt-8 flex flex-wrap justify-center gap-2">
          {services.slice(0, 8).map((s) => (
            <li key={s.slug}>
              <Link
                href={`/${s.slug}`}
                className="inline-block rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-brass hover:text-brass"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-brass">
            Back to Home
          </Link>
          <a href={site.phoneHref} className="btn-outline-light">
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
