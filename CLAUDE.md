# Project Overview

Bulldog Painting — a Next.js site optimised for local SEO. Every page is
pre-rendered to static HTML at build time (`output: 'export'`).

Standalone brand. It is **not** the same business as Bulldog Windows & Doors
(`../project 2 connie`) — different palette, different services, no shared
content. Project 2 is the architectural reference only.

---

# Design

Premium, modern, elegant. Subtle animations, proper spacing, clear visual
hierarchy. No emoji icons. No generic gradients.

**Palette — deliberately no red and no true black:**

| Token | Hex | Use |
|-------|-----|-----|
| `pine` | `#1B5E4B` | Primary accent, buttons, links |
| `pine-900` | `#0B261E` | Dark section backgrounds |
| `brass` | `#C08A2E` | Secondary accent, eyebrows, stats |
| `graphite` | `#22282E` | Body text (charcoal, not black) |
| `slate` | `#4A5561` | Secondary text |
| `cream` | `#FBF8F3` | Page background |

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
| `content/services.ts` | All 17 services — copy, includes, FAQs, pricing |
| `content/areas.ts` | Coverage — 8 counties, 170+ communities grouped under each |
| `content/media.ts` | **Every image path on the site**, in one registry |
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
| Static pages | `/contact`, `/reviews`, `/projects`, `/our-process`, `/financing`, `/service-areas`, `/painting-cost` |

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
node scripts/make-placeholders.mjs   # regenerate placeholder art
```

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
