'use client';

import { useState } from 'react';
import Photo from '@/components/Photo';
import { servicesStatement } from '@/content/site';

/**
 * Before/after wipe slider with the services statement beside it.
 * Copy lives in `servicesStatement` in content/site.ts.
 *
 * Both frames are the same 1200x1000 file size (enforced in content/media.ts) —
 * the "after" sits underneath at full width and the "before" is clipped on top,
 * so a mismatch would visibly jump the scene at the reveal edge.
 *
 * The drag control is a real <input type="range"> laid over the image at zero
 * opacity, rather than hand-rolled pointer handlers. That gets keyboard support,
 * touch, and a screen-reader-addressable value for free — and clicking anywhere
 * on the image jumps the reveal there, which is what people expect.
 */
export default function BeforeAfterFeature() {
  const [pct, setPct] = useState(50);

  return (
    <section className="section bg-cream">
      <div className="container-x">
        {/* items-stretch, not items-center: the slider has no intrinsic height of
            its own at lg (both photos are position:absolute fills), so the grid
            row stretches it to whatever the text column measures. That is what
            makes the image exactly as tall as the copy at any text length. */}
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          {/* ---- Wipe slider ----
              aspect-[560/490] is the generated pair's own ratio and carries the
              box on mobile, where there is no sibling column to stretch against
              — without it this would collapse to zero height. lg:aspect-auto
              hands height over to the grid row.

              Cropping is safe here, which is worth knowing before touching this:
              both frames are the same pixel size in the same box with the same
              object-cover, so any crop applies identically to both and the
              alignment survives. A taller-than-ratio box costs a little scene at
              the left and right edges, nothing more.

              No border — a light one read as a white frame around the photo. */}
          <div className="group relative aspect-[560/490] w-full select-none overflow-hidden rounded-2xl shadow-card lg:aspect-auto">
            {/* After: full width, underneath */}
            <Photo
              name="showcaseAfter"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />

            {/* Before: clipped from the right so the left `pct` of it shows */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
            >
              <Photo
                name="showcaseBefore"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <span className="pointer-events-none absolute left-3 top-3 rounded bg-ink/80 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-white">
              Before
            </span>
            <span className="pointer-events-none absolute right-3 top-3 rounded bg-crimson px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-white">
              After
            </span>

            {/* Divider line + knob. Purely decorative — the range input below is
                what actually moves it, so this must not eat pointer events. */}
            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(17,12,9,0.25)]"
              style={{ left: `calc(${pct}% - 1px)` }}
              aria-hidden="true"
            >
              <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lift">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-ink"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l-4 6 4 6M15 6l4 6-4 6" />
                </svg>
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={pct}
              onChange={(e) => setPct(Number(e.target.value))}
              aria-label="Reveal the before or after photo"
              className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0
                         focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-crimson focus-visible:ring-offset-2"
            />
          </div>

          {/* ---- Statement ----
              This column is what sets the row height, so the slider matches it.
              Nothing here may be given a stretched height of its own. */}
          <div>
            <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-ink sm:text-4xl">
              {servicesStatement.headline}
            </h2>
            <p className="mt-3 font-display text-base font-bold uppercase leading-snug tracking-wide text-crimson sm:text-lg">
              {servicesStatement.sub}
            </p>

            <div className="mt-6 space-y-4">
              {servicesStatement.body.map((p, i) => (
                <p key={i} className="leading-relaxed text-steel">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
