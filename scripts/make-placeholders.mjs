// Generates the placeholder SVGs referenced by content/media.ts.
// Run with: node scripts/make-placeholders.mjs
//
// These exist purely so the site renders complete while waiting on real
// photography. Delete /public/placeholder once every entry in content/media.ts
// points at a real photo.

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'placeholder');
mkdirSync(outDir, { recursive: true });

// Palette pulled from tailwind.config.ts
const PALETTE = [
  ['#1B5E4B', '#0B261E'],
  ['#2F7D66', '#103A2E'],
  ['#C08A2E', '#8A6220'],
  ['#4A5561', '#22282E'],
  ['#A9755C', '#6E4636'],
  ['#B9C0BC', '#7E8A85'],
];

/** Deterministic index from a name so each slot keeps a stable color. */
function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

function svg(name, label, w = 1200, h = 800) {
  const [a, b] = PALETTE[hash(name) % PALETTE.length];
  const id = `g${hash(name) % 9999}`;
  const stripe = hash(name + 'x') % 2 === 0 ? 34 : 46;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
    <pattern id="p${id}" width="${stripe}" height="${stripe}" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
      <rect width="${stripe}" height="${stripe}" fill="none"/>
      <rect width="${stripe / 2}" height="${stripe}" fill="#ffffff" opacity="0.05"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#${id})"/>
  <rect width="${w}" height="${h}" fill="url(#p${id})"/>
  <g transform="translate(${w / 2} ${h / 2})" text-anchor="middle" fill="#ffffff">
    <text y="-14" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="${Math.round(w / 26)}" font-weight="700" opacity="0.94">${label}</text>
    <text y="${Math.round(w / 34)}" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="${Math.round(w / 60)}" letter-spacing="3" opacity="0.62">PLACEHOLDER — REPLACE IN content/media.ts</text>
  </g>
</svg>
`;
}

const slots = [
  ['home-hero', 'Home Hero'],
  ['crew', 'The Crew'],
  ['color-consult', 'Color Consultation'],
  ['service-area-map', 'Service Area Map'],
  ['process-hero', 'Prepped Room'],
  ['interior-painting', 'Interior Painting'],
  ['exterior-painting', 'Exterior Painting'],
  ['cabinet-painting', 'Cabinet Painting'],
  ['commercial-painting', 'Commercial Painting'],
  ['trim-and-door-painting', 'Trim & Doors'],
  ['ceiling-painting', 'Ceilings'],
  ['popcorn-ceiling-removal', 'Popcorn Removal'],
  ['drywall-repair', 'Drywall Repair'],
  ['wallpaper-removal', 'Wallpaper Removal'],
  ['basement-painting', 'Basement Painting'],
  ['siding-painting', 'Siding Painting'],
  ['brick-painting', 'Brick & Masonry'],
  ['deck-staining', 'Deck Staining'],
  ['fence-painting', 'Fence Painting'],
  ['front-door-painting', 'Front Door & Shutters'],
  ['garage-floor-epoxy', 'Garage Floor Epoxy'],
  ['pressure-washing', 'Pressure Washing'],
  ['painting-cost', 'Painting Cost'],
];

for (const [file, label] of slots) {
  writeFileSync(join(outDir, `${file}.svg`), svg(file, label), 'utf8');
}

// Before/after gallery pairs
for (let i = 1; i <= 9; i++) {
  writeFileSync(join(outDir, `ba-${i}-before.svg`), svg(`ba-${i}-before`, `Project ${i} — Before`, 800, 600), 'utf8');
  writeFileSync(join(outDir, `ba-${i}-after.svg`), svg(`ba-${i}-after`, `Project ${i} — After`, 800, 600), 'utf8');
}

// Standalone logo file referenced by content/media.ts (kept in sync with components/Logo.tsx)
writeFileSync(
  join(root, 'public', 'logo.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="256" height="256" role="img" aria-label="Bulldog Painting">
  <rect width="48" height="48" rx="10" fill="#1B5E4B"/>
  <path d="M13 30v-4a3 3 0 0 1 3-3h9" stroke="#EFDDBB" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  <path d="M13 30v7" stroke="#EFDDBB" stroke-width="2.4" stroke-linecap="round"/>
  <rect x="24" y="18" width="14" height="10" rx="2.4" fill="#C08A2E"/>
  <path d="M17 9c-2.4 0-4 1.4-4.4 3.2-1.5.4-2.4 1.6-2.4 3.1 0 1.9 1.4 3.2 3.2 3.4.5 1.5 2 2.5 3.9 2.5h5c1.9 0 3.4-1 3.9-2.5 1.8-.2 3.2-1.5 3.2-3.4 0-1.5-.9-2.7-2.4-3.1C26.6 10.4 25 9 22.6 9z" fill="#EFDDBB"/>
  <circle cx="16.6" cy="14.4" r="1.15" fill="#1B5E4B"/>
  <circle cx="23" cy="14.4" r="1.15" fill="#1B5E4B"/>
  <path d="M18.2 17.8h3.2" stroke="#1B5E4B" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`,
  'utf8',
);

console.log(`Wrote ${slots.length + 18} placeholders to public/placeholder/ and public/logo.svg`);
