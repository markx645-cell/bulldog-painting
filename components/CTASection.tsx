import Link from 'next/link';
import { site } from '@/content/site';
import QuoteForm from '@/components/QuoteForm';

export default function CTASection({
  withForm = false,
  heading = 'Get a written estimate, not a guess',
  body = 'We walk the job, measure it, and leave you with an itemized number. No obligation and no follow-up pressure.',
}: {
  withForm?: boolean;
  heading?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="paint-wash absolute inset-0" aria-hidden="true" />
      <div className="container-x relative py-16">
        <div className={withForm ? 'grid items-center gap-10 lg:grid-cols-2' : 'mx-auto max-w-2xl text-center'}>
          <div>
            <p className="eyebrow">No obligation</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{heading}</h2>
            <p className="mt-4 leading-relaxed text-steel-300">{body}</p>
            <div
              className={`mt-7 flex flex-wrap gap-3 ${withForm ? '' : 'justify-center'}`}
            >
              <a href={site.phoneHref} className="btn-secondary">
                Call {site.phone}
              </a>
              {!withForm && (
                <Link href="/contact" className="btn-outline-light">
                  Request an Estimate
                </Link>
              )}
            </div>
          </div>

          {withForm && (
            <div className="rounded-2xl bg-white p-6 shadow-lift sm:p-8">
              <h3 className="font-display text-xl font-bold text-ink">Request your estimate</h3>
              <p className="mb-4 mt-1 text-sm text-steel">
                Most estimates are scheduled within two business days.
              </p>
              <QuoteForm compact />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
