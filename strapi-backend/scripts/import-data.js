const strapi = require('@strapi/strapi');

const existingData = {
  heroSection: {
    title: "Startup legal support without the overhead.",
    subtitle: "Legal services tailored for early-stage founders—contracts, compliance, and clarity when you need it most.",
    ctaButtonText: "Book a quick intro call",
    ctaButtonLink: "https://outlook.office.com/bookwithme/user/00a494b0223b4e5486a32ce1c65641be@jes.ventures/meetingtype/XsJxbT-yrUiwz3ZuBJgaGQ2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
  },
  aboutSection: {
    title: "Legal services that speak startup",
    description1: "You're building something from scratch. You don't need 20-page memos or hourly billing surprises—you need a legal cofounder who speaks startup.",
    description2: "We're your legal cofounder—lawyer, founder ally, and someone who knows the challenges of getting a business off the ground. We offer flexible legal services to help you launch, scale, and stay protected—without slowing you down."
  },
  servicePlans: [
    {
      name: "Starter",
      subtitle: "For early-stage startups",
      description: "Essential legal support for early-stage startups.",
      features: [
        {
          title: "Monthly 45‑minute strategy call",
          description: "Tailored legal roadmap to help you hit your next milestone faster."
        },
        {
          title: "1 red‑flag contract scan/month",
          description: "Fast, founder-focused review to flag key issues."
        },
        {
          title: "Email support",
          description: "Timely, to-the-point legal answers — no chasing."
        }
      ],
      buttonText: "Subscribe to Starter",
      buttonLink: "",
      isPopular: false,
      price: "",
      order: 1
    },
    {
      name: "Growth",
      subtitle: "For scaling startups",
      description: "Comprehensive legal support for startups ready to accelerate.",
      features: [
        {
          title: "Bi-weekly strategy calls",
          description: "Deep dive legal planning twice a month"
        },
        {
          title: "3 red-flag scans/month",
          description: "Priority turnaround"
        },
        {
          title: "1 light doc draft/month",
          description: "Custom contract drafting for specific needs"
        },
        {
          title: "Priority email turnaround (24h)",
          description: "Same-day response for urgent matters"
        },
        {
          title: "Custom clause library access",
          description: ""
        }
      ],
      buttonText: "Subscribe to Growth",
      buttonLink: "",
      isPopular: true,
      price: "",
      order: 2
    },
    {
      name: "Custom",
      subtitle: "For complex legal needs",
      description: "Complex legal challenges require bespoke solutions. From M&A preparation and investor negotiations to international expansion and regulatory compliance—we'll craft a legal strategy that scales with your ambitions.",
      features: [
        {
          title: "Custom legal strategy",
          description: "Tailored to your business model"
        },
        {
          title: "Complex negotiations",
          description: "High-stakes contract support"
        },
        {
          title: "Compliance review",
          description: "Industry-specific requirements"
        },
        {
          title: "M&A preparation support",
          description: "Due diligence and documentation"
        },
        {
          title: "International expansion guidance",
          description: ""
        }
      ],
      buttonText: "Start with a call",
      buttonLink: "https://outlook.office.com/bookwithme/user/00a494b0223b4e5486a32ce1c65641be@jes.ventures/meetingtype/XsJxbT-yrUiwz3ZuBJgaGQ2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile",
      isPopular: false,
      price: "",
      order: 3
    }
  ],
  whyWorkFeatures: [
    {
      title: "Flat-fee pricing",
      description: "No hourly surprises. Know exactly what you'll pay upfront.",
      icon: "DollarSign",
      order: 1
    },
    {
      title: "Fast turnaround",
      description: "Get what you need quickly, without the bureaucracy.",
      icon: "Clock",
      order: 2
    },
    {
      title: "Founder-first mindset",
      description: "We understand your challenges and priorities.",
      icon: "Users",
      order: 3
    },
    {
      title: "No legalese, no pressure",
      description: "Clear communication, practical solutions.",
      icon: "CheckCircle",
      order: 4
    }
  ],
  pitchCoaching: {
    title: "Now Live: Pitch Coaching & Deck Advisory",
    subtitle: "A companion service from Legal Cofounder for founders preparing to raise capital.",
    features: [
      {
        title: "Pitchdeck Deep Dives",
        description: "Storytelling + structure optimization"
      },
      {
        title: "Investor-readiness reports",
        description: "Get ready for your next round"
      },
      {
        title: "Pitchdeck Scoring App",
        description: "AI-backed slide-by-slide feedback"
      }
    ],
    buttonText: "Get Started with Pitch Doc",
    buttonLink: "https://pitch-doc.com"
  },
  faqs: [
    {
      question: "How long does it take to set up a company in Belgium?",
      answer: "With our streamlined process, we can help you incorporate your Belgian company (BV or NV) within 2-3 weeks. This includes preparing all documentation, handling the notary appointment, and completing the registration with the CBE (Central Business Register).",
      order: 1
    },
    {
      question: "What's the difference between flat-fee and hourly billing?",
      answer: "Our flat-fee pricing means you know exactly what you'll pay upfront - no surprises or unexpected costs. Unlike traditional hourly billing that can quickly escalate, our transparent pricing helps you budget effectively while getting comprehensive legal support.",
      order: 2
    },
    {
      question: "Do I need a Belgian address to incorporate a company?",
      answer: "Yes, you need a registered address in Belgium for your company. We can help you establish this, whether through a virtual office service, co-working space, or physical office location depending on your business needs.",
      order: 3
    },
    {
      question: "What's included in the Startup Legal Kickstart package?",
      answer: "Our €750 package includes company incorporation, basic founder agreements, essential contract templates, GDPR compliance basics, and a 2-hour consultation to discuss your specific legal needs as you grow.",
      order: 4
    },
    {
      question: "How does GDPR compliance work for startups?",
      answer: "GDPR applies to all businesses handling EU personal data, regardless of size. We help you implement compliant data practices from day one, including privacy policies, consent mechanisms, and data processing documentation - much easier than retrofitting later.",
      order: 5
    },
    {
      question: "Can you help with fundraising legal documents?",
      answer: "Absolutely. We assist with investment documentation including term sheets, shareholder agreements, due diligence preparation, and investor protection clauses. We understand the Belgian startup funding landscape and can prepare you for success.",
      order: 6
    },
    {
      question: "What if I need ongoing legal support after the initial setup?",
      answer: "We offer flexible ongoing support through retainer arrangements or project-based work. Many founders find our quarterly legal health check-ins valuable for staying compliant as they scale.",
      order: 7
    },
    {
      question: "Do you work with international founders moving to Belgium?",
      answer: "Yes, we regularly help international entrepreneurs establish their European operations in Belgium. We can guide you through visa requirements, tax considerations, and local business practices.",
      order: 8
    }
  ],
  founderSection: {
    title: "Who's behind Legal Cofounder?",
    paragraph1: "Hi, I'm Junes — founder, lawyer, and startup ally.",
    paragraph2: "I've worked with dozens of early-stage teams on everything from cofounder splits to funding rounds and investor negotiations. Not from the sidelines — but as someone who understands how startups move: fast, lean, and under pressure.",
    paragraph3: "I started Legal Cofounder because too many founders were either stuck with outdated legal advice or avoiding it altogether. My goal is simple: give you the legal clarity you need, without the overhead, delay, or legalese."
  },
  testimonials: [
    {
      name: "Stephaan Cloet",
      role: "Serial Entrepreneur & Founder",
      company: "Legal Monitr",
      content: "Working with LegalCofounder has been a game-changer for Legal Monitr. They didn't just fine-tune our pitch, they helped us see our business from a fresh perspective. We really felt they wanted us to succeed. If you're a startup looking for more than just advice, LegalCofounder is your go-to partner.",
      website: "https://legal-monitr.com/",
      // We'll handle the image separately since it needs to be uploaded to Strapi media library
      imagePath: "/lovable-uploads/1b883c3b-0d97-4767-be0b-74f44b25d33a.png"
    }
  ],
  blogPosts: [
    {
      title: "Legal Essentials for Early-Stage Startups",
      description: "Navigate the critical legal decisions every founder faces in the first year of building their startup.",
      content: `Starting a company involves many legal considerations that can seem overwhelming at first. However, getting the basics right from the beginning can save you significant time, money, and headaches down the road.

**1. Choose the Right Business Structure**

The first major decision is selecting your business structure. For most startups in Belgium, you'll likely choose between:

- BV (Besloten Vennootschap): Similar to an LLC, offers liability protection and is investor-friendly
- BVBA: The predecessor to BV, being phased out but still relevant for existing companies
- Sole Proprietorship: Simple but offers no liability protection

Most venture-backed startups opt for a BV due to its flexibility and investor appeal.

**2. Founder Agreements Are Critical**

Even if you're founding the company with your best friend, a founder agreement is essential. This document should cover:

- Equity split and vesting schedules
- Roles and responsibilities
- Decision-making processes
- What happens if a founder leaves
- Intellectual property ownership

**3. Protect Your Intellectual Property**

Your IP is often your startup's most valuable asset. Consider:

- Filing for trademarks on your brand name and logo
- Ensuring all code and creative work is properly assigned to the company
- Having employees and contractors sign IP assignment agreements
- Evaluating whether patents make sense for your technology

**4. Get Your Employment Law Right**

When hiring your first employees, ensure you:

- Use proper employment contracts
- Understand Belgian labor law requirements
- Set up payroll and benefits correctly
- Consider stock option plans for key hires

**5. GDPR Compliance from Day One**

Don't treat GDPR as an afterthought. Build privacy by design into your product and ensure you have proper:

- Privacy policies
- Data processing agreements
- Consent mechanisms
- Data retention policies

Taking care of these legal essentials early will give you a solid foundation to build upon as your startup grows.`,
      author: "Junes Elias Steenssens",
      publishedDate: "2024-01-15T00:00:00.000Z",
      readTime: "5 min read",
      tags: ["startup-law", "incorporation", "legal-basics"]
    },
    {
      title: "Understanding Equity Distribution in Startups",
      description: "A comprehensive guide to fair equity allocation between founders, employees, and investors.",
      content: `Equity distribution is one of the most important decisions you'll make as a startup founder. Get it wrong, and you could face years of conflict or lose key team members. Get it right, and you'll have a motivated team aligned with your company's success.

**Founder Equity Split**

The founder equity split should reflect:

- Time commitment (full-time vs. part-time)
- Financial investment in the company
- Expertise and unique skills brought to the table
- Risk taken (who quit their job first?)
- Future contributions expected

Common splits include 50/50 for two equal founders, or 60/30/10 for a founding team of three with different contribution levels.

**The Importance of Vesting**

All founder equity should be subject to vesting, typically over 4 years with a 1-year cliff. This means:

- If a founder leaves in the first year, they get nothing
- After the first year, they're vested in 25% of their shares
- The remaining shares vest monthly over the next 3 years

**Employee Stock Options**

When hiring employees, consider setting aside 10-20% of your company for an employee stock option pool (ESOP). Key considerations:

- Strike price should be set at fair market value
- Vesting schedules typically mirror founder vesting (4 years, 1-year cliff)
- Consider accelerated vesting for key employees in certain circumstances

**Investor Dilution**

Each investment round will dilute existing shareholders. Plan for this by:

- Understanding how much equity you'll need to give up for your target raise
- Negotiating anti-dilution protections where appropriate
- Maintaining enough equity to keep founders motivated through multiple rounds

**Common Mistakes to Avoid**

1. Not putting agreements in writing
2. Equal splits when contributions aren't equal
3. No vesting schedules
4. Giving away too much equity too early
5. Not planning for future hires and investment rounds

Remember, equity decisions made early are difficult to change later. Take the time to get them right, and don't hesitate to seek legal advice for complex situations.`,
      author: "Junes Elias Steenssens",
      publishedDate: "2024-01-10T00:00:00.000Z",
      readTime: "8 min read",
      tags: ["equity", "co-founders", "employee-stock"]
    },
    {
      title: "Fundraising 101: Legal Preparation for Investment",
      description: "Essential legal preparations before approaching investors and what documents you'll need.",
      content: "Before you start fundraising, ensure your legal house is in order. Investors will conduct due diligence, and any legal issues discovered can derail or significantly delay your fundraising process.\n\n**Essential Documents for Due Diligence**\n\nInvestors will want to review:\n\n**Corporate Documents:**\n- Articles of incorporation and bylaws\n- Board resolutions and meeting minutes\n- Cap table showing all shareholders\n- Stock certificates and option grants\n- Founder and employee agreements\n\n**Intellectual Property:**\n- Patent applications and grants\n- Trademark registrations\n- Copyright assignments\n- IP assignment agreements from employees/contractors\n- License agreements for third-party IP\n\n**Commercial Agreements:**\n- Customer contracts and terms of service\n- Supplier and vendor agreements\n- Partnership and strategic agreements\n- Real estate leases\n- Insurance policies\n\n**Employment and HR:**\n- Employment agreements for all team members\n- Consultant and advisor agreements\n- Employee handbook\n- Stock option plan and grants\n- Any employment-related litigation\n\n**Financial and Tax:**\n- Audited financial statements (if available)\n- Tax returns and compliance records\n- Management accounts\n- Revenue recognition policies\n- Any outstanding liens or debts\n\n**Regulatory and Compliance:**\n- Industry-specific licenses\n- GDPR compliance documentation\n- Privacy policies and terms of service\n- Any regulatory investigations or violations\n\n**Common Legal Issues That Delay Fundraising**\n\n1. **Messy Cap Table:** Unclear ownership or missing documentation\n2. **IP Issues:** Code or other IP not properly assigned to the company\n3. **Employment Problems:** Misclassified contractors or missing agreements\n4. **Regulatory Compliance:** Missing licenses or GDPR violations\n5. **Litigation:** Any ongoing or threatened legal disputes\n\n**Getting Investment-Ready**\n\nStart preparing at least 3-6 months before you plan to fundraise:\n\n1. **Clean Up Your Cap Table:** Ensure all shares and options are properly documented\n2. **Organize Your Documents:** Create a virtual data room with all key documents\n3. **Address IP Issues:** Get proper assignments for all company IP\n4. **Review All Agreements:** Ensure customer and supplier contracts are in good order\n5. **Legal Health Check:** Have a lawyer review your corporate structure and key agreements\n\n**Investment Documents You'll Need**\n\nOnce you find investors, you'll typically need:\n\n- Term sheet (non-binding outline of deal terms)\n- Subscription agreement (binding investment contract)\n- Shareholders' agreement (ongoing governance rules)\n- Board resolutions approving the investment\n- Updated articles of incorporation (if needed)\n\n**Working with Lawyers**\n\nChoose a lawyer experienced with startup fundraising. They can help you:\n\n- Prepare for due diligence\n- Negotiate term sheets\n- Draft investment documents\n- Navigate complex deal structures\n\nThe investment in proper legal preparation pays dividends in faster, smoother fundraising processes and better investor relationships.",
      author: "Junes Elias Steenssens",
      publishedDate: "2024-01-05T00:00:00.000Z",
      readTime: "6 min read",
      tags: ["fundraising", "investment", "due-diligence"]
    }
  ],
  careerPosts: [
    {
      title: "Legal & Content Intern (Student – Part-Time)",
      description: "Law student opportunity to gain real experience with startups, contracts, and legal innovation. Work 1-3 days per week on a flexible schedule with direct mentorship from an experienced startup lawyer.",
      fullDescription: `Are you a law student who wants to get real experience with startups, contracts, and legal innovation?

We're looking for a practical, curious and hands-on student to join our team at LegalCofounder.com, where we support startups and scale-ups with everything from early-stage fundraising to commercial contracts.

**💼 What You'll Work On**

You'll help founders and growing companies close funding rounds, negotiate better contracts, and stay legally sharp — all while learning how legal advice works in the real world.

You'll support us by:
• Drafting and reviewing documents like convertible loans, shareholders' agreements, SaaS and partnership contracts
• Maintaining and improving our contract templates and knowledge base
• Researching new legislation and topics that affect founders (e.g. upcoming EU startup laws, financing trends, etc.)
• Writing clear, founder-friendly content — think legal explainers, FAQ-style articles, or short LinkedIn posts
• Testing and helping improve legal tech tools that make contract work faster and smarter

**✅ Who You Are**
• Master's student in law, ideally focused on corporate or commercial law
• You're a good writer, with a strong eye for structure and clarity
• Solid research skills — you like digging into a topic and breaking it down simply
• Independent, detail-oriented, and not afraid to figure things out
• Based in or near Antwerp, with some in-person availability
• Bonus: interest in startups, tech, or venture capital

**⏳ What We Offer**
• Work 1–3 days per week on a flexible schedule
• Paid student contract
• Direct mentorship from an experienced startup lawyer
• A front-row seat to fundraising deals, client calls, and contract strategy
• Work with real clients, real documents — no shadowing, you'll actually contribute
• Exposure to legal tech tools (and a say in how we improve them)
• Option to extend into a long-term working student or junior role

**🎁 Extra Perks**
• Co-working space access
• Gym membership
• Learning budget (books, tools, or online courses)
• Regular team coffee or lunch catch-ups
• A chance to help shape how legal services are delivered to startups

**Ready to Apply?**

Send us your CV and a short note or writing sample via the form below.

This is a great opportunity to bridge the gap between theory and practice — and do legal work that actually moves fast and makes an impact.`,
      location: "Antwerp, Belgium",
      type: "part-time",
      datePosted: "2024-01-01T00:00:00.000Z",
      requirements: [
        "Master's student in law (corporate or commercial law preferred)",
        "Strong writing and research skills",
        "Independent and detail-oriented",
        "Based in or near Antwerp",
        "Interest in startups, tech, or venture capital (bonus)"
      ],
      isActive: true
    }
  ]
};

