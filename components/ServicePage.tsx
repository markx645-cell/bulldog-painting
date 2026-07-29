import Link from 'next/link';
import Photo from '@/components/Photo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Stars from '@/components/Stars';
import TrustBar from '@/components/TrustBar';
import ProcessSteps from '@/components/ProcessSteps';
import WarrantyHighlight from '@/components/WarrantyHighlight';
import FaqAccordion from '@/components/FaqAccordion';
import CTASection from '@/components/CTASection';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import { getService, serviceBySlug, type Service } from '@/content/services';
import { sharedFaqs } from '@/content/faqs';
import { site, stats } from '@/content/site';

const categoryLabel = {
  interior: { label: 'Interior Painting', href: '/interior-painting' },
  exterior: { label: 'Exterior Painting', href: '/exterior-painting' },
  commercial: { label: 'Commercial Painting', href: '/commercial-painting' },
} as const;

export default function ServicePage({ service }: { service: Service }) {
  const parent = categoryLabel[service.category];
  const isHub = service.slug === parent.href.slice(1);
  const faqs = [...service.faqs, ...sharedFaqs];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.h1,
    description: service.metaDescription,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: site.name,
      telephone: site.phone,
      url: site.url,
    },
    areaServed: site.serviceArea,
    url: `${site.url}/${service.slug}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Breadcrumbs
        trail={
          isHub
            ? [{ label: service.name, href: `/${service.slug}` }]
            : [
                { label: parent.label, href: parent.href },
                { label: service.name, href: `/${service.slug}` },
              ]
        }
      />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-ink">
        <div className="paint-wash absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <Photo name={service.hero} priority className="object-cover object-center" sizes="52vw" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, #110c09 0%, rgba(11,38,30,0.88) 12%, rgba(11,38,30,0.25) 38%, rgba(11,38,30,0) 60%)',
            }}
          />
        </div>

        <div className="container-x relative py-12 lg:py-16">
          <div className="max-w-xl animate-fade-up lg:max-w-[36rem]">
            <p className="eyebrow">{service.eyebrow}</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
              {service.h1}
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-steel-200">{service.lead}</p>

            <div className="mt-5 flex items-center gap-2">
              <Stars count={5} animate />
              <span className="text-sm font-semibold text-white">{stats.googleRating}/5</span>
              <span className="text-sm text-steel-300">· {stats.reviewsLabel}</span>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-secondary">
                Get a Free Estimate
              </Link>
              <a href={site.phoneHref} className="btn-outline-light">
                Call {site.phone}
              </a>
            </div>

            <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-xl shadow-lift lg:hidden">
              <Photo name={service.hero} priority className="object-cover" sizes="100vw" />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ---------- INTRO ----------
          Single full-width column. Prose stays capped at max-w-3xl — full
          container width is far past a comfortable line length to read. */}
      <section className="section bg-white">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            What {service.name.toLowerCase()} actually involves
          </h2>
          <div className="prose-body max-w-3xl">
            {service.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <h3 className="mt-10 font-display text-xl font-bold text-ink">What is included</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
            {service.includes.map((inc) => (
              <div key={inc.title} className="rounded-xl border border-steel-200 bg-cream p-5">
                <h4 className="font-display text-sm font-bold text-crimson">{inc.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-steel">{inc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DETAIL SECTIONS ---------- */}
      <section className="section bg-cream">
        <div className="container-x max-w-3xl">
          {service.detail.map((d) => (
            <div key={d.heading} className="mb-10 last:mb-0">
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{d.heading}</h2>
              <div className="prose-body">
                {d.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProcessSteps tone="dark" />

      <WarrantyHighlight />

      {/* ---------- RELATED SERVICES ---------- */}
      {service.related.length > 0 && (
        <section className="section bg-cream">
          <div className="container-x">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Often done at the same time
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
              {service.related.map((slug) => {
                const r = serviceBySlug.get(slug);
                if (!r) return null;
                return (
                  <Link
                    key={slug}
                    href={`/${r.slug}`}
                    className="group rounded-xl border border-steel-200 bg-white p-5 shadow-card transition-colors hover:border-crimson"
                  >
                    <h3 className="font-display text-base font-bold text-ink group-hover:text-crimson">
                      {r.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel">{r.lead}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <FaqAccordion faqs={faqs} heading={`${service.name} questions`} />

      <ServiceAreaSection compact />

      <CTASection withForm />
    </>
  );
}

/** Convenience wrapper so route files stay one line. */
export function servicePageFor(slug: string) {
  return <ServicePage service={getService(slug)} />;
}
