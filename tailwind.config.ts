import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Black / red / white, matched to bulldogremodelgroup.com so the two
        // Bulldog brands read as one family.
        crimson: {
          DEFAULT: '#d01d21',
          600: '#b01216',
          700: '#8c0d10',
          200: '#f7c9ca',
        },
        ink: {
          DEFAULT: '#110c09', // body text and dark section backgrounds
          900: '#080604',
          800: '#1d1611',
          700: '#2b221b',
        },
        // Warm neutrals, so greys sit with the warm black rather than fighting it
        steel: {
          DEFAULT: '#57534e',
          400: '#a8a29e',
          300: '#d6d3d1',
          200: '#e7e5e4',
          100: '#f5f5f4',
        },
        bone: '#fafaf9', // page background
        cream: '#f6f5f1', // subtle panels inside white sections
      },
      fontFamily: {
        display: ['var(--font-display)', 'Sora', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(17,12,9,0.06), 0 8px 24px rgba(17,12,9,0.07)',
        lift: '0 12px 40px rgba(17,12,9,0.14)',
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
