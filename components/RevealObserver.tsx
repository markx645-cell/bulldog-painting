'use client';

import { useEffect } from 'react';

/** Adds .reveal-in to sections and [data-reveal] elements as they scroll into
 *  view. All the visual work happens in globals.css; this only toggles a class. */
export default function RevealObserver() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll<HTMLElement>('main section, [data-reveal]');

    if (reduce || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('reveal-in'));
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
    return () => io.disconnect();
  }, []);

  return null;
}
