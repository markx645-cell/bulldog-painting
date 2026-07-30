# Bulldog Painting — single-page marketing site

Standalone static page. **Separate from the Next.js site in the parent folder** —
nothing here shares code or content with it.

```
landing/
  index.html      all markup, one file
  styles.css      all styling, custom properties at the top
  script.js       vanilla JS, no dependencies
  serve.mjs       tiny local server
  assets/         logo + placeholder images
```

Run it:

```
node landing/serve.mjs 5173     # http://localhost:5173
```

No build step. It is plain HTML/CSS/JS — drop the folder on any static host.

---

## What to edit

| Want to change | Where |
|---|---|
| **Reviews** | `index.html` → the `EDIT REVIEWS HERE` block. Replace `{{REVIEW_TEXT}}` / `{{REVIEWER_NAME}}`, set the two initials in `.avatar`. Copy a whole `<article class="review">` to add one — the carousel counts them automatically. |
| **Colours** | `styles.css` → `:root` custom properties. |
| **Process step copy** | `script.js` → the `STEPS` array (same order as the buttons). |
| **Service cards** | `index.html` → the six `<article class="card">` blocks. |
| **Service areas** | `index.html` → the `<ul class="pills">` list. |
| **FAQ** | `index.html` → the `.faq-item` blocks. |
| **Phone number** | Search `5136573750` — it appears in several CTAs. |

**No third-party review widget is used.** No Elfsight, Google, Facebook or
similar embed appears anywhere; the reviews are hand-written HTML by design.

---

## Placeholders to replace before launch

- `assets/placeholder.png` — stands in for the bulldog artwork in the hero and
  beside the process heading.
- `assets/service-1…6.png`, `assets/hero.png`, `assets/areas.png` — generated
  boxes, not photographs.
- `{{REVIEW_TEXT}}` / `{{REVIEWER_NAME}}` — every review is a placeholder.
- **Phone number** `(513) 657-3750` — placeholder.
- **BBB A+ and Google 5-Star badges** in the welcome card. These assert third-party
  ratings. Delete them unless both are real.

`assets/logo.png` is the real brand mark, not a placeholder.

---

## Verified

Checked in headless Chromium at 1440 / 1180 / 1024 / 900 / 768 / 390 / 320:

- no horizontal scrolling at any width (`scrollWidth === clientWidth` throughout)
- zero console errors at any width
- services grid 3 → 2 → 1 · features 4 → 2 → 1 · FAQ 2 → 1 · footer 3 → 2 → 1
- hamburger appears at exactly ≤900px, desktop nav hides
- mobile menu opens, its dropdowns expand, its own quote button appears
- process steps switch on click; FAQ accordion opens; carousel pages and
  disables its arrows at each end
- in-page anchors land 100px down, clearing the 84px fixed header

---

## Notes on the brief

Two things in the brief contradicted each other; both were resolved toward the
section-by-section spec, which was far more detailed:

1. **Phone number** — the brand block gave `(513) 657-3750` and the header spec
   gave `(513) 555-0123`. Used the brand-block number throughout.
2. **Light vs dark theme** — the brief said "default theme is light", but the
   palette lists black as the page background and nearly every section is
   specified dark (hero, process, reviews, why-choose, areas, FAQ, footer). Built
   dark-dominant to match the sections and the "rugged, bold, masculine" vibe.
   Switching to light is mostly `--black` / `--charcoal` swaps in `:root` plus
   flipping the body text colour.
