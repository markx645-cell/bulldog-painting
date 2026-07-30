import { pillars, stats, site } from '@/content/site';

function PillarIcon({ name }: { name: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  };
  switch (name) {
    case 'prep':
      return (
        <svg {...common}>
          <path d="M3 20h18" />
          <path d="M6 20V9l6-5 6 5v11" />
          <path d="M9.5 13.5l2 2 4-4" />
        </svg>
      );
    case 'crew':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.2" />
          <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
          <path d="M16.5 5.5a3 3 0 0 1 0 5.6" />
          <path d="M18 20a6 6 0 0 0-2.6-4.9" />
        </svg>
      );
    case 'color':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="9" cy="9.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="14.5" cy="9" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="16" cy="14" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="10" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'star':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2l2.9 6.26 6.85.72-5.12 4.6 1.45 6.72L12 16.9l-6.08 3.4 1.45-6.72L2.25 8.98l6.85-.72z" />
        </svg>
      );
    case 'pricing':
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h4" />
        </svg>
      );
    case 'clean':
      return (
        <svg {...common}>
          <path d="M4 21h16" />
          <path d="M8 21V9l4-6 4 6v12" />
          <path d="M8 13h8" />
        </svg>
      );
    default:
      return null;
  }
}

export default function WhyUs() {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-dark">Why homeowners pick us</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Six reasons the finish lasts
          </h2>
          <p className="mt-4 text-steel">
            {stats.homesPainted} homes since {site.founded}, {stats.crewCount} full-time painters on payroll, and a
            warranty behind every one of them.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-steel-200 bg-white p-6 shadow-card transition-colors hover:border-crimson"
            >
              <span className="text-crimson">
                <PillarIcon name={p.icon} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
