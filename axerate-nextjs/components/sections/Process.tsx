"use client";

import { useEffect, useRef } from "react";

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

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

  const steps = [
    {
      icon: "emoji_objects",
      title: "Discovery & Strategy",
      description:
        "We start by diving deep into your vision, goals, and target audience. This phase includes market research, competitive analysis, and a collaborative workshop to define the project's strategic direction and technical requirements.",
      delay: "0.1s",
    },
    {
      icon: "design_services",
      title: "Design & Prototyping",
      description:
        "Our design team creates wireframes, mockups, and interactive prototypes to visualize the user experience. We focus on creating intuitive, user-friendly interfaces that align with your brand identity and project goals.",
      delay: "0.2s",
    },
    {
      icon: "terminal",
      title: "Development & Testing",
      description:
        "Our developers bring the designs to life using the latest technologies and best practices. We follow an agile development process, with regular check-ins and a focus on writing clean, scalable code. Rigorous testing ensures a bug-free, high-performance product.",
      delay: "0.3s",
    },
    {
      icon: "rocket_launch",
      title: "Launch & Support",
      description:
        "We handle the deployment process to ensure a smooth launch. After launch, we provide ongoing support and maintenance to keep your product running smoothly and securely. We also offer services to help you scale and add new features as your business grows.",
      delay: "0.4s",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-primary" id="process">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Our Process
          </h2>
          <p className="text-subtle mt-4 text-lg max-w-2xl mx-auto">
            A transparent and collaborative journey from concept to launch.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="feature-card p-8 animate-on-scroll fade-in-up bg-card"
              style={{ animationDelay: step.delay }}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-xl icon-bg mb-6">
                <span className="material-symbols-outlined text-violet-300 text-3xl">
                  {step.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-subtle">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
