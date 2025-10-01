"use client";

import { useEffect, useRef, useState } from "react";
import { submitContactForm, submitGeneralInquiry } from "@/lib/strapi";

interface ContactProps {
  variant?: 'main' | 'startup';
}

export default function Contact({ variant = 'main' }: ContactProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      if (variant === 'startup') {
        // Startup Studio form
        const data = {
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          ventureStage: formData.get('enquiry') as string,
          fundingStatus: formData.get('budget') as string,
          message: formData.get('message') as string,
        };
        await submitContactForm(data);
      } else {
        // Main page form - map budget values to enum
        const budgetValue = formData.get('budget') as string;
        const budgetMap: { [key: string]: string } = {
          '$10,000 - $20,000': 'budget_10k_20k',
          '$20,000 - $50,000': 'budget_20k_50k',
          '$50,000+': 'budget_50k_plus'
        };

        const data = {
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          enquiryType: formData.get('enquiry') as string,
          budget: budgetMap[budgetValue] || 'budget_10k_20k',
          message: formData.get('message') as string,
        };
        await submitGeneralInquiry(data);
      }

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copy = {
    main: {
      title: "Get In Touch",
      subtitle: "Have a project in mind? We'd love to hear from you."
    },
    startup: {
      title: "Get In Touch",
      subtitle: "Have a project in mind? We'd love to hear from you."
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-primary" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            {copy[variant].title}
          </h2>
          <p className="text-subtle mt-4 text-lg max-w-2xl mx-auto">
            {copy[variant].subtitle}
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-card border border-strong rounded-xl p-8">
          <form
            onSubmit={handleSubmit}
            className="animate-on-scroll fade-in-up"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-subtle"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md bg-primary border-strong shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm text-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-subtle"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md bg-primary border-strong shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm text-primary"
                />
              </div>
            </div>
            {variant === 'startup' ? (
              <>
                <div className="mt-6">
                  <label
                    htmlFor="enquiry"
                    className="block text-sm font-medium text-subtle"
                  >
                    What is your venture's current stage?
                  </label>
                  <select
                    id="enquiry"
                    name="enquiry"
                    required
                    className="mt-1 block w-full rounded-md bg-primary border-strong shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm text-primary"
                  >
                    <option value="">Please select...</option>
                    <option value="Idea Stage">Idea Stage</option>
                    <option value="Prototype/MVP">Prototype/MVP</option>
                    <option value="Pre-Seed">Pre-Seed</option>
                    <option value="Seed Stage">Seed Stage</option>
                    <option value="Growth Stage">Growth Stage</option>
                  </select>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-subtle"
                  >
                    What is your funding status?
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    className="mt-1 block w-full rounded-md bg-primary border-strong shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm text-primary"
                  >
                    <option value="">Please select...</option>
                    <option value="Bootstrapped">Bootstrapped</option>
                    <option value="Pre-Seed">Pre-Seed</option>
                    <option value="Seed">Seed</option>
                    <option value="Series A+">Series A+</option>
                  </select>
                </div>
              </>
            ) : (
              <>
                <div className="mt-6">
                  <label
                    htmlFor="enquiry"
                    className="block text-sm font-medium text-subtle"
                  >
                    Type of Enquiry
                  </label>
                  <select
                    id="enquiry"
                    name="enquiry"
                    required
                    className="mt-1 block w-full rounded-md bg-primary border-strong shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm text-primary"
                  >
                    <option value="">Please select...</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Data Analysis">Data Analysis</option>
                    <option value="Full-Stack Development">Full-Stack Development</option>
                    <option value="Marketing">Marketing</option>
                    <option value="AI/ML">AI/ML</option>
                  </select>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-subtle"
                  >
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    className="mt-1 block w-full rounded-md bg-primary border-strong shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm text-primary"
                  >
                    <option value="">Please select...</option>
                    <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                    <option value="$20,000 - $50,000">$20,000 - $50,000</option>
                    <option value="$50,000+">$50,000+</option>
                  </select>
                </div>
              </>
            )}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-subtle"
              >
                Message
              </label>
              <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md bg-primary border-strong shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm text-primary"
                ></textarea>
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
                  {isSubmitting ? 'Sending...' : 'Launch Your Venture'}
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
          </form>
        </div>
      </div>
    </section>
  );
}
