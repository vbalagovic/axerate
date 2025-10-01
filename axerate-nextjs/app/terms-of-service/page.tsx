"use client";

import { useEffect, useState } from "react";
import { getTermsOfService } from "@/lib/strapi";

export default function TermsOfServicePage() {
  const [termsData, setTermsData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTerms() {
      try {
        const data = await getTermsOfService();
        setTermsData(data);
      } catch (error) {
        console.error('Failed to load terms of service:', error);
      } finally {
        setLoading(false);
      }
    }
    loadTerms();
  }, []);

  const defaultContent = {
    title: "Terms of Service",
    lastUpdated: "2025-01-10",
    content: `## 1. Agreement to Terms

By accessing or using Axerate's services, you agree to be bound by these Terms of Service.

## 2. Services Description

Axerate provides software development, strategic consulting, and startup support services.

## 3. User Responsibilities

When using our services, you agree to provide accurate information and comply with all applicable laws.

## 4. Intellectual Property

All content and functionality are owned by Axerate and protected by intellectual property laws.

## 5. Payment Terms

Fees are outlined in the applicable service agreement. Payment is due according to the specified schedule.

## 6. Termination

Either party may terminate services with written notice as specified in the applicable agreement.

## 7. Contact Information

Email: hello@axerate.com`
  };

  const displayData = termsData || defaultContent;

  // Convert markdown to simple HTML-like rendering
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-primary mb-4 mt-8">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('- ')) {
        return (
          <li key={index} className="ml-6 mb-2">
            {line.replace('- ', '')}
          </li>
        );
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return (
          <p key={index} className="mb-4">
            {line}
          </p>
        );
      }
    });
  };

  return (
    <main className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          {displayData.title}
        </h1>

        <p className="text-subtle mb-8">
          <strong>Last Updated:</strong> {displayData.lastUpdated ? new Date(displayData.lastUpdated).toLocaleDateString() : 'January 10, 2025'}
        </p>

        <div className="text-subtle">
          {renderContent(displayData.content)}
        </div>
      </div>
    </main>
  );
}
