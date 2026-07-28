import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import TrustBar from '@/components/TrustBar';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Projects & Before/After',
  description:
    'Before and after painting projects across Greater Cincinnati and Northern Kentucky — interiors, exteriors, cabinets, brick, decks, and commercial work.',
  alternates: { canonical: '/projects/' },
};

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: 'Projects', href: '/projects' }]} />

      <section className="relative overflow-hidden bg-pine-900">
        <div className="paint-wash absolute inset-0" aria-hidden="true" />
        <div className="container-x relative py-12 text-center lg:py-16">
          <p className="eyebrow">Our work</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Before and after
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">
            Jobs from across both sides of the river, with a note on each about what actually made the
            difference — usually something that happened before the paint came out.
          </p>
        </div>
      </section>

      <TrustBar />

      <BeforeAfterGallery
        heading="Recent projects"
        lead="Interiors, exteriors, cabinets, brick, decks, and commercial. Photos are placeholders until real job shots are added — see content/media.ts."
      />

      <CTASection withForm />
    </>
  );
}
