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
  headline: 'Color Consultation',
  sub: 'With every interior or exterior estimate.',
  fineprint:
    'One hour with a certified color consultant, plus sampled swatches on your own walls before you commit.',
} as const;

// Homepage brand statement, shown beside the mascot.
//
// The reference this was modelled on led with "Voted Best Painting Company in
// <city>". We have no such award, so this leads on the experience of the job
// instead — which is also the one angle `aboutHome` (credentials, durability)
// and `mission` (practices) do not already cover. Do not turn this into an
// award or ranking claim unless there is a real one to point at.
export const brandStatement = {
  headline: 'The paint is the easy part',
  sub: 'Twenty-five years painting Cincinnati without taking over your house',
  body: [
    'Most of what makes a repaint stressful has nothing to do with paint. It is not knowing which day the crew turns up, finding your furniture somewhere you did not leave it, or getting a number that moves once the work has started.',
    `We have been painting Cincinnati homes since ${site.founded}, and the way we run a job is built around you still living in it. Crews work room by room instead of opening up the whole house, floors are papered and furniture wrapped before a lid comes off, and everything goes back and gets swept every evening rather than on the last day.`,
    'You get one crew lead from the first walkthrough to the punch list, an itemized estimate that separates prep from product from labor, and a phone call before any extra work happens — never an invoice that explains it afterwards. Twenty-five years in, that is the part that decides whether you call us again.',
  ],
} as const;

// Homepage services statement, shown beside the before/after wipe slider.
//
// The service list here must stay in step with content/services.ts — it is a
// plain-English version of the same 13 pages, not a superset. The reference this
// was modelled on listed "heritage home restoration"; we do not offer that, so
// it is not here.
export const servicesStatement = {
  headline: 'Professional painting services in Cincinnati, OH',
  sub: 'For houses, century homes & commercial properties',
  body: [
    'Looking for a painter usually means something specific is already happening — a house going on the market, a kitchen you have finally decided to stop hating, or an exterior that has been on the list for three summers running.',
    'We cover the whole range: interior and exterior painting, kitchen cabinet refinishing, deck and fence staining, brick and masonry coating, siding, drywall repair, popcorn ceiling removal, garage floor epoxy, pressure washing, and commercial work scheduled around your trading hours rather than ours.',
    'The photo alongside is one wall of the same house. Olive-stained board siding taken to charcoal, and the bare wood surround on the patio door brought up in white enamel. Drag the handle to move between them.',
  ],
} as const;

export const trustPoints = [
  { icon: 'star', stat: '4.9★', label: 'Across 400+ homeowner reviews' },
  { icon: 'brush', stat: '3,200+', label: `Homes painted since ${site.founded}` },
  { icon: 'shield', stat: '5-Year', label: 'Workmanship warranty' },
  { icon: 'crew', stat: 'W-2 Crews', label: 'Employees, never subcontracted out' },
] as const;

