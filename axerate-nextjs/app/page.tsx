import { getProcessSteps, getTeamMembers, getBlogPosts, getHeroSection, getPageMetadata } from "@/lib/strapi";
import HomeClient from "@/components/HomeClient";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata('home');

  // Default values
  const defaultTitle = 'Axerate - End-to-End Digital Solutions for Startups';
  const defaultDescription = 'Axerate provides elite engineering, strategic consulting, and startup support. From idea to funding, we\'re your operational co-founders building scalable ventures.';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://axerate.com';

  // Use metadata from Strapi or fallback to defaults
  const title = metadata?.title || defaultTitle;
  const description = metadata?.description || defaultDescription;
  const ogTitle = metadata?.ogTitle || title;
  const ogDescription = metadata?.ogDescription || description;

  // Ensure image URL is absolute
  const getAbsoluteUrl = (url: string | undefined) => {
    if (!url) return `${baseUrl}/og-image-home.png`; // Fallback image
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
      url: baseUrl,
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
      canonical: metadata?.canonicalUrl || baseUrl,
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
