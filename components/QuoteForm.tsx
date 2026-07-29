'use client';

import { useState } from 'react';
import { services } from '@/content/services';
import { site } from '@/content/site';

/**
 * Static export means there is no server to POST to. The form is wired to
 * `mailto:` so it works on a plain static host out of the box.
 *
 * TO CONNECT A REAL BACKEND: replace `handleSubmit` with a fetch() to your
 * form endpoint (GoHighLevel, Formspree, Netlify Forms, etc.). Nothing else
 * in this component needs to change.
 */
export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Email: ${data.get('email')}`,
      `Address / Area: ${data.get('area')}`,
      `Service: ${data.get('service')}`,
      '',
      `${data.get('details') || ''}`,
    ].join('\n');

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Estimate request — ${data.get('service')}`,
    )}&body=${encodeURIComponent(lines)}`;
    setSent(true);
  };

  const field =
    'w-full rounded-md border border-steel-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-steel-400 focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson';

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className={compact ? 'space-y-3' : 'grid gap-3 sm:grid-cols-2'}>
        <label className="block">
          <span className="sr-only">Your name</span>
          <input required name="name" type="text" placeholder="Your name" className={field} />
        </label>
        <label className="block">
          <span className="sr-only">Phone number</span>
          <input required name="phone" type="tel" placeholder="Phone number" className={field} />
        </label>
        <label className="block">
          <span className="sr-only">Email address</span>
          <input required name="email" type="email" placeholder="Email address" className={field} />
        </label>
        <label className="block">
          <span className="sr-only">City or neighborhood</span>
          <input required name="area" type="text" placeholder="City or neighborhood" className={field} />
        </label>
      </div>

      <label className="block">
        <span className="sr-only">What do you need painted?</span>
        <select name="service" defaultValue="" required className={field}>
          <option value="" disabled>
            What do you need painted?
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </label>

      <label className="block">
        <span className="sr-only">Anything else we should know?</span>
        <textarea
          name="details"
          rows={compact ? 2 : 3}
          placeholder="Anything else we should know? Rooms, square footage, timing."
          className={field}
        />
      </label>

      <button type="submit" className="btn-primary w-full">
        {sent ? 'Opening your email…' : 'Request My Free Estimate'}
      </button>

      <p className="text-center text-xs leading-relaxed text-steel">
        No obligation, no high-pressure sales. Or call{' '}
        <a href={site.phoneHref} className="font-semibold text-crimson hover:underline">
          {site.phone}
        </a>
        .
      </p>
    </form>
  );
}
