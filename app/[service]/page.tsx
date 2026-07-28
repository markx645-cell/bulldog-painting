import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePage from '@/components/ServicePage';
import { services, serviceBySlug } from '@/content/services';

// Static routes (/contact, /reviews, /service-areas etc.) take precedence over
// this dynamic segment, so it only ever resolves the slugs listed below.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = serviceBySlug.get(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/${service.slug}/` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/${service.slug}/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const service = serviceBySlug.get(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
