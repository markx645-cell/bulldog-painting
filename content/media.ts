// ---------------------------------------------------------------------------
// CENTRAL IMAGE REGISTRY
// ---------------------------------------------------------------------------
// Every <Image> on the site resolves its src through this file. Nothing else
// hardcodes an image path.
//
// Entries currently point at Pexels stock in /public/photos/, pulled by
// `scripts/fetch-photos.mjs` (see public/photos/ATTRIBUTION.md for credits).
//
// ⚠ Stock photos are other people's work. They are a stand-in so the site reads
// as finished — they are NOT a portfolio. Replace them with real Bulldog job
// photos before this is presented as the company's own work. The `note` on each
// entry describes the shot to take; hand this list to whoever is shooting.
//
// To swap one in: drop the photo in /public/photos/, change the `src` here.
// Nothing else on the site needs to be touched.

export type MediaEntry = {
  src: string;
  alt: string;
  note: string;
};

const P = (name: string) => `/photos/${name}.jpg`;

export const media = {
  // ---- Brand ----
  // Real logo. Source artwork is LOGO.png at the repo root; this is the
  // trimmed, web-sized copy. Regenerate both this and the icons from the
  // source if the logo is ever revised.
  logo: {
    src: '/logo.png',
    alt: 'Bulldog Painting — Interior & Exterior',
    note: 'Supplied brand lockup. Wordmark and strapline are inside the artwork.',
  },

  // Header band texture. Referenced from globals.css (.hdr-band), not through
  // <Photo>, because it is a CSS background — but it is registered here so the
  // slot is visible alongside every other image on the site.
  headerBg: {
    src: P('header-bg'),
    alt: '',
    note: 'Wide brushed-paint texture, ~2400x340. Must be evenly toned — white nav text sits on it.',
  },

  // ---- Home ----
  homeHero: {
    src: P('home-hero'),
    alt: 'A Bulldog Painting crew lead cutting in a clean line at a living-room ceiling',
    note: 'Landscape 3:2. Painter in uniform cutting in at a ceiling line. Bright, natural light.',
  },
  crew: {
    src: P('crew'),
    alt: 'The Bulldog Painting crew in front of a company van',
    note: 'Landscape 16:9. Full crew, uniformed, in front of a branded van. Shoot on an overcast day.',
  },
  colorConsult: {
    src: P('color-consult'),
    alt: 'A color consultant fanning a paint deck against a homeowner’s wall',
    note: 'Landscape 4:3. Hands holding a fan deck against a wall with two brushed-out samples beside it.',
  },
  serviceAreaMap: {
    src: P('service-area-map'),
    alt: 'Bulldog Painting service area across Cincinnati and the surrounding areas',
    note: 'Map graphic, 16:9, showing the counties listed in content/areas.ts.',
  },
  processHero: {
    src: P('process-hero'),
    alt: 'Floors papered and furniture wrapped before painting begins',
    note: 'Landscape 3:2. A prepped room — masked trim, papered floor, wrapped furniture. No people.',
  },

  // ---- Service heroes ----
  interior: {
    src: P('interior-painting'),
    alt: 'Freshly painted interior living room with clean trim lines',
    note: 'Landscape 3:2. Finished living room, walls and trim in contrasting colors, styled but not staged.',
  },
  exterior: {
    src: P('exterior-painting'),
    alt: 'A repainted two-story home exterior with fresh trim',
    note: 'Landscape 3:2. Full house elevation shot, late-afternoon light, no cars in frame.',
  },
  cabinets: {
    src: P('cabinet-painting'),
    alt: 'Kitchen cabinets refinished in a soft green with brass hardware',
    note: 'Landscape 3:2. Full kitchen showing sprayed cabinet doors, hardware reinstalled.',
  },
  commercial: {
    src: P('commercial-painting'),
    alt: 'A commercial office corridor being repainted after hours',
    note: 'Landscape 3:2. Office or retail interior mid-repaint, lift or ladder visible.',
  },
  trimDoors: {
    src: P('trim-and-door-painting'),
    alt: 'Hand-brushed interior trim and a painted six-panel door',
    note: 'Detail shot 4:3. Crisp trim line where wall meets baseboard.',
  },
  ceilings: {
    src: P('ceiling-painting'),
    alt: 'A freshly sprayed flat white ceiling',
    note: 'Upward 4:3 shot of a finished ceiling with a clean wall junction.',
  },
  popcorn: {
    src: P('popcorn-ceiling-removal'),
    alt: 'A ceiling mid-way through popcorn texture removal',
    note: 'Half-scraped ceiling showing before and after in one frame.',
  },
  drywall: {
    src: P('drywall-repair'),
    alt: 'A drywall patch being feathered smooth before primer',
    note: 'Detail shot of a taping knife feathering compound over a patch.',
  },
  wallpaper: {
    src: P('wallpaper-removal'),
    alt: 'Wallpaper being steamed and stripped from a dining room wall',
    note: 'Wall half-stripped, steamer visible.',
  },
  basement: {
    src: P('basement-painting'),
    alt: 'A finished basement with painted walls and a coated floor',
    note: 'Wide 3:2 of a finished basement, warm lighting.',
  },
  siding: {
    src: P('siding-painting'),
    alt: 'Freshly painted lap siding on a Cincinnati home',
    note: 'Detail 4:3 of clean lap siding with a crisp corner board.',
  },
  brick: {
    src: P('brick-painting'),
    alt: 'A brick home painted in a warm limewash tone',
    note: 'Elevation shot of painted or limewashed brick.',
  },
  deck: {
    src: P('deck-staining'),
    alt: 'A cedar deck freshly stained and sealed',
    note: 'Low-angle 3:2 along the deck boards, wet-look finish.',
  },
  fence: {
    src: P('fence-painting'),
    alt: 'A stained privacy fence running along a back yard',
    note: 'Fence line receding into frame, 16:9.',
  },
  frontDoor: {
    src: P('front-door-painting'),
    alt: 'A repainted front door in deep green with polished hardware',
    note: 'Straight-on 4:5 of a finished front door and surround.',
  },
  epoxy: {
    src: P('garage-floor-epoxy'),
    alt: 'A garage floor finished in flake epoxy coating',
    note: 'Wide 3:2 of a finished garage floor, door open, even light.',
  },
  pressureWash: {
    src: P('pressure-washing'),
    alt: 'Siding being pressure washed before painting',
    note: 'Action shot, clean stripe visible against dirty siding.',
  },
  painterDay: {
    src: P('painter-for-a-day'),
    alt: 'A painter cutting in trim during a single-day booking',
    note: 'Landscape 3:2. One painter working alone in a furnished room — should read as a small job, not a full crew.',
  },
  cost: {
    src: P('painting-cost'),
    alt: 'An itemized painting estimate on a clipboard',
    note: 'Overhead 4:3 of a written estimate, paint deck beside it.',
  },
} as const satisfies Record<string, MediaEntry>;

export type MediaKey = keyof typeof media;

// ---- Project gallery ----
// Nine before/after pairs. Replace both paths per pair with real job photos.
export const galleryPairs = Array.from({ length: 9 }, (_, i) => ({
  before: P(`ba-${i + 1}-before`),
  after: P(`ba-${i + 1}-after`),
}));
