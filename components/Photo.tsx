import Image from 'next/image';
import { media, type MediaKey } from '@/content/media';

/** Renders an image from the central registry in content/media.ts.
 *  Nothing else on the site should hardcode an image path. */
export default function Photo({
  name,
  className = '',
  sizes = '100vw',
  priority = false,
  alt,
}: {
  name: MediaKey;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Override the registry alt text when context calls for something specific */
  alt?: string;
}) {
  const entry = media[name];
  return (
    <Image
      src={entry.src}
      alt={alt ?? entry.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
