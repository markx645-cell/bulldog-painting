'use client';

import { useState } from 'react';
import Link from 'next/link';
import { site, nav } from '@/content/site';
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
            stroke="#d01d21"
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
                className="block py-2 text-sm text-steel-300 hover:text-crimson"
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
        {/* Top utility bar — desktop.
            This used to cross-fade between an offer panel and the business info
            on a timer. The offer was the color consultation, which the company
            does not run, so there is nothing to alternate with — the info is
            simply shown. Do not reintroduce the rotation for a single panel. */}
        <div className="hdr-band hidden text-white md:block">
          <div className="spectrum-bar relative h-9 w-full overflow-hidden font-display text-xs uppercase tracking-widest">
            {/* Centred, not a left/right split. This started as a fix for the
                logo overhanging into this bar; the logo no longer does that, but
                centred is the better balance for two short items either way. */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 px-5 sm:px-8">
              <span className="whitespace-nowrap">Serving {site.serviceArea}</span>
              {/* Hours only from lg. At md the pair is wide enough that centring
                  still puts its left edge under the logo. */}
              <span aria-hidden="true" className="hidden text-white/40 lg:inline">
                ·
              </span>
              <span className="hidden whitespace-nowrap lg:inline">{site.hours}</span>
            </div>
          </div>
        </div>

        {/* Mobile bar 1 — business info */}
        <div className="hdr-band md:hidden">
          <div className="spectrum-bar relative h-9 w-full overflow-hidden font-display text-[11px] font-bold uppercase">
            <div className="absolute inset-0 flex items-center justify-between gap-2 px-3 text-steel-300">
              <span className="whitespace-nowrap">{site.serviceArea}</span>
              <span className="whitespace-nowrap">Mon–Fri 7–6</span>
            </div>
          </div>
        </div>

        {/* Mobile bar 2 — quote / phone split */}
        {/* 44px, down from 56. If this height changes, --hdr-h and the
            hdr-band-main --hdr-y offset in globals.css must change with it or the
            shared background image stops lining up across the three bands.
            Mobile total is 36 + 44 + 58 = 138px.
            44px is also the floor here — below that this stops being a reliable
            tap target on a phone. */}
        <div className="hdr-band hdr-band-2 md:hidden">
          <div className="flex h-11 items-stretch">
            <Link
              href="/contact"
              onClick={close}
              className="flex w-1/2 items-center justify-center whitespace-nowrap bg-crimson px-3 font-display text-[0.7875rem] font-extrabold uppercase tracking-wide text-white"
              style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 24px) 100%, 0 100%)' }}
            >
              Get an Estimate
            </Link>
            <a
              href={site.phoneHref}
              className="flex w-1/2 items-center justify-center gap-2 whitespace-nowrap font-display text-[0.9rem] font-extrabold tabular-nums text-white"
            >
              <PhoneIcon className="text-crimson" />
              {site.phone}
            </a>
          </div>
        </div>
      </header>

      {/* Main bar — plain white, sticky on desktop, scrolls away on mobile.
          It used to be a dark textured band (hdr-band hdr-band-main) that ran
          into the dark hero. White means it no longer participates in the shared
          background image, so hdr-band-main is gone from here — the two bars
          above still carry it, and their --hdr-y offsets are unaffected because
          this bar was last in the stack.
          Everything inside had to invert from white text to ink. */}
      <div className="border-b border-steel-200 bg-white md:sticky md:top-9 md:z-50">
        {/* 58px at every breakpoint — the band offsets in globals.css assume it */}
        <div className="flex h-[58px] w-full items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" className="flex shrink-0 items-center" aria-label={site.name} onClick={close}>
            {/* Full badge, at size, overhanging upward into the utility bar.
                From md up the logo is taller than this 58px bar and the negative
                margin lifts it, so it overlaps the bar above instead of
                stretching the row. -mt-10 on an h-20 logo puts its top exactly
                at the top of the 36px utility bar. Below md the utility area is
                two bars of live content, so the logo stays inside its own row.
                The margin is on the image only — the name beside it stays
                centred in the bar. */}
            <Logo
              priority
              showName
              className="h-11 w-auto md:-mt-10 md:h-20"
              nameClassName="text-ink"
            />
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
                  className="flex items-center gap-1 px-3 py-2 font-display text-[10px] font-semibold uppercase tracking-wide text-ink hover:text-crimson"
                >
                  {group.label}
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                    <path d="M6 8L1 3h10z" />
                  </svg>
                </Link>
                {openMenu === group.label && (
                  <div className="absolute left-0 top-full max-h-[70vh] w-72 overflow-y-auto rounded-lg border border-steel-200 bg-white p-2 shadow-lift">
                    {group.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-xs text-ink hover:bg-cream hover:text-crimson"
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
                className="px-3 py-2 font-display text-[10px] font-semibold uppercase tracking-wide text-ink hover:text-crimson"
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
                className="flex items-center gap-1 px-3 py-2 font-display text-[10px] font-semibold uppercase tracking-wide text-ink hover:text-crimson"
              >
                {nav.about.label}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                  <path d="M6 8L1 3h10z" />
                </svg>
              </Link>
              {openMenu === nav.about.label && (
                <div className="absolute right-0 top-full w-60 rounded-lg border border-steel-200 bg-white p-2 shadow-lift">
                  {nav.about.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-xs text-ink hover:bg-cream hover:text-crimson"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Single-line phone and CTA — the 48px bar has no room for the
              stacked "Call Us" label or a two-line button. */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 whitespace-nowrap font-display text-sm font-extrabold tabular-nums leading-none text-ink transition-colors hover:text-crimson lg:inline-flex"
            >
              <PhoneIcon className="text-crimson" />
              {site.phone}
            </a>
            {/* btn-primary, not btn-secondary. btn-secondary is a white button
                — invisible now that the bar behind it is white. */}
            <Link
              href="/contact"
              className="btn-primary hidden whitespace-nowrap !px-4 !py-2 !text-[10px] lg:inline-flex"
            >
              Get an Estimate
            </Link>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-md bg-crimson lg:hidden"
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

      {/* Mobile menu. The 138px max-height is the mobile header height, so the
          panel scrolls inside what is actually left of the viewport. Was 9rem,
          sized to the old 150px bar. */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-138px)] overflow-y-auto bg-ink lg:hidden">
          <nav className="container-x flex flex-col py-1">
            {renderMobileGroup(nav.interior)}
            {renderMobileGroup(nav.exterior)}
            {nav.simple.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="border-b border-white/10 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white hover:text-crimson"
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
