import Link from 'next/link';

/**
 * Circular category badges — quick visual entry points to the main service
 * lines, sitting above the fuller ServicesGrid.
 *
 * The reference layout for this used six rainbow-coloured circles. The brand
 * rules out red and generic multi-hue palettes, so the distinction here comes
 * from a tonal set inside the pine/brass range instead. Same rhythm, no circus.
 *
 * Every tile links to something that actually exists — no "coming soon" entries.
 */

type Circle = {
  label: string;
  href: string;
  color: string;
  icon: 'interior' | 'exterior' | 'cabinets' | 'commercial' | 'floors' | 'color';
};

const circles: Circle[] = [
  { label: 'Interior Painting', href: '/interior-painting', color: '#d01d21', icon: 'interior' },
  { label: 'Exterior Painting', href: '/exterior-painting', color: '#8c0d10', icon: 'exterior' },
  { label: 'Cabinet Refinishing', href: '/cabinet-painting', color: '#d01d21', icon: 'cabinets' },
  { label: 'Commercial Painting', href: '/commercial-painting', color: '#110c09', icon: 'commercial' },
  { label: 'Floor Coatings', href: '/garage-floor-epoxy', color: '#2b221b', icon: 'floors' },
];

function Icon({ name }: { name: Circle['icon'] }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
    className: 'h-9 w-9 sm:h-10 sm:w-10',
  };

  switch (name) {
    case 'interior': // room with a wall being rolled
      return (
        <svg {...common}>
          <path d="M3 21V9.5L12 3l9 6.5V21" />
          <path d="M3 21h18" />
          <rect x="9" y="12.5" width="6" height="5.5" rx="0.6" />
        </svg>
      );
    case 'exterior': // house elevation with siding courses
      return (
        <svg {...common}>
          <path d="M2.5 10.5L12 3l9.5 7.5" />
          <path d="M5 12v9h14v-9" />
          <path d="M5 15h14M5 18h14" />
          <path d="M2.5 21h19" />
        </svg>
      );
    case 'cabinets': // base cabinet, two doors and pulls
      return (
        <svg {...common}>
          <rect x="3.5" y="4" width="17" height="16" rx="1.4" />
          <path d="M12 4v16" />
          <path d="M9.6 11.2v1.6M14.4 11.2v1.6" />
          <path d="M3.5 8h17" />
        </svg>
      );
    case 'commercial': // office block
      return (
        <svg {...common}>
          <path d="M4 21V4.8a.8.8 0 0 1 .8-.8h9.4a.8.8 0 0 1 .8.8V21" />
          <path d="M15 10h4.2a.8.8 0 0 1 .8.8V21" />
          <path d="M2.5 21h19" />
          <path d="M7 8h1.6M11 8h1.6M7 12h1.6M11 12h1.6M7 16h1.6M11 16h1.6M17.4 14h.6M17.4 17.5h.6" />
        </svg>
      );
    case 'floors': // floor plane in perspective
      return (
        <svg {...common}>
          <path d="M2.5 19.5L8 7h8l5.5 12.5z" />
          <path d="M6.2 13.5h11.6" />
          <path d="M10.6 7v12.5M13.4 7v12.5" />
        </svg>
      );
    case 'color': // fanned swatch deck
      return (
        <svg {...common}>
          <path d="M11.4 20.6L4.2 13.4a1.4 1.4 0 0 1 0-2l7.2-7.2a1.4 1.4 0 0 1 2 0l1.4 1.4" />
          <path d="M14.8 5.6l2.6 2.6a1.4 1.4 0 0 1 0 2l-6 6" />
          <path d="M17.4 11.6l2.4 2.4a1.4 1.4 0 0 1 0 2l-3.4 3.4a1.4 1.4 0 0 1-2 0l-3-3" />
          <circle cx="9" cy="9" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServiceCircles() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="container-x">
        <ul
          className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 lg:grid-cols-5"
          data-reveal-stagger
        >
          {circles.map((c) => (
            <li key={c.label}>
              <Link
                href={c.href}
                className="group flex flex-col items-center text-center focus:outline-none"
              >
                <span
                  className="flex h-[86px] w-[86px] items-center justify-center rounded-full text-white shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lift group-focus-visible:ring-2 group-focus-visible:ring-crimson group-focus-visible:ring-offset-2 sm:h-[96px] sm:w-[96px]"
                  style={{ backgroundColor: c.color }}
                >
                  <Icon name={c.icon} />
                </span>
                <span className="mt-3.5 max-w-[9.5rem] font-display text-[11px] font-bold uppercase leading-tight tracking-[0.09em] text-ink transition-colors group-hover:text-crimson sm:text-xs">
                  {c.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
