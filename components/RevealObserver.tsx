'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Adds .reveal-in to sections and [data-reveal] elements as they scroll into
 * view. All the visual work happens in globals.css; this only toggles a class.
 *
 * This MUST re-run on every navigation. It lives in the root layout, which the
 * App Router keeps mounted across client-side navigations — so with an empty
 * dependency array the effect fired once, on first load, and never again. Every
 * page reached by clicking a link then rendered with its sections still at
 * `opacity: 0`, because the CSS hides them until this adds the class, and only
 * a hard reload remounted the layout and fixed it. Hence `pathname` in the deps.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll<HTMLElement>('main section, [data-reveal]');
    const revealAll = () => targets.forEach((el) => el.classList.add('reveal-in'));

    if (reduce || !('IntersectionObserver' in window)) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );

    targets.forEach((el) => io.observe(el));

    // Safety net. The CSS hides content by default, so a failure in here blanks
    // the page rather than merely dropping an animation. If nothing at all has
    // been revealed shortly after setup, the observer is not working — show
    // everything. A healthy observer reveals the first section within a frame
    // or two, so this never fires in the normal case and costs no animation.
    const failsafe = window.setTimeout(() => {
      if (!document.querySelector('main section.reveal-in, [data-reveal].reveal-in')) revealAll();
    }, 2000);

    return () => {
      window.clearTimeout(failsafe);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
