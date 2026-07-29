import Link from 'next/link';
import type { Metadata } from 'next';
import Photo from '@/components/Photo';
import Stars from '@/components/Stars';
import TrustBar from '@/components/TrustBar';
import ServiceCircles from '@/components/ServiceCircles';
import ServicesGrid from '@/components/ServicesGrid';
import ColorConsult from '@/components/ColorConsult';
import ProcessSteps from '@/components/ProcessSteps';
import WhyUs from '@/components/WhyUs';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import OffersGrid from '@/components/OffersGrid';
import WarrantyHighlight from '@/components/WarrantyHighlight';
import FinancingBand from '@/components/FinancingBand';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import ReviewsList from '@/components/ReviewsList';
import FaqAccordion from '@/components/FaqAccordion';
import CTASection from '@/components/CTASection';
import { site, stats } from '@/content/site';
import { reviews } from '@/content/reviews';
import { sharedFaqs } from '@/content/faqs';

export const metadata: Metadata = {
  title: 'Painters in Cincinnati & Surrounding Areas',
  description:
    'Bulldog Painting — interior and exterior painting across Cincinnati and the surrounding areas since 2004. W-2 crews, free color consultation, written itemized pricing, 5-year workmanship warranty. Free estimate.',
  alternates: { canonical: '/' },
};

const heroCategories = [
  { label: 'Interior', href: '/interior-painting' },
  { label: 'Exterior', href: '/exterior-painting' },
  { label: 'Cabinets', href: '/cabinet-painting' },
  { label: 'Commercial', href: '/commercial-painting' },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ----------
          The header overlays this section, so the image runs to the very top of
          the page and `under-header` pushes the copy clear of the nav. */}
      <section className="under-header relative overflow-hidden bg-pine-900">
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
          {/* Darkens the top of the image so the overlaid nav stays legible
              where it crosses the photo. */}
          <div
            className="absolute inset-x-0 top-0 h-48"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, rgba(11,38,30,0.92) 0%, rgba(11,38,30,0.55) 45%, rgba(11,38,30,0) 100%)',
            }}
          />
        </div>

        {/* under-header already clears the nav, so the top padding here is small */}
        <div className="container-x relative pb-12 pt-6 lg:pb-16 lg:pt-8">
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

      <ServicesGrid />

      <ColorConsult />

      <ProcessSteps tone="dark" />

      <WhyUs />

      <BeforeAfterGallery limit={4} moreHref="/projects" />

      <OffersGrid />

      <WarrantyHighlight />

      <FinancingBand />

      <ServiceAreaSection />

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

      <FaqAccordion faqs={sharedFaqs} heading="Before you call" tone="cream" />

      <CTASection withForm />
    </>
  );
}
