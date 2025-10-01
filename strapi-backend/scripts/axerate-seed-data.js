const axios = require('axios');

const STRAPI_URL = 'http://127.0.0.1:1337';

// Comprehensive Axerate data from Next.js components
const seedData = {
  // Hero Section (Single Type) - Main Page
  heroSection: {
    title: "From Zero to Venture.",
    subtitle: "Axerate is the operational co-founder for visionary startups. We fuse elite engineering, legal acumen, and growth strategy to turn your idea into a funded reality.",
    ctaButtonText: "Materialize Your Vision",
    ctaButtonLink: "#contact"
  },

  // Startup Hero (Single Type) - Startup Studio Page
  startupHero: {
    title: "Build Your Startup with Elite Execution",
    subtitle: "Axerate Startup Studio transforms your vision into a market-ready venture. We provide technical development, strategic guidance, and operational support to take you from concept to launch.",
    ctaButtonText: "Launch Your Startup",
    ctaButtonLink: "#contact"
  },

  // Privacy Policy (Single Type)
  privacyPolicy: {
    title: "Privacy Policy",
    lastUpdated: "2025-01-10",
    content: `## 1. Introduction

Welcome to Axerate ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.

## 2. Information We Collect

We collect information that you provide directly to us, including:

- Name and contact information (email address, phone number)
- Company information
- Project requirements and specifications
- Communication preferences
- Any other information you choose to provide

## 3. How We Use Your Information

We use the information we collect to:

- Provide, maintain, and improve our services
- Communicate with you about projects and services
- Send you technical notices and support messages
- Respond to your inquiries and provide customer support
- Comply with legal obligations

## 4. Information Sharing

We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:

- With your consent
- To comply with legal obligations
- To protect our rights and safety
- With service providers who assist in our operations

## 5. Data Security

We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

## 6. Your Rights

You have the right to:

- Access your personal information
- Correct inaccurate information
- Request deletion of your information
- Object to processing of your information
- Request data portability

## 7. Cookies and Tracking

We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.

## 8. Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.

## 9. Contact Us

If you have any questions about this Privacy Policy, please contact us at:

Email: hello@axerate.com`
  },

  // Terms of Service (Single Type)
  termsOfService: {
    title: "Terms of Service",
    lastUpdated: "2025-01-10",
    content: `## 1. Agreement to Terms

By accessing or using Axerate's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.

## 2. Services Description

Axerate provides software development, strategic consulting, and startup support services. The specific scope, deliverables, and timeline for each engagement will be outlined in a separate Statement of Work (SOW) or service agreement.

## 3. User Responsibilities

When using our services, you agree to:

- Provide accurate and complete information
- Maintain the confidentiality of any account credentials
- Comply with all applicable laws and regulations
- Not use our services for any illegal or unauthorized purpose
- Respect intellectual property rights

## 4. Intellectual Property

### 4.1 Our Property
All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by Axerate and are protected by copyright, trademark, and other intellectual property laws.

### 4.2 Client Property
Upon full payment of all fees, clients will own the deliverables created specifically for their project, as outlined in the applicable SOW. This does not include our pre-existing tools, frameworks, or methodologies.

## 5. Payment Terms

- Fees are outlined in the applicable SOW or service agreement
- Payment is due according to the schedule specified in the agreement
- Late payments may incur interest charges
- Services may be suspended for non-payment

## 6. Confidentiality

Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of our engagement, unless required by law to disclose.

## 7. Warranties and Disclaimers

### 7.1 Service Warranty
We warrant that our services will be performed in a professional and workmanlike manner in accordance with industry standards.

### 7.2 Disclaimer
Our services are provided "as is" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability or fitness for a particular purpose.

## 8. Limitation of Liability

To the maximum extent permitted by law, Axerate shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.

## 9. Termination

Either party may terminate services with written notice as specified in the applicable SOW. Upon termination:

- Client is responsible for payment of all services rendered up to the termination date
- Axerate will deliver all completed work
- Confidentiality obligations continue

## 10. Dispute Resolution

Any disputes arising from these terms or our services shall be resolved through:

1. Good faith negotiations
2. Mediation if negotiations fail
3. Binding arbitration if mediation fails
4. Applicable law: [Your Jurisdiction]

## 11. Changes to Terms

We reserve the right to modify these terms at any time. We will notify users of any material changes by updating the "Last Updated" date.

## 12. Governing Law

These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.

## 13. Contact Information

For questions about these Terms of Service, please contact us at:

Email: hello@axerate.com
Website: https://axerate.com`
  },

  // About Section (Single Type) - update existing if needed
  aboutSection: {
    title: "We Are The Architects of Ambition",
    description: "Axerate was founded on a single belief: brilliant ideas deserve elite execution. We are a collective of seasoned engineers, strategists, and legal minds who act as your operational co-founders. We don't just advise; we immerse ourselves in your venture, building alongside you for equity or success-based fees.\n\nWe eliminate the friction points—technical debt, strategic ambiguity, legal vulnerabilities—that derail promising startups. Our model is built on total alignment, creating a direct path from concept to market leadership."
  },

  // Services (Collection Type)
  services: [
    {
      icon: "emoji_objects",
      title: "Ideate & Strategize",
      description: "We dissect your concept, map the market, and architect a resilient business model and GTM strategy.",
      order: 1
    },
    {
      icon: "terminal",
      title: "Engineer & Launch",
      description: "Our elite developers build your robust, scalable MVP, from sophisticated AI to enterprise-grade platforms.",
      order: 2
    },
    {
      icon: "security",
      title: "Fortify & Protect",
      description: "We manage corporate formation, IP safeguarding, and essential legal frameworks for a secure foundation.",
      order: 3
    },
    {
      icon: "rocket_launch",
      title: "Pitch & Capitalize",
      description: "Access our curated network of VCs and angels. We refine your narrative and help secure your seed round.",
      order: 4
    },
    {
      icon: "groups",
      title: "Recruit & Scale",
      description: "We help you build a world-class team, establishing the talent infrastructure for exponential growth.",
      order: 5
    },
    {
      icon: "add_circle",
      title: "Growth & Advisory",
      description: "Continuous strategic counsel on product, marketing, and operations to navigate your venture's lifecycle.",
      order: 6
    }
  ],

  // Process Steps (Collection Type) - Main Page
  processSteps: [
    {
      icon: "emoji_objects",
      title: "Discovery & Strategy",
      description: "We start by diving deep into your vision, goals, and target audience. This phase includes market research, competitive analysis, and a collaborative workshop to define the project's strategic direction and technical requirements.",
      order: 1,
      page: "main"
    },
    {
      icon: "design_services",
      title: "Design & Prototyping",
      description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize the user experience. We focus on creating intuitive, user-friendly interfaces that align with your brand identity and project goals.",
      order: 2,
      page: "main"
    },
    {
      icon: "terminal",
      title: "Development & Testing",
      description: "Our developers bring the designs to life using the latest technologies and best practices. We follow an agile development process, with regular check-ins and a focus on writing clean, scalable code. Rigorous testing ensures a bug-free, high-performance product.",
      order: 3,
      page: "main"
    },
    {
      icon: "rocket_launch",
      title: "Launch & Support",
      description: "We handle the deployment process to ensure a smooth launch. After launch, we provide ongoing support and maintenance to keep your product running smoothly and securely. We also offer services to help you scale and add new features as your business grows.",
      order: 4,
      page: "main"
    },
    // Startup Studio Page Process Steps
    {
      icon: "emoji_objects",
      title: "Ideation & Validation",
      description: "We work with you to refine your startup idea, validate market fit, and define your unique value proposition. This phase includes competitive analysis, target audience research, and business model development.",
      order: 1,
      page: "startup"
    },
    {
      icon: "terminal",
      title: "MVP Development",
      description: "Our engineering team builds your minimum viable product with a focus on core features that solve your users' primary pain points. We use agile methodologies to deliver quickly while maintaining high quality standards.",
      order: 2,
      page: "startup"
    },
    {
      icon: "security",
      title: "Legal & Formation",
      description: "We handle company formation, intellectual property protection, founder agreements, and regulatory compliance. Our legal experts ensure your startup has a solid foundation from day one.",
      order: 3,
      page: "startup"
    },
    {
      icon: "rocket_launch",
      title: "Launch & Fundraising",
      description: "We help you launch your product to market and connect you with our network of investors. This includes pitch deck creation, financial modeling, and introductions to VCs and angel investors.",
      order: 4,
      page: "startup"
    }
  ],

  // Team Members (Collection Type) - Main Page
  teamMembers: [
    {
      name: "Vedran Balagović",
      role: "Chief Technology Officer",
      imageUrl: "/vedran.png",
      linkedin: "https://linkedin.com/in/vedran-balagovic",
      order: 1,
      page: "main"
    },
    {
      name: "Andres Herrera",
      role: "Senior Data & Integrations",
      imageUrl: "/andres.jpeg",
      linkedin: "https://linkedin.com/in/jaherrera1",
      order: 2,
      page: "main"
    },
    {
      name: "Junes El-Sayyid",
      role: "Startup & Legal Advisor",
      imageUrl: "/junes.jpeg",
      linkedin: "https://linkedin.com/in/juneselsayyid",
      order: 3,
      page: "main"
    },
    {
      name: "Bruno Hoždić",
      role: "Marketing Manager",
      imageUrl: "/bruno.jpeg",
      linkedin: "https://linkedin.com/in/bruno-hozdic-279110147",
      order: 4,
      page: "main"
    },
    // Startup Studio Page Team Members
    {
      name: "Vedran Balagović",
      role: "Chief Technology Officer",
      imageUrl: "/vedran.png",
      linkedin: "https://linkedin.com/in/vedran-balagovic",
      order: 1,
      page: "startup"
    },
    {
      name: "Andres Herrera",
      role: "Senior Data & Integrations",
      imageUrl: "/andres.jpeg",
      linkedin: "https://linkedin.com/in/jaherrera1",
      order: 2,
      page: "startup"
    },
    {
      name: "Junes El-Sayyid",
      role: "Startup & Legal Advisor",
      imageUrl: "/junes.jpeg",
      linkedin: "https://linkedin.com/in/juneselsayyid",
      order: 3,
      page: "startup"
    },
    {
      name: "Bruno Hoždić",
      role: "Marketing Manager",
      imageUrl: "/bruno.jpeg",
      linkedin: "https://linkedin.com/in/bruno-hozdic-279110147",
      order: 4,
      page: "startup"
    }
  ],

  // Partnerships (Collection Type)
  partnerships: [
    {
      name: "The Founders' Group",
      description: "A professional development community connecting entrepreneurs, investors, and mentors. This strategic partnership gives Axerate startups exclusive access to angel investor networks, mentorship programs, and funding opportunities.",
      logo: "TFG",
      tags: ["Angel Investors", "Mentorship", "Fundraising", "Networking"],
      link: "https://www.linkedin.com/company/thefoundersgroup/",
      order: 1
    }
  ],

  // Blog Posts (Collection Type)
  blogPosts: [
    {
      title: "Understanding Amazon's Generative AI: Tools and Applications",
      slug: "amazon-generative-ai",
      description: "Amazon's been making some pretty amazing moves in the world of generative AI lately. Explore how Amazon's generative AI tools enhance business operations and customer experiences.",
      content: `# Understanding Amazon's Generative AI

Amazon's been making some pretty amazing moves in the world of generative AI lately. Their suite of tools is transforming how businesses operate and interact with customers.

## Amazon Bedrock

Amazon Bedrock provides access to foundation models from leading AI companies. This service allows businesses to build and scale generative AI applications without managing infrastructure.

### Key Features:
- Access to multiple foundation models
- Customization with your own data
- Enterprise-grade security
- Seamless integration with AWS services

## Amazon Q

Amazon Q is an AI-powered assistant designed for business use. It can help with:
- Code generation and debugging
- Document analysis and summarization
- Business intelligence and analytics
- Customer service automation

## Use Cases

### 1. Customer Service
Implement intelligent chatbots that understand context and provide personalized responses.

### 2. Content Generation
Create marketing copy, product descriptions, and documentation at scale.

### 3. Code Development
Accelerate development with AI-assisted coding and automated testing.

### 4. Data Analysis
Generate insights from large datasets with natural language queries.

## Getting Started

To leverage Amazon's generative AI tools:

1. Set up an AWS account
2. Choose the appropriate service for your use case
3. Integrate with your existing systems
4. Train and fine-tune models with your data

## Conclusion

Amazon's generative AI offerings provide powerful capabilities for businesses of all sizes. By leveraging these tools, companies can enhance productivity, improve customer experiences, and drive innovation.`,
      author: "Axerate Team",
      readTime: "8 min read",
      tags: ["Generative AI", "Amazon Web Services", "Machine Learning", "Technology"],
      publishedDate: new Date('2025-09-10').toISOString(),
    },
    {
      title: "The Rise of AI Content Creation in 2025",
      slug: "ai-content-creation-2025",
      description: "AI content creation tools like ZeroGPT are revolutionizing how content is produced. This guide covers current tools, methods, and best practices for effective use in 2025.",
      content: `# The Rise of AI Content Creation in 2025

The landscape of content creation has been transformed by AI. What once took hours now takes minutes, but with this power comes new considerations.

## The Current State

AI content creation tools have matured significantly:

### Leading Platforms:
- **GPT-4 and beyond**: Advanced language models
- **Claude**: Focused on helpful, harmless content
- **Midjourney/DALL-E**: Visual content generation
- **Jasper/Copy.ai**: Marketing-focused tools

## Best Practices

### 1. Human Oversight is Essential
AI should augment, not replace, human creativity:
- Review and edit all AI-generated content
- Ensure accuracy and brand alignment
- Add personal insights and examples

### 2. Prompt Engineering
The quality of output depends on input:
- Be specific and detailed
- Provide context and examples
- Iterate and refine prompts

### 3. Ethical Considerations
- Disclose AI usage when appropriate
- Verify facts and statistics
- Respect copyright and attribution
- Maintain authenticity

## Content Types That Benefit Most

### Blog Posts and Articles
AI excels at:
- Research and outlining
- First drafts
- SEO optimization
- Repurposing content

### Social Media
- Caption generation
- Hashtag suggestions
- Content calendars
- Engagement ideas

### Marketing Copy
- Ad copy variations
- Email campaigns
- Product descriptions
- Landing page content

## Tools and Workflows

### Recommended Stack:
1. **Research**: Perplexity, ChatGPT
2. **Writing**: Claude, GPT-4
3. **Editing**: Grammarly, Hemingway
4. **SEO**: Surfer SEO, Clearscope
5. **Visuals**: Midjourney, Canva

### Efficient Workflow:
1. Define objectives and audience
2. Research and outline with AI
3. Generate first draft
4. Human review and enhancement
5. Optimize for SEO and readability
6. Final polish and publish

## Measuring Success

Track these metrics:
- Engagement rates
- Time saved
- Content quality scores
- Conversion rates
- Audience feedback

## Looking Ahead

AI content creation will continue evolving:
- More personalized content
- Better context understanding
- Multimodal creation
- Real-time adaptation

## Conclusion

AI content creation in 2025 is about augmentation, not automation. The most successful content strategies combine AI efficiency with human creativity, strategic thinking, and authentic voice.

The key is finding the right balance for your needs and maintaining quality standards while leveraging AI's speed and scalability.`,
      author: "Axerate Team",
      readTime: "10 min read",
      tags: ["AI", "Content Creation", "Marketing", "Technology"],
      publishedDate: new Date('2025-09-10').toISOString(),
    },
    {
      title: "Level Up Your Content Strategy: AI-Powered Multi-Platform Engagement",
      slug: "ai-powered-multi-platform-engagement",
      description: "Ever wondered about revolutionizing content strategy? Let me share what actually works (and what doesn't) when it comes to AI-powered multi-platform engagement.",
      content: `# Level Up Your Content Strategy: AI-Powered Multi-Platform Engagement

In today's fragmented digital landscape, maintaining a consistent presence across multiple platforms is challenging. AI is changing the game.

## The Multi-Platform Challenge

Modern brands need to be everywhere:
- LinkedIn for B2B
- Instagram for visual storytelling
- Twitter/X for real-time engagement
- TikTok for viral reach
- YouTube for long-form content

But creating unique content for each platform is time-consuming and expensive.

## Enter AI-Powered Solutions

### Content Repurposing
AI can transform one piece of content into multiple formats:

**Single Blog Post →**
- LinkedIn article
- Twitter thread
- Instagram carousel
- TikTok script
- YouTube video outline
- Email newsletter

### Platform Optimization
AI understands platform-specific best practices:
- Character limits and formatting
- Optimal posting times
- Hashtag strategies
- Engagement patterns
- Visual requirements

## Implementation Strategy

### 1. Create Pillar Content
Start with high-quality, long-form content:
- In-depth blog posts
- Comprehensive guides
- Case studies
- Research reports

### 2. AI-Assisted Repurposing
Use AI to adapt for each platform:

Example Prompt: "Convert this blog post into a LinkedIn article focusing on professional insights, maintaining an authoritative tone, and including relevant hashtags."

### 3. Platform-Specific Refinement
- **LinkedIn**: Professional insights, data-driven
- **Instagram**: Visual storytelling, behind-the-scenes
- **Twitter**: Quick takes, trending topics
- **TikTok**: Educational entertainment
- **YouTube**: Deep dives, tutorials

### 4. Scheduling and Analytics
- Use tools like Buffer or Hootsuite
- Track performance across platforms
- A/B test different approaches
- Refine based on data

## Tools and Technologies

### Content Creation:
- ChatGPT/Claude for text
- Midjourney for visuals
- Descript for video
- Synthesia for AI presenters

### Distribution:
- Buffer for scheduling
- Zapier for automation
- Make.com for workflows

### Analytics:
- Platform native analytics
- Sprout Social
- Google Analytics

## Best Practices

### 1. Maintain Brand Voice
AI should enhance, not replace, your brand personality:
- Define clear brand guidelines
- Review and edit AI outputs
- Add human touches and insights

### 2. Respect Platform Culture
Each platform has its own norms:
- LinkedIn: Professional and insightful
- Instagram: Visual and authentic
- Twitter: Concise and timely
- TikTok: Entertaining and trendy

### 3. Engage Authentically
AI can help create content, but engagement must be human:
- Respond to comments personally
- Build genuine relationships
- Show your brand's personality

## Common Pitfalls to Avoid

1. **Over-automation**: Don't lose the human touch
2. **Generic content**: Customize for each platform
3. **Ignoring metrics**: Data should guide strategy
4. **Inconsistent posting**: Maintain regular schedules
5. **Neglecting engagement**: Content is just the start

## Measuring Success

Track these KPIs:
- Engagement rate per platform
- Audience growth
- Content reach and impressions
- Conversion rates
- Time saved in content creation

## Advanced Strategies

### Content Clustering
Group related content for maximum impact:
- Theme weeks or months
- Product launch campaigns
- Seasonal content series

### Cross-Platform Storytelling
Tell one story across multiple platforms:
- Tease on Twitter
- Deep dive on LinkedIn
- Visual showcase on Instagram
- Tutorial on YouTube

### Community Building
Use AI to:
- Identify trending topics
- Suggest engagement opportunities
- Personalize responses
- Analyze sentiment

## The Future of Multi-Platform Content

Emerging trends:
- **AI-generated video**: Automated video creation
- **Personalization at scale**: Content adapted to individual users
- **Voice and audio**: AI-powered podcasts and voice content
- **Real-time optimization**: Dynamic content adjustment

## Conclusion

AI-powered multi-platform engagement is not about replacing human creativity—it's about amplifying it. By leveraging AI tools strategically, you can maintain a strong presence across all platforms without burning out your team.

The key is to:
1. Create quality pillar content
2. Use AI for intelligent repurposing
3. Customize for each platform
4. Maintain authentic engagement
5. Continuously optimize based on data

Start small, experiment, and scale what works. The future of content marketing is here, and it's powered by the perfect blend of human creativity and AI efficiency.`,
      author: "Axerate Team",
      readTime: "12 min read",
      tags: ["AI in Marketing", "Content Repurposing", "Social Media", "Content Strategy"],
      publishedDate: new Date('2025-08-10').toISOString(),
    }
  ],

  // Page Metadata (Collection Type)
  pageMetadata: [
    {
      pageName: "main",
      title: "Axerate - End-to-End Digital Solutions for Startups",
      description: "Axerate provides elite engineering, strategic consulting, and startup support. From idea to funding, we're your operational co-founders building scalable ventures.",
      keywords: "startup development, software development, strategic consulting, MVP development, startup funding, venture capital, technical co-founder, business strategy",
      ogTitle: "Axerate - Transform Your Startup Vision into Reality",
      ogDescription: "Elite engineering, strategic consulting, and operational support for visionary startups. From zero to venture with Axerate.",
      ogImage: "https://axerate.com/og-image-home.jpg",
      twitterCard: "summary_large_image",
      canonicalUrl: "https://axerate.com"
    },
    {
      pageName: "startup",
      title: "Startup Studio - Build Your Venture with Axerate",
      description: "Axerate Startup Studio transforms your vision into a market-ready venture. Technical development, strategic guidance, and operational support from concept to launch.",
      keywords: "startup studio, venture builder, startup incubator, MVP development, startup services, technical development, business strategy, startup funding",
      ogTitle: "Startup Studio - Launch Your Venture with Elite Execution",
      ogDescription: "Build your startup with elite execution. Axerate Startup Studio provides technical development, strategic guidance, and operational support.",
      ogImage: "https://axerate.com/og-image-startup-studio.jpg",
      twitterCard: "summary_large_image",
      canonicalUrl: "https://axerate.com/startup-studio"
    }
  ]
};

