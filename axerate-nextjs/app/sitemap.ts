import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/strapi';

// Make this route dynamic so it regenerates on each request
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://axerate.com';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/startup-studio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Dynamic blog posts
  try {
    const blogPosts = await getBlogPosts();

    if (blogPosts && blogPosts.length > 0) {
      const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedDate),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));

      return [...staticPages, ...blogPostPages];
    }
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }

  // Fallback blog posts if Strapi isn't available
  const fallbackBlogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/amazon-generative-ai`,
      lastModified: new Date('2025-09-10'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-content-creation-2025`,
      lastModified: new Date('2025-09-10'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-powered-multi-platform-engagement`,
      lastModified: new Date('2025-08-10'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ];

  return [...staticPages, ...fallbackBlogPosts];
}
