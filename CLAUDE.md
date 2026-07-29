# Project Overview

Bulldog Painting — a Next.js site optimised for local SEO. Every page is
pre-rendered to static HTML at build time (`output: 'export'`).

A separate business from Bulldog Windows & Doors (`../project 2 connie`) and
Bulldog Remodel Group (`../project 3 kitchen bath remodel`) — different
services, no shared content. Project 2 is the architectural reference; the
palette is matched to Bulldog Remodel Group so the brands read as one family.

---

# Design

Premium, modern, elegant. Subtle animations, proper spacing, clear visual
hierarchy. No emoji icons. No generic gradients.

**Palette — black, red, white. Matched to bulldogremodelgroup.com so the two
Bulldog brands read as one family.** (This supersedes the earlier no-red rule.)

| Token | Hex | Use |
|-------|-----|-----|
| `crimson` | `#d01d21` | Primary accent, buttons, links, eyebrows |
| `ink` | `#110c09` | Body text and dark section backgrounds |
| `ink-700` | `#2b221b` | Raised panels on dark |
| `steel` | `#57534e` | Secondary text |
| `steel-200` | `#e7e5e4` | Borders |
| `bone` | `#fafaf9` | Page background |
| `cream` | `#f6f5f1` | Subtle panels inside white sections |

Secondary CTAs (`.btn-secondary`) are **white**, not red — they sit beside
`.btn-primary` on dark sections and two red buttons give no hierarchy.

Fonts: Sora (display), Inter (body), Fraunces (serif accent).

---

# Voice — read before writing any copy

- Start with the answer, then the context
- Concrete numbers, never rounded marketing figures
- No AI-tell phrases ("unlock", "leverage", "seamless", "world-class",
  "in today's fast-paced world"), no exclamation marks, no emojis
- **Tell people when NOT to hire us.** Every service page has a passage that
  does this — it is the single biggest credibility signal on the site and it
  must survive any edit
- Explain the mechanism, not just the claim ("shellac seals tannins, latex does
  not"), because that is what separates this from every other painter's site

---

# Content architecture

All copy lives in flat TypeScript under `/content`. No database, no CMS.

| File | Holds |
|------|-------|
| `content/site.ts` | Business facts, stats, offers, warranty, process, nav |
| `content/services.ts` | All 17 services — copy, includes, FAQs. **No pricing: the site publishes no prices** |
| `content/areas.ts` | Coverage — 8 counties, 170+ communities grouped under each |
| `content/media.ts` | **Every image path on the site**, in one registry. Currently Pexels stock in `public/photos/` — see `ATTRIBUTION.md` |
| `content/reviews.ts` | Customer reviews (currently placeholder) |
| `content/faqs.ts` | Shared FAQs appended to every service page |
| `content/projects.ts` | Before/after gallery entries |

**Coverage** lives in `content/areas.ts` — `serviceCounties` (8) and
`serviceCommunities` (170+ places grouped by county), plus `featuredPlaces` for
compact pill rows. Add a place there and it appears on `/service-areas`, on
every service page's coverage block, and in the footer.

The `/service-areas` page follows the structure of the areas page on
cincydegreeofcomfort.com (`../project 1 cincydegreeofcomfort/frontend/app/areas`):
counties grid → communities in multi-column lists by county → "don't see your
area?" CTA. Keep that shape.

Positioning is **"Cincinnati & Surrounding Areas"** (`site.serviceArea`), not
"Cincinnati and Northern Kentucky". Per-service meta descriptions still name
Northern Kentucky for long-tail search; that is intentional, not a leftover.

---

# Routing

**Master pages only — there are no location pages and no location dataset.** Do
not add `/{service}/{location}` or `/painters/{location}` routes, or a
`content/locations.ts`, without being asked. Coverage is expressed as counties
and cities on `/service-areas` and in the footer.

| Route | Source |
|-------|--------|
| `/` | `app/page.tsx` |
| `/{service}` | `app/[service]/page.tsx` — 17 pages from `services` |
| Static pages | `/contact`, `/reviews`, `/projects`, `/our-process`, `/financing`, `/service-areas` |

Static route folders take precedence over the `[service]` dynamic segment, so
`/contact` never collides with it. `dynamicParams = false` means only the
generated service slugs exist.

---

# SEO

Site-wide:
- `app/sitemap.ts` — every route, auto-derived from content
- `app/robots.ts` — allows all crawlers, points to sitemap
- Canonical URL on every page via `metadata.alternates.canonical`
- `HomeAndConstructionBusiness` schema in the root layout
- `Service` + `BreadcrumbList` + `FAQPage` schema on service pages
- Semantic HTML5, static pre-rendering, mobile viewport

**AggregateRating is gated** behind `reviewsArePlaceholder` in
`content/reviews.ts`. Never publish rating schema for reviews that are not real.

Emit `FAQPage` schema from **one** `FaqAccordion` per page (`withSchema`).

---

# Tech Stack

- TypeScript · Next.js 15 App Router · Tailwind CSS
- Static Site Generation via `output: 'export'`. `out/` is the deployable.
- Deployment: Vercel

**SSG constraints — do NOT break these:**
- No `cookies()`, `headers()`, or `searchParams` in server components
- No `dynamic = 'force-dynamic'` or `cache: 'no-store'`
- No runtime API routes
- Dynamic routes must implement `generateStaticParams`
- Metadata routes (`sitemap.ts`, `robots.ts`) need `export const dynamic = 'force-static'`

---

# Development Rules

1. **Read first** — read this file before any action
2. **Look before you create** — check `/components` and `/content` before adding files
3. **Test before you respond** — `npm run build` must pass before saying done
4. **Do exactly what is asked** — nothing more, nothing less

---

# Running

```
npm install
npm run dev      # http://localhost:3000
npm run build    # out/ is the deployable

# Re-pull stock photography (key from env — never commit it, repo is public)
PEXELS_KEY=xxxxx node scripts/fetch-photos.mjs [slot...]
```

**Do not run `npm run build` while `npm run dev` is running** — both write to
`.next` and the production build pulls the chunks out from under the dev server,
which then 500s on every route. Stop the dev server first.

---

# Testing

Before marking any task done:
- `npm run build` completes with no errors
- Every route shows `○ (Static)` or `● (SSG)` in the build log
- **View-source check** — the exported HTML in `out/` contains the real rendered
  copy and the JSON-LD blocks, not just a JS bundle
- **Voice check** — re-read the voice rules above and delete anything matching

---

# Outstanding before launch

See `README.md` → "Launch checklist". Short version: real contact details, real
reviews, real photos.
