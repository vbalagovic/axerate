"use client";

import { useEffect, useRef, useState } from "react";
import { getServices } from "@/lib/strapi";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    async function loadServices() {
      try {
        const data = await getServices();
        if (data && data.length > 0) {
          setServices(data);
        }
      } catch (error) {
        console.error('Failed to load services:', error);
      }
    }
    loadServices();
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

  const defaultServices = [
    {
      icon: "emoji_objects",
      title: "Ideate & Strategize",
      description:
        "We dissect your concept, map the market, and architect a resilient business model and GTM strategy.",
    },
    {
      icon: "terminal",
      title: "Engineer & Launch",
      description:
        "Our elite developers build your robust, scalable MVP, from sophisticated AI to enterprise-grade platforms.",
    },
    {
      icon: "security",
      title: "Fortify & Protect",
      description:
        "We manage corporate formation, IP safeguarding, and essential legal frameworks for a secure foundation.",
    },
    {
      icon: "rocket_launch",
      title: "Pitch & Capitalize",
      description:
        "Access our curated network of VCs and angels. We refine your narrative and help secure your seed round.",
    },
    {
      icon: "groups",
      title: "Recruit & Scale",
      description:
        "We help you build a world-class team, establishing the talent infrastructure for exponential growth.",
    },
    {
      icon: "add_circle",
      title: "Growth & Advisory",
      description:
        "Continuous strategic counsel on product, marketing, and operations to navigate your venture's lifecycle.",
    },
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <section ref={sectionRef} className="py-24 bg-secondary" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            The Venture Catalyst Framework
          </h2>
          <p className="text-subtle mt-4 text-lg max-w-2xl mx-auto">
            An end-to-end system for building defensible, scalable companies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <div
              key={index}
              className="feature-card p-8 animate-on-scroll fade-in-up bg-card"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-xl icon-bg mb-6">
                <span className="material-symbols-outlined text-violet-300 text-3xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-subtle">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
