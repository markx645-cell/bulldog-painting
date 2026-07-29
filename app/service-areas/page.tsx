import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Photo from '@/components/Photo';
import TrustBar from '@/components/TrustBar';
import FaqAccordion from '@/components/FaqAccordion';
import CTASection from '@/components/CTASection';
import { services } from '@/content/services';
import { site } from '@/content/site';
import { serviceCounties, serviceCommunities, communityCount } from '@/content/areas';

export const metadata: Metadata = {
  title: 'Areas We Serve',
  description: `${site.name} paints in ${communityCount}+ communities across ${serviceCounties.length} counties in Cincinnati and the surrounding areas. Interior, exterior, cabinet, and commercial painting.`,
  alternates: { canonical: '/service-areas/' },
};

const areaFaqs = [
  {
    q: 'Do you charge extra for travel?',
    a: `Not anywhere on this page. Every community listed is inside our normal working radius and travel is already in the number you are quoted. Outside it we will tell you honestly whether the drive is worth either of our time.`,
  },
  {
    q: 'Do you work in Ohio, Kentucky, and Indiana?',
    a: 'Yes, and we are licensed and insured for all three. Roughly a third of our work is on the Kentucky side. Crossing the river is not the scheduling problem for us that it is for some contractors.',
  },
  {
    q: 'My town is not on the list. Can you still come out?',
    a: 'Ask. The list covers where we work most weeks, not a hard boundary. If you are a little outside it and the job is large enough to be worth the drive, we will usually say yes — and if it is not, we will say that rather than pad a quote to cover the mileage.',
  },
  {
    q: 'Does the neighborhood change what a job costs?',
    a: 'The housing stock does, substantially. A 1920s plaster interior with original oil-based trim needs different prep from a six-year-old builder-grade house, so identical square footage can land at very different numbers. That is why every estimate comes off a site visit rather than a phone call.',
  },
];

export default function ServiceAreasPage() {
  const areaSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: site.name,
    url: `${site.url}/service-areas/`,
    telephone: site.phone,
    areaServed: serviceCounties.map((c) => ({
      '@type': 'AdministrativeArea',
      name: `${c.name}, ${c.state}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />

      <Breadcrumbs trail={[{ label: 'Areas We Serve', href: '/service-areas' }]} />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-ink">
        <div className="paint-wash absolute inset-0" aria-hidden="true" />
        <div className="container-x relative py-12 text-center lg:py-16">
          <p className="eyebrow">Service Area</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Areas We Serve
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-steel-200">
            We paint in {communityCount}+ communities across {serviceCounties.length} counties in
            Cincinnati and the surrounding areas. If you are nearby, there is a good chance we already
            have a crew on your street.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* ---------- COUNTIES ---------- */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-dark">Counties</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              Counties we serve
            </h2>
            <p className="mt-4 text-steel">
              Ohio, Kentucky, and Indiana. No zone pricing and no travel surcharge inside this map.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4" data-reveal-stagger>
            {serviceCounties.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2.5 rounded-xl border border-steel-200 bg-cream px-4 py-3.5 text-sm font-semibold text-ink"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d01d21"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="2.8" />
                </svg>
                {c.name}, {c.state}
              </div>
            ))}
          </div>

          <div className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-2xl shadow-lift ring-1 ring-black/5">
            <Photo name="serviceAreaMap" className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>
        </div>
      </section>

      {/* ---------- COMMUNITIES ---------- */}
      <section className="section bg-cream">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-dark">Cities &amp; Neighborhoods</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              Communities we serve
            </h2>
            <p className="mt-4 text-steel">
              {communityCount}+ neighborhoods, cities, and towns across Greater Cincinnati.
            </p>
          </div>

          <div className="mt-10 space-y-9">
            {serviceCommunities.map((group) => (
              <div key={group.county}>
                <h3 className="flex items-center gap-2.5 font-display text-lg font-extrabold text-crimson">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d01d21"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="2.8" />
                  </svg>
                  {group.county}
                </h3>
                <ul className="mt-3 columns-2 gap-x-6 sm:columns-3 lg:columns-4">
                  {group.places.map((place) => (
                    <li
                      key={place}
                      className="mb-1.5 flex break-inside-avoid gap-2 text-sm leading-snug text-steel"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d01d21"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-1 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {place}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SERVICES AVAILABLE ---------- */}
      <section className="section bg-white">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Everything we do, everywhere we go
          </h2>
          <p className="mt-2 max-w-2xl text-steel">
            One crew for the whole property, inside and out — the same list in every community above.
          </p>
          <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="flex items-center gap-2 py-1.5 text-sm text-ink hover:text-crimson"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" aria-hidden="true" />
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- DON'T SEE YOUR AREA ---------- */}
      <section className="section bg-cream">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center">
            <div className="paint-wash absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                Don&rsquo;t see your area?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-steel-200">
                The list is where we work most weeks, not a fence. Call and we will tell you straight
                whether we can get a crew to you.
              </p>
              <a href={site.phoneHref} className="btn-secondary mt-7">
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={areaFaqs} heading="Coverage questions" />

      <CTASection withForm />
    </>
  );
}
