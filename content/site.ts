// Canonical business facts for Bulldog Painting.
// Single source of truth — every page pulls from here.
//
// ⚠ PLACEHOLDER CONTACT DETAILS — replace before launch.
// The phone number below is in the 555-01xx range reserved for fiction, so it
// is obviously fake rather than someone else's line. Swap `phone`, `phoneHref`,
// `email`, `url`, and `address` for the real ones and every page updates.

export const site = {
  name: 'Bulldog Painting',
  shortName: 'Bulldog Painting',
  // No tagline. The logo artwork carries none either — the strapline was
  // removed from it deliberately. Do not reintroduce one in only one place.
  founded: 2001,
  yearsInBusiness: '25+',
  url: 'https://bulldogpainting.com',
  phone: '(513) 555-0142', // TODO: real number
  phoneHref: 'tel:+15135550142', // TODO: real number
  email: 'hello@bulldogpainting.com', // TODO: real inbox
  address: {
    street: '1820 Madison Road', // TODO: real address
    city: 'Cincinnati',
    state: 'OH',
    zip: '45206',
  },
  serviceArea: 'Cincinnati & Surrounding Areas',
  hours: 'Mon–Fri 7am–6pm · Sat 9am–2pm',
} as const;

export const stats = {
  homesPainted: '3,200+',
  googleRating: '4.9',
  reviewsLabel: 'over 400 reviews',
  gallonsPerYear: '9,000',
  crewCount: '11',
  ratings: [
    { platform: 'Google', score: '4.9' },
    { platform: 'BBB', score: 'A+' },
    { platform: 'Facebook', score: '5.0' },
    { platform: 'Angi', score: '4.8' },
  ],
} as const;

export const offer = {
  headline: 'Free Color Consultation',
  sub: 'With every interior or exterior estimate.',
  fineprint:
    'One hour with a certified color consultant, plus sampled swatches on your own walls before you commit.',
} as const;

export const trustPoints = [
  { icon: 'star', stat: '4.9★', label: 'Across 400+ homeowner reviews' },
  { icon: 'brush', stat: '3,200+', label: `Homes painted since ${site.founded}` },
  { icon: 'shield', stat: '5-Year', label: 'Written workmanship warranty' },
  { icon: 'crew', stat: 'W-2 Crews', label: 'Employees, never subcontracted out' },
] as const;

// Current offers. Keep this honest — these are the only two we run.
export const offers = [
  {
    tag: 'No charge',
    headline: 'Free Color Consultation',
    body: 'An hour with a certified color consultant, plus large sampled swatches brushed on your own walls so you can live with the color before you commit to it.',
    cta: 'Book a Consultation',
    href: '/contact',
  },
  {
    tag: 'Financing',
    headline: 'Pay Over 12 Months, Interest-Free',
    body: 'Whole-home interior and exterior projects can be split across a year with no interest on approved credit. Soft-pull application, answer in minutes.',
    cta: 'See Financing',
    href: '/financing',
  },
] as const;

// Certifications & affiliations. Every badge is backed by real content on the site.
export const certifications = [
  'BBB A+ Accredited',
  'EPA Lead-Safe Certified',
  'Licensed & Insured',
  'Low-VOC & Zero-VOC Options',
  '5-Year Workmanship Warranty',
  `Family-Owned Since ${site.founded}`,
] as const;

// "What happens at your free estimate."
export const estimateSteps = [
  {
    step: '01',
    title: 'We walk it with you',
    body: 'Room by room, or all the way around the house. We measure, check the substrate, and point out the repairs that have to happen before a brush touches anything.',
  },
  {
    step: '02',
    title: 'You see the color first',
    body: 'Our color consultant brings decks and brushes large samples on your actual walls. North light and south light do different things to the same color — you get to see which.',
  },
  {
    step: '03',
    title: 'A written, itemized number',
    body: 'Prep, primer, product, coats, and labor broken out line by line. No "today only" pricing, no verbal quotes, no surprise change orders.',
  },
] as const;

// Warranty highlight.
export const warranty = {
  headline: 'The Bulldog 5-Year Warranty',
  lead: 'Most painters warranty the paint. The manufacturer already does that. We warranty our work — the part that actually fails.',
  points: [
    {
      title: '5 years on workmanship',
      body: 'Peeling, blistering, or flaking traced to our prep or application gets fixed at our cost. In writing, handed to you on the last day.',
    },
    {
      title: 'Prep is the warranty',
      body: 'Nine out of ten paint failures are prep failures. We scrape, sand, wash, caulk, and prime to spec — which is why we are willing to put five years behind it.',
    },
    {
      title: 'The crew that painted it comes back',
      body: 'Our painters are W-2 employees. The same crew lead who ran your job is the one who returns if something needs attention.',
    },
  ],
} as const;

