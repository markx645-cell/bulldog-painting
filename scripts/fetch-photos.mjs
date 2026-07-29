// Fetches stock photography from Pexels for every image slot on the site.
//
//   PEXELS_KEY=xxxx node scripts/fetch-photos.mjs
//   PEXELS_KEY=xxxx node scripts/fetch-photos.mjs homeHero cabinets   # subset
//
// Writes compressed JPEGs to public/photos/<key>.jpg and prints an attribution
// table. NEVER hardcode the key in this file — the repo is public.
//
// Each slot lists several queries. We take the first query that returns a photo
// wide enough for the slot, so a bad match on one search term does not leave a
// hole. `pick` chooses which result to take, since the top hit for a generic
// query is often a stock-y close-up rather than a usable scene.

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const KEY = process.env.PEXELS_KEY;
if (!KEY) {
  console.error('PEXELS_KEY env var is required. Do not commit the key.');
  process.exit(1);
}

const OUT_DIR = path.join(process.cwd(), 'public', 'photos');
fs.mkdirSync(OUT_DIR, { recursive: true });

/** `file` must match the filename content/media.ts asks for.
 *  orientation: landscape | portrait | square */
const SLOTS = {
  // Wide, short strip — it gets stretched across the header bands, so the
  // source is cropped near that aspect to keep the distortion invisible.
  // Pinned by photo ID: search results drift, and this one was chosen because
  // it is evenly toned enough to keep white nav text legible across the whole
  // width. Do not swap it for a search without checking that again.
  headerBg: {
    file: 'header-bg',
    id: 8337525, // deep brushed green, Adam Balcombe
    size: { width: 2400, height: 340 },
    queries: ['dark green painted wall texture'],
  },
  homeHero: {
    file: 'home-hero',
    queries: ['painter painting wall roller interior', 'house painter working indoors', 'man painting wall roller'],
  },
  crew: {
    file: 'crew',
    queries: ['construction workers team portrait', 'painters team working house', 'contractor crew van'],
  },
  colorConsult: {
    file: 'color-consult',
    queries: ['paint color swatches fan deck', 'color palette samples wall', 'paint samples choosing color'],
  },
  serviceAreaMap: {
    file: 'service-area-map',
    queries: ['cincinnati ohio skyline river', 'cincinnati city aerial', 'ohio river bridge city'],
  },
  processHero: {
    file: 'process-hero',
    queries: ['room prepared for painting drop cloth', 'empty room renovation plastic covering', 'painting preparation masking tape'],
  },
  interior: {
    file: 'interior-painting',
    queries: ['freshly painted living room interior', 'bright modern living room white walls', 'painted interior room'],
  },
  exterior: {
    file: 'exterior-painting',
    queries: ['house exterior painted siding', 'american home exterior facade', 'suburban house exterior'],
  },
  cabinets: {
    file: 'cabinet-painting',
    queries: ['painted kitchen cabinets modern', 'green kitchen cabinets', 'kitchen cabinetry interior'],
  },
  commercial: {
    file: 'commercial-painting',
    queries: ['office interior corridor', 'commercial building interior painting', 'modern office hallway'],
  },
  trimDoors: {
    file: 'trim-and-door-painting',
    queries: ['painting door trim brush', 'white baseboard trim detail', 'painting wooden door'],
  },
  ceilings: {
    file: 'ceiling-painting',
    queries: ['painting ceiling roller', 'white ceiling interior', 'ceiling paint work'],
  },
  popcorn: {
    file: 'popcorn-ceiling-removal',
    queries: ['ceiling repair scraping', 'drywall ceiling work', 'renovation ceiling removal'],
  },
  drywall: {
    file: 'drywall-repair',
    queries: ['drywall repair plaster trowel', 'plastering wall putty knife', 'drywall patching work'],
  },
  wallpaper: {
    file: 'wallpaper-removal',
    queries: ['removing wallpaper wall', 'wallpaper stripping renovation', 'peeling wallpaper'],
  },
  basement: {
    file: 'basement-painting',
    queries: ['finished basement interior', 'basement room concrete wall', 'basement renovation'],
  },
  siding: {
    file: 'siding-painting',
    queries: ['house siding detail exterior', 'lap siding wall house', 'wooden siding facade'],
  },
  brick: {
    file: 'brick-painting',
    queries: ['painted brick house exterior', 'white brick wall house', 'brick facade home'],
  },
  deck: {
    file: 'deck-staining',
    queries: ['wooden deck staining', 'wood deck backyard', 'staining deck boards'],
  },
  fence: {
    file: 'fence-painting',
    queries: ['wooden fence backyard', 'painting fence garden', 'wood privacy fence'],
  },
  frontDoor: {
    file: 'front-door-painting',
    queries: ['painted front door house entrance', 'colorful front door home', 'house entrance door'],
    orientation: 'portrait',
  },
  epoxy: {
    file: 'garage-floor-epoxy',
    queries: ['garage interior floor clean', 'empty garage floor', 'epoxy floor coating'],
  },
  pressureWash: {
    file: 'pressure-washing',
    queries: ['pressure washing house siding', 'power washing driveway', 'pressure washer cleaning'],
  },
  painterDay: {
    file: 'painter-for-a-day',
    queries: ['painter painting trim brush indoors', 'man painting room brush', 'painter working alone room'],
  },
  // Posters for the video-testimonial cards. Portrait, person-facing — a photo
  // of a room reads wrong on a card that claims to be someone talking.
  videoPoster1: {
    file: 'video-poster-1',
    orientation: 'portrait',
    queries: ['woman smiling at home portrait', 'happy woman living room portrait'],
  },
  videoPoster2: {
    file: 'video-poster-2',
    orientation: 'portrait',
    queries: ['man smiling at home portrait', 'happy man house portrait'],
  },
  videoPoster3: {
    file: 'video-poster-3',
    orientation: 'portrait',
    queries: ['couple at home smiling', 'couple standing house portrait'],
  },
  videoPoster4: {
    file: 'video-poster-4',
    orientation: 'portrait',
    queries: ['senior woman smiling home', 'older man portrait home'],
  },
  cost: {
    file: 'painting-cost',
    queries: ['calculator invoice paperwork desk', 'estimate document clipboard', 'budget planning documents'],
  },
};