// Helper function to create data with proper error handling
async function createData(endpoint, data, isCollection = false) {
  try {
    const url = `${STRAPI_URL}/api/${endpoint}`;

    if (isCollection) {
      // For collection types, create each item
      const results = [];
      for (const item of data) {
        const response = await axios.post(url, { data: item });
        results.push(response.data);
        console.log(`✅ Created ${endpoint}:`, item.title || item.name || item.question || 'item');
      }
      return results;
    } else {
      // For single types, use PUT
      const response = await axios.put(url, { data });
      console.log(`✅ Updated ${endpoint}`);
      return response.data;
    }
  } catch (error) {
    console.error(`❌ Error creating ${endpoint}:`, error.response?.data || error.message);
    throw error;
  }
}

// Main seeding function
async function seedAllData() {
  console.log('🌱 Starting Axerate data seeding...\n');

  try {
    // Single Types (use PUT)
    console.log('\n📝 Seeding Single Types...');
    await createData('hero-section', seedData.heroSection);
    await createData('startup-hero', seedData.startupHero);
    await createData('about-section', seedData.aboutSection);
    await createData('privacy-policy', seedData.privacyPolicy);
    await createData('terms-of-service', seedData.termsOfService);

    // Collection Types (use POST)
    console.log('\n📝 Seeding Collection Types...');
    await createData('services', seedData.services, true);
    await createData('process-steps', seedData.processSteps, true);
    await createData('team-members', seedData.teamMembers, true);
    await createData('partnerships', seedData.partnerships, true);
    await createData('blog-posts', seedData.blogPosts, true);
    await createData('page-metadatas', seedData.pageMetadata, true);

    console.log('\n🎉 All Axerate data seeded successfully!');
    console.log('\nSeeded content:');
    console.log(`- Hero Section: ✅`);
    console.log(`- About Section: ✅`);
    console.log(`- Services: ${seedData.services.length} items`);
    console.log(`- Process Steps: ${seedData.processSteps.length} items`);
    console.log(`- Team Members: ${seedData.teamMembers.length} items`);
    console.log(`- Partnerships: ${seedData.partnerships.length} items`);
    console.log(`- Blog Posts: ${seedData.blogPosts.length} items`);
    console.log(`- Page Metadata: ${seedData.pageMetadata.length} items`);

  } catch (error) {
    console.error('💥 Seeding failed:', error);
    process.exit(1);
  }
}

// Export for potential use as module
module.exports = { seedAllData, seedData };

// Run if called directly
if (require.main === module) {
  seedAllData();
}