async function importData() {
  try {
    console.log('Starting data import...');

    // Import hero section (single type)
    console.log('Importing hero section...');
    await strapi.entityService.create('api::hero-section.hero-section', {
      data: {
        ...existingData.heroSection,
        publishedAt: new Date(),
      },
    });

    // Import about section (single type)
    console.log('Importing about section...');
    await strapi.entityService.create('api::about-section.about-section', {
      data: {
        ...existingData.aboutSection,
        publishedAt: new Date(),
      },
    });

    // Import service plans
    console.log('Importing service plans...');
    for (const plan of existingData.servicePlans) {
      await strapi.entityService.create('api::service-plan.service-plan', {
        data: {
          ...plan,
          publishedAt: new Date(),
        },
      });
    }

    // Import why work features
    console.log('Importing why work features...');
    for (const feature of existingData.whyWorkFeatures) {
      await strapi.entityService.create('api::why-work-feature.why-work-feature', {
        data: {
          ...feature,
          publishedAt: new Date(),
        },
      });
    }

    // Import pitch coaching section (single type)
    console.log('Importing pitch coaching section...');
    await strapi.entityService.create('api::pitch-coaching.pitch-coaching', {
      data: {
        ...existingData.pitchCoaching,
        publishedAt: new Date(),
      },
    });

    // Import FAQs
    console.log('Importing FAQs...');
    for (const faq of existingData.faqs) {
      await strapi.entityService.create('api::faq.faq', {
        data: {
          ...faq,
          publishedAt: new Date(),
        },
      });
    }

    // Import founder section (single type)
    console.log('Importing founder section...');
    await strapi.entityService.create('api::founder-section.founder-section', {
      data: {
        ...existingData.founderSection,
        publishedAt: new Date(),
      },
    });

    // Import testimonials
    console.log('Importing testimonials...');
    for (const testimonial of existingData.testimonials) {
      const { imagePath, ...testimonialData } = testimonial;
      await strapi.entityService.create('api::testimonial.testimonial', {
        data: {
          ...testimonialData,
          publishedAt: new Date(),
        },
      });
    }

    // Import blog posts
    console.log('Importing blog posts...');
    for (const post of existingData.blogPosts) {
      await strapi.entityService.create('api::blog-post.blog-post', {
        data: {
          ...post,
          publishedAt: new Date(),
        },
      });
    }

    // Import career posts
    console.log('Importing career posts...');
    for (const post of existingData.careerPosts) {
      await strapi.entityService.create('api::career-post.career-post', {
        data: {
          ...post,
          publishedAt: new Date(),
        },
      });
    }

    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

// Run the import
if (require.main === module) {
  const strapiApp = strapi({ distDir: './dist' });

  strapiApp.start().then(() => {
    importData().then(() => {
      process.exit(0);
    }).catch((error) => {
      console.error(error);
      process.exit(1);
    });
  });
}

module.exports = { importData, existingData };
