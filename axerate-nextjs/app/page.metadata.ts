import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/strapi';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata('home');

  if (!metadata) {
    return {
      title: 'Axerate - End-to-End Digital Solutions for Startups',
      description: 'Axerate provides elite engineering, strategic consulting, and startup support. From idea to funding, we\'re your operational co-founders building scalable ventures.',
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.ogTitle || metadata.title,
      description: metadata.ogDescription || metadata.description,
      images: metadata.ogImage ? [metadata.ogImage] : [],
    },
    twitter: {
      card: metadata.twitterCard || 'summary_large_image',
      title: metadata.ogTitle || metadata.title,
      description: metadata.ogDescription || metadata.description,
      images: metadata.ogImage ? [metadata.ogImage] : [],
    },
    alternates: {
      canonical: metadata.canonicalUrl,
    },
  };
}
