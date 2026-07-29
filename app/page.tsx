import Link from 'next/link';
import type { Metadata } from 'next';
import Photo from '@/components/Photo';
import Stars from '@/components/Stars';
import TrustBar from '@/components/TrustBar';
import ServiceCircles from '@/components/ServiceCircles';
import ServiceShowcase from '@/components/ServiceShowcase';
import AboutBlock from '@/components/AboutBlock';
import QualityControl from '@/components/QualityControl';
import VideoTestimonials from '@/components/VideoTestimonials';
import ColorConsult from '@/components/ColorConsult';
import ProcessSteps from '@/components/ProcessSteps';
import WhyUs from '@/components/WhyUs';
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
    'Bulldog Painting — interior and exterior painting across Cincinnati and the surrounding areas since 2001. W-2 crews, free color consultation, written itemized pricing, 5-year workmanship warranty. Free estimate.',
  alternates: { canonical: '/' },
};

const heroCategories = [
  { label: 'Interior', href: '/interior-painting' },
  { label: 'Exterior', href: '/exterior-painting' },
  { label: 'Cabinets', href: '/cabinet-painting' },
  { label: 'Commercial', href: '/commercial-painting' },
];

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
    title: 'Free Color Consultation',
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
      <section className="relative overflow-hidden bg-pine-900">
        <div className="paint-wash absolute inset-0" aria-hidden="true" />

        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <Photo
            name="homeHero"
            priority
            sizes="58vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, #0B261E 0%, rgba(11,38,30,0.88) 10%, rgba(11,38,30,0.25) 32%, rgba(11,38,30,0) 58%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(to top, #0B261E 0%, rgba(11,38,30,0) 22%)' }}
          />
        </div>

        <div className="container-x relative py-12 lg:py-16">
          <div className="max-w-xl animate-fade-up lg:max-w-[38rem]">
            <p className="eyebrow">Cincinnati &amp; Surrounding Areas</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Prepped right.
              <span className="block text-brass">Painted once.</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-slate-200">
              Family-owned since {site.founded}. {stats.crewCount} full-time painters on payroll — never day
              labor — {stats.homesPainted} homes finished, and a written five-year warranty on the work
              itself, not just the paint.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <Stars count={5} animate />
              <span className="text-sm font-semibold text-white">{stats.googleRating}/5</span>
              <span className="text-sm text-slate-300">· {stats.reviewsLabel}</span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroCategories.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  className="group rounded-lg border border-white/20 bg-white/5 px-4 py-4 text-center transition-all hover:border-brass hover:bg-white/10"
                >
                  <span className="font-display text-sm font-semibold uppercase tracking-wide text-white group-hover:text-brass">
                    {c.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-brass">
                Get a Free Estimate
              </Link>
              <a href={site.phoneHref} className="btn-outline-light">
                Call {site.phone}
              </a>
            </div>

            {/* Mobile hero image */}
            <div className="relative mt-8 aspect-[16/11] w-full overflow-hidden rounded-xl shadow-lift lg:hidden">
              <Photo name="homeHero" priority sizes="100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

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

      <WhyUs />

      <QualityControl />

      <ProcessSteps />

      <ColorConsult />

      <BeforeAfterGallery limit={4} moreHref="/projects" />

      <VideoTestimonials />

      {/* ---------- REVIEWS ---------- */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-dark">In their words</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-graphite sm:text-4xl">
              <Link href="/reviews" className="transition-colors hover:text-pine">
                What homeowners say
              </Link>
            </h2>
            <p className="mt-4 text-slate">
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
