// Builds the before/after pair for the wipe slider in BeforeAfterFeature.
//
//   node scripts/align-showcase.mjs
//   DEBUG_DIR=/some/dir node scripts/align-showcase.mjs   # also write seam.png
//
// Sources are bb1.png (before) and bb2.png (after) at the repo root, ALREADY
// ALIGNED BY HAND. So this deliberately does not crop, offset, or reframe
// anything — it only converts to web JPEG. An earlier version computed its own
// crops to correct a mismatch in the original photos; doing that here would
// throw away the manual alignment.
//
// The one invariant the slider depends on is that both frames are identical
// pixel dimensions, because it stacks them and wipes between them. That is
// asserted below rather than assumed.

import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

// NOTE THE MAPPING: bb2 is the BEFORE and bb1 is the AFTER, which is the
// opposite of what the filenames suggest. Checked against the original
// before.jpg / after.jpg: the unpainted wall is olive, so its blue channel sits
// ~20 levels below red and green, while the painted charcoal wall is neutral.
//   before.jpg  blue-deficiency -18.7   bb2.png  -21.7   <- olive, unpainted
//   after.jpg   blue-deficiency  +0.4   bb1.png  +0.6    <- charcoal, painted
// Wired the other way round, the slider would caption the freshly painted wall
// "Before" and the peeling one "After". Swap these two lines if that is somehow
// wanted.
const PAIR = [
  { src: 'bb2.png', out: 'public/photos/showcase-before.jpg', label: 'before' },
  { src: 'bb1.png', out: 'public/photos/showcase-after.jpg', label: 'after' },
];
const DEBUG = process.env.DEBUG_DIR || null;

// ---- Residual scale correction ----
// The hand alignment got the pair very close, but measuring the best local shift
// across a 3x3 grid of the frames showed the vertical offset drifting steadily
// top to bottom rather than staying constant:
//
//   region            best dy    correlation
//   top    (y~83)       -7         0.73
//   centre (y~249)      +7         0.79
//   bottom (y~415)     +21         0.72
//
// Those three sit exactly on dy = -14 + 0.0843*y, which is the signature of a
// ~8.4% vertical SCALE difference, not an offset — the after was shot a little
// closer. No single translation can fix that, which is why nudging the images
// never quite worked.
//
// Inverting the fit, the before needs sampling at y_before = 0.9223*y_after + 13
// (and about 3px across), then stretching back to full height. Applied to the
// before because the after does not have the extra field of view to give.
// SCALE_FIX = null disables all of this and ships the sources untouched.
const SCALE_FIX = { cropTop: 13, cropHeight: 459, dx: 3, margin: 4 };

const frames = [];
for (const { src, out, label } of PAIR) {
  const buf = await fs.readFile(src);
  const meta = await sharp(buf).metadata();
  let pipe = sharp(buf);

  if (SCALE_FIX) {
    const { cropTop, cropHeight, dx, margin } = SCALE_FIX;
    const width = meta.width - dx;
    if (label === 'before') {
      // Undo the scale difference, then trim the margin.
      const fixed = await sharp(buf)
        .extract({ left: 0, top: cropTop, width, height: cropHeight })
        .resize({ width, height: meta.height, fit: 'fill' })
        .toBuffer();
      pipe = sharp(fixed).extract({
        left: margin,
        top: margin,
        width: width - margin * 2,
        height: meta.height - margin * 2,
      });
    } else {
      // Shifted by dx so the two share a coordinate frame, then same margin.
      pipe = sharp(buf).extract({
        left: dx + margin,
        top: margin,
        width: width - margin * 2,
        height: meta.height - margin * 2,
      });
    }
  }

  // Quality is a little high for the pixel count on purpose: these are small
  // originals, so there is no detail to spare.
  const jpeg = await pipe.jpeg({ quality: 88, mozjpeg: true }).toBuffer();
  await fs.writeFile(out, jpeg);
  const final = await sharp(jpeg).metadata();
  frames.push({ label, src, out, w: final.width, h: final.height, bytes: jpeg.length });
  console.log(
    `${label.padEnd(7)} ${src} -> ${out}  ${final.width}x${final.height}  ${(jpeg.length / 1024).toFixed(0)}KB`,
  );
}

const [b, a] = frames;
if (b.w !== a.w || b.h !== a.h) {
  console.error(
    `\nFAIL: frames must match exactly for the wipe to line up.\n` +
      `  ${b.src} is ${b.w}x${b.h}\n  ${a.src} is ${a.w}x${a.h}\n` +
      `Fix the sources — do not paper over it with a crop here, that is what ` +
      `destroys hand alignment.`,
  );
  process.exit(1);
}
console.log(`\nboth frames ${b.w}x${b.h} — aspect ${(b.w / b.h).toFixed(4)}`);
console.log(`set the slider box in components/BeforeAfterFeature.tsx to aspect-[${b.w}/${b.h}]`);

if (DEBUG) {
  // The seam as a visitor sees it: before on the left, after on the right, with
  // rules so any vertical drift is measurable rather than guessed at.
  const half = Math.floor(b.w / 2);
  const left = await sharp(await fs.readFile(b.out))
    .extract({ left: 0, top: 0, width: half, height: b.h })
    .toBuffer();
  const right = await sharp(await fs.readFile(a.out))
    .extract({ left: half, top: 0, width: b.w - half, height: b.h })
    .toBuffer();

  const rules = Array.from({ length: 9 }, (_, i) => ({
    input: {
      create: {
        width: b.w,
        height: 2,
        channels: 4,
        background: { r: 255, g: 0, b: 0, alpha: 0.5 },
      },
    },
    top: Math.round(((i + 1) * b.h) / 10),
    left: 0,
  }));

  await sharp({ create: { width: b.w, height: b.h, channels: 3, background: '#000' } })
    .composite([
      { input: left, top: 0, left: 0 },
      { input: right, top: 0, left: half },
      ...rules,
    ])
    .png()
    .toFile(path.join(DEBUG, 'seam.png'));
  console.log('seam preview:', path.join(DEBUG, 'seam.png'));
}
