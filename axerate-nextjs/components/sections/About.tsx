"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAboutSection, getTeamMembers } from "@/lib/strapi";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [aboutData, setAboutData] = useState<any>(null);
  const [team, setTeam] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const [about, members] = await Promise.all([
          getAboutSection(),
          getTeamMembers()
        ]);
        setAboutData(about);
        setTeam(members);
      } catch (error) {
        console.error('Failed to load about data:', error);
      }
    }
    loadData();
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

  const defaultTeam = [
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
      name: "Bruno Hoždić",
      role: "Marketing Manager",
      imageUrl: "/bruno.jpeg",
      linkedin: "https://linkedin.com/in/bruno-hozdic-279110147",
    },
  ];

  const displayTeam = team.length > 0 ? team : defaultTeam;

  return (
    <section ref={sectionRef} className="py-24 bg-secondary" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 animate-on-scroll fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {aboutData?.title || "We Are The Architects of Ambition"}
            </h2>
            <div className="text-subtle text-lg space-y-6">
              {aboutData?.description ? (
                aboutData.description.split('\n\n').map((paragraph: string, idx: number) => (
                  <p key={idx}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>
                    Axerate was founded on a single belief: brilliant ideas deserve
                    elite execution. We are a collective of seasoned engineers,
                    strategists, and legal minds who act as your operational
                    co-founders. We don't just advise; we immerse ourselves in your
                    venture, building alongside you for equity or success-based fees.
                  </p>
                  <p>
                    We eliminate the friction points—technical debt, strategic
                    ambiguity, legal vulnerabilities—that derail promising startups.
                    Our model is built on total alignment, creating a direct path from
                    concept to market leadership.
                  </p>
                </>
              )}
            </div>
          </div>
          <div
            className="lg:w-1/2 w-full animate-on-scroll scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCymISk1FWY6rRlOpON2Dra-89DeulpV7KGVMxYlC-fDcrf28qvtofSYDIM5kQ0ZNTPzeAgXnom_OHJMWBO1_PABUCcnhVcKb66zFmaKOPCErRsR8S4ZfeHi97sCcdARP5nTdLt81H-Pdk12Pd4TjMF9q8RpMYf70Dy30WlsMdTpn-0PBNtzVhlI0g1xZqbZvTFwkqC-tDJekv0yP8cl9xaDMOnTwY0yjiq8ZvbldNNrsWZH-nFvwUERbY7HNiaq7W6w0xXBk7ja4A"
                alt="Abstract Axerate logo graphic"
                width={500}
                height={500}
                className="rounded-2xl w-full max-w-md mx-auto shadow-2xl shadow-violet-900/20"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-2xl -z-10 animate-float"></div>
            </div>
          </div>
        </div>

        <div className="mt-28">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h3 className="text-4xl font-bold text-primary">
              Our Core Architects
            </h3>
            <p className="text-subtle mt-4 text-lg">
              The minds that will shape your venture.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayTeam.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-transparent to-black/80 animate-on-scroll fade-in-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {member.imageUrl && (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={320}
                    height={320}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-violet-300 font-medium mb-3">
                    {member.role}
                  </p>
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-violet-300 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
