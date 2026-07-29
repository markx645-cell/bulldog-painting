import Link from 'next/link';
import { site, nav, certifications } from '@/content/site';
import { serviceCounties, featuredPlaces, communityCount } from '@/content/areas';
import Logo from '@/components/Logo';

export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-pine-900 text-slate-300">
      <div className="swatch-strip h-1.5 w-full" aria-hidden="true" />

      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center" aria-label={site.name}>
            <Logo className="h-28 w-auto" />
          </Link>
          <p className="mt-4 font-display text-sm uppercase tracking-widest text-brass">{site.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Family-owned painting contractor serving Cincinnati and the surrounding areas since{' '}
            {site.founded}. W-2 crews, written pricing, and a five-year workmanship warranty.
          </p>
          <div className="mt-5 space-y-1 text-sm">
            <a href={site.phoneHref} className="block font-bold text-white hover:text-brass">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block hover:text-white">
              {site.email}
            </a>
            <p className="pt-2">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-white">Interior</h4>
          <ul className="space-y-2 text-sm">
            {nav.interior.children.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-white">Exterior</h4>
          <ul className="space-y-2 text-sm">
            {nav.exterior.children.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-white">Company</h4>
          <ul className="space-y-2 text-sm">
            {[...nav.about.children, ...nav.simple].map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Coverage list — counties and featured communities from content/areas.ts */}
      <div className="border-t border-white/10">
        <div className="container-x py-8">
          <h4 className="mb-3 font-display text-sm uppercase tracking-widest text-white">
            <Link href="/service-areas" className="hover:text-brass">
              Areas We Serve
            </Link>
          </h4>
          <p className="text-sm text-slate-400">
            {serviceCounties.map((c) => `${c.name}, ${c.state}`).join(' · ')}
          </p>
          <p className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-sm">
            {featuredPlaces.map((p) => (
              <span key={p}>{p}</span>
            ))}
            <Link href="/service-areas" className="font-semibold text-brass hover:underline">
              + all {communityCount} communities
            </Link>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-5 gap-y-2 py-5 text-[11px] uppercase tracking-widest text-slate-400">
          {certifications.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex items-center justify-center py-6 text-xs">
          <p>
            © {year} {site.name}. Licensed &amp; insured. EPA Lead-Safe certified.
          </p>
        </div>
      </div>
    </footer>
  );
}
