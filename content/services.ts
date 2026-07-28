import type { MediaKey } from './media';

export type Faq = { q: string; a: string };

export type Service = {
  /** URL segment — becomes /{slug} */
  slug: string;
  category: 'interior' | 'exterior' | 'commercial';
  /** Short name used in nav, cards, breadcrumbs */
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  /** Hero paragraph — one or two sentences, answer-first */
  lead: string;
  hero: MediaKey;
  /** Body intro — two paragraphs */
  intro: string[];
  /** "What's included" — 5 or 6 items */
  includes: { title: string; body: string }[];
  /** Longer-form sections below the fold */
  detail: { heading: string; body: string[] }[];
  /** Honest price banding. `note` must say what moves the number. */
  pricing: { label: string; range: string; note: string };
  faqs: Faq[];
  /** Slugs of related services shown at the foot of the page */
  related: string[];
};

export const services: Service[] = [
  // ═══════════════════════════════════════════════════════════ INTERIOR ═══
  {
    slug: 'interior-painting',
    category: 'interior',
    name: 'Interior Painting',
    h1: 'Interior Painting in Greater Cincinnati',
    metaTitle: 'Interior Painting in Cincinnati & Northern Kentucky',
    metaDescription:
      'Interior house painting across Greater Cincinnati and Northern Kentucky. W-2 crews, two full coats, free color consultation, and a written 5-year workmanship warranty. Free estimate.',
    eyebrow: 'Walls · Ceilings · Trim',
    lead: 'Two full coats, hand-cut lines, and a house you can live in while we work. Free color consultation with every interior estimate.',
    hero: 'interior',
    intro: [
      'An interior repaint is mostly protection and preparation. Before a brush comes out we wrap the furniture, paper the floors, mask the fixtures, and fill and sand every nail hole, seam, and stress crack we find. The painting itself is the fast part — it is the day and a half in front of it that decides how the finish looks in year five.',
      'We paint occupied houses constantly, so the job is set up around you still living there. Crews work room by room rather than tearing the whole house apart at once, everything gets put back and swept every evening, and we use low-VOC and zero-VOC products so the rooms are usable the same night.',
    ],
    includes: [
      {
        title: 'Full room protection',
        body: 'Furniture moved to the center and wrapped, floors papered and taped, outlets and fixtures masked, doorways zipped where we are sanding.',
      },
      {
        title: 'Surface repair',
        body: 'Nail holes, seam cracks, dents, and old anchor holes filled, sanded flush, and spot-primed. Larger holes get a proper patch, not a smear of compound.',
      },
      {
        title: 'Caulk and cut lines',
        body: 'Fresh caulk at trim, casing, and crown. Every ceiling, corner, and transition cut by hand — we do not tape a line and hope.',
      },
      {
        title: 'Two full coats',
        body: 'Premium Sherwin-Williams or Benjamin Moore product, two coats standard. If a color genuinely covers in one, we tell you and adjust the price down.',
      },
      {
        title: 'Free color consultation',
        body: 'An hour with a certified consultant and large samples brushed on your own walls, so you see the color in your light before you commit.',
      },
      {
        title: 'Nightly cleanup',
        body: 'Tools out, floors swept, furniture back if the room is finished. Not a single-pass cleanup on the last day.',
      },
    ],
    detail: [
      {
        heading: 'Sheen matters more than people expect',
        body: [
          'The single most common regret we hear is sheen, not color. Flat hides wall imperfections beautifully and is the right call for ceilings and low-traffic rooms, but it burnishes when you scrub it. Eggshell and satin clean up well and belong in hallways, kids\' rooms, and kitchens. Semi-gloss goes on trim and doors because it takes a hit and wipes clean.',
          'Older Cincinnati houses complicate this. Plaster walls in a 1920s Hyde Park or Norwood home are rarely dead flat, and a satin sheen will read every wave in that plaster back at you across a sunlit wall. In those rooms we usually push toward flat or matte on the walls and put the sheen on the trim instead.',
        ],
      },
      {
        heading: 'When you should not hire us',
        body: [
          'If you are selling in the next sixty days and just need neutral walls fast, a full prep-and-two-coat job is more than you need. Say so and we will quote a lighter scope — or tell you honestly that a handyman painter is the better economic call.',
          'Same if the walls have active moisture. Painting over a wall that is still wetting from a roof or foundation leak is money set on fire; the coating will fail no matter whose paint it is. We will tell you to fix the water first, and we would rather lose the job than come back to a peeling wall in a year.',
        ],
      },
    ],
    pricing: {
      label: 'Typical interior repaint',
      range: '$3.50 – $6.50 per sq ft of wall area',
      note: 'Ceiling height, the amount of trim, how much patching the walls need, and whether you are going dark-over-light all move this. A standard 12×14 bedroom with walls and ceiling generally lands between $650 and $1,100.',
    },
    faqs: [
      {
        q: 'Can we stay in the house while you paint?',
        a: 'Yes, and most of our customers do. We work room by room, use low-VOC and zero-VOC products, and put each room back together before we leave for the day. The main exception is whole-house work on a tight schedule, where it is faster and cheaper for everyone if the house is empty.',
      },
      {
        q: 'Do you move the furniture?',
        a: 'We move and wrap everything we can safely handle — sofas, beds, tables, dressers. We ask that you clear breakables, electronics, and anything irreplaceable before day one, and we do not disconnect or move TVs and computers.',
      },
      {
        q: 'How long does a whole-house interior take?',
        a: 'A typical three-bedroom interior — walls, ceilings, and trim — runs four to six working days with a crew of three. Cabinet work, wallpaper removal, or significant drywall repair adds to that, and we tell you the day count in writing before you sign.',
      },
      {
        q: 'Do you supply the paint?',
        a: 'Yes, and it is itemized separately on your estimate so you can see exactly what you are paying for. If you want to step up or down a product line, we will re-price it for you rather than swap it quietly.',
      },
    ],
    related: ['cabinet-painting', 'trim-and-door-painting', 'ceiling-painting', 'drywall-repair'],
  },
  {
    slug: 'cabinet-painting',
    category: 'interior',
    name: 'Cabinet Painting',
    h1: 'Kitchen Cabinet Painting & Refinishing',
    metaTitle: 'Kitchen Cabinet Painting & Refinishing in Cincinnati',
    metaDescription:
      'Spray-finished kitchen cabinet painting in Cincinnati and Northern Kentucky. Doors sprayed off-site, factory-smooth finish, a fraction of replacement cost. Free estimate.',
    eyebrow: 'The highest-return room in the house',
    lead: 'A sprayed, factory-smooth finish on the cabinets you already have — usually a third of what replacing them costs.',
    hero: 'cabinets',
    intro: [
      'Cabinet refinishing is the highest-return painting job in a house, and it is also the one most easily botched. The difference between a kitchen that looks refinished and one that looks repainted comes down to three things: degreasing, the right bonding primer, and spraying rather than brushing the doors.',
      'We take every door and drawer front off, label them, and spray them flat in a controlled space so there is no brush texture and no sag. Boxes and face frames are sprayed in place behind full containment. You get back a finish that reads like it came from a cabinet shop, not a paint job.',
    ],
    includes: [
      {
        title: 'Doors removed and labeled',
        body: 'Every door, drawer front, and piece of hardware comes off, gets tagged, and goes back exactly where it started.',
      },
      {
        title: 'Degrease, sand, and de-gloss',
        body: 'Kitchen cabinets carry twenty years of cooking oil. They get degreased with a proper solvent, then scuff-sanded so the primer has something to hold.',
      },
      {
        title: 'Bonding primer',
        body: 'A dedicated adhesion primer — the step that decides whether the finish survives fingernails and dish towels. Stain-blocking primer over knotty oak and old wood tones.',
      },
      {
        title: 'Sprayed finish coats',
        body: 'Two coats of a hard cabinet-grade enamel, sprayed, with a light sand between coats. No brush marks, no roller stipple.',
      },
      {
        title: 'Full kitchen containment',
        body: 'Plastic walls, floor protection, and negative-air fans so overspray and dust stay in the kitchen and out of the rest of the house.',
      },
      {
        title: 'Reinstall and adjust',
        body: 'Hardware back on, hinges adjusted, doors realigned. If you are switching to new pulls we drill the new holes and fill the old ones.',
      },
    ],
    detail: [
      {
        heading: 'Refinish or replace?',
        body: [
          'Refinishing makes sense when the boxes are sound and the layout works. Solid plywood or well-built particleboard boxes with doors that still hang square are excellent candidates, and painting them typically runs a third to a quarter of replacement.',
          'It stops making sense when the boxes are swollen from a dishwasher leak, when the layout is the actual problem, or when you have thermofoil doors that are already peeling — that laminate skin will keep lifting no matter what goes over it. We will tell you which category your kitchen is in on the estimate visit.',
        ],
      },
      {
        heading: 'What the finish is actually like',
        body: [
          'Cabinet enamel needs time to reach full hardness. It is dry to the touch in hours and safe to use in a day or two, but it continues curing for two to three weeks. During that window we ask you to be gentle: no slamming doors, no sticky shelf liner, and wipe spills rather than scrubbing them.',
          'After it cures, it wipes clean and holds up to daily kitchen use. What it will not survive is a knife edge or a dropped cast-iron pan, which is true of a factory finish as well.',
        ],
      },
    ],
    pricing: {
      label: 'Typical kitchen',
      range: '$3,200 – $7,500',
      note: 'Driven mostly by door count. A 25-door kitchen with no color change on the boxes sits at the low end; 45 doors, a color change, and an island in a second color sits at the high end.',
    },
    faqs: [
      {
        q: 'How long am I without a kitchen?',
        a: 'Four to six working days for a typical kitchen. The sink and appliances stay usable the whole time — what you lose is the cabinets themselves, since the doors are off and the boxes are being sprayed. We can usually leave one section for last if you need somewhere to keep dishes.',
      },
      {
        q: 'Will it chip?',
        a: 'Not from normal use, once cured. Chipping in cabinet work almost always traces back to skipped degreasing or a missing bonding primer, which is exactly why those two steps are itemized on your estimate. Our workmanship warranty covers adhesion failure for five years.',
      },
      {
        q: 'Can you paint oak without the grain showing?',
        a: 'Yes, but it is an add-on. Open-grain red oak will telegraph its grain through paint unless we grain-fill it first, which adds a day and roughly 15% to the price. Some people love the texture showing through; we will show you both and let you choose.',
      },
      {
        q: 'Do you spray the doors on site?',
        a: 'No. Doors and drawer fronts go to our shop where they are sprayed flat and horizontal, which is the only way to get a truly level finish. The boxes and face frames are sprayed in place inside full containment.',
      },
    ],
    related: ['interior-painting', 'trim-and-door-painting', 'drywall-repair'],
  },
  {
    slug: 'trim-and-door-painting',
    category: 'interior',
    name: 'Trim & Door Painting',
    h1: 'Trim, Door & Baseboard Painting',
    metaTitle: 'Trim, Door & Baseboard Painting in Cincinnati',
    metaDescription:
      'Interior trim, door, and baseboard painting in Cincinnati and Northern Kentucky. Hand-brushed finish, caulked seams, hard enamel that cleans up. Free estimate.',
    eyebrow: 'The detail people actually notice',
    lead: 'Crisp, hard enamel on baseboards, casing, crown, and doors — with every seam caulked and every line cut by hand.',
    hero: 'trimDoors',
    intro: [
      'Trim is the first thing a guest\'s eye lands on and the last thing most painters take seriously. It takes a hard enamel, a genuinely clean substrate, and a steady hand at the wall line, because there is no tape trick that beats a good brush.',
      'Most of the trim work we do in older Cincinnati homes is stripping decades of built-up paint out of the profile so the detail reads again, filling the dings, and putting down a finish that survives a vacuum cleaner and a dog.',
    ],
    includes: [
      { title: 'Clean and de-gloss', body: 'Trim washed, scuff-sanded, and de-glossed so the new enamel bonds instead of sitting on top.' },
      { title: 'Fill and caulk', body: 'Dents and nail holes filled and sanded flush, every seam and casing joint re-caulked so the lines read straight.' },
      { title: 'Hard enamel finish', body: 'Waterborne alkyd enamel that levels out brush marks and cleans up without burnishing. Semi-gloss standard, satin on request.' },
      { title: 'Doors done properly', body: 'Doors painted on both faces and all four edges, hardware removed rather than taped around, hinges cleaned or replaced.' },
      { title: 'Hand-cut wall line', body: 'Cut by hand at every wall and ceiling junction. Straight lines come from a brush, not from tape.' },
    ],
    detail: [
      {
        heading: 'Oil-based trim in older houses',
        body: [
          'Plenty of pre-1980 Cincinnati homes still have original oil-based enamel on the trim. Putting a waterborne product straight over cured oil without a bonding primer is the single most common cause of trim paint peeling off in sheets a year later.',
          'We test for it on the estimate visit — a cotton ball and denatured alcohol tells you in thirty seconds — and if the trim is oil, a bonding primer goes on the estimate as its own line item. If a quote you are comparing does not mention it, that is worth asking about.',
        ],
      },
    ],
    pricing: {
      label: 'Typical pricing',
      range: '$3 – $6 per linear foot · $110 – $190 per door',
      note: 'Profile complexity, how much filling the trim needs, and whether a bonding primer is required over old oil-based enamel all move the number.',
    },
    faqs: [
      {
        q: 'Should trim be brighter white than the ceiling?',
        a: 'Usually, yes. A crisp white trim against a softer ceiling white reads deliberate; the same white on both reads flat. In older homes with warm-toned plaster, an off-white trim often looks better than a cool bright white.',
      },
      {
        q: 'Can you paint over stained wood trim?',
        a: 'Yes, with a stain-blocking primer first — otherwise tannins from oak and pine bleed through and yellow the finish within weeks. Be aware it is a one-way door: going back to stained wood afterward means stripping, which costs more than the paint job did.',
      },
      {
        q: 'Do you take the doors off?',
        a: 'We paint most doors in place, on the hinge, with the hardware removed. Doors that need all four edges done or that are being changed to a much darker color come off and get laid flat.',
      },
    ],
    related: ['interior-painting', 'cabinet-painting', 'front-door-painting'],
  },
  {
    slug: 'ceiling-painting',
    category: 'interior',
    name: 'Ceiling Painting',
    h1: 'Ceiling Painting & Refinishing',
    metaTitle: 'Ceiling Painting in Cincinnati & Northern Kentucky',
    metaDescription:
      'Ceiling painting in Cincinnati and Northern Kentucky. Stain-blocked water marks, flat ceiling white, sprayed or rolled with full floor protection. Free estimate.',
    eyebrow: 'The fifth wall',
    lead: 'Flat, even ceilings with water stains sealed properly — not just covered and left to bleed back through.',
    hero: 'ceilings',
    intro: [
      'A ceiling is the least forgiving surface in the house because every light fixture in the room rakes across it. Roller lap marks, flash from a patched spot, and stains bleeding back through are all visible from the sofa in a way they never would be on a wall.',
      'The two things that fix that are a genuine flat ceiling paint and a shellac-based stain blocker on anything that has ever been wet. Regular primer over an old water stain will look fine for a month and then let the tannin come back through.',
    ],
    includes: [
      { title: 'Full floor and furniture cover', body: 'Everything below the ceiling papered, wrapped, and taped — ceiling work makes the biggest mess in painting.' },
      { title: 'Stain blocking', body: 'Water stains, smoke damage, and tannin marks sealed with a shellac-based blocker so they do not return.' },
      { title: 'Patch and feather', body: 'Cracks, nail pops, and old fixture holes patched and feathered wide so the repair does not flash under light.' },
      { title: 'Flat ceiling paint', body: 'A true flat ceiling product — it hides unevenness and kills the lap marks a wall paint would leave.' },
      { title: 'Clean wall junction', body: 'The ceiling-to-wall line cut by hand, so the change of plane is a straight line rather than a wobble.' },
    ],
    detail: [
      {
        heading: 'Spray or roll',
        body: [
          'Spraying is faster and leaves the smoothest result, and it is what we do in empty rooms and whole-house jobs. It also requires masking everything in the room, which in a furnished house can cost more in labor than the spraying saves.',
          'In a single occupied room we usually roll with a heavy nap and back-roll consistently in one direction. Done properly the difference is invisible from the floor. We will tell you which we are proposing and why.',
        ],
      },
    ],
    pricing: {
      label: 'Typical pricing',
      range: '$1.50 – $3.25 per sq ft',
      note: 'Height, texture, and stain blocking are the variables. A vaulted two-story great room ceiling costs more than the same square footage at eight feet, because most of the price is access.',
    },
    faqs: [
      {
        q: 'My ceiling stain came back after the last painter covered it. Why?',
        a: 'Because it was primed with a latex primer instead of a shellac-based stain blocker. Water-soluble tannins pass straight through latex. Shellac seals them. It is the difference between a stain being gone and being temporarily hidden.',
      },
      {
        q: 'Do I have to paint the ceiling if I am painting the walls?',
        a: 'No, and we will say so if yours does not need it. But a fresh wall color next to a ten-year-old ceiling tends to make the ceiling look grey, and people who skip it often call us back within the year.',
      },
      {
        q: 'Can you match my existing ceiling white?',
        a: 'We can get very close with a scan, but a ceiling that has aged ten years is not the color it was mixed as. On a partial repaint we recommend doing the full ceiling plane rather than trying to blend into the middle of it.',
      },
    ],
    related: ['interior-painting', 'popcorn-ceiling-removal', 'drywall-repair'],
  },
  {
    slug: 'popcorn-ceiling-removal',
    category: 'interior',
    name: 'Popcorn Ceiling Removal',
    h1: 'Popcorn Ceiling Removal',
    metaTitle: 'Popcorn Ceiling Removal in Cincinnati & N. Kentucky',
    metaDescription:
      'Popcorn ceiling removal in Cincinnati and Northern Kentucky. Full containment, skim-coated smooth, primed and painted. Pre-1980 asbestos testing advised. Free estimate.',
    eyebrow: 'Scrape, skim, smooth',
    lead: 'Textured ceilings scraped, skim-coated flat, primed, and painted — behind full containment so the dust stays in one room.',
    hero: 'popcorn',
    intro: [
      'Removing popcorn texture is not really a scraping job, it is a drywall finishing job. Scraping takes an afternoon; getting the ceiling genuinely flat afterward takes two or three rounds of skim coat and sanding, and that is the part that separates a smooth ceiling from a lumpy one.',
      'Everything happens behind plastic containment with negative air, because wet-scraped texture goes everywhere. Floors, walls, and doorways are sealed before the first scraper touches the ceiling.',
    ],
    includes: [
      { title: 'Containment first', body: 'Plastic walls, sealed doorways, floors covered twice, and negative-air fans running for the duration.' },
      { title: 'Wet scrape', body: 'Texture misted and scraped rather than dry-sanded — massively less airborne dust and easier on the drywall paper underneath.' },
      { title: 'Skim coat to flat', body: 'Two to three passes of joint compound, sanded between, until a raking light shows a flat plane.' },
      { title: 'Prime the bare surface', body: 'Fresh compound and exposed drywall paper both drink paint. A full primer coat evens it out so the finish does not flash.' },
      { title: 'Two finish coats', body: 'Flat ceiling paint, two coats, cut clean at the wall line.' },
    ],
    detail: [
      {
        heading: 'Asbestos: test before you scrape',
        body: [
          'Popcorn texture applied before roughly 1980 can contain asbestos, and a great deal of Cincinnati and Northern Kentucky housing stock is older than that. Scraping it without knowing is a genuine health risk, not a formality.',
          'A lab test on a small sample costs very little and turns around in a few days. We will not scrape a pre-1980 ceiling without a negative result in hand — and if it comes back positive, we will refer you to a licensed abatement contractor and pick the job back up once they are finished.',
        ],
      },
    ],
    pricing: {
      label: 'Typical pricing',
      range: '$2.75 – $5.00 per sq ft',
      note: 'Includes scrape, skim, prime, and two coats. Ceiling height and how badly the drywall was finished underneath the texture are the main variables.',
    },
    faqs: [
      {
        q: 'How much dust is there really?',
        a: 'Far less than people expect, because we wet-scrape behind containment rather than dry-sand. The sanding stage after the skim coat is the dustiest part, and that runs on negative air with a HEPA vacuum sander.',
      },
      {
        q: 'Can I just paint over popcorn instead?',
        a: 'You can, and it is much cheaper. It will still be a textured ceiling, and painting it makes future removal harder because sealed texture does not wet-scrape well. If removal is on your list at all, do it before you paint.',
      },
      {
        q: 'How long does one room take?',
        a: 'Three to four working days for a typical room, most of which is drying time between skim coats. It is not a job that can be compressed without the ceiling showing it.',
      },
    ],
    related: ['ceiling-painting', 'drywall-repair', 'interior-painting'],
  },
  {
    slug: 'drywall-repair',
    category: 'interior',
    name: 'Drywall Repair',
    h1: 'Drywall Repair & Patching',
    metaTitle: 'Drywall Repair & Patching in Cincinnati',
    metaDescription:
      'Drywall repair, patching, and plaster crack repair in Cincinnati and Northern Kentucky. Feathered, textured to match, primed and painted. Free estimate.',
    eyebrow: 'Before the paint goes on',
    lead: 'Holes, cracks, nail pops, and water damage patched and feathered so the repair disappears under paint instead of flashing at you.',
    hero: 'drywall',
    intro: [
      'A patch that is invisible in flat light and obvious in raking light is not a finished patch. The fix is feathering the compound out far wider than feels necessary — usually two to three times the width of the actual hole — and priming the repair before the finish coat.',
      'We do drywall repair as part of nearly every interior job, and as a standalone service for the specific list of things that go wrong in Ohio Valley houses: settlement cracks over doorways, nail pops in ceilings, and the corner bead dents every hallway seems to collect.',
    ],
    includes: [
      { title: 'Cut back to sound material', body: 'Loose paper and crumbling edges cut out first. Compound over a soft edge cracks again within a season.' },
      { title: 'Backed and taped', body: 'Anything over a few inches gets a backer and mesh or paper tape — not just compound bridged across a void.' },
      { title: 'Feathered wide', body: 'Three passes minimum, sanded between, feathered far past the repair so no ridge catches the light.' },
      { title: 'Texture matched', body: 'Orange peel, knockdown, or hand-troweled plaster matched to the surrounding wall before priming.' },
      { title: 'Primed and painted', body: 'Every repair spot-primed so it does not flash, then painted to a natural break — a corner, not the middle of a wall.' },
    ],
    detail: [
      {
        heading: 'Plaster is not drywall',
        body: [
          'A lot of Cincinnati housing predates drywall entirely — lath and plaster in Hyde Park, Clifton, Covington, and Norwood is the norm rather than the exception. Plaster cracks for different reasons than drywall does, and patching it with standard joint compound over a moving crack guarantees the crack comes back.',
          'On plaster we re-key loose sections where we can, bridge with mesh, and use a setting-type compound that is harder and less prone to shrinking. Where a wall has failed past repair, we will tell you it needs a skim coat or a new board rather than sell you a patch that will not hold.',
        ],
      },
    ],
    pricing: {
      label: 'Typical pricing',
      range: '$175 – $450 per repair visit',
      note: 'Small patch counts are priced by the visit rather than the hole, because mobilization is most of the cost. Larger repairs and full-wall skim coats are quoted by area.',
    },
    faqs: [
      {
        q: 'Will the patch be invisible?',
        a: 'On a flat wall painted corner to corner, yes. In a hallway with a window at one end throwing raking light down the wall, an honest answer is that a patch can be made very good but perfection is not guaranteed. We will tell you which situation you are in before we start.',
      },
      {
        q: 'Do you paint the whole wall after a repair?',
        a: 'We recommend it, and we price it that way by default. Touching up to the middle of a wall almost always leaves a visible halo, because your existing paint has aged. Painting to a corner solves it.',
      },
      {
        q: 'My ceiling has nail pops all over. Is that structural?',
        a: 'Usually not — it is the framing drying and moving, which is normal in older houses and in newer builds within the first two years. We reset with screws either side, pop the nail back, and patch. If we see a pattern that suggests a real structural issue, we will tell you to get it looked at first.',
      },
    ],
    related: ['interior-painting', 'ceiling-painting', 'popcorn-ceiling-removal'],
  },
  {
    slug: 'wallpaper-removal',
    category: 'interior',
    name: 'Wallpaper Removal',
    h1: 'Wallpaper Removal & Wall Prep',
    metaTitle: 'Wallpaper Removal in Cincinnati & Northern Kentucky',
    metaDescription:
      'Wallpaper removal in Cincinnati and Northern Kentucky. Steamed, stripped, glue washed off, walls skim-coated and primed for paint. Free estimate.',
    eyebrow: 'Strip it properly or pay twice',
    lead: 'Paper steamed off, adhesive washed out, and the wall skim-coated back to smooth before any paint goes near it.',
    hero: 'wallpaper',
    intro: [
      'Wallpaper removal is the one interior job that is genuinely unpredictable, and any painter who quotes it firm without testing a corner first is guessing. Paper hung over primed drywall comes off in sheets. Paper hung directly on unprimed drywall takes the paper face of the board with it.',
      'The part people skip is the adhesive. Old wallpaper paste stays water-soluble for decades, and paint over residual glue will bubble and lift months later. Every wall gets washed down and tested before we prime.',
    ],
    includes: [
      { title: 'Test patch first', body: 'We pull a corner on the estimate visit to see what is underneath, and price from what we actually find.' },
      { title: 'Steam and strip', body: 'Steamed and scraped rather than dry-pulled, which keeps the drywall face intact wherever it can be saved.' },
      { title: 'Glue washed out', body: 'Walls washed down repeatedly until they squeak. Residual adhesive is the single biggest cause of paint failure over stripped paper.' },
      { title: 'Skim and sand', body: 'Torn drywall face and gouges skim-coated and sanded flat so the wall reads as one plane again.' },
      { title: 'Full primer coat', body: 'A dedicated primer over the whole wall — not just the patches — before the finish coats go on.' },
    ],
    detail: [
      {
        heading: 'The two-layer surprise',
        body: [
          'In houses that have changed hands a few times we routinely find a second layer of paper underneath the first, sometimes a third. Each layer roughly doubles the removal time, and there is no way to know from the outside.',
          'We handle this by quoting removal as a range with a clearly stated assumption, then confirming the number once the first wall is down. You will never get a surprise invoice from us — you get a call before extra work happens.',
        ],
      },
    ],
    pricing: {
      label: 'Typical pricing',
      range: '$1.75 – $4.50 per sq ft of wall',
      note: 'Depends almost entirely on what is under the paper: primed drywall at the low end, multiple layers over unprimed board at the high end. Skim coating is quoted separately once we see the wall.',
    },
    faqs: [
      {
        q: 'Can you just paint over the wallpaper?',
        a: 'Sometimes, and it is a legitimate option if the paper is well adhered, the seams are tight, and the texture is subtle. We prime it with an oil or shellac primer first so we do not reactivate the glue. If seams are lifting anywhere, painting over it just locks in the problem.',
      },
      {
        q: 'How bad is the wall going to be underneath?',
        a: 'Honest answer: we do not know until it is off, and neither does anyone else. That is why we pull a test corner during the estimate and why the skim coat is quoted separately rather than buried in the price.',
      },
      {
        q: 'Do you do the painting too?',
        a: 'Yes, and it is usually cheaper to have one crew do both — the prep for painting and the repair after stripping are the same work done once instead of twice.',
      },
    ],
    related: ['interior-painting', 'drywall-repair', 'ceiling-painting'],
  },
  {
    slug: 'basement-painting',
    category: 'interior',
    name: 'Basement Painting',
    h1: 'Basement Wall & Floor Painting',
    metaTitle: 'Basement Painting & Masonry Coating in Cincinnati',
    metaDescription:
      'Basement painting in Cincinnati and Northern Kentucky — block and poured walls, floors, and joists. Masonry primers, breathable coatings. Free estimate.',
    eyebrow: 'Block, poured wall & floor',
    lead: 'Block, poured concrete, and exposed joists coated with products made for below-grade masonry — after the moisture question gets answered honestly.',
    hero: 'basement',
    intro: [
      'Basement painting is a moisture problem wearing a paint problem\'s clothes. A concrete or block wall that is passing water vapor will push any coating off it eventually, and no product on the shelf changes that. So the first thing we do is test.',
      'Where the walls are dry, the results are excellent and cheap relative to the space you get back: bright block walls, a sealed floor, and sprayed joists overhead turn a storage basement into a usable room for a fraction of finishing it out.',
    ],
    includes: [
      { title: 'Moisture test', body: 'A plastic-sheet test taped to the slab and walls tells us in 24 hours whether vapor is moving through. We test before we quote.' },
      { title: 'Efflorescence removal', body: 'The white mineral bloom on block gets scrubbed and neutralized. Painting over it guarantees the coating lifts.' },
      { title: 'Masonry primer', body: 'An alkali-resistant block filler that fills the pores in CMU and gives the finish coat something continuous to sit on.' },
      { title: 'Breathable wall coating', body: 'Coatings that let residual vapor pass rather than trapping it behind a film. Trapped vapor is what blows paint off a foundation wall.' },
      { title: 'Sprayed joists and deck', body: 'Overhead framing and the underside of the floor sprayed flat black or white — the fastest way to make an unfinished basement feel finished.' },
      { title: 'Floor coating', body: 'Concrete floors etched and coated in a single-part epoxy or urethane, or the full flake system if you want the garage-floor look.' },
    ],
    detail: [
      {
        heading: 'When we will tell you to stop',
        body: [
          'If the plastic-sheet test comes back wet, or we see active seepage at the cove joint, or the block has that damp musty smell after rain, painting is the wrong next purchase. Interior drainage, grading, or a downspout that dumps against the foundation is what you actually need first.',
          'We would rather send you to a waterproofing contractor and come back next year than take money for a coating we already know is going to fail. It happens on a handful of basements a year and it has never once cost us a customer.',
        ],
      },
    ],
    pricing: {
      label: 'Typical pricing',
      range: '$2.25 – $4.75 per sq ft of wall · $3 – $7 per sq ft of floor',
      note: 'Block costs more than poured concrete because filling the pores takes a heavy-bodied primer and a lot of it. Flake floor systems sit at the top of the floor range.',
    },
    faqs: [
      {
        q: 'Will painting the walls stop my basement being damp?',
        a: 'No. Paint is not waterproofing, and any product marketed as both is overpromising. Coatings make a dry basement look finished; they do not fix a wet one. We test first so you know which basement you have.',
      },
      {
        q: 'What color should I paint the joists?',
        a: 'Flat black is the current default and it works — it makes the ceiling visually disappear and hides ductwork and wiring. White brightens a dark basement considerably but shows every cobweb. Both spray in a day.',
      },
      {
        q: 'How long before I can put things back on the floor?',
        a: 'Foot traffic in 24 hours, furniture in 72, and heavy shelving or a car in a week. Floor coatings cure slower than they dry and loading them early leaves permanent marks.',
      },
    ],
    related: ['garage-floor-epoxy', 'interior-painting', 'drywall-repair'],
  },

  // ═══════════════════════════════════════════════════════════ EXTERIOR ═══
  {
    slug: 'exterior-painting',
    category: 'exterior',
    name: 'Exterior Painting',
    h1: 'Exterior House Painting in Greater Cincinnati',
    metaTitle: 'Exterior House Painting in Cincinnati & N. Kentucky',
    metaDescription:
      'Exterior house painting across Greater Cincinnati and Northern Kentucky. Washed, scraped, primed, and two-coated. 5-year written workmanship warranty. Free estimate.',
    eyebrow: 'Siding · Trim · Soffits · Shutters',
    lead: 'Washed, scraped, primed, and two-coated — the four steps that decide whether an exterior lasts six years or sixteen.',
    hero: 'exterior',
    intro: [
      'An exterior repaint is a weather job. Ohio Valley houses take freeze-thaw cycling all winter, hard UV on south and west elevations all summer, and enough humidity in between to keep wood moving. Paint fails here because of prep, not product.',
      'So we spend most of the schedule on the parts you cannot see in the after photo: pressure washing and letting the siding actually dry, scraping every loose edge back to sound material, feather-sanding the transitions, spot-priming all bare wood, and re-caulking the joints where water gets in.',
    ],
    includes: [
      {
        title: 'Wash and dry time',
        body: 'The whole house washed down, then given a genuine dry-out window. Painting damp siding is the fastest way to a peeling job, and we build the days into the schedule.',
      },
      {
        title: 'Scrape and feather-sand',
        body: 'Every loose or lifting edge scraped back to sound paint, then feather-sanded so the transition does not read as a ridge through the new coat.',
      },
      {
        title: 'Spot-prime bare wood',
        body: 'All exposed wood primed with an exterior bonding primer. Bare cedar, redwood, and knots get a stain-blocking primer so tannins do not bleed through.',
      },
      {
        title: 'Caulk the water paths',
        body: 'Trim joints, window and door casing, corner boards, and butt joints re-caulked with a paintable elastomeric that stays flexible through the freeze-thaw.',
      },
      {
        title: 'Two coats, back-brushed',
        body: 'Premium 100% acrylic exterior product, two full coats, sprayed and back-brushed on rough surfaces so it is worked into the grain rather than sitting on top.',
      },
      {
        title: 'Landscaping protected',
        body: 'Beds, shrubs, walks, and driveways covered before we start, and a full site cleanup with a magnet sweep at the end.',
      },
    ],
    detail: [
      {
        heading: 'Why exteriors fail on the south and west sides first',
        body: [
          'Walk any repainted street in Cincinnati and the south and west elevations are always the ones chalking and fading while the north side still looks new. That is UV load, and it is why we specify the same product and the same two coats all the way around even when a homeowner asks whether the back can be done lighter.',
          'It is also why we will push back on a very deep or very saturated color on a full-sun elevation. Those colors are gorgeous on day one and they are the ones that fade visibly by year four. If you want one anyway, that is completely your call — we will just make sure you know before it goes on.',
        ],
      },
      {
        heading: 'Lead-safe work on pre-1978 homes',
        body: [
          'A large share of Cincinnati and Northern Kentucky housing was built before the 1978 lead paint ban. Scraping and sanding those exteriors without containment spreads lead dust into the soil around the house, which is exactly where children play.',
          'We are EPA Lead-Safe certified and we follow RRP protocol on every pre-1978 home: ground containment, HEPA vacuum sanding, no open-flame or high-heat stripping, and documented cleanup. It adds cost. It is not optional and we will not quote around it.',
        ],
      },
    ],
    pricing: {
      label: 'Typical whole-house exterior',
      range: '$4,500 – $14,000',
      note: 'Square footage, number of stories, how much scraping and carpentry the siding needs, and the amount of trim detail drive this. A 1,900 sq ft two-story in sound condition typically lands between $6,500 and $9,500.',
    },
    faqs: [
      {
        q: 'What time of year can you paint outside in Cincinnati?',
        a: 'Roughly mid-April through late October, depending on the year. Modern acrylics can go down to 35°F, but overnight lows matter more than daytime highs — paint that has not formed a film before the temperature drops will fail. We schedule around the forecast, not the calendar.',
      },
      {
        q: 'How long will an exterior repaint last here?',
        a: 'Eight to twelve years on properly prepped wood or fiber cement, and longer on the north and east elevations than the south and west. Bare-wood repaints on badly weathered siding are at the low end. A job that fails inside five years failed in prep.',
      },
      {
        q: 'Do you replace rotten wood?',
        a: 'We replace rotted trim, fascia, and siding boards as a line item on the estimate, and we flag anything we find once the scraping starts. What we will not do is caulk over rot and paint it, which is what makes a cheap quote cheap.',
      },
      {
        q: 'Do you spray or brush?',
        a: 'Both. Spraying lays the material down fast and evenly; back-brushing works it into the grain and the laps so it bonds. On rough cedar and older wood siding, spray-only is the mark of a job being rushed.',
      },
    ],
    related: ['siding-painting', 'brick-painting', 'pressure-washing', 'deck-staining'],
  },
  {
    slug: 'siding-painting',
    category: 'exterior',
    name: 'Siding Painting',
    h1: 'Siding Painting & Refinishing',
    metaTitle: 'Siding Painting in Cincinnati & Northern Kentucky',
    metaDescription:
      'Painting for wood, fiber cement, aluminum, and vinyl siding in Cincinnati and Northern Kentucky. Correct primer per substrate, two coats, 5-year warranty.',
    eyebrow: 'Wood · Fiber cement · Aluminum · Vinyl',
    lead: 'Every siding material takes a different primer. Getting that one choice right is most of the difference between an eight-year job and a two-year one.',
    hero: 'siding',
    intro: [
      'Wood, fiber cement, aluminum, and vinyl all move differently, hold moisture differently, and bond differently. The finish coat can be identical across all four — what changes is what goes underneath it, and that is the decision that determines how long the job lasts.',
      'We identify the substrate on the estimate visit and put the specific primer on the written quote. If you are comparing bids and one of them does not name the primer, that is the question to ask.',
    ],
    includes: [
      { title: 'Substrate identified', body: 'Wood, LP, fiber cement, aluminum, or vinyl — named on the estimate along with the primer it takes.' },
      { title: 'Wash and dry', body: 'Full wash to remove chalking and mildew, then a real dry-out window before anything is applied.' },
      { title: 'Correct primer', body: 'Stain-blocking on cedar and redwood, bonding primer on chalked aluminum, alkali-resistant on fiber cement.' },
      { title: 'Two coats acrylic', body: 'Premium 100% acrylic, sprayed and back-brushed into the grain and laps.' },
      { title: 'Butt joints and end grain', body: 'Cut ends and butt joints sealed — the two places siding drinks water and starts failing from behind.' },
    ],
    detail: [
      {
        heading: 'Vinyl siding can be painted, with one hard rule',
        body: [
          'You can absolutely paint vinyl, and it saves a great deal of money against replacement. The rule is that you cannot go darker than the original color unless you use a vinyl-safe formulation.',
          'Dark paint on vinyl absorbs heat the panel was never designed for, and it warps and buckles — permanently, and not covered by anyone\'s warranty. Vinyl-safe product lines solve this with heat-reflective pigments, and they are what we quote whenever a color change is going darker.',
        ],
      },
    ],
    pricing: {
      label: 'Typical pricing',
      range: '$2.25 – $4.75 per sq ft of siding',
      note: 'Substrate and condition drive it. Sound fiber cement is the cheapest to repaint; heavily weathered cedar needing scrape and full prime is the most expensive.',
    },
    faqs: [
      {
        q: 'Is painting fiber cement different from wood?',
        a: 'Yes. Fiber cement is alkaline and takes an alkali-resistant primer on any cut or unfinished edge. Factory-finished board that is simply being recolored often needs no primer at all — just a clean, dry surface and two coats.',
      },
      {
        q: 'My aluminum siding leaves chalk on my hand. Can it still be painted?',
        a: 'Yes, and that chalk is exactly why it needs a bonding primer. Chalking is the old finish breaking down; paint applied straight over it is bonding to powder. Wash, then a bonding primer, then two coats, and it holds for years.',
      },
      {
        q: 'Should I paint or replace?',
        a: 'If the siding is structurally sound, painting costs a fraction of replacement and lasts most of a decade. If boards are rotted through, or you are fighting the same failure every few years, replacement is the better spend and we will say so.',
      },
    ],
    related: ['exterior-painting', 'pressure-washing', 'brick-painting'],
  },
  {
    slug: 'brick-painting',
    category: 'exterior',
    name: 'Brick & Masonry Painting',
    h1: 'Brick & Masonry Painting',
    metaTitle: 'Brick Painting & Limewashing in Cincinnati',
    metaDescription:
      'Brick painting, limewashing, and masonry coating in Cincinnati and Northern Kentucky. Breathable mineral coatings, tuckpointing first. Free estimate.',
    eyebrow: 'Painted · Limewashed · German schmear',
    lead: 'Breathable mineral coatings on brick and block — and a straight conversation about the fact that painting brick is permanent.',
    hero: 'brick',
    intro: [
      'Brick is porous by design. It absorbs water and releases it again, and a coating that stops it releasing traps moisture inside the masonry where freeze-thaw cycling will spall the face off the brick. That is why we use breathable mineral and elastomeric-free coatings rather than standard exterior acrylic.',
      'It is also why we insist on tuckpointing failing mortar joints first. Coating over crumbling mortar seals a problem in rather than fixing it, and the coating will telegraph every soft joint within two winters.',
    ],
    includes: [
      { title: 'Tuckpointing first', body: 'Failed and soft mortar joints raked and repointed before any coating. Non-negotiable on older brick.' },
      { title: 'Wash and efflorescence removal', body: 'Masonry washed and the white mineral bloom scrubbed off and neutralized.' },
      { title: 'Breathable coating', body: 'Mineral silicate or breathable masonry paint that lets vapor out. Standard acrylic on brick traps water and spalls the face.' },
      { title: 'Limewash option', body: 'Traditional limewash or German schmear for a softened, aged look that lets more of the brick texture read through.' },
      { title: 'Two coats and detail work', body: 'Two coats on the field, with sills, lintels, and foundation walls cut in by hand.' },
    ],
    detail: [
      {
        heading: 'Painting brick is a one-way decision',
        body: [
          'Once brick is painted, it is effectively painted forever. Stripping it is possible with chemical strippers but it is expensive, messy, rarely fully successful, and it can damage the brick face in the process.',
          'We say this to every customer before we quote, because a fair number of people are considering it on a whim. If you are on the fence, limewash is the honest middle ground: it is thinner, it lets texture and color variation through, and it weathers softly rather than peeling.',
        ],
      },
    ],
    pricing: {
      label: 'Typical pricing',
      range: '$2.75 – $5.50 per sq ft · limewash from $2.25',
      note: 'Tuckpointing is quoted separately by linear foot once we see the joints. Textured and heavily pitted brick uses considerably more material than smooth face brick.',
    },
    faqs: [
      {
        q: 'Will painting my brick cause damage?',
        a: 'Not if it is done with a breathable coating over sound mortar. Damage happens when a film-forming acrylic seals the face and traps moisture that then freezes inside the brick. The coating choice is the whole ballgame here.',
      },
      {
        q: 'What is the difference between limewash and paint?',
        a: 'Limewash is a mineral slurry that soaks into the brick and bonds chemically rather than forming a film. It looks softer and more variegated, it is fully breathable, and it wears by fading gently rather than peeling. Paint gives a uniform, opaque, modern look.',
      },
      {
        q: 'Can you paint just the foundation or just the trim brick?',
        a: 'Yes, and partial masonry work is common — painting a foundation wall below siding, or the brick surround on a porch. It is priced by area with a minimum for mobilization.',
      },
    ],
    related: ['exterior-painting', 'pressure-washing', 'siding-painting'],
  },
  {
    slug: 'deck-staining',
    category: 'exterior',
    name: 'Deck Staining',
    h1: 'Deck Staining, Sealing & Refinishing',
    metaTitle: 'Deck Staining & Sealing in Cincinnati & N. Kentucky',
    metaDescription:
      'Deck staining, stripping, and sealing in Cincinnati and Northern Kentucky. Sanded, brightened, and stained with penetrating oil or hybrid product. Free estimate.',
    eyebrow: 'Strip · Sand · Brighten · Stain',
    lead: 'Stripped, sanded, and brightened before a drop of stain — because stain that cannot penetrate is just a film waiting to peel.',
    hero: 'deck',
    intro: [
      'Deck work is horizontal, which means it takes standing water, direct sun, and every footstep in the house. Nothing on a deck lasts as long as the same product would on a wall, and any contractor promising otherwise is selling you something.',
      'What extends it is preparation: getting the old failed coating fully off, sanding the boards open so the new stain can penetrate, and neutralizing the wood with a brightener so the pH is right when the stain goes down.',
    ],
    includes: [
      { title: 'Strip the old coating', body: 'Failed film-forming stain chemically stripped rather than painted over. A new coat over a peeling one peels on the same schedule.' },
      { title: 'Sand the boards', body: 'Boards sanded to open the grain, plus rails and caps hand-sanded. Stain that cannot get into the wood sits on top and fails.' },
      { title: 'Brighten and neutralize', body: 'A wood brightener resets the pH after stripping and pulls the grey out of weathered boards.' },
      { title: 'Set popped fasteners', body: 'Raised screws and nails reset, and split or badly cupped boards flagged for replacement before staining.' },
      { title: 'Penetrating stain', body: 'Semi-transparent penetrating oil or hybrid stain, applied to refusal and back-wiped so nothing puddles and gets tacky.' },
    ],
    detail: [
      {
        heading: 'Semi-transparent beats solid on a deck floor',
        body: [
          'Solid-color stain looks fantastic for one season and then shows every scuff, because it forms a film on a surface that gets walked on. Once that film starts lifting, the only fix is stripping the whole deck again.',
          'Semi-transparent penetrating stain wears by fading rather than peeling, which means the maintenance coat in two or three years is a wash and a recoat instead of a full strip. We will do solid color on a deck floor if you insist, but we will tell you what you are signing up for. Rails and vertical surfaces are a different story — solid holds up fine there.',
        ],
      },
    ],
    pricing: {
      label: 'Typical pricing',
      range: '$3.25 – $7.00 per sq ft',
      note: 'Stripping a failed solid stain roughly doubles the prep cost versus refreshing a bare or semi-transparent deck. Railings, spindles, and stairs are priced separately because they are all hand work.',
    },
    faqs: [
      {
        q: 'How often does a deck need redoing?',
        a: 'Two to four years for the horizontal walking surface in this climate, and five or more for rails and vertical faces. Anyone quoting a ten-year deck finish is describing a wall, not a floor.',
      },
      {
        q: 'My new deck is pressure-treated. When can I stain it?',
        a: 'Wait until it accepts water rather than beading it — usually three to six months for kiln-dried-after-treatment lumber, and up to a year for wet-treated. Staining too early traps mill glaze and moisture and the finish will not hold.',
      },
      {
        q: 'Can you stain composite decking?',
        a: 'Generally no, and you should be sceptical of anyone who says yes. Most composite boards are designed not to accept coatings. We can clean and brighten faded composite, which handles the majority of what people are unhappy about.',
      },
    ],
    related: ['fence-painting', 'pressure-washing', 'exterior-painting'],
  },
  {
    slug: 'fence-painting',
    category: 'exterior',
    name: 'Fence Painting',
    h1: 'Fence Painting & Staining',
    metaTitle: 'Fence Painting & Staining in Cincinnati',
    metaDescription:
      'Fence painting and staining in Cincinnati and Northern Kentucky. Sprayed and back-brushed, both sides, posts and caps included. Free estimate.',
    eyebrow: 'Privacy · Picket · Split rail',
    lead: 'Both sides, all the posts, and the tops of the caps — sprayed and back-brushed so it soaks in rather than sitting on the surface.',
    hero: 'fence',
    intro: [
      'Fences are simple work done at scale, and the corners that get cut are always the same ones: only doing the side facing the house, skipping the post caps, and spraying without back-brushing so the stain never actually penetrates.',
      'The tops of posts and caps are end grain, which drinks water faster than any other part of the fence. That is where rot starts, and it takes about four extra minutes per post to seal properly.',
    ],
    includes: [
      { title: 'Wash and dry', body: 'Full wash to strip mildew, algae, and grey weathering, then a dry-out window before anything goes on.' },
      { title: 'Both sides', body: 'Every panel done on both faces unless a neighbor situation makes it impossible, in which case we say so up front.' },
      { title: 'Posts, caps, and end grain', body: 'Post tops and cut ends sealed properly — the places rot starts and the ones most often skipped.' },
      { title: 'Sprayed and back-brushed', body: 'Sprayed for coverage, then back-brushed into the grain so it penetrates rather than films.' },
      { title: 'Landscaping protected', body: 'Beds, lawn, and anything on the neighbor\'s side masked and covered before the sprayer comes out.' },
    ],
    detail: [
      {
        heading: 'Stain, do not paint, a wood fence',
        body: [
          'Paint on a fence looks crisp for two years and then becomes a maintenance sentence, because a fence moves constantly, holds water at every joint, and has more edges per square foot than anything else on a property. Once film-forming paint starts lifting on a hundred-foot fence, you own that problem forever.',
          'Semi-transparent stain on a fence fades instead of peeling, so the refresh is a wash and a recoat. Vinyl and aluminum fencing is a separate conversation — those we can paint, with a bonding primer.',
        ],
      },
    ],
    pricing: {
      label: 'Typical pricing',
      range: '$3 – $9 per linear foot',
      note: 'Height, whether both sides are accessible, spindle count on picket styles, and how much stripping the old finish needs. Six-foot privacy fence sits at the top of the range.',
    },
    faqs: [
      {
        q: 'How long does a hundred feet of fence take?',
        a: 'One to two days including the wash and dry time, assuming both sides are accessible and the weather cooperates. Stripping a failed old coating adds a day.',
      },
      {
        q: 'Do you do the neighbor\'s side?',
        a: 'Yes, if they are agreeable and we can get access. Sort that out with them before the estimate — a fence stained on one side only weathers unevenly and looks it from the street.',
      },
      {
        q: 'My new fence is bare. Should I wait?',
        a: 'A few months, yes — the same as a new deck. Bare pressure-treated needs to dry to the point where it accepts water instead of beading it. Cedar can usually be done sooner.',
      },
    ],
    related: ['deck-staining', 'pressure-washing', 'exterior-painting'],
  },
  {
    slug: 'front-door-painting',
    category: 'exterior',
    name: 'Front Door & Shutters',
    h1: 'Front Door & Shutter Painting',
    metaTitle: 'Front Door & Shutter Painting in Cincinnati',
    metaDescription:
      'Front door and shutter painting in Cincinnati and Northern Kentucky. Sprayed or hand-finished, hardware removed, one-day turnaround on most doors.',
    eyebrow: 'The cheapest upgrade on the house',
    lead: 'One day, one door, and the biggest visual change per dollar available anywhere on a house.',
    hero: 'frontDoor',
    intro: [
      'A front door is a small surface that everyone looks at directly, which means it takes a level of finish that a wall never would. Hardware comes off rather than getting taped around, the surface gets properly de-glossed, and the coating goes on thin and even.',
      'Shutters are the natural companion job. Faded, chalky vinyl shutters age a house more than almost anything else, and they can be taken down, sprayed, and rehung in the same visit.',
    ],
    includes: [
      { title: 'Hardware removed', body: 'Handles, knockers, kick plates, and hinges off, not taped. Taped hardware always shows a ragged edge.' },
      { title: 'Clean and de-gloss', body: 'Washed, de-glossed, and any weathered or chalking areas sanded back so the new finish grips.' },
      { title: 'Bonding primer where needed', body: 'Fiberglass, metal, and previously stained doors each get the primer they specifically need.' },
      { title: 'Sprayed or hand-finished', body: 'Sprayed for a glass-smooth result, or hand-finished with a fine brush on paneled doors where the profile calls for it.' },
      { title: 'Shutters off and sprayed', body: 'Shutters taken down, sprayed flat, and rehung. Faded vinyl shutters come back to life for very little money.' },
    ],
    detail: [
      {
        heading: 'Deep colors on a sun-facing door',
        body: [
          'A deep navy, black-green, or oxblood front door is a fantastic look, and on a west-facing entry with no porch cover it is also the fastest-fading paint on the house. Dark colors absorb heat, and on a metal or fiberglass door that heat cycling stresses the coating hard.',
          'If your entry gets full afternoon sun, we will point you toward a slightly lighter version of the color you want, or toward an exterior product line rated for deep bases. It is a small conversation that saves a repaint in year three.',
        ],
      },
    ],
    pricing: {
      label: 'Typical pricing',
      range: '$325 – $650 per door · $45 – $95 per shutter',
      note: 'Sprayed finishes and doors needing a color change from dark to light cost more. Doors with sidelights and transoms are priced as a unit.',
    },
    faqs: [
      {
        q: 'Can I use my door the same day?',
        a: 'Yes. We work in sections so the opening is never left unsecured, and the door is closeable the same evening. Full cure takes a couple of weeks, so be gentle with weatherstripping contact at first.',
      },
      {
        q: 'Can you paint a fiberglass door?',
        a: 'Yes. Fiberglass takes paint well with the right bonding primer, and painting a faded stained-look fiberglass door is far cheaper than replacing it.',
      },
      {
        q: 'Will you match my trim color?',
        a: 'We can match any color you bring us — a chip, a can lid, or a scan off the existing trim. Matching aged trim exactly is tricky; usually it looks better to repaint the surround with the door.',
      },
    ],
    related: ['exterior-painting', 'trim-and-door-painting', 'siding-painting'],
  },
  {
    slug: 'garage-floor-epoxy',
    category: 'exterior',
    name: 'Garage Floor Epoxy',
    h1: 'Garage Floor Epoxy Coating',
    metaTitle: 'Garage Floor Epoxy Coating in Cincinnati',
    metaDescription:
      'Garage floor epoxy and polyaspartic coatings in Cincinnati and Northern Kentucky. Diamond-ground prep, flake systems, hot-tire resistant. Free estimate.',
    eyebrow: 'Ground, not etched',
    lead: 'Diamond-ground concrete, a flake broadcast, and a clear topcoat that survives hot tires and road salt.',
    hero: 'epoxy',
    intro: [
      'Almost every failed garage floor coating we are called to replace failed for the same reason: the concrete was acid-etched instead of mechanically ground. Etching leaves a surface that looks clean and has nowhere near the profile a coating needs to key into.',
      'We diamond-grind every floor. It is louder, dustier, and more expensive than etching, and it is the entire difference between a coating that peels off with the hot tires in August and one that is still down in ten years.',
    ],
    includes: [
      { title: 'Diamond grinding', body: 'The full slab mechanically ground to an open profile with dust collection running. Never acid etching.' },
      { title: 'Crack and pit repair', body: 'Cracks chased out and filled with a polyurea repair compound, spalled pits patched and ground flush.' },
      { title: 'Moisture test', body: 'A calcium chloride or sheet test on the slab. Vapor drive pushes coatings off from underneath and it needs to be known about first.' },
      { title: 'Base coat and flake', body: 'A pigmented base coat with vinyl flake broadcast to refusal, then scraped and vacuumed back to a level surface.' },
      { title: 'Polyaspartic topcoat', body: 'A clear polyaspartic topcoat — UV stable, chemical resistant, and unbothered by hot tires. Standard epoxy alone ambers and lifts.' },
    ],
    detail: [
      {
        heading: 'Why hot tires lift cheap coatings',
        body: [
          'A car that has been driven on a summer highway comes home with tires at well over 130°F. Set that on a coating with weak adhesion or a plasticized formulation and the tire chemically softens the coating and pulls it up when you reverse out — the classic ring-shaped peel.',
          'Two things prevent it: mechanical adhesion from grinding, and a polyaspartic or high-solids topcoat that does not soften. Both are on our estimate as line items. Single-part epoxy kits from a big-box store have neither, which is why they usually last a season or two.',
        ],
      },
    ],
    pricing: {
      label: 'Typical two-car garage',
      range: '$2,900 – $5,200',
      note: 'Slab condition is the variable. A sound floor is at the low end; heavy spalling, oil contamination, or an old failed coating that has to come off first pushes it up.',
    },
    faqs: [
      {
        q: 'How long before I can park on it?',
        a: 'Walk on it in 24 hours, park in 72. Polyaspartic cures faster than epoxy but the full chemical resistance takes about a week — keep it clear of parked-and-left vehicles until then.',
      },
      {
        q: 'Is it slippery when wet?',
        a: 'The flake gives some natural texture, and we can broadcast an anti-slip additive into the topcoat. Worth taking if your garage floor is where snow melts off the car every winter.',
      },
      {
        q: 'Can you coat a basement or workshop floor too?',
        a: 'Yes — same system, same prep. Basement slabs need the moisture test taken seriously because below-grade concrete moves more vapor than a garage slab does.',
      },
    ],
    related: ['basement-painting', 'pressure-washing', 'exterior-painting'],
  },
  {
    slug: 'pressure-washing',
    category: 'exterior',
    name: 'Pressure Washing',
    h1: 'Pressure Washing & Soft Washing',
    metaTitle: 'Pressure Washing & Soft Washing in Cincinnati',
    metaDescription:
      'Pressure washing and soft washing in Cincinnati and Northern Kentucky. House exteriors, concrete, decks, and roofs. Standalone or as painting prep.',
    eyebrow: 'The right pressure for the surface',
    lead: 'Soft washing where pressure would do damage, and real pressure where the surface can take it.',
    hero: 'pressureWash',
    intro: [
      'Pressure washing damages more houses than it cleans, because most of what people wash should not be hit at 3,000 psi. Wood siding fuzzes, older mortar erodes, and water driven up under a lap course sits inside the wall for weeks.',
      'Soft washing solves it: low pressure plus a cleaning solution that kills the mildew and algae biologically rather than blasting it off. Concrete, brick, and hardscape can take real pressure, and we use it there.',
    ],
    includes: [
      { title: 'Surface-appropriate method', body: 'Soft wash on siding, wood, and roofing. Full pressure on concrete, pavers, and masonry hardscape.' },
      { title: 'Mildew and algae treatment', body: 'A biological cleaner that kills the organism rather than just knocking the visible growth off, so it stays gone longer.' },
      { title: 'Landscaping protected', body: 'Beds pre-wetted and covered, sensitive plantings shielded, and everything rinsed down afterward.' },
      { title: 'Concrete and hardscape', body: 'Driveways, walks, patios, and pool decks surface-cleaned for even results instead of wand stripes.' },
      { title: 'Painting prep dry time', body: 'When it is prep for a paint job, the schedule includes a real dry-out window before anything is applied.' },
    ],
    detail: [
      {
        heading: 'Never pressure wash a roof',
        body: [
          'Those black streaks on north-facing asphalt shingles are gloeocapsa magma, an algae, and pressure washing a shingle roof to remove it strips the granules that are the shingle\'s entire UV protection. It takes years off the roof to fix a cosmetic problem.',
          'The correct treatment is a low-pressure soft wash with a sodium hypochlorite solution, applied and rinsed. The streaks go within a couple of days and the shingles are untouched. Anyone who offers to pressure wash your roof should be shown the door.',
        ],
      },
    ],
    pricing: {
      label: 'Typical pricing',
      range: '$285 – $650 house wash · $0.20 – $0.45 per sq ft concrete',
      note: 'Size, number of stories, and access. Washing is discounted when it is bundled as prep for a painting job with us.',
    },
    faqs: [
      {
        q: 'Will it kill my plants?',
        a: 'Not the way we do it. Beds get pre-wetted so foliage cannot absorb the solution, sensitive plantings get covered, and everything is rinsed thoroughly afterward. Pre-wetting is the step that matters and it is the one that gets skipped.',
      },
      {
        q: 'How long does a house wash last?',
        a: 'A year or two before mildew begins returning, and less on heavily shaded north elevations. Treating biologically rather than just blasting buys you meaningfully longer.',
      },
      {
        q: 'Do I need to wash before painting?',
        a: 'Always. Paint applied over chalking, mildew, and dirt is bonding to that layer rather than to the siding. It is included in every exterior painting estimate we write, not sold as an add-on.',
      },
    ],
    related: ['exterior-painting', 'siding-painting', 'deck-staining'],
  },

  // ═════════════════════════════════════════════════════════ COMMERCIAL ═══
  {
    slug: 'commercial-painting',
    category: 'commercial',
    name: 'Commercial Painting',
    h1: 'Commercial Painting in Greater Cincinnati',
    metaTitle: 'Commercial Painting Contractor in Cincinnati & N. KY',
    metaDescription:
      'Commercial painting in Greater Cincinnati and Northern Kentucky. Offices, retail, apartments, HOA, and warehouse. After-hours scheduling, fully insured, W-2 crews.',
    eyebrow: 'Office · Retail · Multifamily · Industrial',
    lead: 'After-hours and weekend scheduling, a named point of contact, and crews who are on our payroll and carry our insurance.',
    hero: 'commercial',
    intro: [
      'Commercial work is a scheduling problem more than a painting problem. The coating is straightforward; keeping a store trading, a clinic open, or a tenant in place while it goes on is the part that needs planning.',
      'We schedule around your operating hours rather than ours — nights, weekends, and phased floor-by-floor sequencing — and you get one crew lead as a named contact for the duration rather than a dispatch number.',
    ],
    includes: [
      { title: 'After-hours scheduling', body: 'Nights, weekends, and phased work so trading hours, patient hours, and tenant access are not interrupted.' },
      { title: 'One named contact', body: 'A crew lead assigned to your property for the whole job. You have their number; you are not calling an office.' },
      { title: 'Full insurance and COIs', body: 'General liability and workers\' comp, with certificates issued to your property manager or GC before we mobilize.' },
      { title: 'Low-odor product lines', body: 'Zero-VOC and low-odor coatings so occupied offices, clinics, and units are usable the next morning.' },
      { title: 'Multifamily turn work', body: 'Unit turns priced per unit with a guaranteed turnaround, so vacancy windows stay predictable.' },
      { title: 'Documented punch list', body: 'A written punch walk with your representative, photographed and signed off before we invoice.' },
    ],
    detail: [
      {
        heading: 'What we take on',
        body: [
          'Office suites and corridors, retail interiors and storefronts, medical and dental offices, restaurants, churches, schools, apartment common areas and unit turns, HOA and condo exteriors, and light industrial and warehouse interiors including line striping and safety marking.',
          'What we do not do is high-rise exterior swing-stage work or coatings requiring confined-space or tank certification. If that is your scope, say so early and we will point you to a contractor who specializes in it rather than learning on your building.',
        ],
      },
      {
        heading: 'How commercial pricing works',
        body: [
          'Smaller commercial jobs are quoted the same way residential ones are: measured, itemized, fixed price. Larger and repeat work is usually better handled on a negotiated rate schedule, particularly for property managers running unit turns across multiple buildings.',
          'For anything competitively bid, send the drawings and the finish schedule and we will bid it properly. We would rather no-bid a job we are not the right fit for than win it and disappoint you.',
        ],
      },
    ],
    pricing: {
      label: 'Commercial rates',
      range: 'Quoted per project · unit turns from $340',
      note: 'Occupied-space work, after-hours labor, and lift requirements all factor in. Multi-property and repeat-volume work moves onto a negotiated rate schedule.',
    },
    faqs: [
      {
        q: 'Can you work overnight?',
        a: 'Yes, and a large share of our commercial work is done between 6pm and 6am. Overnight labor carries a premium, which is stated as its own line on the estimate rather than buried in the square-foot rate.',
      },
      {
        q: 'Are your crews insured and background-checked?',
        a: 'Every painter is a W-2 employee, background-checked, uniformed, and covered by our general liability and workers\' comp. We issue certificates of insurance to your property manager or GC before mobilizing.',
      },
      {
        q: 'Do you handle apartment unit turns?',
        a: 'Yes. Unit turns are priced per unit by floor plan with a committed turnaround time, so leasing can schedule move-ins without guessing.',
      },
      {
        q: 'Can you work around our tenants?',
        a: 'That is most of what commercial painting is. We phase by floor or wing, keep egress clear, use low-odor products, and give tenants written notice of what is happening where and when.',
      },
    ],
    related: ['interior-painting', 'exterior-painting', 'garage-floor-epoxy'],
  },
];

export const serviceBySlug = new Map(services.map((s) => [s.slug, s]));

export const interiorServices = services.filter((s) => s.category === 'interior');
export const exteriorServices = services.filter((s) => s.category === 'exterior');
export const commercialServices = services.filter((s) => s.category === 'commercial');

export function getService(slug: string): Service {
  const s = serviceBySlug.get(slug);
  if (!s) throw new Error(`Unknown service slug: ${slug}`);
  return s;
}
