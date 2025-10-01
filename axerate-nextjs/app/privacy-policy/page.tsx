"use client";

import { useEffect, useState } from "react";
import { getPrivacyPolicy } from "@/lib/strapi";

export default function PrivacyPolicyPage() {
  const [policyData, setPolicyData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPolicy() {
      try {
        const data = await getPrivacyPolicy();
        setPolicyData(data);
      } catch (error) {
        console.error('Failed to load privacy policy:', error);
      } finally {
        setLoading(false);
      }
    }
    loadPolicy();
  }, []);

  const defaultContent = {
    title: "Privacy Policy",
    lastUpdated: "2025-01-10",
    content: `## 1. Introduction

Welcome to Axerate ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy.

## 2. Information We Collect

We collect information that you provide directly to us, including:
- Name and contact information
- Company information
- Project requirements
- Communication preferences

## 3. How We Use Your Information

We use the information to provide, maintain, and improve our services.

## 4. Information Sharing

We do not sell, trade, or rent your personal information to third parties.

## 5. Contact Us

Email: hello@axerate.com`
  };

  const displayData = policyData || defaultContent;

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