// Current offers. Keep this honest — these are the only two we run.
export const offers = [
  {
    tag: 'Included',
    headline: 'Color Consultation',
    body: 'An hour with a certified color consultant, plus large sampled swatches brushed on your own walls so you can live with the color before you commit to it.',
    cta: 'Book a Consultation',
    href: '/contact',
  },
  {
    tag: 'Financing',
    headline: 'Pay Over 12 Months at 0% Interest',
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

// "What happens at your estimate."
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
      body: 'Peeling, blistering, or flaking traced to our prep or application gets fixed at our cost, for five years from the day we finish.',
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
    title: 'Color Consultation',
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

// Copy for the tabbed process section on the homepage (components/ProcessTabs).
//
// The reference this was modelled on names its five steps after a trademarked
// house term ("the High Five Finish"). That belongs to someone else, and an
// invented equivalent would be marketing with nothing behind it — so this leads
// on the sequence itself, which is the actual claim.
// One heading only — no eyebrow above it and no second line under it. The
// section used to stack three heading-weight lines before any body copy.
export const processIntro = {
  headline: 'Bulldog 5 step process',
  body: 'A premium finish does not happen by accident. It is the result of standards you can count on. The Bulldog Finish is our five-step standard for how every project runs and how the whole job should feel to live with — built to protect your home, keep the stress down, and leave a finish that is worth what you paid for it.',
} as const;

// "The Bulldog Way" — the 5-step process. Read by BOTH ProcessSteps (grid, on
// service pages and /our-process) and ProcessTabs (tabbed, on the homepage), so
// there is one source of truth. Adding or removing a step changes both, and
// ProcessSteps' grid column count needs to keep up.
// Step titles are taken from the reference the client supplied. Step 5 carries
// Bulldog's own term where the reference used its house brand: theirs is "Final
// Walkthrough & High Five Finish", ours is "the Bulldog Finish". Never restore
// the reference's name — it belongs to another painting company.
//
// "The Bulldog Finish" is the ONLY name for this five-step standard. It is also
// the heading ProcessSteps uses, which previously said "The Bulldog Way"; two
// coined names for one process just dilutes both.
//
// The bodies follow the reference point for point and in the same order, but are
// not a verbatim copy of another painter's live marketing text. The warranty
// wording is Bulldog's own: the reference hedges with "for most services", where
// this is five years on every job. Spelling is US, not the reference's Canadian
// ("colours").
//
// The warranty is never described as "written", "in writing", or as a document
// handed over — not here and not anywhere else on the site. Estimates and
// pricing still are, and should stay that way; it is only the warranty claim
// that was pulled.
export const process = [
  {
    step: '01',
    icon: 'doc',
    title: 'Project Alignment',
    body: 'Before we ever open a paint can we confirm the scope, the surfaces, the colors, the sheen levels, the timeline, and what you are expecting. This is the step that prevents surprises. You should never be unsure what is included, what is excluded, or what the next steps look like — it is all itemized on the estimate before anyone starts.',
  },
  {
    step: '02',
    icon: 'prep',
    title: 'Professional Preparation',
    body: 'Preparation is where quality is built. We protect floors and furnishings, repair and patch surfaces, sand and smooth as needed, address the problem areas, and prime appropriately. We do not treat prep like a quick checkbox, because nine out of ten paint failures are prep failures — it is the foundation for durability and for a clean, polished look.',
  },
  {
    step: '03',
    icon: 'brush',
    title: 'Premium Application',
    body: 'We use quality products and apply them with precision. This is where craftsmanship shows up: consistent coverage, clean edges, smooth finishes, and details that hold up at close range. Two full coats unless we tell you otherwise up front, hand-cut lines at every ceiling and transition, and the work backed by a five-year workmanship warranty so you can feel confident long after the project wraps up.',
  },
  {
    step: '04',
    icon: 'chat',
    title: 'Daily Care & Communication',
    body: 'A job site should feel respected every day, not just at the end. We keep things tidy, communicate clearly, and make sure you know what is happening and what is next. You should not have to chase a contractor for updates or wonder when the crew will arrive — it is the same crew lead from day one, and you get a call before anything changes.',
  },
  {
    step: '05',
    icon: 'shield',
    title: 'Final Walkthrough & Bulldog Finish',
    body: 'We end with a detailed final inspection and close-out. We confirm everything meets the standard, address the details, and make sure the space is clean and ready to enjoy. The goal is simple: no loose ends, no surprises, and a finish we are willing to put our name on. From there the five-year workmanship warranty takes over, covering our prep and application rather than just the paint.',
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
    body: 'Five years on our workmanship. If something we did fails, we return and fix it — no invoice and no argument about whose fault it was.',
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
    body: 'We walk the job with you at the end, punch-list anything you spot, and fix it before we invoice. The five-year workmanship warranty runs from that walkthrough.',
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
    // Four items, not eight. Trim & doors, ceilings, wallpaper removal and
    // basements are now scope cards on /interior-painting rather than routes of
    // their own — adding them back here would link to pages that do not exist.
    children: [
      { label: 'Interior Painting', href: '/interior-painting' },
      { label: 'Kitchen Cabinet Painting', href: '/cabinet-painting' },
      { label: 'Popcorn Ceiling Removal', href: '/popcorn-ceiling-removal' },
      { label: 'Drywall Repair', href: '/drywall-repair' },
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
