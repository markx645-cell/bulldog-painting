/** Brand mark — a bulldog head over a paint roller, drawn inline so it stays
 *  crisp at any size and costs no image request.
 *  Replace with the real logo file when the client supplies one. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Bulldog Painting">
      <rect x="0" y="0" width="48" height="48" rx="10" fill="#1B5E4B" />
      {/* roller handle */}
      <path d="M13 30v-4a3 3 0 0 1 3-3h9" stroke="#EFDDBB" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M13 30v7" stroke="#EFDDBB" strokeWidth="2.4" strokeLinecap="round" />
      {/* roller sleeve */}
      <rect x="24" y="18" width="14" height="10" rx="2.4" fill="#C08A2E" />
      {/* bulldog head */}
      <path
        d="M17 9c-2.4 0-4 1.4-4.4 3.2-1.5.4-2.4 1.6-2.4 3.1 0 1.9 1.4 3.2 3.2 3.4.5 1.5 2 2.5 3.9 2.5h5c1.9 0 3.4-1 3.9-2.5 1.8-.2 3.2-1.5 3.2-3.4 0-1.5-.9-2.7-2.4-3.1C26.6 10.4 25 9 22.6 9z"
        fill="#EFDDBB"
      />
      <circle cx="16.6" cy="14.4" r="1.15" fill="#1B5E4B" />
      <circle cx="23" cy="14.4" r="1.15" fill="#1B5E4B" />
      <path d="M18.2 17.8h3.2" stroke="#1B5E4B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Wordmark({
  tone = 'dark',
  size = 'md',
}: {
  tone?: 'dark' | 'light';
  size?: 'md' | 'lg';
}) {
  return (
    <span className="leading-none">
      <span
        className={`block font-display font-extrabold uppercase tracking-tight ${
          size === 'lg' ? 'text-2xl' : 'text-lg sm:text-2xl'
        } ${tone === 'light' ? 'text-white' : 'text-graphite'}`}
      >
        Bulldog
      </span>
      <span
        className={`mt-0.5 block whitespace-nowrap font-display font-bold uppercase tracking-[0.22em] text-brass ${
          size === 'lg' ? 'text-[12px]' : 'text-[10px] sm:text-[12px]'
        }`}
      >
        Painting
      </span>
    </span>
  );
}