// Financing detail band.
export const financing = {
  headline: 'Spread it across the year, not the month',
  lead:
    'A whole-house exterior or a full interior repaint is a real number. Our financing menu is built so it does not have to come out of savings all at once.',
  points: [
    { big: '0%', small: 'Interest for 12 months on approved credit' },
    { big: '$40,000', small: 'Available for larger whole-home projects' },
    { big: 'Soft pull', small: 'Applying will not affect your credit score' },
    { big: '84 mo', small: 'Longer terms available on bigger scopes' },
  ],
} as const;

// Value pillars.
export const pillars = [
  {
    icon: 'prep',
    title: 'Prep Is 70% of the Job',
    body: 'Wash, scrape, sand, fill, caulk, spot-prime. It is the unglamorous two days that decide whether the finish lasts five years or fifteen.',
  },
  {
    icon: 'crew',
    title: 'W-2 Crews, Never Subcontracted Out',
    body: 'Eleven full-time painters on payroll. Background-checked, uniformed, and the same faces on your job from day one to walkthrough.',
  },
  {
    icon: 'color',
    title: 'Free Color Consultation',
    body: 'A certified consultant, real swatches on your real walls, and an honest opinion about the color you are leaning toward.',
  },
  {
    icon: 'star',
    title: '4.9 Stars, 400+ Reviews',
    body: 'Twenty-five years of work across Greater Cincinnati and Northern Kentucky, and the review history to look through before you call.',
  },
  {
    icon: 'pricing',
    title: 'Itemized, Written Pricing',
    body: 'Prep, product, coats, and labor broken out separately. You can see exactly what you are paying for and what you could cut.',
  },
  {
    icon: 'clean',
    title: 'You Get Your House Back',
    body: 'Floors papered, furniture wrapped, edges cut clean, and a full cleanup every single evening. Not just on the last day.',
  },
] as const;

// "The Bulldog Way" — 4-step process.
export const process = [
  {
    step: '01',
    title: 'Free Estimate & Color Help',
    body: 'We walk the job with you, measure, flag the repairs, and sample colors on your own walls. You leave with a written, itemized number.',
  },
  {
    step: '02',
    title: 'Protect & Prep',
    body: 'Furniture wrapped, floors papered, landscaping covered. Then the real work: wash, scrape, sand, fill, caulk, and prime every bare spot.',
  },
  {
    step: '03',
    title: 'Two Coats, Cut Clean',
    body: 'Premium product, two full coats unless we tell you otherwise in writing, and hand-cut lines at every ceiling, trim, and transition.',
  },
  {
    step: '04',
    title: 'Walkthrough & Warranty',
    body: 'We walk the whole job with you, punch-list anything you spot, and hand over the written five-year workmanship warranty.',
  },
] as const;

// Homepage "about" block.
export const aboutHome = {
  eyebrow: 'Who you are hiring',
  headline: `Cincinnati painters since ${site.founded}`,
  body: [
    'Bulldog Painting is a family-owned crew working out of Cincinnati, covering both sides of the river and seven counties around it. Twenty-five years, 3,200 homes, and eleven painters who are on our payroll rather than picked up for the week.',
    'We are not the cheapest quote you will get, and we will tell you plainly when the cheapest quote is the right one — a rental between tenants, or a house going on the market in sixty days. What we are good at is the work that has to last: exteriors that take Ohio Valley freeze-thaw, plaster walls in century-old houses, and kitchens where the finish gets touched every day.',
  ],
  points: [
    `Family-owned and operated since ${site.founded}`,
    'W-2 painters, background-checked — never subcontracted out',
    'EPA Lead-Safe certified for pre-1978 homes',
    'Written, itemized estimates with prep broken out',
  ],
} as const;

// Homepage mission & values.
//
// Written as conduct we can be held to, not adjectives. "Flawless results that
// stand the test of time" is the sort of line every painter's site already has
// and no customer believes; each of these is a specific thing we do or refuse
// to do, and a customer could call us out on any of them.
export const mission = {
  headline: 'Our mission & values',
  lead: 'Prep it properly, paint it once, stand behind it for five years. Everything below is a practice, not a promise — you can check us against all six.',
} as const;

