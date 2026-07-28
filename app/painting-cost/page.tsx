import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Photo from '@/components/Photo';
import TrustBar from '@/components/TrustBar';
import FaqAccordion from '@/components/FaqAccordion';
import CTASection from '@/components/CTASection';
import { services } from '@/content/services';

export const metadata: Metadata = {
  title: 'What Painting Costs in Cincinnati',
  description:
    'Real painting price ranges for Cincinnati and Northern Kentucky — interior, exterior, cabinets, decks, and commercial — plus what actually moves the number on a quote.',
  alternates: { canonical: '/painting-cost/' },
};

const drivers = [
  {
    title: 'Condition, not size',
    body: 'Two identical houses can differ by thousands. One needs a wash and two coats; the other needs a day and a half of scraping, feather-sanding, and full priming before anything else happens. Prep hours are the biggest single variable in any painting quote.',
  },
  {
    title: 'Color change direction',
    body: 'Going lighter over a dark color, or laying a saturated color over white, can genuinely need three coats. Staying in the same value family usually does not. This is worth asking about before you fall in love with a color.',
  },
  {
    title: 'Access and height',
    body: 'A second-story elevation over a sloped lot, a two-story foyer, or a tight side yard that rules out spraying all cost more per square foot than the easy walls do. Most of the price difference is staging, not paint.',
  },
  {
    title: 'How much trim there is',
    body: 'Trim, doors, and window casing are hand work and take far longer per square foot than open wall. A house with deep crown, chair rail, and eight-inch baseboard costs meaningfully more than the same square footage with builder-grade trim.',
  },
  {
    title: 'Lead-safe requirements',
    body: 'Pre-1978 homes require EPA RRP containment, HEPA sanding, and documented cleanup on any exterior scraping. It is a real cost and it is not optional. Any quote on an older home that does not mention it is worth a second look.',
  },
  {
    title: 'Product line',
    body: 'The step from mid-grade to premium acrylic is usually a few hundred dollars on a whole house and buys years of extra life. The step to the very top line is a smaller improvement for a larger jump. We will tell you where the value sits.',
  },
];

const costFaqs = [
  {
    q: 'Why do painting quotes vary so much for the same house?',
    a: 'Because they are usually not quoting the same work. One will be two coats over a wash; another includes scraping, priming bare wood, replacing rotted trim, and lead-safe containment. Ask every bidder to itemize prep separately — the differences show up immediately.',
  },
  {
    q: 'Is it cheaper to paint in winter?',
    a: 'Interior work, yes — January through March is our quietest stretch and scheduling is easier. Exterior work is weather-dependent and we will not paint outside when overnight temperatures stop a film from forming properly, so there is no winter exterior discount to chase.',
  },
  {
    q: 'Can I supply my own paint to save money?',
    a: 'You can, and some customers do. It usually saves less than expected because we buy at contractor pricing, and it means the product is outside our warranty. If you want a specific line, tell us and we will price it in.',
  },
  {
    q: 'Do you charge for the estimate?',
    a: 'No. The estimate, the measurement, and the color consultation are all free with no obligation, and you keep the written itemized number whether you hire us or not.',
  },
  {
    q: 'How much is a deposit?',
    a: 'A deposit to schedule and the balance on completion after you have walked the job and signed off. We never ask for the full amount up front, and any change to the scope gets a conversation before it gets an invoice.',
  },
];

export default function PaintingCostPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: 'Painting Cost', href: '/painting-cost' }]} />

      <section className="relative overflow-hidden bg-pine-900">
        <div className="paint-wash absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
          <Photo name="cost" priority className="object-cover object-center" sizes="48vw" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, #0B261E 0%, rgba(11,38,30,0.88) 12%, rgba(11,38,30,0.25) 38%, rgba(11,38,30,0) 60%)',
            }}
          />
        </div>
        <div className="container-x relative py-12 lg:py-16">
          <div className="max-w-xl lg:max-w-[36rem]">
            <p className="eyebrow">Real numbers</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
              What painting costs around Cincinnati
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-slate-200">
              Published ranges for every service we offer, and an honest account of what moves a quote up
              or down. No form to fill in to see them.
            </p>
            <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-xl shadow-lift lg:hidden">
              <Photo name="cost" priority className="object-cover" sizes="100vw" />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ---------- PRICE TABLE ---------- */}
      <section className="section bg-white">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-graphite sm:text-3xl">
            Price ranges by service
          </h2>
          <p className="mt-2 max-w-2xl text-slate">
            These are the bands we actually quote inside, not a national average. Every one of them
            assumes our full prep standard — they are not comparable to a two-coats-over-dirt price.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-graphite">
                  <th className="py-3 pr-4 font-display text-xs font-bold uppercase tracking-widest text-graphite">
                    Service
                  </th>
                  <th className="py-3 pr-4 font-display text-xs font-bold uppercase tracking-widest text-graphite">
                    Typical range
                  </th>
                  <th className="py-3 font-display text-xs font-bold uppercase tracking-widest text-graphite">
                    What moves it
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.slug} className="border-b border-slate-200 align-top">
                    <td className="py-4 pr-4">
                      <Link href={`/${s.slug}`} className="font-display text-sm font-bold text-pine hover:underline">
                        {s.name}
                      </Link>
                    </td>
                    <td className="py-4 pr-4 font-display text-sm font-semibold text-graphite">
                      {s.pricing.range}
                    </td>
                    <td className="py-4 text-sm leading-relaxed text-slate">{s.pricing.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-slate">
            Ranges are current as of the 2026 season and are revised when our material costs change. Your
            written estimate is a fixed price, not a range.
          </p>
        </div>
      </section>

      {/* ---------- WHAT DRIVES PRICE ---------- */}
      <section className="section bg-cream">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-dark">Reading a quote</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-graphite sm:text-4xl">
              Six things that move the number
            </h2>
            <p className="mt-4 text-slate">
              Useful whether you hire us or not — these are the questions to put to every bidder.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
            {drivers.map((d) => (
              <div key={d.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-card">
                <h3 className="font-display text-lg font-bold text-graphite">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CHEAP QUOTE ---------- */}
      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-graphite sm:text-3xl">
            When the cheapest quote is the right one
          </h2>
          <div className="prose-body">
            <p>
              Sometimes it genuinely is. If you are selling in sixty days and need neutral walls, or you
              have a rental between tenants, a lighter-prep job at a lower price is the correct economic
              decision and we will tell you so.
            </p>
            <p>
              Where it stops being the right call is anywhere water is involved — exteriors, bathrooms,
              basements, decks. A cheap quote in those places is nearly always cheap because prep was
              removed from it, and prep is what stands between you and repainting in three years. The
              second job costs more than doing it once properly.
            </p>
            <p>
              The practical test: ask each bidder to itemize prep, primer, and coat count as separate lines.
              A quote that cannot be broken out that way is not a quote, it is a number.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={costFaqs} heading="Pricing questions" tone="cream" />

      <CTASection withForm />
    </>
  );
}
