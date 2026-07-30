import Photo from '@/components/Photo';
import { brandStatement } from '@/content/site';

/**
 * Brand statement with the mascot alongside it. Sits directly under the hero,
 * above TrustBar. Copy lives in `brandStatement` in content/site.ts.
 *
 * No CTAs here on purpose — the hero's two buttons are a few hundred pixels up
 * the page, and repeating them that soon gives the eye nothing new.
 *
 * TrustBar and ServiceCircles below are both bg-white too, so this carries
 * TrustBar's bottom border or the three run together as one white slab.
 *
 * The mascot PNG is a cutout on transparency, so it needs `object-contain` in a
 * fixed-ratio box rather than the `object-cover` every photographic image on the
 * site uses — cover would crop the dog's ears and brush off.
 *
 * Mobile stacks mascot-above-copy; desktop is copy-left, mascot-right. That is
 * CSS order only, not DOM order — see the comment on the mascot block.
 */
export default function BrandStatement() {
  return (
    <section className="section border-b border-steel-200 bg-white">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* ---- Statement ---- */}
          <div>
            <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              {brandStatement.headline}
            </h2>
            <p className="mt-3 font-display text-base font-bold uppercase leading-snug tracking-wide text-crimson sm:text-lg">
              {brandStatement.sub}
            </p>

            <div className="mt-6 space-y-4">
              {brandStatement.body.map((p, i) => (
                <p key={i} className="leading-relaxed text-steel">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* ---- Mascot ----
              Ratio matches the cutout (720x696) so the box never letterboxes.

              `order-first` puts the dog above the copy on mobile; `lg:order-none`
              drops it back to source order at desktop, where the two-column grid
              puts it on the right. It stays second in the DOM so screen readers
              and crawlers still hit the heading before a decorative image.

              Capped narrower than the old max-w-sm: sitting above the headline
              now, a 384px-tall image pushed the H2 most of a phone screen down. */}
          <div className="relative order-first mx-auto aspect-[720/696] w-full max-w-[17rem] sm:max-w-xs lg:order-none lg:max-w-none">
            <Photo
              name="mascot"
              sizes="(min-width: 1024px) 40vw, 272px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
