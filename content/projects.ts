import { galleryPairs } from './media';

// Project gallery entries. Photos come from content/media.ts (galleryPairs) —
// swap the placeholder paths there for real before/after job photos.
//
// The copy below describes the kind of job each slot should hold. Update the
// text to match the actual project once the photos are in.

export type Project = {
  slug: string;
  title: string;
  location: string;
  service: string;
  /** Service slug this project links back to */
  serviceSlug: string;
  summary: string;
  before: string;
  after: string;
};

const drafts = [
  {
    slug: 'hyde-park-whole-house-interior',
    title: 'Plaster walls, original trim, four bedrooms',
    location: 'Hyde Park, OH',
    service: 'Interior Painting',
    serviceSlug: 'interior-painting',
    summary:
      'A 1924 center-hall colonial with hairline cracking across most of the upstairs plaster. Mesh-and-set on the moving cracks, flat on the walls, and the original oil-based trim bonding-primed before a waterborne enamel went over it.',
  },
  {
    slug: 'anderson-township-exterior',
    title: 'Chalked aluminum siding brought back',
    location: 'Anderson Township, OH',
    service: 'Exterior Painting',
    serviceSlug: 'exterior-painting',
    summary:
      'Aluminum siding chalking badly enough to mark your hand. Washed, bonding-primed, and two-coated in a warm grey, with the wood fascia and garage door done in a deeper accent.',
  },
  {
    slug: 'oakley-kitchen-cabinets',
    title: 'Oak kitchen, grain-filled and sprayed',
    location: 'Oakley, OH',
    service: 'Cabinet Painting',
    serviceSlug: 'cabinet-painting',
    summary:
      'Thirty-one doors of red oak, grain-filled so the finish reads smooth rather than textured, sprayed off-site in a soft green. Boxes sprayed in place behind full containment.',
  },
  {
    slug: 'covington-historic-brick',
    title: 'Italianate brick, repointed and limewashed',
    location: 'Covington, KY',
    service: 'Brick & Masonry Painting',
    serviceSlug: 'brick-painting',
    summary:
      'Soft 1880s brick with failing lime mortar. Repointed first, then limewashed rather than painted so the masonry can still breathe and the texture reads through.',
  },
  {
    slug: 'mason-builder-grade-refresh',
    title: 'Builder-grade flat replaced with washable satin',
    location: 'Mason, OH',
    service: 'Interior Painting',
    serviceSlug: 'interior-painting',
    summary:
      'A six-year-old house whose hallway walls burnished every time they were wiped. Nail pops reset, seams patched, and the whole first floor put into a proper eggshell.',
  },
  {
    slug: 'loveland-deck-restoration',
    title: 'Grey deck stripped back and stained',
    location: 'Loveland, OH',
    service: 'Deck Staining',
    serviceSlug: 'deck-staining',
    summary:
      'A failing solid stain peeling under tree cover. Chemically stripped, sanded, brightened, and finished in a semi-transparent penetrating stain that will fade instead of peeling.',
  },
  {
    slug: 'newport-east-row-victorian',
    title: 'Four-color Queen Anne exterior',
    location: 'Newport, KY',
    service: 'Exterior Painting',
    serviceSlug: 'exterior-painting',
    summary:
      'An East Row Victorian with delaminating paint down to bare wood in places. Five weeks, most of it lead-safe scraping and priming, then a four-color period scheme across body, trim, sash, and porch.',
  },
  {
    slug: 'blue-ash-office-suite',
    title: 'Office suite repainted overnight',
    location: 'Blue Ash, OH',
    service: 'Commercial Painting',
    serviceSlug: 'commercial-painting',
    summary:
      'Eleven thousand square feet of occupied office, painted across four overnight shifts in zero-VOC product. Staff came back each morning to finished space and no odor.',
  },
  {
    slug: 'fort-mitchell-garage-floor',
    title: 'Diamond-ground garage floor in flake epoxy',
    location: 'Fort Mitchell, KY',
    service: 'Garage Floor Epoxy',
    serviceSlug: 'garage-floor-epoxy',
    summary:
      'A previous coating that lifted with the hot tires, ground off entirely. New floor diamond-ground to profile, base-coated, flaked to refusal, and topped with a polyaspartic clear.',
  },
];

export const projects: Project[] = drafts.map((d, i) => ({
  ...d,
  before: galleryPairs[i].before,
  after: galleryPairs[i].after,
}));

export const projectBySlug = new Map(projects.map((p) => [p.slug, p]));
