"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { submitContactForm } from "@/lib/strapi";

interface HomeClientProps {
  heroData: any;
  processSteps: any[];
  teamMembers: any[];
  blogPosts: any[];
}

export default function HomeClient({ heroData, processSteps, teamMembers, blogPosts }: HomeClientProps) {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("fade-in");
                (el as HTMLElement).style.animationPlayState = "running";
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      ventureStage: formData.get('enquiry') as string,
      fundingStatus: formData.get('budget') as string,
      message: formData.get('message') as string,
    };

    try {
      await submitContactForm(data);
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section py-32 md:py-48" ref={(el) => { sectionsRef.current[0] = el; }}>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-tight mb-6 animate-on-scroll fade-in-up">
            {heroData?.title || "End-to-End Digital Solutions."}
          </h1>
          <p className="text-lg md:text-xl text-subtle max-w-3xl mx-auto mb-10 animate-on-scroll fade-in-up">
            {heroData?.subtitle || "From consulting and data analysis to full-stack development and AI/ML, we provide the expertise to bring your vision to life."}
          </p>
          <Link
            href={heroData?.ctaButtonLink || "#contact"}
            className="cta-button bg-violet-500 hover:bg-violet-600 text-white font-bold py-4 px-10 rounded-lg text-lg inline-flex items-center gap-2 shadow-xl shadow-violet-500/20 animate-on-scroll fade-in-up hover:scale-105 transition-all duration-300"
          >
            {heroData?.ctaButtonText || "Start Your Project Today"}
            <span className="material-symbols-outlined">rocket_launch</span>
          </Link>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-secondary" id="process" ref={(el) => { sectionsRef.current[1] = el; }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Our Process</h2>
            <p className="text-subtle mt-4 text-lg max-w-2xl mx-auto">
              A transparent and collaborative journey from concept to launch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(processSteps.length > 0 ? processSteps : [
              {
                icon: "emoji_objects",
                title: "Discovery & Strategy",
                description:
                  "We start by diving deep into your vision, goals, and target audience. This phase includes market research, competitive analysis, and a collaborative workshop to define the project's strategic direction and technical requirements.",
              },
              {
                icon: "design_services",
                title: "Design & Prototyping",
                description:
                  "Our design team creates wireframes, mockups, and interactive prototypes to visualize the user experience. We focus on creating intuitive, user-friendly interfaces that align with your brand identity and project goals.",
              },
              {
                icon: "terminal",
                title: "Development & Testing",
                description:
                  "Our developers bring the designs to life using the latest technologies and best practices. We follow an agile development process, with regular check-ins and a focus on writing clean, scalable code. Rigorous testing ensures a bug-free, high-performance product.",
              },
              {
                icon: "rocket_launch",
                title: "Launch & Support",
                description:
                  "We handle the deployment process to ensure a smooth launch. After launch, we provide ongoing support and maintenance to keep your product running smoothly and securely. We also offer services to help you scale and add new features as your business grows.",
              },
            ]).map((item, index) => (
              <div
                key={index}
                className="feature-card p-8 animate-on-scroll fade-in-up bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-xl icon-bg mb-6">
                  <span className="material-symbols-outlined text-violet-300 text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-subtle">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-24 bg-primary" id="work" ref={(el) => { sectionsRef.current[2] = el; }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Our Work</h2>
            <p className="text-subtle mt-4 text-lg max-w-2xl mx-auto">
              A selection of projects that showcase our expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "LLMeter",
                description:
                  "AI Usage Tracking & Analytics Platform that helps organizations monitor AI request metrics, calculate costs by model, and gain insights with detailed stats.",
                image: "/projects/llmeter.png",
                link: "https://llmeter.app",
              },
              {
                title: "Neural Draft",
                description:
                  "AI Content Automation Platform that creates complete multimedia campaigns - blogs, social posts, and videos in minutes, not hours.",
                image: "/projects/neural-draft.png",
                link: "https://neural-draft.com",
              },
              {
                title: "Pethood.io",
                description:
                  "Pet Community Network where pet owners connect, find pet sitters, discover pet-friendly places, and share experiences with local pet parents.",
                image: "/projects/pethood.png",
                link: "https://pethood.io",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="feature-card p-8 animate-on-scroll fade-in-up bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-subtle mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 font-medium"
                >
                  Visit Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-secondary" id="tech" ref={(el) => { sectionsRef.current[3] = el; }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Technology Stack</h2>
            <p className="text-subtle mt-4 text-lg max-w-2xl mx-auto">
              We use a modern, flexible stack to build robust and scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Flutter", logo: "/tech-logos/flutter.svg" },
              { name: "Next.js", logo: "/tech-logos/nextjs-icon.svg" },
              { name: "Vue.js", logo: "/tech-logos/vue.svg" },
              { name: "Node.js", logo: "/tech-logos/nodejs-icon.svg" },
              { name: "Python", logo: "/tech-logos/python.svg" },
              { name: "Laravel", logo: "/tech-logos/laravel.svg" },
              { name: "PostgreSQL", logo: "/tech-logos/postgresql.svg" },
              { name: "MongoDB", logo: "/tech-logos/mongodb-icon.svg" },
              { name: "Docker", logo: "/tech-logos/docker-icon.svg" },
              { name: "Kubernetes", logo: "/tech-logos/kubernetes.svg" },
              { name: "n8n", logo: "/tech-logos/n8n.svg" },
              { name: "Google Cloud", logo: "/tech-logos/google-cloud.svg" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-card border border-strong rounded-xl animate-on-scroll fade-in-up hover:shadow-lg hover:border-violet-500/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image src={tech.logo} alt={tech.name} width={48} height={48} className="h-12 w-12 mb-4" />
                <p className="text-primary font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-primary" id="blog" ref={(el) => { sectionsRef.current[4] = el; }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">From the Blog</h2>
            <p className="text-subtle mt-4 text-lg max-w-2xl mx-auto">
              Insights on technology, design, and business.
            </p>
          </div>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-8 pb-8">
              {(blogPosts.length > 0 ? blogPosts : [
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
                  description: "A look at the rise of AI content creation and what it means for the future of marketing.",
                  image:
                    "https://blog.neural-draft.com/storage/tenant-assets/8/blog-images/contextual/img_68c1edcd52118_1757539789.png",
                  slug: "ai-content-creation-2025",
                },
                {
                  title: "AI-Powered Multi-Platform Engagement",
                  description: "How to level up your content strategy with AI-powered multi-platform engagement.",
                  image:
                    "https://blog.neural-draft.com/storage/tenant-assets/8/blog-images/contextual/img_68984b64b743a_1754811236.png",
                  slug: "ai-powered-multi-platform-engagement",
                },
              ]).map((post, index) => (
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
                      style={{ height: 'auto' }}
                    />
                  )}
                  <h3 className="text-xl font-bold text-primary mb-3">{post?.title || 'Untitled'}</h3>
                  <p className="text-subtle mb-4">{post?.description || ''}</p>
                  {post?.slug && (
                    <Link href={`/blog/${post.slug}`} className="font-semibold text-violet-400 hover:text-white transition-colors duration-300">
                      Read more →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-secondary" id="team" ref={(el) => { sectionsRef.current[5] = el; }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Our Core Team</h2>
            <p className="text-subtle mt-4 text-lg max-w-2xl mx-auto">
              Meet the experts who will bring your vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(teamMembers.length === 0 ? [
              {
                name: "Vedran Balagović",
                role: "Chief Technology Officer",
                imageUrl: "/vedran.png",
                linkedin: "https://linkedin.com/in/vedran-balagovic",
              },
              {
                name: "Andres Herrera",
                role: "Senior Data & Integrations",
                imageUrl: "/andres.jpeg",
                linkedin: "https://linkedin.com/in/jaherrera1",
              },
              {
                name: "Junes El-Sayyid",
                role: "Startup & Legal Advisor",
                imageUrl: "/junes.jpeg",
                linkedin: "https://linkedin.com/in/juneselsayyid",
              },
              {
                name: "Bruno Hozdić",
                role: "Marketing Manager",
                imageUrl: "/bruno.jpeg",
                linkedin: "https://linkedin.com/in/bruno-hozdic-279110147",
              },
            ] : teamMembers).map((member, index) => (
              <div
                key={index}
                className="team-card text-center animate-on-scroll fade-in-up bg-card p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {member.imageUrl && (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                )}
                <h4 className="text-xl font-bold text-primary">{member.name}</h4>
                <p className="text-violet-400 font-medium">{member.role}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-subtle hover:text-primary mt-4 inline-block"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-primary" id="contact" ref={(el) => { sectionsRef.current[6] = el; }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Get In Touch</h2>
            <p className="text-subtle mt-4 text-lg max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-card border border-strong rounded-xl p-8">
            <form onSubmit={handleSubmit} className="animate-on-scroll fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-subtle">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md bg-primary border-strong shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm text-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-subtle">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md bg-primary border-strong shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm text-primary"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="enquiry" className="block text-sm font-medium text-subtle">
                  Type of Enquiry
                </label>
                <select
                  id="enquiry"
                  name="enquiry"
                  className="mt-1 block w-full rounded-md bg-primary border-strong shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm text-primary"
                >
                  <option>Consulting</option>
                  <option>Data Analysis</option>
                  <option>Full-Stack Development</option>
                  <option>Marketing</option>
                  <option>AI/ML</option>
                </select>
              </div>
              <div className="mt-6">
                <label htmlFor="budget" className="block text-sm font-medium text-subtle">
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="mt-1 block w-full rounded-md bg-primary border-strong shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm text-primary"
                >
                  <option>$10,000 - $20,000</option>
                  <option>$20,000 - $50,000</option>
                  <option>$50,000+</option>
                </select>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-subtle">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md bg-primary border-strong shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm text-primary"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center">
                  Thank you! We'll be in touch soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center">
                  Something went wrong. Please try again or email us directly at hello@axerate.com
                </div>
              )}

              <div className="mt-6 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-button bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-xl shadow-violet-500/20 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
