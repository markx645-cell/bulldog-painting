import { mission, values } from '@/content/site';

/** Circle-badge icons, matching the treatment used by ServiceCircles. */
function ValueIcon({ name }: { name: string }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
    className: 'h-7 w-7',
  };

  switch (name) {
    case 'prep': // scraper blade against a surface
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M6.5 17.5l7.8-7.8" />
          <path d="M12.4 5.9l3.6-3.6 5.7 5.7-3.6 3.6z" />
          <path d="M9.7 12.6l1.7 1.7" />
        </svg>
      );
    case 'doc': // itemised sheet
      return (
        <svg {...common}>
          <path d="M6 2.8h8.5L19 7.3V21a.8.8 0 0 1-.8.8H6a.8.8 0 0 1-.8-.8V3.6A.8.8 0 0 1 6 2.8z" />
          <path d="M14 2.8v5h5" />
          <path d="M8.5 12.5h7M8.5 16h7M8.5 9h3" />
        </svg>
      );
    case 'crew': // two people
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.2" />
          <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
          <path d="M16.5 5.5a3 3 0 0 1 0 5.6" />
          <path d="M18 20a6 6 0 0 0-2.6-4.9" />
        </svg>
      );
    case 'honest': // speech mark with a tick
      return (
        <svg {...common}>
          <path d="M21 12.6a7.9 7.9 0 0 1-8.4 7.9c-1 0-2-.2-2.9-.5L4 21.5l1.6-4.9A7.6 7.6 0 0 1 4.2 12 7.9 7.9 0 0 1 12.6 4 7.9 7.9 0 0 1 21 12.6z" />
          <path d="M9.2 12.3l2 2 4-4.2" />
        </svg>
      );
    case 'clean': // brush sweeping
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M8.5 21v-4.5h7V21" />
          <path d="M9.8 16.5l1.2-6.8h2l1.2 6.8" />
          <path d="M11 9.7V3.2a1 1 0 0 1 2 0v6.5" />
        </svg>
      );
    case 'shield': // warranty
      return (
        <svg {...common}>
          <path d="M12 2.5l8 3.4v6c0 4.5-3.2 8.6-8 10.5-4.8-1.9-8-6-8-10.5v-6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}

/** Alternating brand tones — enough separation to read as distinct badges
 *  without turning the grid into a rainbow. */
const tones = ['#d01d21', '#8c0d10', '#d01d21', '#110c09', '#2b221b', '#b01216'];

export default function MissionValues() {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-dark">What we hold to</p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            {mission.headline}
          </h2>
          <p className="mt-4 leading-relaxed text-steel">{mission.lead}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
          {values.map((v, i) => (
            <div
              key={v.title}
              className="rounded-2xl border border-steel-200 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:border-crimson hover:shadow-lift"
            >
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: tones[i % tones.length] }}
              >
                <ValueIcon name={v.icon} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
