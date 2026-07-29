import { trustPoints } from '@/content/site';

function Icon({ name }: { name: string }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  };
  switch (name) {
    case 'star':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2l2.9 6.26 6.85.72-5.12 4.6 1.45 6.72L12 16.9l-6.08 3.4 1.45-6.72L2.25 8.98l6.85-.72z" />
        </svg>
      );
    case 'brush':
      return (
        <svg {...common}>
          <path d="M9.5 14.5L3 21" />
          <path d="M14 4l6 6-6.5 6.5a2.5 2.5 0 0 1-3.5 0l-2.5-2.5a2.5 2.5 0 0 1 0-3.5z" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 2l8 3.5v6c0 4.5-3.2 8.6-8 10.5-4.8-1.9-8-6-8-10.5v-6z" />
          <path d="M9 12l2 2 4-4" />
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
    default:
      return null;
  }
}

export default function TrustBar() {
  return (
    // No border: the torn edge above already separates this from the hero, and
    // a rule underneath it read as a stray straight line. pb clears the tear.
    <section className="bg-white pb-16 pt-9">
      <div className="container-x grid grid-cols-2 gap-6 lg:grid-cols-4" data-reveal-stagger>
        {trustPoints.map((p) => (
          <div key={p.label} className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0 text-pine">
              <Icon name={p.icon} />
            </span>
            <span>
              <span className="block font-display text-xl font-extrabold leading-none text-graphite">
                {p.stat}
              </span>
              <span className="mt-1 block text-sm leading-snug text-slate">{p.label}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
