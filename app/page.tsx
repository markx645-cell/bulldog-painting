import Link from 'next/link';
import type { Metadata } from 'next';
import Photo from '@/components/Photo';
import TrustBar from '@/components/TrustBar';
import ServiceCircles from '@/components/ServiceCircles';
import ServiceShowcase from '@/components/ServiceShowcase';
import BrandStatement from '@/components/BrandStatement';
import BeforeAfterFeature from '@/components/BeforeAfterFeature';
import ProcessTabs from '@/components/ProcessTabs';
import AboutBlock from '@/components/AboutBlock';
import QualityControl from '@/components/QualityControl';
import VideoTestimonials from '@/components/VideoTestimonials';
import ColorConsult from '@/components/ColorConsult';
import MissionValues from '@/components/MissionValues';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import WarrantyHighlight from '@/components/WarrantyHighlight';
import FinancingBand from '@/components/FinancingBand';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import ReviewsList from '@/components/ReviewsList';
import FaqAccordion from '@/components/FaqAccordion';
import CTASection from '@/components/CTASection';
import { site, stats, commercialSegments } from '@/content/site';
import { reviews } from '@/content/reviews';
import { sharedFaqs } from '@/content/faqs';

export const metadata: Metadata = {
  title: 'Painters in Cincinnati & Surrounding Areas',
  description:
    'Bulldog Painting — interior and exterior painting across Cincinnati and the surrounding areas since 2001. W-2 crews, color consultation, written itemized pricing, 5-year workmanship warranty.',
  alternates: { canonical: '/' },
};


const residentialCards = [
  {
    title: 'Interior Painting',
    body: 'Walls, ceilings, and trim in an occupied house — room by room, everything back in place each evening, two full coats in low-VOC product.',
    href: '/interior-painting',
    image: 'interior' as const,
  },
  {
    title: 'Exterior Painting',
    body: 'Washed, scraped, primed, and two-coated to survive Ohio Valley freeze-thaw. Lead-safe containment on anything built before 1978.',
    href: '/exterior-painting',
    image: 'exterior' as const,
  },
  {
    title: 'Cabinet Refinishing',
    body: 'Doors sprayed flat in our shop for a factory-smooth finish, boxes sprayed in place behind containment. Roughly a third of replacement cost.',
    href: '/cabinet-painting',
    image: 'cabinets' as const,
  },
  {
    title: 'Color Consultation',
    body: 'A certified consultant and large samples brushed on your own walls, so you see the colour in your own light before anything is ordered.',
    href: '/contact',
    image: 'colorConsult' as const,
  },
];

const commercialCards = commercialSegments.map((s, i) => ({
  title: s.title,
  body: s.body,
  href: '/commercial-painting',
  image: (['commercial', 'basement', 'epoxy'] as const)[i],
}));

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-ink">
        <div className="paint-wash absolute inset-0" aria-hidden="true" />

        {/* The photo used to be a full-bleed panel pinned to the right edge with
            two ink gradients feathering it into the background. It is now a real
            grid column instead, because "show the whole photo" and "bleed it to
            the viewport edge" cannot both be true: the source is portrait
            (1122x1402, 0.80) and any landscape panel has to crop it to fill.
            The column below carries that exact aspect ratio, so object-cover
            crops nothing, and there are no gradients over it. */}
        <div className="container-x relative py-12 lg:py-16">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center lg:gap-12 xl:grid-cols-[minmax(0,1fr)_27rem]">
            {/* flex-col so the mobile photo can be lifted above the headline with
                `order` instead of being moved up the markup — this is the page's
                h1 and it stays first in the DOM. Every text child keeps order 0,
                so a column flex here lays out exactly as the block flow did. */}
            <div className="flex max-w-xl flex-col animate-fade-up lg:max-w-none">
              {/* No eyebrow above the H1 — the headline and the serving line both
                  name Cincinnati already, and a third mention read as filler. */}
              <h1 className="font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Painters in Cincinnati, OH
              </h1>
              {/* Same size as the H1 — the two lines read as one headline, split
                  only by colour. Type classes here must stay in step with the h1. */}
              <p className="mt-2 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-crimson sm:text-5xl lg:text-6xl">
                For top-rated interior &amp; exterior finishes
              </p>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-white">
                Serving {site.serviceArea} with a premium standard, clear communication, and
                warranty-backed workmanship.
              </p>
              <p className="mt-3 max-w-lg leading-relaxed text-steel-300">
                Family-owned since {site.founded}. {stats.crewCount} full-time painters on payroll — never
                subcontracted out — {stats.homesPainted} homes finished, and a five-year warranty
                on the work itself, not just the paint.
              </p>

              {/* Two buttons and nothing else. The rating strip and the four
                  category tiles that used to sit here were pushing the CTAs below
                  the fold — and ServiceCircles right under the hero already links
                  the same four categories. */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-secondary">
                  Get an Estimate
                </Link>
                <a href={site.phoneHref} className="btn-outline-light">
                  Call {site.phone}
                </a>
              </div>

              {/* Mobile hero image. Hidden at lg, where the photo has its own
                  grid column. `order-first` puts it above the headline on a
                  phone; margin is mb rather than mt because it now leads.
                  This one still crops to 16/11 on purpose — the source is
                  portrait, so at full width and native ratio it would stand
                  taller than the phone screen and bury the headline. */}
              <div className="relative order-first mb-7 aspect-[16/11] w-full overflow-hidden rounded-xl shadow-lift lg:hidden">
                <Photo name="homeHero" priority sizes="100vw" className="object-cover object-[center_20%]" />
              </div>
            </div>

            {/* Desktop photo. The box carries the source's own 1122:1402 ratio,
                so object-cover has nothing left to crop — the whole frame shows,
                head to boots, with no gradient over it. */}
            <div className="relative hidden aspect-[1122/1402] w-full overflow-hidden rounded-2xl shadow-lift lg:block">
              <Photo
                name="homeHero"
                priority
                sizes="(min-width: 1280px) 27rem, 22rem"
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

      <ServiceCircles />

      <ServiceShowcase
        eyebrow="For your home"
        heading="Residential painting"
        lead="Inside and out, on houses from 1880s Covington brick to last year's build in Union."
        cards={residentialCards}
        cta={{ label: 'See All Services', href: '/interior-painting' }}
        tone="cream"
      />

      <ServiceShowcase
        eyebrow="For your property"
        heading="Commercial painting"
        lead="Scheduled around your hours, not ours — nights, weekends, and phased so nobody loses a trading day."
        cards={commercialCards}
        cta={{ label: 'Commercial Painting', href: '/commercial-painting' }}
        tone="white"
      />

      <AboutBlock />

      <MissionValues />

      <QualityControl />

      <ColorConsult />

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

      <ServiceAreaSection variant="cards" />

      <FaqAccordion faqs={sharedFaqs} heading="Before you call" tone="cream" />

      <CTASection withForm />
    </>
  );
}
