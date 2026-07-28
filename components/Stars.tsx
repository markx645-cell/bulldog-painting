export default function Stars({
  count = 5,
  className = '',
  animate = false,
}: {
  count?: number;
  className?: string;
  animate?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={animate ? 'star-pop text-brass' : 'text-brass'}
          style={animate ? { animationDelay: `${0.15 + i * 0.09}s` } : undefined}
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.26 6.85.72-5.12 4.6 1.45 6.72L12 16.9l-6.08 3.4 1.45-6.72L2.25 8.98l6.85-.72z" />
        </svg>
      ))}
    </span>
  );
}