export const values = [
  {
    icon: 'prep',
    title: 'Prep Before Paint',
    body: 'On most jobs we spend more days preparing than painting. It is the least glamorous part of the schedule and the only one that decides whether the finish lasts.',
  },
  {
    icon: 'doc',
    title: 'Written, Never Verbal',
    body: 'Prep, primer, product, coats, and labor itemized on paper before you commit. No handshake numbers, and no change order without a conversation first.',
  },
  {
    icon: 'crew',
    title: 'The Same Crew Throughout',
    body: 'A named lead on site from day one to walkthrough, backed by painters on our payroll. You are not meeting a new subcontractor on Wednesday.',
  },
  {
    icon: 'honest',
    title: 'We Say When Not to Hire Us',
    body: 'If the wall is still wet, if a lighter-prep job is the smarter spend, or if replacement beats painting, we tell you and lose the work. That is the whole point.',
  },
  {
    icon: 'clean',
    title: 'Your House Back Each Evening',
    body: 'Floors swept, tools out, furniture returned when a room is finished. Not a single push to tidy up on the last afternoon.',
  },
  {
    icon: 'shield',
    title: 'We Come Back',
    body: 'Five years, in writing, on our workmanship. If something we did fails, we return and fix it — no invoice and no argument about whose fault it was.',
  },
] as const;

// Homepage quality-control block. Each one is a thing we actually do on site,
// not a slogan — if it cannot be pointed at during a walkthrough, cut it.
export const qualityStandards = [
  {
    title: 'Surface preparation',
    body: 'Wash, scrape, sand, fill, caulk, spot-prime. Nine out of ten coating failures start here, which is why prep is its own line on your estimate rather than something folded into the square-foot rate.',
  },
  {
    title: 'The right product for the substrate',
    body: 'Bonding primer over chalked aluminum, stain-blocker over cedar and water marks, alkali-resistant over fresh masonry. Premium Sherwin-Williams and Benjamin Moore topcoats. The primer is named on the quote.',
  },
  {
    title: 'A crew lead on site all day',
    body: 'Every job has a named lead who is there start to finish, not a foreman rotating between four addresses. You have their number for the duration.',
  },
  {
    title: 'You sign off, not us',
    body: 'We walk the job with you at the end, punch-list anything you spot, and fix it before we invoice. The five-year written warranty is handed over on that walkthrough.',
  },
] as const;

// Commercial segments shown on the homepage. All route to /commercial-painting.
export const commercialSegments = [
  {
    title: 'Offices & Retail',
    body: 'Suites, corridors, and storefronts painted overnight and on weekends in zero-VOC product, so you open the next morning with no odor and no lost trading day.',
  },
  {
    title: 'Multifamily & HOA',
    body: 'Unit turns priced per floor plan with a committed turnaround, plus common areas and building exteriors. Leasing can schedule move-ins without guessing.',
  },
  {
    title: 'Light Industrial',
    body: 'Warehouse interiors, dock areas, and mezzanines, including floor line striping and safety marking. Lift work and after-hours labor itemized, never buried.',
  },
] as const;

// Coverage lives in content/areas.ts — counties and the communities under each.

export const nav = {
  interior: {
    label: 'Interior',
    href: '/interior-painting',
    children: [
      { label: 'Interior Painting', href: '/interior-painting' },
      { label: 'Kitchen Cabinet Painting', href: '/cabinet-painting' },
      { label: 'Trim, Doors & Baseboards', href: '/trim-and-door-painting' },
      { label: 'Ceiling Painting', href: '/ceiling-painting' },
      { label: 'Popcorn Ceiling Removal', href: '/popcorn-ceiling-removal' },
      { label: 'Drywall Repair', href: '/drywall-repair' },
      { label: 'Wallpaper Removal', href: '/wallpaper-removal' },
      { label: 'Basement Painting', href: '/basement-painting' },
    ],
  },
  exterior: {
    label: 'Exterior',
    href: '/exterior-painting',
    children: [
      { label: 'Exterior Painting', href: '/exterior-painting' },
      { label: 'Siding Painting', href: '/siding-painting' },
      { label: 'Brick & Masonry Painting', href: '/brick-painting' },
      { label: 'Deck Staining & Sealing', href: '/deck-staining' },
      { label: 'Fence Painting & Staining', href: '/fence-painting' },
      { label: 'Front Door & Shutter Painting', href: '/front-door-painting' },
      { label: 'Garage Floor Epoxy', href: '/garage-floor-epoxy' },
      { label: 'Pressure Washing', href: '/pressure-washing' },
    ],
  },
  simple: [
    { label: 'Commercial', href: '/commercial-painting' },
    { label: 'Financing', href: '/financing' },
  ],
  about: {
    label: 'More',
    href: '/projects',
    children: [
      { label: 'Projects & Before/After', href: '/projects' },
      { label: 'Our Process', href: '/our-process' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Areas We Serve', href: '/service-areas' },
      { label: 'Contact', href: '/contact' },
    ],
  },
} as const;
