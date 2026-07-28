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
        // Bulldog Painting palette — deep pine green, brass, cream.
        // Deliberately no red and no true black.
        pine: {
          DEFAULT: '#1B5E4B',
          600: '#164C3D',
          700: '#103A2E',
          800: '#0E3227',
          900: '#0B261E',
        },
        brass: {
          DEFAULT: '#C08A2E',
          600: '#A2731F',
          200: '#EFDDBB',
        },
        graphite: {
          DEFAULT: '#22282E', // body text — charcoal, not black
          800: '#2C333B',
          700: '#3A424B',
        },
        slate: {
          DEFAULT: '#4A5561',
          400: '#98A2AE',
          300: '#CBD2DA',
          200: '#E4E9ED',
          100: '#F1F4F6',
        },
        cream: '#FBF8F3',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Sora', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(11,38,30,0.06), 0 8px 24px rgba(11,38,30,0.07)',
        lift: '0 12px 40px rgba(11,38,30,0.14)',
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
