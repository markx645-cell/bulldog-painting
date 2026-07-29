import Image from 'next/image';
import Link from 'next/link';
import { projects, type Project } from '@/content/projects';

function Pair({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-card">
      <div className="grid grid-cols-2">
        {(['before', 'after'] as const).map((phase) => (
          <div key={phase} className="relative aspect-[4/3]">
            <Image
              src={project[phase]}
              alt={`${project.title} — ${phase}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
            <span
              className={`absolute left-2 top-2 rounded px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-widest ${
                phase === 'before' ? 'bg-ink/85 text-white' : 'bg-crimson text-white'
              }`}
            >
              {phase}
            </span>
          </div>
        ))}
      </div>
      <div className="p-6">
        <Link
          href={`/${project.serviceSlug}`}
          className="font-display text-[11px] font-bold uppercase tracking-widest text-crimson hover:underline"
        >
          {project.service}
        </Link>
        <h3 className="mt-2 font-display text-lg font-bold text-ink">{project.title}</h3>
        <p className="mt-1 text-xs uppercase tracking-wide text-steel">{project.location}</p>
        <p className="mt-3 text-sm leading-relaxed text-steel">{project.summary}</p>
      </div>
    </article>
  );
}

export default function BeforeAfterGallery({
  limit,
  heading = 'Before and after',
  lead = 'Nine jobs from the last couple of seasons, with what actually made the difference on each one.',
  moreHref,
}: {
  limit?: number;
  heading?: string;
  lead?: string;
  moreHref?: string;
}) {
  const shown = limit ? projects.slice(0, limit) : projects;
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-dark">Our work</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-steel">{lead}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2" data-reveal-stagger>
          {shown.map((p) => (
            <Pair key={p.slug} project={p} />
          ))}
        </div>

        {moreHref && (
          <div className="mt-10 text-center">
            <Link href={moreHref} className="btn-ghost">
              See More Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
