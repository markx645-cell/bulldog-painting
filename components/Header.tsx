'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { site, nav, offer } from '@/content/site';
import Logo from '@/components/Logo';

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  // Top bar alternates: offer for 10s, business info for 5s (offer first).
  const [showOffer, setShowOffer] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setShowOffer((v) => !v), showOffer ? 10000 : 5000);
    return () => clearTimeout(id);
  }, [showOffer]);

  const close = () => {
    setMobileOpen(false);
    setOpenGroup(null);
  };

  const groups = [nav.interior, nav.exterior];

  const renderMobileGroup = (group: {
    label: string;
    href: string;
    children: readonly { label: string; href: string }[];
  }) => {
    const isOpen = openGroup === group.label;
    return (
      <div key={group.label} className="border-b border-white/10">
        <button
          type="button"
          onClick={() => setOpenGroup(isOpen ? null : group.label)}
          className="flex w-full items-center justify-between py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white"
          aria-expanded={isOpen}
        >
          {group.label}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C08A2E"
            strokeWidth="2.5"
            className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {isOpen && (
          <div className="grid grid-cols-1 gap-x-4 pb-3 sm:grid-cols-2">
            {group.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={close}
                className="block py-2 text-sm text-slate-300 hover:text-brass"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        {/* Top utility bar — desktop */}
        <div className="hdr-band hidden text-white md:block">
          <div className="spectrum-bar relative h-9 w-full overflow-hidden font-display text-xs uppercase tracking-widest">
            <div
              className={`absolute inset-0 flex items-center justify-center px-5 transition-all duration-500 ease-in-out sm:px-8 ${
                showOffer ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap text-[13px] font-semibold">Included:</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center whitespace-nowrap rounded-sm bg-brass px-4 py-1 text-[13px] font-bold leading-none text-graphite transition hover:bg-brass-600 hover:text-white"
                >
                  {offer.headline} with every estimate
                </Link>
              </div>
            </div>
            <div
              className={`absolute inset-0 flex items-center px-5 transition-all duration-500 ease-in-out sm:px-8 ${
                showOffer ? 'pointer-events-none translate-y-full opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              <div className="grid w-full grid-cols-3 items-center">
                <span className="justify-self-start whitespace-nowrap">{site.tagline}</span>
                <span className="justify-self-center whitespace-nowrap text-center">
                  Serving {site.serviceArea}
                </span>
                <span className="justify-self-end whitespace-nowrap text-right">{site.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile bar 1 — offer / info */}
        <div className="hdr-band md:hidden">
          <div className="spectrum-bar relative h-9 w-full overflow-hidden font-display text-[11px] font-bold uppercase">
            <div
              className={`absolute inset-0 flex items-center justify-center px-3 transition-all duration-500 ease-in-out ${
                showOffer ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'
              }`}
            >
              <Link
                href="/contact"
                onClick={close}
                className="inline-flex items-center whitespace-nowrap rounded-sm bg-brass px-3 py-1 leading-none text-graphite"
              >
                Free color consultation with every estimate
              </Link>
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-between gap-2 px-3 text-slate-300 transition-all duration-500 ease-in-out ${
                showOffer ? 'pointer-events-none translate-y-full opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              <span className="whitespace-nowrap">{site.serviceArea}</span>
              <span className="whitespace-nowrap">Mon–Fri 7–6</span>
            </div>
          </div>
        </div>

        {/* Mobile bar 2 — quote / phone split */}
        <div className="hdr-band hdr-band-2 md:hidden">
          <div className="flex h-14 items-stretch">
            <Link
              href="/contact"
              onClick={close}
              className="flex w-1/2 items-center justify-center whitespace-nowrap bg-pine px-3 font-display text-sm font-extrabold uppercase tracking-wide text-white"
              style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 24px) 100%, 0 100%)' }}
            >
              Free Estimate
            </Link>
            <a
              href={site.phoneHref}
              className="flex w-1/2 items-center justify-center gap-2 whitespace-nowrap font-display text-base font-extrabold tabular-nums text-white"
            >
              <PhoneIcon className="text-brass" />
              {site.phone}
            </a>
          </div>
        </div>
      </header>

      {/* Main bar — sticky on desktop, scrolls away on mobile.
          Dark so it runs straight into the pine-900 hero every page opens with;
          a white bar here reads as a separate block sitting on top of the page. */}
      <div className="hdr-band hdr-band-main md:sticky md:top-9 md:z-40">
        {/* h-24 at every breakpoint — the band offsets in globals.css assume it */}
        <div className="flex h-24 w-full items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" className="flex shrink-0 items-center" aria-label={site.name} onClick={close}>
            <Logo priority className="h-16 w-auto sm:h-20" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {groups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(group.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={group.href}
                  className="flex items-center gap-1 px-3 py-2 font-display text-sm font-semibold uppercase tracking-wide text-white hover:text-brass"
                >
                  {group.label}
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                    <path d="M6 8L1 3h10z" />
                  </svg>
                </Link>
                {openMenu === group.label && (
                  <div className="absolute left-0 top-full max-h-[70vh] w-72 overflow-y-auto rounded-lg border border-slate-200 bg-white p-2 shadow-lift">
                    {group.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-graphite hover:bg-cream hover:text-pine"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {nav.simple.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 font-display text-sm font-semibold uppercase tracking-wide text-white hover:text-brass"
              >
                {item.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setOpenMenu(nav.about.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={nav.about.href}
                className="flex items-center gap-1 px-3 py-2 font-display text-sm font-semibold uppercase tracking-wide text-white hover:text-brass"
              >
                {nav.about.label}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                  <path d="M6 8L1 3h10z" />
                </svg>
              </Link>
              {openMenu === nav.about.label && (
                <div className="absolute right-0 top-full w-60 rounded-lg border border-slate-200 bg-white p-2 shadow-lift">
                  {nav.about.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-graphite hover:bg-cream hover:text-pine"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <a href={site.phoneHref} className="hidden text-right leading-none lg:block">
              <span className="mb-0.5 block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                Call Us
              </span>
              <span className="block whitespace-nowrap font-display text-2xl font-extrabold tabular-nums text-white transition-colors hover:text-brass">
                {site.phone}
              </span>
            </a>
            <Link href="/contact" className="btn-brass hidden !px-5 !py-2 text-center !leading-tight lg:inline-flex">
              Get Your
              <br />
              Free Estimate
            </Link>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-md bg-pine lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto bg-pine-900 lg:hidden">
          <nav className="container-x flex flex-col py-1">
            {renderMobileGroup(nav.interior)}
            {renderMobileGroup(nav.exterior)}
            {nav.simple.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="border-b border-white/10 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white hover:text-brass"
              >
                {item.label}
              </Link>
            ))}
            {renderMobileGroup(nav.about)}
          </nav>
        </div>
      )}
    </>
  );
}
