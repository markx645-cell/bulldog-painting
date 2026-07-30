import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FinancingBand from '@/components/FinancingBand';
import TrustBar from '@/components/TrustBar';
import FaqAccordion from '@/components/FaqAccordion';
import CTASection from '@/components/CTASection';
import { financing } from '@/content/site';

export const metadata: Metadata = {
  title: 'Painting Financing',
  description:
    'Financing for interior and exterior painting in Greater Cincinnati and Northern Kentucky. 0% for 12 months on approved credit, soft-pull application, up to $40,000.',
  alternates: { canonical: '/financing/' },
};

const financingFaqs = [
  {
    q: 'Will applying hurt my credit score?',
    a: 'No. The pre-qualification is a soft pull, which does not affect your score. Only if you accept an offer and move forward does a hard inquiry happen, and you will be told before that point.',
  },
  {
    q: 'How quickly do I get an answer?',
    a: 'Usually within a few minutes. You can apply before the estimate if you want to know your budget going in, or afterward once you have the written number in hand.',
  },
  {
    q: 'Is there a prepayment penalty?',
    a: 'No. Every plan we work with allows early payoff without penalty, which is what makes the 12-month 0% interest option genuinely worth taking if you can clear it inside the term.',
  },
  {
    q: 'What happens if I do not pay it off inside the promotional period?',
    a: 'On deferred-interest plans, interest accrued during the promotional period can be charged retroactively if the balance is not cleared in time. Read the terms your lender sends carefully — we will point this out rather than let it surprise you.',
  },
  {
    q: 'Do I need financing to book?',
    a: 'Not at all. Most of our customers pay by check or card — a deposit to schedule and the balance on completion. Financing exists for the larger whole-home projects where it makes the timing work.',
  },
];

export default function FinancingPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: 'Financing', href: '/financing' }]} />

      <section className="relative overflow-hidden bg-ink">
        <div className="paint-wash absolute inset-0" aria-hidden="true" />
        <div className="container-x relative py-12 text-center lg:py-16">
          <p className="eyebrow">Pay over time</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            {financing.headline}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-steel-200">
            {financing.lead}
          </p>
        </div>
      </section>

      <TrustBar />

      <FinancingBand />

      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            An honest word about financing
          </h2>
          <div className="prose-body">
            <p>
              Financing is a tool, not a discount. The right time to use it is when the work genuinely needs
              doing now — bare wood on an exterior, a failing coating, water damage that will get worse over
              a winter — and paying for it in one go would mean draining an emergency fund.
            </p>
            <p>
              The wrong time is to stretch into a bigger scope than the house needs. If your budget only
              covers the exterior this year, do the exterior. Interiors do not deteriorate the way an
              unprotected exterior does, and we would rather quote you two smaller jobs two years apart than
              talk you into one you have to finance uncomfortably.
            </p>
            <p>
              We will also tell you plainly when a scope can be cut. Prep cannot be. Product line, coat
              count on already-sound surfaces, and how many rooms go in this phase all can — and that
              conversation costs you nothing.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={financingFaqs} heading="Financing questions" tone="cream" />

      <CTASection withForm />
    </>
  );
}
