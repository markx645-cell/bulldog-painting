// Imports the real branded job photography from human/ into public/photos/.
//
//   node scripts/import-job-photos.mjs
//
// These replace Pexels stock for the slots listed below. The output filenames
// deliberately do NOT match any slot in scripts/fetch-photos.mjs — the same
// guard used for the homepage hero — so re-running the stock fetcher can never
// overwrite real photography with a stock image. The matching slots have also
// been removed from that script.
//
// Cards crop to 4:3 (ServiceShowcase) and service hero panels crop to roughly
// 3:4 on desktop, so the two portrait sources below lose some top and bottom on
// cards. That is noted per entry rather than fixed by cropping here, because the
// framing that survives is still the subject.

import sharp from 'sharp';
import fs from 'node:fs/promises';

const JOBS = [
  { src: 'human/interior.png', out: 'job-interior', note: 'landscape 1195x896' },
  { src: 'human/exterior.png', out: 'job-exterior', note: 'PORTRAIT 1122x1402 — crops on 4:3 cards' },
  { src: 'human/kitchen cabinet.png', out: 'job-cabinets', note: 'landscape 1536x1024' },
  { src: 'human/popcorn ceiling.png', out: 'job-popcorn', note: 'PORTRAIT 896x1200 — crops on 4:3 cards' },
  { src: 'human/drywall.jpg', out: 'job-drywall', note: 'landscape 1024x529 — supplied as .jpg; the earlier .png was a PSD in disguise' },
  { src: 'human/basement.png', out: 'job-floor-coating', note: 'landscape 1431x736 — floor coating' },
  { src: 'human/group painters.png', out: 'crew-team', note: 'landscape 1386x1086 — full crew' },
];

for (const job of JOBS) {
  const buf = await fs.readFile(job.src);
  const meta = await sharp(buf).metadata();
  const out = await sharp(buf)
    .resize({ width: Math.min(1400, meta.width), withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  const path = `public/photos/${job.out}.jpg`;
  await fs.writeFile(path, out);
  const m = await sharp(out).metadata();
  console.log(
    `${job.out.padEnd(18)} ${String(m.width + 'x' + m.height).padEnd(11)} ${(out.length / 1024).toFixed(0).padStart(4)}KB   ${job.note}`,
  );
}
console.log(`\n${JOBS.length} real job photos imported`);
