import Link from 'next/link';
import type { Metadata } from 'next';
import Photo from '@/components/Photo';
import TrustBar from '@/components/TrustBar';
import ServiceShowcase from '@/components/ServiceShowcase';
import BrandStatement from '@/components/BrandStatement';
import BeforeAfterFeature from '@/components/BeforeAfterFeature';
import ProcessTabs from '@/components/ProcessTabs';
import AboutBlock from '@/components/AboutBlock';
import VideoTestimonials from '@/components/VideoTestimonials';
import MissionValues from '@/components/MissionValues';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import WarrantyHighlight from '@/components/WarrantyHighlight';
import FinancingBand from '@/components/FinancingBand';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import ReviewsList from '@/components/ReviewsList';
import FaqAccordion from '@/components/FaqAccordion';
import CTASection from '@/components/CTASection';
import { site, stats } from '@/content/site';
import { services } from '@/content/services';
import { reviews } from '@/content/reviews';
import { sharedFaqs } from '@/content/faqs';

export const metadata: Metadata = {
  title: 'Painters in Cincinnati & Surrounding Areas',
  description:
    'Bulldog Painters — interior and exterior painting across Cincinnati and the surrounding areas since 2001. W-2 crews, written itemized pricing, 5-year workmanship warranty.',
  alternates: { canonical: '/' },
};


// Every service, in one grid — including the two category hubs, which are
// services in their own right and the two most searched of the lot.
//
// Derived from the service data rather than hand-written, so adding, renaming
// or merging a service updates the homepage on its own. The order is the order
// in content/services.ts, which already groups interior, then exterior, then
// commercial.
const allServiceCards = services.map((s) => ({
  title: s.name,
  body: s.lead,
  href: `/${s.slug}`,
  image: s.hero,
}));

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-ink">
        <div className="paint-wash absolute inset-0" aria-hidden="true" />

        {/* The photo is a real grid column, not a full-bleed panel with gradients
            feathering it into the background — that older treatment had to crop
            to fill, and the brief is to show the whole frame.
            The boxes below carry the photo's own 1400:932 ratio so object-cover
            crops nothing. The column is wider than it used to be because the
            photo is now landscape; when it was portrait, 22rem was right. */}
        <div className="container-x relative py-12 lg:py-16">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-center lg:gap-12 xl:grid-cols-[minmax(0,1fr)_32rem]">
            {/* flex-col so the mobile photo can be lifted above the headline with
                `order` instead of being moved up the markup — this is the page's
                h1 and it stays first in the DOM. Every text child keeps order 0,
                so a column flex here lays out exactly as the block flow did. */}
            <div className="flex max-w-xl flex-col animate-fade-up lg:max-w-none">
              {/* No eyebrow above the H1 — the headline and the serving line both
                  name Cincinnati already, and a third mention read as filler.

                  Sizes are 25% down from the Tailwind steps they replace:
                  text-4xl 36px -> 27px, text-5xl 48px -> 36px, text-6xl 60px ->
                  45px. Written as explicit rem so the ratio stays visible — the
                  named steps do not have 25%-smaller siblings to drop to.
                  leading is a ratio, so it scales on its own. */}
              <h1 className="font-display text-[1.6875rem] font-bold uppercase leading-[1.02] tracking-tight text-white sm:text-[2.25rem] lg:text-[2.8125rem]">
                Painters in Cincinnati, OH
              </h1>
              {/* Same size as the H1 — the two lines read as one headline, split
                  only by colour. Type classes here must stay in step with the h1. */}
              <p className="mt-2 font-display text-[1.6875rem] font-bold uppercase leading-[1.02] tracking-tight text-crimson sm:text-[2.25rem] lg:text-[2.8125rem]">
                For top-rated interior &amp; exterior finishes
              </p>
              {/* One paragraph, and no CTA buttons — the header carries both a
                  Get an Estimate button and the phone number, and they stay on
                  screen while this scrolls. */}
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-steel-200">
                Serving {site.serviceArea} with a premium standard, clear communication, and
                warranty-backed workmanship. Family-owned since {site.founded}, with{' '}
                {stats.crewCount} full-time painters on payroll — never subcontracted out —{' '}
                {stats.homesPainted} homes finished, and a five-year warranty on the work itself,
                not just the paint.
              </p>

              {/* Mobile hero image. Hidden at lg, where the photo has its own
                  grid column. `order-first` puts it above the headline on a
                  phone; margin is mb rather than mt because it now leads.
                  Native ratio here too — a landscape frame at full phone width
                  is only about 260px tall, so unlike the old portrait shot it
                  does not need cropping to keep the headline in view. */}
              <div className="relative order-first mb-7 aspect-[1400/932] w-full overflow-hidden rounded-xl shadow-lift lg:hidden">
                <Photo name="homeHero" priority sizes="100vw" className="object-cover" />
              </div>
            </div>

            {/* Desktop photo. The box carries the source's own 1400:932 ratio,
                so object-cover has nothing left to crop — the whole frame shows,
                with no gradient over it. */}
            <div className="relative hidden aspect-[1400/932] w-full overflow-hidden rounded-2xl shadow-lift lg:block">
              <Photo
                name="homeHero"
                priority
                sizes="(min-width: 1280px) 32rem, 26rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* First thing under the hero. Covers the experience of the job;
          AboutBlock further down covers credentials and MissionValues the
          practices — three different axes, so they do not read as a repeat. */}
      <BrandStatement />

      {/* cream, so it separates from the white BrandStatement above. */}
      <BeforeAfterFeature />

      {/* Dark, between the cream block above and the white TrustBar below.
          This replaces <ProcessSteps /> on the homepage — both render the same
          `process` data, so keeping both would print the five steps twice on one
          page. ProcessSteps still runs on /our-process and every service page. */}
      <ProcessTabs />

      <TrustBar />

      <AboutBlock />

      {/* white, not cream. Tones alternate through this run — TrustBar white,
          AboutBlock cream, this white, MissionValues cream — so no two adjacent
          sections share a background and run together. */}
      <ServiceShowcase
        eyebrow="What we do"
        heading="Every service we offer"
        lead="Inside and out, on houses from 1880s Covington brick to last year's build in Union. Each one links to what the work actually involves — including the parts most quotes leave out."
        cards={allServiceCards}
        tone="white"
      />

      <MissionValues />

      <BeforeAfterGallery limit={4} moreHref="/projects" />

      <VideoTestimonials />

      {/* ---------- REVIEWS ---------- */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-dark">In their words</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              <Link href="/reviews" className="transition-colors hover:text-crimson">
                What homeowners say
              </Link>
            </h2>
            <p className="mt-4 text-steel">
              A sample of what customers have written after the crew packed up.
            </p>
          </div>
          <ReviewsList reviews={reviews} moreHref="/reviews" limit={6} />
        </div>
      </section>

      <WarrantyHighlight />

      <FinancingBand />

      <ServiceAreaSection />

      <FaqAccordion faqs={sharedFaqs} heading="Before you call" tone="cream" />

      <CTASection withForm />
    </>
  );
}
