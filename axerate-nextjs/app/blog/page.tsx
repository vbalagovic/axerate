import Image from "next/image";
import Link from "next/link";
import { getBlogPosts, getPageMetadata } from "@/lib/strapi";
import Newsletter from "@/components/Newsletter";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata('blog');

  if (!metadata) {
    return {
      title: 'Blog - Axerate',
      description: 'Insights on AI, technology, and startup innovation from our team of experts.',
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

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  // Fallback data if Strapi is not available
  const defaultPosts = [
    {
      slug: "amazon-generative-ai",
      title: "Understanding Amazon's Generative AI: Tools and Applications",
      excerpt:
        "Amazon's been making some pretty amazing moves in the world of generative AI lately. Explore how Amazon's generative AI tools enhance business operations and customer experiences.",
      image:
        "https://blog.neural-draft.com/storage/tenant-assets/8/blog-images/contextual/img_68c1ef0ebb41b_1757540110.png",
      category: "Technology",
      date: "September 10, 2025",
      tags: ["Generative AI", "Amazon Web Services", "Machine Learning"],
    },
    {
      slug: "ai-content-creation-2025",
      title: "The Rise of AI Content Creation in 2025",
      excerpt:
        "AI content creation tools like ZeroGPT are revolutionizing how content is produced. This guide covers current tools, methods, and best practices for effective use in 2025.",
      image:
        "https://blog.neural-draft.com/storage/tenant-assets/8/blog-images/contextual/img_68c1edcd52118_1757539789.png",
      category: "Technology",
      date: "September 10, 2025",
      tags: ["AI", "Content Creation"],
    },
    {
      slug: "ai-powered-multi-platform-engagement",
      title: "Level Up Your Content Strategy: AI-Powered Multi-Platform Engagement",
      excerpt:
        "Ever wondered about revolutionizing content strategy? Let me share what actually works (and what doesn't) when it comes to AI-powered multi-platform engagement.",
      image:
        "https://blog.neural-draft.com/storage/tenant-assets/8/blog-images/contextual/img_68984b64b743a_1754811236.png",
      category: "Content Marketing",
      date: "August 10, 2025",
      tags: ["AI in Marketing", "Content Repurposing"],
    },
  ];

  const posts = blogPosts && blogPosts.length > 0 ? blogPosts : defaultPosts;

  return (
    <main className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Axerate Blog
          </h1>
          <p className="text-subtle text-lg max-w-2xl mx-auto">
            Insights on AI, technology, and startup innovation from our team of
            experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            {/* Featured Article */}
            {posts[0] && (
              <article className="bg-card border border-strong rounded-xl p-8 mb-12">
                {posts[0]?.image && (
                  <Link href={`/blog/${posts[0].slug}`}>
                    <Image
                      src={posts[0].image}
                      alt={posts[0].title}
                      width={800}
                      height={400}
                      className="w-full h-64 object-cover rounded-lg mb-6 hover:opacity-90 transition-opacity"
                    />
                  </Link>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-violet-500/10 text-violet-300 rounded-full text-sm font-medium">
                    {posts[0].category}
                  </span>
                  <span className="text-subtle text-sm">{posts[0].date}</span>
                </div>
                <Link href={`/blog/${posts[0].slug}`}>
                  <h2 className="text-3xl font-bold text-primary mb-4 hover:text-violet-400 transition-colors">
                    {posts[0].title}
                  </h2>
                </Link>
                <p className="text-subtle mb-6 text-lg">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-strong">
                  <span className="text-sm font-medium text-subtle">Tags:</span>
                  <div className="flex flex-wrap gap-2">
                    {posts[0].tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-violet-500/10 text-violet-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )}

            {/* Secondary Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {posts.slice(1).map((post: any) => (
                <article
                  key={post.slug}
                  className="bg-card border border-strong rounded-xl p-6"
                >
                  {post?.image && (
                    <Link href={`/blog/${post.slug}`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover rounded-lg mb-4 hover:opacity-90 transition-opacity"
                      />
                    </Link>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-violet-500/10 text-violet-300 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-subtle text-sm">{post.date}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-primary mb-3 hover:text-violet-400 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-subtle mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-strong">
                    <span className="text-xs font-medium text-subtle">Tags:</span>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-violet-500/10 text-violet-300 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-strong rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">Categories</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-subtle">Technology</span>
                  <span className="text-subtle text-sm">2</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-subtle">Content Marketing</span>
                  <span className="text-subtle text-sm">1</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-subtle">AI & Machine Learning</span>
                  <span className="text-subtle text-sm">3</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-strong rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AI", "Machine Learning", "AWS", "Content Strategy", "Automation", "Innovation"].map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-violet-500/10 text-violet-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Newsletter />
        </div>
      </div>
    </main>
  );
}
