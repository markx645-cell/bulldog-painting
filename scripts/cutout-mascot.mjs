// One-off asset step: turn the supplied mascot artwork (white backdrop, no real
// transparency) into a cutout PNG that can sit on any background.
//
//   node scripts/cutout-mascot.mjs
//   DEBUG_DIR=/some/dir node scripts/cutout-mascot.mjs   # also dump mask + preview
//
// Source is mascot.png at the repo root; output is public/photos/mascot.png.
// Re-run this if the mascot art is ever redrawn.
//
// Everything happens in ONE raw RGBA pass. An earlier version decoded the image
// twice — removeAlpha() for colour, ensureAlpha() for the mask — and the two
// buffers did not line up, which punched holes straight through the dog.

import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const SRC = 'mascot.png';
const OUT = 'public/photos/mascot.png';
const DEBUG = process.env.DEBUG_DIR || null;

const lum = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h, channels: c } = info;
if (c !== 4) throw new Error(`expected 4 channels, got ${c}`);

// ---- 1. Border-connected flood fill over near-white pixels ----
// Only backdrop reachable from the edge is cleared, so whites enclosed by the
// black linework — teeth, collar spikes, highlights on the paint can — survive.
const BG_LUM = 228;
const bg = new Uint8Array(w * h);
const stack = new Int32Array(w * h);
let top = 0;

const consider = (x, y) => {
  if (x < 0 || y < 0 || x >= w || y >= h) return;
  const p = y * w + x;
  if (bg[p]) return;
  const i = p * 4;
  if (lum(data[i], data[i + 1], data[i + 2]) < BG_LUM) return;
  bg[p] = 1;
  stack[top++] = p;
};

for (let x = 0; x < w; x++) {
  consider(x, 0);
  consider(x, h - 1);
}
for (let y = 0; y < h; y++) {
  consider(0, y);
  consider(w - 1, y);
}
while (top > 0) {
  const p = stack[--top];
  const x = p % w;
  const y = (p - x) / w;
  consider(x + 1, y);
  consider(x - 1, y);
  consider(x, y + 1);
  consider(x, y - 1);
}

// ---- 1b. Enclosed backdrop the border fill cannot reach ----
// The gap between the dog's legs, and the sliver between the paint can and its
// body, are white regions fully ringed by linework. Both must go, but the dog's
// OWN whites (teeth, spikes, eye highlights, the shine on the can) must not.
//
// Measured on the supplied art, the two groups separate cleanly on both axes:
//   backdrop gaps   area >= 885,  mean luminance >= 253.2
//   the dog's whites area <= 610,  mean luminance <= 248.4
// Requiring BOTH keeps a component alive unless it is large *and* pure white.
// Anything cleared here is logged, so a redraw that breaks the assumption shows
// up instead of silently eating the mascot's teeth.
const MIN_AREA = 800;
const MIN_MEAN = 252;
const isBackdrop = (p) => {
  const i = p * 4;
  return lum(data[i], data[i + 1], data[i + 2]) >= BG_LUM;
};
const visited = Uint8Array.from(bg);
let enclosedCleared = 0;

for (let seed = 0; seed < w * h; seed++) {
  if (visited[seed] || !isBackdrop(seed)) continue;
  const members = [];
  let sum = 0;
  top = 0;
  stack[top++] = seed;
  visited[seed] = 1;
  while (top > 0) {
    const p = stack[--top];
    members.push(p);
    const i = p * 4;
    sum += lum(data[i], data[i + 1], data[i + 2]);
    const x = p % w;
    const y = (p - x) / w;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
      const q = ny * w + nx;
      if (visited[q] || !isBackdrop(q)) continue;
      visited[q] = 1;
      stack[top++] = q;
    }
  }
  const mean = sum / members.length;
  if (members.length >= MIN_AREA && mean >= MIN_MEAN) {
    for (const p of members) bg[p] = 1;
    enclosedCleared++;
    const x = seed % w;
    console.log(
      `  enclosed backdrop cleared: ${members.length}px, mean lum ${mean.toFixed(1)}, near ${x},${(seed - x) / w}`,
    );
  }
}
console.log(`${enclosedCleared} enclosed backdrop region(s) cleared`);

// ---- 2. Write alpha straight back into the same buffer ----
// Kept pixels that are still very light AND touch cleared background are the
// antialiased fringe of the original white backdrop. Fade them in proportion to
// how light they are, or they read as a white halo against a dark section.
const NEIGHBOURS = [
  [1, 0], [-1, 0], [0, 1], [0, -1],
  [1, 1], [-1, -1], [1, -1], [-1, 1],
];
let cleared = 0;
let feathered = 0;
let minX = w;
let minY = h;
let maxX = -1;
let maxY = -1;

for (let p = 0; p < w * h; p++) {
  const i = p * 4;
  if (bg[p]) {
    data[i + 3] = 0;
    cleared++;
    continue;
  }
  const x = p % w;
  const y = (p - x) / w;

  let a = 255;
  const l = lum(data[i], data[i + 1], data[i + 2]);
  if (l > 200) {
    for (const [dx, dy] of NEIGHBOURS) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
      if (bg[ny * w + nx]) {
        a = Math.max(0, Math.min(255, Math.round((255 - l) * 6)));
        feathered++;
        break;
      }
    }
  }
  data[i + 3] = a;

  // Bounding box of everything still visible, for an exact crop.
  if (a > 8) {
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
}

console.log(`cleared ${((100 * cleared) / (w * h)).toFixed(1)}% · feathered ${feathered} fringe px`);
console.log(`art bounds ${minX},${minY} -> ${maxX},${maxY} (${maxX - minX + 1}x${maxY - minY + 1})`);

if (DEBUG) {
  const mask = Buffer.alloc(w * h);
  for (let p = 0; p < w * h; p++) mask[p] = bg[p] ? 0 : 255;
  await sharp(mask, { raw: { width: w, height: h, channels: 1 } })
    .png()
    .toFile(path.join(DEBUG, 'mascot-mask.png'));
}

// Flat cartoon linework quantises well, and the file is served as-is because
// next.config sets images.unoptimized for the static export — so the palette
// encode is worth the few KB of dithering.
const cut = await sharp(data, { raw: { width: w, height: h, channels: 4 } })
  .extract({ left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 })
  .resize({ width: 720, withoutEnlargement: true })
  .png({ compressionLevel: 9, effort: 10, palette: true, colours: 160, dither: 0.6 })
  .toBuffer();

// Write the encoded buffer straight to disk. Passing it back through
// sharp().toFile() re-encodes with default PNG settings and threw away every
// option set above — it landed 45% larger.
await fs.writeFile(OUT, cut);
const m = await sharp(cut).metadata();
console.log(`wrote ${OUT} - ${m.width}x${m.height}, ${(cut.length / 1024).toFixed(0)}KB`);

if (DEBUG) {
  await sharp({
    create: { width: m.width + 80, height: m.height + 80, channels: 4, background: '#110c09' },
  })
    .composite([{ input: cut, top: 40, left: 40 }])
    .png()
    .toFile(path.join(DEBUG, 'mascot-on-ink.png'));
  console.log('debug images in', DEBUG);
}
