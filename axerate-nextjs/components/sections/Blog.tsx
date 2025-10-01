"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/lib/strapi";

export default function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const posts = await getBlogPosts(3);
        if (posts && posts.length > 0) {
          setBlogPosts(posts);
        }
      } catch (error) {
        console.error('Failed to load blog posts:', error);
      }
    }
    loadPosts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements =
              entry.target.querySelectorAll(".animate-on-scroll");
            animatedElements.forEach((el) => {
              (el as HTMLElement).style.animationPlayState = "running";
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const defaultPosts = [
    {
      title: "Understanding Amazon's Generative AI",
      description:
        "Explore how Amazon's generative AI tools enhance business operations and customer experiences.",
      image:
        "https://blog.neural-draft.com/storage/tenant-assets/8/blog-images/contextual/img_68c1ef0ebb41b_1757540110.png",
      slug: "amazon-generative-ai",
    },
    {
      title: "The Rise of AI Content Creation",
      description:
        "A look at the rise of AI content creation and what it means for the future of marketing.",
      image:
        "https://blog.neural-draft.com/storage/tenant-assets/8/blog-images/contextual/img_68c1edcd52118_1757539789.png",
      slug: "ai-content-creation-2025",
    },
    {
      title: "AI-Powered Multi-Platform Engagement",
      description:
        "How to level up your content strategy with AI-powered multi-platform engagement.",
      image:
        "https://blog.neural-draft.com/storage/tenant-assets/8/blog-images/contextual/img_68984b64b743a_1754811236.png",
      slug: "ai-powered-multi-platform-engagement",
    },
  ];

  const posts = blogPosts.length > 0 ? blogPosts : defaultPosts;

  return (
    <section ref={sectionRef} className="py-24 bg-secondary" id="blog">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            From the Blog
          </h2>
          <p className="text-subtle mt-4 text-lg max-w-2xl mx-auto">
            Insights on technology, design, and business.
          </p>
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-8 pb-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="feature-card p-6 animate-on-scroll fade-in-up bg-card flex-shrink-0 w-80"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {post?.image && (
                  <Image
                    src={post.image}
                    alt={post.title || 'Blog post'}
                    width={320}
                    height={192}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-primary mb-3">
                  {post?.title || 'Untitled'}
                </h3>
                <p className="text-subtle mb-4">{post?.description || ''}</p>
                {post?.slug && (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-semibold text-violet-400 hover:text-white transition-colors duration-300"
                  >
                    Read more →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
