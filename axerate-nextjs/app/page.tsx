import { getProcessSteps, getTeamMembers, getBlogPosts, getHeroSection, getPageMetadata } from "@/lib/strapi";
import HomeClient from "@/components/HomeClient";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata('home');

  if (!metadata) {
    return {
      title: 'Axerate - End-to-End Digital Solutions for Startups',
      description: 'Axerate provides elite engineering, strategic consulting, and startup support. From idea to funding, we\'re your operational co-founders building scalable ventures.',
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

export default async function Home() {
  // Fetch all data server-side for SEO
  const [heroData, processSteps, teamMembers, blogPosts] = await Promise.all([
    getHeroSection(),
    getProcessSteps(),
    getTeamMembers(),
    getBlogPosts(3)
  ]);

  // Debug logging
  console.log('📊 Server-side data fetched:');
  console.log('Hero:', heroData ? '✅' : '❌');
  console.log('Process Steps:', processSteps?.length || 0);
  console.log('Team Members:', teamMembers?.length || 0);
  console.log('Blog Posts:', blogPosts?.length || 0);

  return (
    <HomeClient
      heroData={heroData}
      processSteps={processSteps}
      teamMembers={teamMembers}
      blogPosts={blogPosts}
    />
  );
}
