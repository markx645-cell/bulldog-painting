import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import TrustBar from '@/components/TrustBar';
import FaqAccordion from '@/components/FaqAccordion';
import { site, estimateSteps, offer } from '@/content/site';
import { sharedFaqs } from '@/content/faqs';

export const metadata: Metadata = {
  title: 'Contact & Estimates',
  description:
    'Book a painting estimate in Greater Cincinnati or Northern Kentucky. Written, itemized pricing and a color consultation with every visit. No obligation.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: 'Contact', href: '/contact' }]} />

      <section className="relative overflow-hidden bg-ink">
        <div className="paint-wash absolute inset-0" aria-hidden="true" />
        <div className="container-x relative grid gap-10 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="eyebrow">No obligation</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
              Book your estimate
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-steel-200">
              We walk the job with you, measure it, flag the repairs that have to happen first, and leave
              you with a written itemized number. {offer.headline} is included.
            </p>

            <dl className="mt-8 space-y-5">
              <div>
                <dt className="font-display text-[11px] font-bold uppercase tracking-widest text-crimson">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={site.phoneHref}
                    className="font-display text-2xl font-extrabold tabular-nums text-white hover:text-crimson"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display text-[11px] font-bold uppercase tracking-widest text-crimson">
                  Email
                </dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="text-white hover:text-crimson">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display text-[11px] font-bold uppercase tracking-widest text-crimson">
                  Office
                </dt>
                <dd className="mt-1 leading-relaxed text-steel-200">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </dd>
              </div>
              <div>
                <dt className="font-display text-[11px] font-bold uppercase tracking-widest text-crimson">
                  Hours
                </dt>
                <dd className="mt-1 text-steel-200">{site.hours}</dd>
              </div>
              <div>
                <dt className="font-display text-[11px] font-bold uppercase tracking-widest text-crimson">
                  Areas we serve
                </dt>
                <dd className="mt-1 text-steel-200">{site.serviceArea}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lift sm:p-8">
            <h2 className="font-display text-xl font-bold text-ink">Tell us about the job</h2>
            <p className="mb-5 mt-1 text-sm text-steel">
              Most estimates are scheduled within two business days.
            </p>
            <QuoteForm />
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-dark">What to expect</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              What happens at the estimate
            </h2>
            <p className="mt-4 text-steel">
              About an hour, start to finish, and you keep the written number whether you hire us or not.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3" data-reveal-stagger>
            {estimateSteps.map((s) => (
              <div key={s.step} className="rounded-xl border border-steel-200 bg-cream p-6">
                <span className="font-display text-4xl font-bold text-crimson">{s.step}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-crimson">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion faqs={sharedFaqs} heading="Before you book" tone="cream" />
    </>
  );
}
