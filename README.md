# Bulldog Painting

Static Next.js 15 site — 26 pre-rendered master pages covering interior,
exterior, cabinet, and commercial painting across Greater Cincinnati and
Northern Kentucky.

```
npm install
npm run dev        # http://localhost:3000
npm run build      # writes out/ — that folder is the deployable site
```

Deploy: point Vercel at the repo (framework auto-detects), or upload `out/` to
any static host.

---

## What is here

| | Count |
|---|---|
| Service pages | 17 |
| Supporting pages (`/`, `/contact`, `/painting-cost`, `/our-process`, `/projects`, `/reviews`, `/service-areas`, `/financing`, 404) | 9 |
| **Total routes** | **26** |

**Master pages only.** No per-location pages. Coverage is the list in
`content/areas.ts` — 8 counties and 170+ communities — which renders on
`/service-areas`, on every service page, and in the footer.

Everything is driven by four content files — `content/site.ts`,
`content/services.ts`, `content/areas.ts`, `content/media.ts`. Edit those and
the pages, nav, footer, and sitemap all update together.

Read `CLAUDE.md` for architecture and voice rules.

---

## ⚠ Launch checklist

The site is complete and builds clean, but three things are placeholder and
**must** be replaced before it goes live.

### 1. Contact details — `content/site.ts`

The phone number is in the `555-01xx` range reserved for fiction, so it is
obviously fake rather than someone else's line. Replace:

- `phone` and `phoneHref`
- `email`
- `url` (currently `https://bulldogpainting.com`)
- `address` — street, city, state, zip
- `founded`, `yearsInBusiness`, and everything in `stats` if the real numbers differ

Everything on the site reads from this one file.

### 2. Reviews — `content/reviews.ts`

Every entry is labelled placeholder text, not a real review. Publishing invented
reviews as genuine is an FTC problem, so:

1. Replace all six entries with real reviews from Google / Facebook / BBB / Angi
2. Update `stats.googleRating` and `stats.reviewsLabel` in `content/site.ts` to
   match what those profiles actually show
3. Set `reviewsArePlaceholder = false`

That last flag is what unlocks the `AggregateRating` schema in the page head.
Until it is flipped, the site deliberately publishes no rating markup, and the
`/reviews` page shows a build note (which disappears with the flag).

### 3. Photography — `content/media.ts`

The site currently runs on **Pexels stock photography** (41 images in
`public/photos/`, credits in `public/photos/ATTRIBUTION.md`). It looks finished,
but stock photos are pictures of other people's work.

**This matters most for the projects gallery.** `/projects` presents nine
before/after pairs as Bulldog's own jobs. They are stock images of unrelated
rooms and houses. Showing them as your portfolio is a false-advertising problem,
not just a cosmetic one — swap those nine pairs for real job photos, or pull the
page, before anyone is invited to look at the site.

Hero and service images are lower-risk: they read as illustrative rather than
as claims about specific work. Still worth replacing when you have real photos.

To swap one in: drop the file in `public/photos/`, change that entry's `src` in
`content/media.ts`. Nothing else on the site references image paths. Each entry
has a `note` describing the shot to take — hand that list to whoever is shooting.

To re-pull stock (different search terms, or a slot that missed):

```
PEXELS_KEY=xxxxx node scripts/fetch-photos.mjs            # all slots
PEXELS_KEY=xxxxx node scripts/fetch-photos.mjs homeHero   # one slot
```

The key is read from the environment and is deliberately not stored in the repo,
which is public.

### 4. Also worth doing

- **Logo** — `components/Logo.tsx` draws an inline SVG mark (bulldog head over a
  paint roller). Replace with the real logo when it exists; `public/logo.svg`
  holds a standalone copy for OG/favicon use.
- **OG images** — no `/og/*.png` yet. Open Graph metadata is set but has no
  image, so link previews will be text-only until 1200×630 images are added.
- **Form backend** — `components/QuoteForm.tsx` submits via `mailto:` so it
  works on a plain static host. To wire GoHighLevel (or Formspree, Netlify
  Forms, etc.), replace `handleSubmit` with a `fetch()` to your endpoint.
  Nothing else in the component changes.
- **Pricing** — the ranges in `content/services.ts` and on `/painting-cost` are
  written to be plausible for this market. Confirm them against real job costs
  before publishing, since they are the most quotable numbers on the site.
