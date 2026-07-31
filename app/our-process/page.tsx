import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Photo from '@/components/Photo';
import ProcessSteps from '@/components/ProcessSteps';
import WarrantyHighlight from '@/components/WarrantyHighlight';
import TrustBar from '@/components/TrustBar';
import FaqAccordion from '@/components/FaqAccordion';
import CTASection from '@/components/CTASection';
import { estimateSteps, stats } from '@/content/site';
import { sharedFaqs } from '@/content/faqs';

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'How Bulldog Painters preps and paints — protection, surface repair, priming, two full coats, and a documented walkthrough. Why prep decides how long a finish lasts.',
  alternates: { canonical: '/our-process/' },
};

const prepStages = [
  {
    title: 'Protection before anything else',
    body: 'Furniture moved and wrapped, floors papered and taped, fixtures and hardware masked, doorways zipped where sanding is happening. Outside, that means beds, shrubs, walks, and driveways covered before the first ladder goes up.',
  },
  {
    title: 'Wash — and then wait',
    body: 'Exteriors get soft-washed to remove chalking, mildew, and dirt, then given a real dry-out window. Painting siding that still holds moisture is the fastest way to a peeling job, so the dry day is in the schedule, not something we squeeze.',
  },
  {
    title: 'Scrape, sand, feather',
    body: 'Every loose or lifting edge scraped back to sound material, then feather-sanded so the transition does not telegraph through the new coat. On pre-1978 homes this happens under EPA lead-safe containment with HEPA sanding.',
  },
  {
    title: 'Fill, patch, caulk',
    body: 'Nail holes, dents, seam cracks, and old anchor holes filled and sanded flush. Trim joints, casing, and corner boards re-caulked with a flexible product that survives Ohio Valley freeze-thaw.',
  },
  {
    title: 'Prime what needs priming',
    body: 'Bare wood, fresh compound, water stains, tannin-heavy species, chalked aluminum, and old oil-based enamel each get the specific primer they need. This is the step that separates a five-year job from a fifteen-year one.',
  },
  {
    title: 'Two full coats, cut by hand',
    body: 'Premium product, two coats standard, back-brushed into rough surfaces. Every ceiling, corner, and transition cut by hand — straight lines come from a brush, not from tape.',
  },
];

export default function ProcessPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: 'Our Process', href: '/our-process' }]} />

      <section className="relative overflow-hidden bg-ink">
        <div className="paint-wash absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 hidden w-[50%] lg:block">
          <Photo name="processHero" priority className="object-cover object-center" sizes="50vw" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, #110c09 0%, rgba(17,12,9,0.92) 12%, rgba(17,12,9,0.35) 38%, rgba(17,12,9,0) 60%)',
            }}
          />
        </div>
        <div className="container-x relative py-12 lg:py-16">
          <div className="max-w-xl lg:max-w-[36rem]">
            <p className="eyebrow">How we work</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
              Prep is 70% of the job
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-steel-200">
              Nine out of ten paint failures are prep failures, not product failures. Which is why most of
              our schedule is spent on the parts that do not show up in the after photo.
            </p>
            <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-xl shadow-lift lg:hidden">
              <Photo name="processHero" priority className="object-cover" sizes="100vw" />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <ProcessSteps />

      {/* ---------- PREP DETAIL ---------- */}
      <section className="section bg-cream">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-dark">The unglamorous part</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              Six things that happen before the finish coat
            </h2>
            <p className="mt-4 text-steel">
              None of these show in a photo. All of them decide whether you are repainting in year five or
              year fifteen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
            {prepStages.map((s, i) => (
              <div key={s.title} className="rounded-xl border border-steel-200 bg-white p-6 shadow-card">
                <span className="font-display text-sm font-bold uppercase tracking-widest text-crimson">
                  Step {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ESTIMATE ---------- */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-dark">Before any of it</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              What happens at the estimate
            </h2>
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

      {/* ---------- CREW ---------- */}
      <section className="section bg-cream">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lift ring-1 ring-black/5">
            <Photo name="crew" className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <p className="eyebrow-dark">Who is in your house</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              {stats.crewCount} painters, all on payroll
            </h2>
            <p className="mt-4 leading-relaxed text-steel">
              Every painter who works on your house is a W-2 employee — background-checked, uniformed, and
              trained on our prep standard. The work is never subcontracted out, not even to hit a
              deadline.
            </p>
            <p className="mt-4 leading-relaxed text-steel">
              That matters most after the job. When a warranty call comes in, the crew lead who ran your
              project is still here, still on payroll, and is the person who comes back. That is not true
              of a subcontracted crew, which is the whole reason we do it this way.
            </p>
          </div>
        </div>
      </section>

      <WarrantyHighlight />

      <FaqAccordion faqs={sharedFaqs} heading="How we work — questions" />

      <CTASection withForm />
    </>
  );
}
