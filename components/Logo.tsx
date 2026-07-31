import Image from 'next/image';
import { site } from '@/content/site';

/**
 * The brand lockup, always the complete badge — bulldog, house, and the
 * BULLDOG PAINTERS wordmark are all inside the artwork. Never crop it: a
 * cropped mark was tried and rejected.
 *
 * public/logo.png is the web-sized copy of "painters logo final.png" at the
 * repo root (same aspect ratio, nothing cut). app/icon.png and
 * app/apple-icon.png are separate head-only crops, for the browser tab only.
 *
 * The artwork reads BULLDOG PAINTERS and `site.name` matches it. They are shown
 * side by side in the header, so if the logo art is ever changed the name has
 * to change with it — or the header contradicts itself.
 *
 * `showName` renders the company name beside it as HTML. Note this means the
 * wordmark appears twice — once inside the artwork and once as text. That is a
 * deliberate client decision, not an oversight; drop the prop to undo it.
 */
export default function Logo({
  className = '',
  priority = false,
  showName = false,
  nameClassName = '',
}: {
  className?: string;
  priority?: boolean;
  showName?: boolean;
  /** Extra classes on the wordmark text — used to colour it per surface. */
  nameClassName?: string;
}) {
  const image = (
    <Image
      src="/logo.png"
      // With the name rendered alongside, the badge is decorative — the
      // accessible name comes from the text so it is not announced twice.
      alt={showName ? '' : site.name}
      aria-hidden={showName || undefined}
      width={720}
      height={650}
      priority={priority}
      className={className}
    />
  );

  if (!showName) return image;

  const [first, ...rest] = site.name.split(' ');
  return (
    <span className="flex items-center gap-3">
      {image}
      {/* Sized and coloured to echo the badge: same weight on both words, the
          second in crimson, tracked out to span the width of the first. */}
      <span className={`font-display leading-none ${nameClassName}`}>
        <span className="block text-[19px] font-extrabold uppercase tracking-[-0.01em]">
          {first}
        </span>
        <span className="mt-1 block text-[11px] font-extrabold uppercase tracking-[0.235em] text-crimson">
          {rest.join(' ')}
        </span>
      </span>
    </span>
  );
}
