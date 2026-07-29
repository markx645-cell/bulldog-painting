// One-off: rename Tailwind colour tokens from the pine/brass palette to the
// black/red/white one. Only rewrites tokens preceded by a colour utility, so
// prose like "oak and pine" or "brass hardware" is left alone.
//
//   node scripts/retheme.mjs [--dry]

import fs from 'node:fs';
import path from 'node:path';

const DRY = process.argv.includes('--dry');

const TOKENS = {
  'pine-900': 'ink',
  'pine-800': 'ink-800',
  'pine-700': 'crimson-700',
  'pine-600': 'crimson-600',
  pine: 'crimson',
  'brass-600': 'crimson-600',
  'brass-200': 'bone',
  brass: 'crimson',
  'graphite-800': 'ink-800',
  'graphite-700': 'ink-700',
  graphite: 'ink',
  'slate-400': 'steel-400',
  'slate-300': 'steel-300',
  'slate-200': 'steel-200',
  'slate-100': 'steel-100',
  slate: 'steel',
};

const UTIL =
  '(?:text|bg|border|ring|ring-offset|from|via|to|divide|fill|stroke|outline|decoration|shadow|accent|placeholder)';
const RE = new RegExp(`(${UTIL}-)(pine|brass|graphite|slate)(-\\d{2,3})?\\b`, 'g');

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (!/^(node_modules|\.next|out|\.git|\.vercel)$/.test(e.name)) walk(p);
    } else if (/\.(tsx?|css)$/.test(e.name)) {
      files.push(p);
    }
  }
})(process.cwd());

let changed = 0;
let swaps = 0;
const perFile = [];

for (const f of files) {
  const orig = fs.readFileSync(f, 'utf8');
  let n = 0;
  const next = orig.replace(RE, (m, util, tok, shade) => {
    const key = tok + (shade ?? '');
    const to = TOKENS[key];
    if (!to) return m;
    n += 1;
    return util + to;
  });
  if (n > 0) {
    swaps += n;
    changed += 1;
    perFile.push(`${n.toString().padStart(4)}  ${path.relative(process.cwd(), f)}`);
    if (!DRY) fs.writeFileSync(f, next);
  }
}

console.log(perFile.join('\n'));
console.log(`\n${DRY ? '[dry run] ' : ''}${swaps} token swaps across ${changed} files`);
