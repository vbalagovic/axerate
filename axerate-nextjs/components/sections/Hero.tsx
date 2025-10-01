"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getHeroSection, getStartupHero } from "@/lib/strapi";

interface HeroProps {
  variant?: "main" | "startup";
}

export default function Hero({ variant = "main" }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [heroData, setHeroData] = useState<any>(null);

  useEffect(() => {
    async function loadHeroData() {
      try {
        const data = variant === "startup" ? await getStartupHero() : await getHeroSection();
        setHeroData(data);
      } catch (error) {
        console.error('Failed to load hero data:', error);
      }
    }
    loadHeroData();
  }, [variant]);

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

  return (
    <section ref={sectionRef} className="hero-section py-32 md:py-48">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1
          className="text-5xl md:text-7xl font-extrabold text-primary leading-tight mb-6 animate-on-scroll fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {heroData?.title || (variant === "startup" ? "Build Your Startup with Elite Execution" : "From Zero to Venture.")}
        </h1>
        <p
          className="text-lg md:text-xl text-subtle max-w-3xl mx-auto mb-10 animate-on-scroll fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {heroData?.subtitle || (variant === "startup"
            ? "Axerate Startup Studio transforms your vision into a market-ready venture. We provide technical development, strategic guidance, and operational support to take you from concept to launch."
            : "Axerate is the operational co-founder for visionary startups. We fuse elite engineering, legal acumen, and growth strategy to turn your idea into a funded reality.")}
        </p>
        <Link
          href={heroData?.ctaButtonLink || "#contact"}
          className="cta-button bg-violet-500 hover:bg-violet-600 text-white font-bold py-4 px-10 rounded-lg text-lg inline-flex items-center gap-2 shadow-xl shadow-violet-500/20 animate-on-scroll fade-in-up"
        >
          {heroData?.ctaButtonText || (variant === "startup" ? "Launch Your Startup" : "Materialize Your Vision")}
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
