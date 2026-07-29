import Image from 'next/image';
import { site } from '@/content/site';

/**
 * The brand lockup — bulldog, wordmark, and "Interior & Exterior" strapline are
 * all inside the artwork, so nothing should render text next to it.
 *
 * Source artwork is "bulldog painting.png" at the repo root; public/logo.png is
 * the trimmed, web-sized copy generated from it. app/icon.png and
 * app/apple-icon.png are head-only crops for the browser tab — the full lockup
 * is unreadable at 32px.
 */
export default function Logo({
  className = '',
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt={`${site.name} — ${site.tagline}`}
      width={720}
      height={650}
      priority={priority}
      className={className}
    />
  );
}
