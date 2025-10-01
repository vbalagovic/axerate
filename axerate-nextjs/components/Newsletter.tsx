"use client";

import { useState } from "react";
import { subscribeToNewsletter } from "@/lib/strapi";

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await subscribeToNewsletter(email);
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-strong rounded-xl p-8 mb-12">
      <h3 className="text-2xl font-bold text-primary mb-2">Stay Updated</h3>
      <p className="text-subtle mb-6">
        Get the latest insights on AI, startups, and technology delivered to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={isSubmitting}
          className="flex-1 rounded-md bg-primary border-strong shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm text-primary disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-8 rounded-lg shadow-xl shadow-violet-500/20 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center">
          Thanks for subscribing! Check your inbox for confirmation.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center">
          Something went wrong. Please try again later.
        </div>
      )}
    </div>
  );
}
