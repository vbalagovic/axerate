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

  if (!metadata) {
    return {
      title: "Startup Studio - Axerate",
      description: "The startup studio that builds from zero to funding. Ideate with us, get your MVP coded, legal setup handled, and investor doors opened.",
    };
  }

  const attrs = metadata.attributes;

  return {
    title: attrs.title,
    description: attrs.description,
    keywords: attrs.keywords,
    openGraph: {
      title: attrs.ogTitle || attrs.title,
      description: attrs.ogDescription || attrs.description,
      images: attrs.ogImage ? [attrs.ogImage] : [],
    },
    twitter: {
      card: attrs.twitterCard || 'summary_large_image',
      title: attrs.ogTitle || attrs.title,
      description: attrs.ogDescription || attrs.description,
      images: attrs.ogImage ? [attrs.ogImage] : [],
    },
    alternates: {
      canonical: attrs.canonicalUrl,
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
