import Link from 'next/link';
import Photo from '@/components/Photo';

const swatches = [
  { name: 'Pine Shade', hex: '#1B5E4B' },
  { name: 'Weathered Brass', hex: '#C08A2E' },
  { name: 'Riverbank Clay', hex: '#A9755C' },
  { name: 'Ohio Fog', hex: '#B9C0BC' },
  { name: 'Chalk Cream', hex: '#EFE7D8' },
  { name: 'Graphite', hex: '#22282E' },
];

/** Paint-specific section — the thing a painting site has that a window site
 *  does not. Doubles as the visual anchor on the homepage. */
export default function ColorConsult() {
  return (
    <section className="section bg-white">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lift ring-1 ring-black/5">
          <Photo name="colorConsult" className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>

        <div>
          <p className="eyebrow-dark">Included with every estimate</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-graphite sm:text-4xl">
            Pick the color in your own light
          </h2>
          <p className="mt-4 leading-relaxed text-slate">
            A two-inch chip under fluorescent store lighting tells you almost nothing about how a color will
            look on your north-facing living room wall at four in the afternoon. So we stop guessing: our
            consultant brushes out large samples on your actual walls and you live with them for a couple of
            days before anything is ordered.
          </p>
          <p className="mt-4 leading-relaxed text-slate">
            It costs you nothing and it is the single cheapest way to avoid the most expensive mistake in
            painting — finishing a house in a color you do not like.
          </p>

          <ul className="mt-7 flex flex-wrap gap-3" aria-label="Example color palette">
            {swatches.map((s) => (
              <li key={s.name} className="text-center">
                <span
                  className="block h-14 w-14 rounded-lg ring-1 ring-black/10"
                  style={{ backgroundColor: s.hex }}
                  aria-hidden="true"
                />
                <span className="mt-1.5 block text-[10px] uppercase tracking-wide text-slate">
                  {s.name}
                </span>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="btn-primary mt-8">
            Book a Color Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
