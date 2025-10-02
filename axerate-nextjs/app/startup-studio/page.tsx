import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Partnerships from "@/components/sections/Partnerships";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import { getPageMetadata } from "@/lib/strapi";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata('startup-studio');

  // Default values
  const defaultTitle = 'Startup Studio - Axerate';
  const defaultDescription = 'The startup studio that builds from zero to funding. Ideate with us, get your MVP coded, legal setup handled, and investor doors opened.';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://axerate.com';

  // Use metadata from Strapi or fallback to defaults
  const title = metadata?.title || defaultTitle;
  const description = metadata?.description || defaultDescription;
  const ogTitle = metadata?.ogTitle || title;
  const ogDescription = metadata?.ogDescription || description;

  // Ensure image URL is absolute
  const getAbsoluteUrl = (url: string | undefined) => {
    if (!url) return `${baseUrl}/og-image-startup-studio.png`; // Fallback image
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `${baseUrl}${url.startsWith('/') ? url : '/' + url}`;
  };

  const imageUrl = getAbsoluteUrl(metadata?.ogImage);

  return {
    title,
    description,
    keywords: metadata?.keywords,
    metadataBase: new URL(baseUrl),
    openGraph: {
      type: 'website',
      url: `${baseUrl}/startup-studio`,
      title: ogTitle,
      description: ogDescription,
      siteName: 'Axerate',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@axerate',
      title: ogTitle,
      description: ogDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: metadata?.canonicalUrl || `${baseUrl}/startup-studio`,
    },
  };
}

export default function StartupStudioPage() {
  return (
    <main>
      <Hero variant="startup" />
      <Services />
      <About />
      <Process />
      <Partnerships />
      <Blog />
      <Contact variant="startup" />
    </main>
  );
}
