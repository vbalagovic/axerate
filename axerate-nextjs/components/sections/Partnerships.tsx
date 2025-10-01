"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getPartnerships } from "@/lib/strapi";

export default function Partnerships() {
  const sectionRef = useRef<HTMLElement>(null);
  const [partnerships, setPartnerships] = useState<any[]>([]);

  useEffect(() => {
    async function loadPartnerships() {
      try {
        const data = await getPartnerships();
        if (data && data.length > 0) {
          setPartnerships(data);
        }
      } catch (error) {
        console.error('Failed to load partnerships:', error);
      }
    }
    loadPartnerships();
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

  const defaultPartnerships = [
    {
      name: "The Founders' Group",
      description: "A professional development community connecting entrepreneurs, investors, and mentors. This strategic partnership gives Axerate startups exclusive access to angel investor networks, mentorship programs, and funding opportunities.",
      logo: "TFG",
      tags: ["Angel Investors", "Mentorship", "Fundraising", "Networking"],
      link: "https://www.linkedin.com/company/thefoundersgroup/",
    }
  ];

  const displayPartnerships = partnerships.length > 0 ? partnerships : defaultPartnerships;

  return (
    <section ref={sectionRef} className="py-24 bg-primary" id="partnerships">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Strategic Partnerships
          </h2>
          <p className="text-subtle mt-4 text-lg max-w-2xl mx-auto">
            Collaborating with industry leaders to accelerate your startup
            journey.
          </p>
        </div>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {displayPartnerships.map((partnership, index) => (
            <div
              key={index}
              className="feature-card p-12 animate-on-scroll fade-in-up bg-card border border-strong rounded-2xl hover:shadow-2xl hover:border-violet-500/30 transition-all duration-300"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3 flex justify-center">
                  <div className="w-32 h-32 bg-violet-500/10 rounded-2xl flex items-center justify-center border border-violet-500/20">
                    <div className="text-violet-400 text-4xl font-bold">
                      {partnership.logo}
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {partnership.name}
                  </h3>
                  <p className="text-subtle mb-6 text-lg leading-relaxed">
                    {partnership.description}
                  </p>
                  {partnership.tags && partnership.tags.length > 0 && (
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                      {partnership.tags.map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-violet-500/10 text-violet-300 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {partnership.link && (
                    <Link
                      href={partnership.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors"
                    >
                      Learn More About Partnership
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
