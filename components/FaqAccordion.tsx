import type { Faq } from '@/content/services';

/**
 * Accessible FAQ list using native <details>, so it works without JavaScript
 * and the answers are in the HTML for crawlers.
 * `withSchema` emits FAQPage JSON-LD — set it on only ONE FAQ block per page.
 */
export default function FaqAccordion({
  faqs,
  heading = 'Questions we get asked',
  withSchema = true,
  tone = 'light',
}: {
  faqs: Faq[];
  heading?: string;
  withSchema?: boolean;
  tone?: 'light' | 'cream';
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className={`section ${tone === 'cream' ? 'bg-cream' : 'bg-white'}`}>
      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow-dark">FAQ</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">{heading}</h2>

          <div className="mt-8 divide-y divide-steel-200 border-y border-steel-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-bold text-ink marker:hidden">
                  {f.q}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d01d21"
                    strokeWidth="2.4"
                    className="mt-0.5 shrink-0 transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-steel">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
