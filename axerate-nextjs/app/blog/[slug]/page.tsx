import Image from "next/image";
import Link from "next/link";
import { getBlogPost } from "@/lib/strapi";
import { Metadata } from 'next';

// Fallback blog posts data
const fallbackBlogPosts: Record<string, any> = {
  "amazon-generative-ai": {
    title: "Understanding Amazon's Generative AI: Tools and Applications",
    image:
      "https://blog.neural-draft.com/storage/tenant-assets/8/blog-images/contextual/img_68c1ef0ebb41b_1757540110.png",
    category: "Technology",
    date: "September 10, 2025",
    tags: ["Generative AI", "Amazon Web Services", "Machine Learning"],
    content: `
      <p>Amazon's been making some pretty amazing moves in the world of generative AI lately. Seriously, it's like every time I turn around, they're coming up with new ways to use this tech. You know what I mean? Generative AI is this cool thing that helps create all kinds of content using machine learning. By 2025, it's shaping up to change everything—from retail to cloud stuff. It's wild!</p>

      <p>So, generative AI is basically all about algorithms that whip up new content based on what's already out there. Amazon's really tapped into this to make shopping better, run things smoother, and just come up with cooler products. I'm gonna break down a few key tools and how they're being used—trust me, it's interesting stuff.</p>

      <h3>1. Key Tools and Technologies</h3>
      <p>And let's talk about the tools—Amazon's got some big guns in the generative AI world. Here are a few you should know about:</p>

      <ul>
        <li><strong>AWS SageMaker:</strong> Okay, this one's a game changer. It's a managed service that helps you build, train, and roll out machine learning models. And it's got built-in algorithms for those generative tasks—super handy, right?</li>
        <li><strong>Amazon Polly:</strong> This is cool—it's a text-to-speech tool that uses deep learning to make speech sound real. You can turn text into audio, which is awesome for making things more accessible. Seriously, how great is that for podcasts or e-learning?</li>
        <li><strong>Amazon Lex:</strong> So here's where it gets fun. This tool helps developers create chatty interfaces—like, think voice and text interaction. It's what powers chatbots and virtual assistants, making customer interactions way more personal.</li>
        <li><strong>Amazon Rekognition:</strong> Oh, and this one's neat too! It's a computer vision service that can analyze images and videos. You could use it to pull insights from visual content—like spotting faces or identifying objects. It's kinda like magic!</li>
      </ul>

      <h3>2. Applications of Generative AI</h3>
      <p>But wait, there's more! Amazon's generative AI isn't just sitting around looking pretty. It's doing real work across different industries. Here are some examples that might blow your mind:</p>

      <ul>
        <li><strong>Retail Optimization:</strong> Retailers can use this tech to figure out what customers might like and give them personalized suggestions. Imagine an online clothing shop analyzing your past buys to suggest outfits—pretty slick, right?</li>
        <li><strong>Content Creation:</strong> Businesses can totally use Amazon Polly to turn written stuff into audio. So, if you're into making podcasts or jazzing up e-learning, this is a lifesaver!</li>
        <li><strong>Customer Support:</strong> Chatbots powered by Amazon Lex are a game changer for handling customer questions. They can respond instantly, which definitely helps keep customers happy.</li>
      </ul>
    `,
  },
  "ai-content-creation-2025": {
    title: "The Rise of AI Content Creation in 2025",
    image:
      "https://blog.neural-draft.com/storage/tenant-assets/8/blog-images/contextual/img_68c1edcd52118_1757539789.png",
    category: "Technology",
    date: "September 10, 2025",
    tags: ["AI", "Content Creation"],
    content: `
      <p>You know, AI content creation's really changed the game for how we whip up written stuff, right? I mean, by 2025, it's pretty wild to see how this tech keeps improving—new tools poppin' up all over the place. AI content creation tools like ZeroGPT are revolutionizing how content is produced.</p>

      <p>This guide covers current tools, methods, and best practices for effective use in 2025. From blog posts to social media content, AI is transforming how we create and distribute content across platforms.</p>

      <h3>Key Benefits of AI Content Creation</h3>
      <ul>
        <li>Speed and efficiency in content production</li>
        <li>Consistency across multiple platforms</li>
        <li>Data-driven content optimization</li>
        <li>Cost-effective scaling of content operations</li>
      </ul>
    `,
  },
  "ai-powered-multi-platform-engagement": {
    title: "Level Up Your Content Strategy: AI-Powered Multi-Platform Engagement",
    image:
      "https://blog.neural-draft.com/storage/tenant-assets/8/blog-images/contextual/img_68984b64b743a_1754811236.png",
    category: "Content Marketing",
    date: "August 10, 2025",
    tags: ["AI in Marketing", "Content Repurposing"],
    content: `
      <p>Ever feel like you're juggling a million things at once, kinda like a circus performer trying to manage content on all sorts of platforms? It's pretty overwhelming, right?</p>

      <p>Ever wondered about revolutionizing content strategy? Let me share what actually works (and what doesn't) when it comes to AI-powered multi-platform engagement.</p>

      <h3>The Multi-Platform Challenge</h3>
      <p>Managing content across multiple platforms requires coordination, consistency, and creativity. AI tools can help streamline this process while maintaining brand voice and engagement.</p>

      <h3>Best Practices</h3>
      <ul>
        <li>Use AI to adapt content for different platforms</li>
        <li>Maintain brand consistency across channels</li>
        <li>Leverage data insights for optimization</li>
        <li>Balance automation with human creativity</li>
      </ul>
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const strapiPost = await getBlogPost(slug);

  let post;
  if (strapiPost && strapiPost.attributes) {
    const attrs = strapiPost.attributes;
    post = {
      title: attrs.title,
      description: attrs.description,
      image: attrs.featuredImage?.data?.attributes?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${attrs.featuredImage.data.attributes.url}`
        : null,
    };
  } else {
    post = fallbackBlogPosts[slug];
  }

  if (!post) {
    return {
      title: "Post Not Found - Axerate Blog",
    };
  }

  const description = post.description || (typeof post.content === 'string' ? post.content.substring(0, 160).replace(/<[^>]*>/g, '') : '');

  return {
    title: `${post.title} - Axerate Blog`,
    description: description,
    openGraph: {
      title: `${post.title} - Axerate Blog`,
      description: description,
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} - Axerate Blog`,
      description: description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const strapiPost = await getBlogPost(slug);

  let post;
  if (strapiPost && strapiPost.attributes) {
    const attrs = strapiPost.attributes;
    post = {
      title: attrs.title,
      content: attrs.content,
      image: attrs.featuredImage?.data?.attributes?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${attrs.featuredImage.data.attributes.url}`
        : '',
      category: attrs.tags?.[0] || 'General',
      date: new Date(attrs.publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      tags: attrs.tags || [],
    };
  } else {
    post = fallbackBlogPosts[slug];
  }

  if (!post) {
    return (
      <main className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-violet-400 hover:text-violet-300">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-violet-400 hover:text-violet-300 mb-8"
        >
          ← Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-violet-500/10 text-violet-300 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-subtle text-sm">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {post.title}
            </h1>
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-96 object-cover rounded-xl"
              />
            )}
          </div>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="flex items-center gap-4 mt-12 pt-8 border-t border-strong">
            <span className="text-sm font-medium text-subtle">Tags:</span>
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
      </div>
    </main>
  );
}