/** Before/after gallery — 9 pairs. Both halves come from the same query family
 *  so the pair at least reads as the same kind of space. */
const PAIRS = [
  { slug: 'ba-1', before: 'old worn living room interior', after: 'freshly painted living room' },
  { slug: 'ba-2', before: 'old house exterior peeling paint', after: 'painted house exterior' },
  { slug: 'ba-3', before: 'old wooden kitchen cabinets', after: 'painted white kitchen cabinets' },
  { slug: 'ba-4', before: 'old brick wall weathered', after: 'painted brick house white' },
  { slug: 'ba-5', before: 'empty room before renovation', after: 'bright painted bedroom' },
  { slug: 'ba-6', before: 'weathered wooden deck grey', after: 'stained wooden deck' },
  { slug: 'ba-7', before: 'old victorian house exterior', after: 'restored victorian house painted' },
  { slug: 'ba-8', before: 'empty office space', after: 'modern painted office interior' },
  { slug: 'ba-9', before: 'dirty garage floor concrete', after: 'clean garage interior floor' },
];

const attribution = [];

async function search(query, orientation = 'landscape', perPage = 12) {
  const url =
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}` +
    `&per_page=${perPage}&orientation=${orientation}`;
  const res = await fetch(url, { headers: { Authorization: KEY } });
  if (res.status === 429) {
    console.error('  rate limited — waiting 20s');
    await new Promise((r) => setTimeout(r, 20000));
    return search(query, orientation, perPage);
  }
  if (!res.ok) {
    console.error(`  search failed ${res.status} for "${query}"`);
    return [];
  }
  const data = await res.json();
  return data.photos ?? [];
}

async function download(photo, outPath, { width, height }) {
  const imgUrl = photo.src.large2x || photo.src.original || photo.src.large;
  const imgRes = await fetch(imgUrl);
  if (!imgRes.ok) throw new Error(`download failed ${imgRes.status}`);
  const buf = Buffer.from(await imgRes.arrayBuffer());

  const out = await sharp(buf)
    .rotate()
    .resize({ width, height, fit: 'cover', position: 'attention', withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer();

  fs.writeFileSync(outPath, out);
  const meta = await sharp(out).metadata();
  return { bytes: out.length, w: meta.width, h: meta.height };
}

async function grab(name, { queries, pick = 0, orientation = 'landscape', file, id }, size) {
  const outPath = path.join(OUT_DIR, `${file ?? name}.jpg`);

  // An explicit photo ID wins over search — used where a specific image was
  // chosen deliberately and must not drift when results change.
  if (id) {
    const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
      headers: { Authorization: KEY },
    });
    if (res.ok) {
      const photo = await res.json();
      const info = await download(photo, outPath, size);
      attribution.push({
        slot: name,
        file: `${file ?? name}.jpg`,
        photographer: photo.photographer,
        url: photo.url,
        query: `pinned id ${id}`,
      });
      console.log(`OK  ${name.padEnd(16)} ${info.w}x${info.h} ${(info.bytes / 1024).toFixed(0)}KB  by ${photo.photographer} (pinned)`);
      return true;
    }
    console.error(`  ${name}: pinned id ${id} failed (${res.status}), falling back to search`);
  }

  for (const q of queries) {
    const photos = await search(q, orientation);
    const photo = photos[pick] ?? photos[0];
    if (!photo) continue;
    try {
      const info = await download(photo, outPath, size);
      attribution.push({
        slot: name,
        file: `${file ?? name}.jpg`,
        photographer: photo.photographer,
        url: photo.url,
        query: q,
      });
      console.log(`OK  ${name.padEnd(16)} ${info.w}x${info.h} ${(info.bytes / 1024).toFixed(0)}KB  by ${photo.photographer}`);
      return true;
    } catch (err) {
      console.error(`  ${name}: ${err.message}`);
    }
  }
  console.error(`MISS ${name} — no usable result, placeholder stays`);
  return false;
}

const only = process.argv.slice(2);
const wanted = (k) => only.length === 0 || only.includes(k);

for (const [name, cfg] of Object.entries(SLOTS)) {
  if (!wanted(name)) continue;
  const size =
    cfg.size ??
    (cfg.orientation === 'portrait' ? { width: 1000, height: 1250 } : { width: 1600, height: 1067 });
  await grab(name, cfg, size);
}

for (const pair of PAIRS) {
  if (!wanted(pair.slug)) continue;
  for (const phase of ['before', 'after']) {
    await grab(`${pair.slug}-${phase}`, { queries: [pair[phase]] }, { width: 1000, height: 750 });
  }
}

// Merge with any existing credits, so running a subset does not wipe the rest.
const ATTRIB_PATH = path.join(OUT_DIR, 'ATTRIBUTION.md');
if (fs.existsSync(ATTRIB_PATH)) {
  const fetched = new Set(attribution.map((a) => a.slot));
  for (const line of fs.readFileSync(ATTRIB_PATH, 'utf8').split('\n')) {
    const m = line.match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$/);
    if (!m || m[1] === 'Slot' || m[1].startsWith('---')) continue;
    if (!fetched.has(m[1])) {
      attribution.push({ slot: m[1], file: m[2], photographer: m[3], url: m[4] });
    }
  }
}
attribution.sort((a, b) => a.slot.localeCompare(b.slot));

fs.writeFileSync(
  ATTRIB_PATH,
  '# Photo credits\n\n' +
    'Stock photography from [Pexels](https://www.pexels.com), free to use under the\n' +
    '[Pexels licence](https://www.pexels.com/license/). Credit is not required but is\n' +
    'good practice. **Replace these with real job photos when available** — stock\n' +
    'images of other people\'s work are a placeholder, not a portfolio.\n\n' +
    '| Slot | File | Photographer | Source |\n|---|---|---|---|\n' +
    attribution
      .map((a) => `| ${a.slot} | ${a.file} | ${a.photographer} | ${a.url} |`)
      .join('\n') +
    '\n',
  'utf8',
);


console.log(`\nDone. ${attribution.length} photos in public/photos/, credits in ATTRIBUTION.md`);
