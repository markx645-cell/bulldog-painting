import type { Metadata } from 'next';
import { Inter, Sora, Fraunces } from 'next/font/google';
import './globals.css';
import { site, stats } from '@/content/site';
import { serviceCounties } from '@/content/areas';
import { reviewsArePlaceholder } from '@/content/reviews';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['italic', 'normal'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Interior & Exterior Painting in Cincinnati & Surrounding Areas`,
    template: `%s | ${site.name}`,
  },
  description:
    'Family-owned painting contractor serving Cincinnati and the surrounding areas since 2001. W-2 crews, free color consultation, written itemized pricing, and a 5-year workmanship warranty.',
  keywords: [
    'painters Cincinnati',
    'interior painting Cincinnati',
    'exterior painting Northern Kentucky',
    'cabinet painting Cincinnati',
    'painting contractor Cincinnati',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Painters in Cincinnati & Surrounding Areas`,
    description:
      'Interior and exterior painting across Cincinnati and the surrounding areas since 2001. Free color consultation, written pricing, 5-year workmanship warranty.',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Painters in Cincinnati & Surrounding Areas`,
    description: 'Interior and exterior painting across Cincinnati and the surrounding areas.',
    images: ['/og/home.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#d01d21',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: site.name,
    '@id': site.url,
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/og/home.jpg`,
    telephone: site.phone,
    email: site.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'US',
    },
    areaServed: serviceCounties.map((c) => ({
      '@type': 'AdministrativeArea',
      name: `${c.name}, ${c.state}`,
    })),
    foundingDate: String(site.founded),
    // Only publish an aggregate rating once the review data is real —
    // see the header note in content/reviews.ts.
    ...(reviewsArePlaceholder
      ? {}
      : {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: stats.googleRating,
            reviewCount: '400',
          },
        }),
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Enable scroll-reveal before first paint so there is no flash of hidden
            content. Only runs with JS, so no-JS visitors and crawlers see everything. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "try{document.documentElement.classList.add('reveal-js')}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
