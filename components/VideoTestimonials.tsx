'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { videoTestimonials } from '@/content/video-testimonials';

function PlayIcon() {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lift transition group-hover:scale-105">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#d01d21" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

export default function VideoTestimonials() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section className="section bg-cream">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-dark">In their own words</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Video testimonials
          </h2>
          <p className="mt-4 text-steel">
            Read enough five-star reviews and they blur together. A homeowner on camera, standing in
            the room we painted, is harder to fake and easier to trust.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          {videoTestimonials.map((t) => {
            const hasClip = t.src.length > 0;
            return (
              <figure
                key={t.id}
                className="overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-card"
              >
                <div className="relative aspect-[3/4] bg-ink">
                  {hasClip && playing === t.id ? (
                    <video
                      className="h-full w-full object-cover"
                      controls
                      autoPlay
                      playsInline
                      poster={t.poster}
                    >
                      <source src={t.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <>
                      <Image
                        src={t.poster}
                        alt={
                          hasClip
                            ? `${t.name} of ${t.location} on their ${t.project.toLowerCase()}`
                            : 'Placeholder portrait — not a Bulldog Painting customer'
                        }
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                      {hasClip ? (
                        <button
                          type="button"
                          onClick={() => setPlaying(t.id)}
                          aria-label={`Play video testimonial from ${t.name}`}
                          className="group absolute inset-0 flex items-center justify-center bg-ink/15"
                        >
                          <PlayIcon />
                        </button>
                      ) : (
                        /* No dead play button while the clip does not exist */
                        <span className="absolute bottom-3 left-3 rounded bg-ink/85 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-white">
                          Clip to come
                        </span>
                      )}
                    </>
                  )}
                </div>
                <figcaption className="p-5">
                  <p className="text-sm leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-3 font-display text-sm font-bold text-ink">{t.name}</p>
                  <p className="mt-0.5 text-xs text-steel">
                    {t.location} · {t.project}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/reviews" className="btn-ghost">
            Read Written Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
