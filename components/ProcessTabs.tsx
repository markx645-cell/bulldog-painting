'use client';

import { useRef, useState } from 'react';
import { process, processIntro } from '@/content/site';

/** Step icons, drawn to match the treatment in MissionValues and ServiceCircles. */
function StepIcon({ name }: { name: string }) {
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
    case 'doc': // itemised estimate
      return (
        <svg {...common}>
          <path d="M6 2.8h8.5L19 7.3V21a.8.8 0 0 1-.8.8H6a.8.8 0 0 1-.8-.8V3.6A.8.8 0 0 1 6 2.8z" />
          <path d="M14 2.8v5h5" />
          <path d="M8.5 12.5h7M8.5 16h7M8.5 9h3" />
        </svg>
      );
    case 'prep': // scraper blade against a surface
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M6.5 17.5l7.8-7.8" />
          <path d="M12.4 5.9l3.6-3.6 5.7 5.7-3.6 3.6z" />
          <path d="M9.7 12.6l1.7 1.7" />
        </svg>
      );
    case 'brush': // roller on a wall
      return (
        <svg {...common}>
          <rect x="3.2" y="3.2" width="12.6" height="5.2" rx="1" />
          <path d="M15.8 5.8h3a2 2 0 0 1 2 2v2.6a2 2 0 0 1-2 2h-6.3a2 2 0 0 0-2 2v1.4" />
          <path d="M10.5 15.8h0a1.6 1.6 0 0 1 1.6 1.6v3.1a1 1 0 0 1-1 1h-1.2a1 1 0 0 1-1-1v-3.1a1.6 1.6 0 0 1 1.6-1.6z" />
        </svg>
      );
    case 'chat': // speech bubble
      return (
        <svg {...common}>
          <path d="M21 12.3a7.9 7.9 0 0 1-8.4 7.9c-1 0-2-.2-2.9-.5L4 21.2l1.6-4.9A7.6 7.6 0 0 1 4.2 11.7 7.9 7.9 0 0 1 12.6 3.7 7.9 7.9 0 0 1 21 12.3z" />
          <path d="M9.3 10.6h6.2M9.3 14h4" />
        </svg>
      );
    case 'shield': // workmanship warranty
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

/**
 * The five-step process as clickable tabs, with one step's detail shown at a
 * time. Reads `process` in content/site.ts — the same data ProcessSteps renders
 * as a grid on service pages, so the two can never drift apart.
 *
 * Implemented as a real ARIA tablist: arrow keys, Home/End, and roving tabindex,
 * so it is operable without a mouse. Panels for inactive steps are removed
 * rather than hidden with CSS, which keeps their text out of the accessibility
 * tree and out of the page's readable copy twice over.
 */
export default function ProcessTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (i: number) => {
    const next = (i + process.length) % process.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        focusTab(active + 1);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        focusTab(active - 1);
        break;
      case 'Home':
        e.preventDefault();
        focusTab(0);
        break;
      case 'End':
        e.preventDefault();
        focusTab(process.length - 1);
        break;
    }
  };

  const step = process[active];

  return (
    <section className="section relative overflow-hidden bg-ink">
      <div className="paint-wash absolute inset-0" aria-hidden="true" />

      <div className="container-x relative">
        {/* One heading. The eyebrow and the crimson second line that used to sit
            here made three heading-weight lines before any body copy. */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tight text-white sm:text-4xl">
            {processIntro.headline}
          </h2>
          <p className="mt-5 leading-relaxed text-steel-300">{processIntro.body}</p>
        </div>

        {/* Tabs. Five across on desktop; two-up on phones, where five would leave
            each label about six characters wide. */}
        <div
          role="tablist"
          aria-label="Our five-step process"
          onKeyDown={onKeyDown}
          className="mt-10 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-5"
        >
          {process.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.step}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`process-tab-${s.step}`}
                aria-selected={selected}
                aria-controls={`process-panel-${s.step}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`flex flex-col items-center gap-2.5 rounded-lg px-3 py-5 text-center transition-colors
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 focus-visible:ring-offset-ink
                  ${
                    selected
                      ? 'bg-white text-ink'
                      : 'bg-crimson text-white hover:bg-crimson-600'
                  }`}
              >
                {/* Icon colour has to invert with the tab. A crimson icon on a
                    crimson tab is invisible. */}
                <span className={selected ? 'text-crimson' : 'text-white'}>
                  <StepIcon name={s.icon} />
                </span>
                <span className="font-display text-[11px] font-bold uppercase leading-tight tracking-wide sm:text-xs">
                  {Number(s.step)}. {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail panel for the selected step. */}
        <div
          role="tabpanel"
          id={`process-panel-${step.step}`}
          aria-labelledby={`process-tab-${step.step}`}
          tabIndex={0}
          className="mt-1.5 rounded-lg bg-crimson p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:p-8"
        >
          <h3 className="font-display text-lg font-bold text-white">
            {Number(step.step)}. {step.title}
          </h3>
          {/* White, not steel-300. steel-300 on crimson is about 3.2:1, which
              fails AA for body text; white is 4.7:1. */}
          <p className="mt-3 max-w-3xl leading-relaxed text-white">{step.body}</p>
        </div>
      </div>
    </section>
  );
}
