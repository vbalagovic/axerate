const axios = require('axios');

const STRAPI_URL = 'http://localhost:1337';

// Comprehensive fallback data from all components
const seedData = {
  // Hero Section (Single Type)
  heroSection: {
    title: "Legal support that speaks startup",
    subtitle: "Your legal cofounder—not just a lawyer.",
    description: "Fast, founder-focused legal support for Belgian startups. From incorporation to funding rounds, we handle the legal stuff so you can focus on building.",
    primaryButtonText: "Book a free consultation",
    primaryButtonLink: "https://outlook.office.com/bookwithme/user/00a494b0223b4e5486a32ce1c65641be@jes.ventures/meetingtype/XsJxbT-yrUiwz3ZuBJgaGQ2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile",
    secondaryButtonText: "See pricing",
    secondaryButtonLink: "#services"
  },

  // About Section (Single Type)
  aboutSection: {
    title: "Legal services that speak startup",
    description1: "You're building something from scratch. You don't need 20-page memos or hourly billing surprises—you need a legal cofounder who speaks startup.",
    description2: "We're your legal cofounder—lawyer, founder ally, and someone who knows the challenges of getting a business off the ground. We offer flexible legal services to help you launch, scale, and stay protected—without slowing you down."
  },

  // Service Plans (Collection Type)
  servicePlans: [
    {
      name: "Starter",
      subtitle: "For early-stage startups",
      description: "Essential legal support for early-stage startups.",
      features: [
        { title: "Monthly 45‑minute strategy call", description: "Tailored legal roadmap to help you hit your next milestone faster." },
        { title: "1 red‑flag contract scan/month", description: "Fast, founder-focused review to flag key issues." },
        { title: "Email support", description: "Timely, to-the-point legal answers — no chasing." }
      ],
      buttonText: "Subscribe to Starter",
      buttonLink: "",
      isPopular: false,
      order: 1
    },
    {
      name: "Growth",
      subtitle: "For scaling startups",
      description: "Comprehensive legal support for startups ready to accelerate.",
      features: [
        { title: "Bi-weekly strategy calls", description: "Deep dive legal planning twice a month" },
        { title: "3 red-flag scans/month", description: "Priority turnaround" },
        { title: "1 light doc draft/month", description: "Custom contract drafting for specific needs" },
        { title: "Priority email turnaround (24h)", description: "Same-day response for urgent matters" },
        { title: "Custom clause library access", description: "" }
      ],
      buttonText: "Subscribe to Growth",
      buttonLink: "",
      isPopular: true,
      order: 2
    },
    {
      name: "Custom",
      subtitle: "For complex legal needs",
      description: "Complex legal challenges require bespoke solutions. From M&A preparation and investor negotiations to international expansion and regulatory compliance—we'll craft a legal strategy that scales with your ambitions.",
      features: [
        { title: "Custom legal strategy", description: "Tailored to your business model" },
        { title: "Complex negotiations", description: "High-stakes contract support" },
        { title: "Compliance review", description: "Industry-specific requirements" },
        { title: "M&A preparation support", description: "Due diligence and documentation" },
        { title: "International expansion guidance", description: "" }
      ],
      buttonText: "Start with a call",
      buttonLink: "https://outlook.office.com/bookwithme/user/00a494b0223b4e5486a32ce1c65641be@jes.ventures/meetingtype/XsJxbT-yrUiwz3ZuBJgaGQ2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile",
      isPopular: false,
      order: 3
    }
  ],

  // Why Work Features (Collection Type)
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

  // FAQs (Collection Type)
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
    }
  ],

  // Founder Section (Single Type)
  founderSection: {
    title: "Who's behind Legal Cofounder?",
    paragraph1: "Hi, I'm Junes — founder, lawyer, and startup ally.",
    paragraph2: "I've worked with dozens of early-stage teams on everything from cofounder splits to funding rounds and investor negotiations. Not from the sidelines — but as someone who understands how startups move: fast, lean, and under pressure.",
    paragraph3: "I started Legal Cofounder because too many founders were either stuck with outdated legal advice or avoiding it altogether. My goal is simple: give you the legal clarity you need, without the overhead, delay, or legalese."
  },

  // Testimonials (Collection Type)
  testimonials: [
    {
      name: "Stephaan Cloet",
      role: "Serial Entrepreneur & Founder",
      company: "Legal Monitr",
      content: "Working with LegalCofounder has been a game-changer for Legal Monitr. They didn't just fine-tune our pitch, they helped us see our business from a fresh perspective. We really felt they wanted us to succeed. If you're a startup looking for more than just advice, LegalCofounder is your go-to partner.",
      website: "https://legal-monitr.com/",
      image: "/placeholder.svg",
      order: 1
    },
    {
      name: "Marie Dubois",
      role: "Co-founder & CEO",
      company: "TechFlow",
      content: "The legal complexity of starting our SaaS company was overwhelming. LegalCofounder not only handled our incorporation but guided us through our first funding round. Their founder-first approach made all the difference.",
      website: "https://techflow.be",
      image: "/placeholder.svg",
      order: 2
    },
    {
      name: "Alex Rodriguez",
      role: "Founder",
      company: "GreenTech Solutions",
      content: "Fixed pricing, no legal jargon, and incredibly fast turnaround. LegalCofounder understands that time is money for startups. They've been our legal backbone from day one.",
      website: "https://greentech-solutions.eu",
      image: "/placeholder.svg",
      order: 3
    }
  ],

  // Pitch Coaching (Single Type)
  pitchCoaching: {
    title: "Now Live: Pitch Coaching & Deck Advisory",
    subtitle: "A companion service from Legal Cofounder for founders preparing to raise capital.",
    features: [
      { title: "Pitchdeck Deep Dives", description: "Storytelling + structure optimization" },
      { title: "Investor-readiness reports", description: "Get ready for your next round" },
      { title: "Pitchdeck Scoring App", description: "AI-backed slide-by-slide feedback" }
    ],
    buttonText: "Get Started with Pitch Doc",
    buttonLink: "https://pitch-doc.com"
  },

  // Blog Posts (Collection Type)
  blogPosts: [
    {
      title: "5 Legal Mistakes That Can Kill Your Belgian Startup",
      description: "From choosing the wrong business structure to ignoring GDPR compliance, learn about the most common legal pitfalls that can derail Belgian startups—and how to avoid them.",
      content: `Starting a startup in Belgium is exciting, but legal missteps can be costly. Here are the five most common legal mistakes we see Belgian startups make—and how you can avoid them.

**1. Choosing the Wrong Business Structure**

Many founders rush into incorporation without understanding the implications of different business structures. In Belgium, you have several options:

- **BV/SRL (Besloten Vennootschap/Société à Responsabilité Limitée)**: Most common for startups
- **NV/SA (Naamloze Vennootschap/Société Anonyme)**: Better for larger companies seeking investment
- **CVBA/SC (Coöperatieve Vennootschap/Société Coopérative)**: For cooperative structures

The wrong choice can impact your tax liability, investment eligibility, and future growth options.

**2. Inadequate Founder Agreements**

Starting a company with friends or colleagues without proper founder agreements is like building on quicksand. These agreements should cover:

- Equity distribution and vesting schedules
- Roles and responsibilities
- Decision-making processes
- Exit procedures

**3. GDPR Non-Compliance from Day One**

GDPR isn't just for big companies. Even early-stage startups handling EU personal data must comply. Common mistakes include:

- No privacy policy or inadequate privacy notices
- Lack of proper consent mechanisms
- No data processing records
- Inadequate data security measures

**4. Ignoring Employment Law**

Belgian employment law is complex, and violations can be expensive. Key areas to address:

- Proper employment contracts vs. freelancer agreements
- Understanding mandatory benefits and social security contributions
- Compliance with working time regulations
- Proper termination procedures

**5. Intellectual Property Oversights**

Protecting your IP from the start is crucial:

- Trademark your brand and product names
- Ensure proper IP assignment from employees and contractors
- Consider patent protection for innovations
- Implement proper confidentiality agreements

**Getting Legal Help**

The good news? These mistakes are entirely preventable with proper legal guidance. Consider working with a legal partner who understands the startup ecosystem and can provide practical, cost-effective solutions.

Remember: legal compliance isn't just about avoiding problems—it's about creating a solid foundation for growth.`,
      author: "Junes Scholtz",
      date: new Date('2024-01-15').toISOString(),
      readTime: "8 min read",
      tags: ["startup-law", "belgium", "incorporation", "gdpr", "ip"],
      published: true
    },
    {
      title: "Understanding Belgian Startup Funding: Legal Considerations",
      description: "Navigate the legal landscape of startup funding in Belgium. From SAFE notes to equity rounds, understand what documents you need and what terms to negotiate.",
      content: `Belgium's startup ecosystem is thriving, but securing funding requires navigating complex legal requirements. Here's what every founder needs to know about the legal aspects of startup funding in Belgium.

**Types of Funding Instruments**

**1. SAFE Notes (Simple Agreement for Future Equity)**
- Popular for pre-seed and seed rounds
- Simpler than traditional equity
- Key terms: valuation cap, discount rate, conversion triggers

**2. Equity Rounds**
- Series A, B, C and beyond
- More complex legal documentation
- Involves detailed due diligence

**3. Convertible Loans**
- Debt that converts to equity
- Interest rates and conversion terms
- Bridge funding between rounds

**Key Legal Documents**

**Term Sheet**
Your negotiation roadmap covering:
- Valuation and investment amount
- Board composition
- Liquidation preferences
- Anti-dilution provisions

**Shareholder Agreement**
- Governance and control mechanisms
- Transfer restrictions
- Tag-along and drag-along rights
- Board representation

**Investment Agreement**
- Conditions precedent
- Warranties and indemnities
- Use of funds restrictions

**Belgian-Specific Considerations**

**Tax Incentives**
- Tax Shelter for Start-ups
- Innovation Income Deduction
- R&D tax credits
- Capital gains tax exemptions

**Regulatory Requirements**
- FSMA notification requirements
- Cross-border investment regulations
- Currency and reporting obligations

**Due Diligence Preparation**

Investors will scrutinize:
- Corporate structure and cap table
- IP ownership and protection
- Employment agreements
- Customer contracts
- Compliance records

**Common Funding Pitfalls**

1. **Inadequate IP Protection**: Ensure all IP is properly assigned to the company
2. **Employment Issues**: Contractor vs. employee classification problems
3. **Incomplete Records**: Poor documentation of decisions and agreements
4. **Regulatory Non-compliance**: GDPR, sector-specific regulations

**Working with Legal Counsel**

Choose lawyers who:
- Understand startup dynamics
- Have experience with your funding stage
- Offer transparent, predictable pricing
- Can work efficiently with your timeline

**Preparation Tips**

- Maintain clean cap table records
- Document all major decisions
- Ensure compliance from day one
- Have legal counsel review all agreements

Remember: good legal preparation can significantly speed up your funding process and help you negotiate better terms.`,
      author: "Junes Scholtz",
      date: new Date('2024-02-20').toISOString(),
      readTime: "10 min read",
      tags: ["funding", "investment", "legal", "belgium", "startup"],
      published: true
    },
    {
      title: "GDPR for Belgian Startups: A Practical Guide",
      description: "GDPR compliance doesn't have to be overwhelming for startups. This practical guide covers the essential steps Belgian startups need to take to ensure compliance from day one.",
      content: `GDPR compliance might seem daunting for early-stage startups, but it's actually more manageable than you think. Here's a practical, step-by-step approach for Belgian startups.

**Understanding GDPR Basics**

The General Data Protection Regulation (GDPR) applies to any organization processing EU personal data, regardless of size. This includes:
- Customer information
- Employee data
- Website visitor data
- Marketing contacts

**Step 1: Data Mapping**

Before you can protect data, you need to know what you have:

**Personal Data Audit**
- What personal data do you collect?
- Where is it stored?
- Who has access?
- How long do you keep it?

**Data Sources**
- Website forms and analytics
- Customer accounts and transactions
- Employee records
- Marketing and sales databases
- Third-party integrations

**Step 2: Legal Basis**

Every data processing activity needs a legal basis:

**Common Legal Bases for Startups**
- **Consent**: Explicit agreement (marketing emails)
- **Contract**: Necessary for service delivery
- **Legitimate Interest**: Business needs (basic analytics)
- **Legal Obligation**: Required by law (tax records)

**Step 3: Privacy Policy and Notices**

**Privacy Policy Must Include**
- What data you collect and why
- Legal basis for processing
- Data sharing and transfers
- Retention periods
- Individual rights
- Contact information

**Privacy Notices**
- Clear, plain language
- Prominent placement
- Accessible format
- Regular updates

**Step 4: Consent Management**

**Best Practices**
- Clear, specific consent requests
- Opt-in, not opt-out
- Easy withdrawal mechanism
- Documented consent records
- Granular consent options

**Technical Implementation**
- Cookie consent banners
- Email subscription management
- Account preference centers
- Consent tracking systems

**Step 5: Data Subject Rights**

You must enable individuals to:
- Access their data
- Rectify incorrect data
- Erase their data
- Port their data
- Object to processing
- Restrict processing

**Implementation Tips**
- Create request handling procedures
- Set up technical systems for data retrieval
- Train team members on response protocols
- Document all requests and responses

**Step 6: Data Security**

**Technical Measures**
- Encryption of sensitive data
- Secure data transmission
- Access controls and authentication
- Regular security updates
- Backup and recovery procedures

**Organizational Measures**
- Staff training on data protection
- Clear data handling procedures
- Regular security assessments
- Incident response plans

**Step 7: Vendor Management**

**Third-Party Services**
- Cloud providers
- Marketing tools
- Analytics platforms
- Payment processors

**Due Diligence**
- Review their privacy policies
- Ensure adequate protections
- Sign Data Processing Agreements (DPAs)
- Monitor compliance regularly

**Step 8: International Transfers**

If you transfer data outside the EU:
- Use adequacy decisions
- Implement Standard Contractual Clauses
- Consider data localization
- Document transfer mechanisms

**Common Startup GDPR Mistakes**

1. **No privacy policy or inadequate information**
2. **Assuming consent covers everything**
3. **Ignoring data subject rights**
4. **Poor vendor management**
5. **No breach response plan**
6. **Collecting unnecessary data**

**Building GDPR into Your Startup**

**From Day One**
- Privacy by design principles
- Minimal data collection
- Clear consent flows
- Proper technical setup

**As You Scale**
- Regular compliance audits
- Staff training programs
- Vendor assessment processes
- Policy updates

**When You Need Help**

Consider legal assistance when:
- Processing sensitive data
- Operating across multiple jurisdictions
- Facing complex compliance questions
- Planning significant product changes

**The Business Case for GDPR**

Good data protection:
- Builds customer trust
- Reduces data breach risks
- Enables better data management
- Prepares you for global expansion

GDPR compliance isn't just about avoiding fines—it's about building a sustainable, trustworthy business foundation.`,
      author: "Junes Scholtz",
      date: new Date('2024-03-10').toISOString(),
      readTime: "12 min read",
      tags: ["gdpr", "privacy", "compliance", "data-protection", "startup"],
      published: true
    }
  ],

  // Career Posts (Collection Type)
  careerPosts: [
    {
      title: "Legal Technology Developer",
      description: "Help us build innovative legal tools that founders actually want to use. Work on automation, document generation, and user experience that makes legal services accessible and efficient.",
      fullDescription: `**About This Role**

We're looking for a passionate developer to join our mission of making legal services more accessible to startups. You'll be working on cutting-edge legal technology that automates routine tasks, generates legal documents, and creates intuitive user experiences.

**What You'll Do**
- Build and maintain our legal automation platform
- Develop document generation and contract analysis tools
- Create intuitive interfaces for complex legal processes
- Integrate with third-party legal and business tools
- Work closely with legal experts to understand requirements
- Ensure security and compliance in all technical solutions

**Technical Requirements**
- 3+ years experience with modern web technologies
- Proficiency in React, Node.js, TypeScript
- Experience with document processing and automation
- Understanding of API development and integration
- Familiarity with cloud platforms (AWS, Azure, or GCP)
- Knowledge of security best practices

**Nice to Have**
- Experience in legal tech or professional services
- Understanding of legal document structures
- Background in automation or workflow tools
- Interest in startup ecosystem and challenges
- Multilingual capabilities (Dutch/French/English)

**What We Offer**
- Competitive salary + equity package
- Remote-friendly culture with flexible hours
- Modern tech stack and tools
- Direct impact on product and strategy
- Learning opportunities in legal and startup domains
- Professional development budget

**Our Culture**
We're building something meaningful - legal services that founders actually enjoy using. You'll work with a small, focused team where your contributions directly impact our success and our clients' growth.`,
      location: "Brussels, Belgium (Remote OK)",
      type: "full-time",
      requirements: [
        "3+ years web development experience",
        "React, Node.js, TypeScript proficiency",
        "API development and integration experience",
        "Security and compliance mindset",
        "Startup or legal tech interest"
      ],
      datePosted: new Date('2024-03-01').toISOString(),
      published: true
    },
    {
      title: "Business Development Associate",
      description: "Join us in connecting with the Belgian startup ecosystem. Help identify potential clients, build partnerships, and represent our mission at startup events and conferences.",
      fullDescription: `**About This Role**

We're seeking a dynamic Business Development Associate to help us expand our reach within the Belgian startup ecosystem. You'll be the face of LegalCofounder at startup events, building relationships with founders, accelerators, and the broader entrepreneurial community.

**What You'll Do**
- Identify and engage potential startup clients
- Build relationships with startup accelerators and incubators
- Represent LegalCofounder at startup events and conferences
- Develop partnerships with complementary service providers
- Create and execute outreach campaigns
- Support client onboarding and relationship management
- Gather market feedback to improve our services

**Requirements**
- 2+ years experience in business development or sales
- Deep understanding of the Belgian startup ecosystem
- Excellent communication skills in Dutch, French, and English
- Comfortable with networking and public speaking
- Self-motivated with entrepreneurial mindset
- Understanding of legal services landscape (preferred)
- Experience with CRM and sales tools

**What You'll Gain**
- Front-row seat to Belgium's most exciting startups
- Direct interaction with founders and entrepreneurs
- Opportunity to shape our go-to-market strategy
- Networking opportunities across the startup ecosystem
- Competitive base + performance incentives
- Equity participation in our growth

**Ideal Candidate**
You're passionate about startups and understand the challenges founders face. You enjoy building relationships, have a consultative approach to sales, and can communicate the value of legal services in founder-friendly terms.

**Next Steps**
If you're excited about helping startups succeed while building something impactful, we'd love to hear from you. Tell us about your experience with the startup ecosystem and why you're interested in legal services for entrepreneurs.`,
      location: "Brussels, Belgium",
      type: "full-time",
      requirements: [
        "2+ years business development experience",
        "Knowledge of Belgian startup ecosystem",
        "Trilingual (Dutch/French/English)",
        "Networking and communication skills",
        "CRM and sales tools experience"
      ],
      datePosted: new Date('2024-02-15').toISOString(),
      published: true
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
  console.log('🌱 Starting comprehensive data seeding...\n');

  try {
    // Single Types (use PUT)
    await createData('hero-section', seedData.heroSection);
    await createData('about-section', seedData.aboutSection);
    await createData('founder-section', seedData.founderSection);
    await createData('pitch-coaching', seedData.pitchCoaching);

    // Collection Types (use POST)
    await createData('service-plans', seedData.servicePlans, true);
    await createData('why-work-features', seedData.whyWorkFeatures, true);
    await createData('faqs', seedData.faqs, true);
    await createData('testimonials', seedData.testimonials, true);
    await createData('blog-posts', seedData.blogPosts, true);
    await createData('career-posts', seedData.careerPosts, true);

    console.log('\n🎉 All data seeded successfully!');
    console.log('\nSeeded content:');
    console.log(`- Hero Section: ✅`);
    console.log(`- About Section: ✅`);
    console.log(`- Service Plans: ${seedData.servicePlans.length} items`);
    console.log(`- Why Work Features: ${seedData.whyWorkFeatures.length} items`);
    console.log(`- FAQs: ${seedData.faqs.length} items`);
    console.log(`- Founder Section: ✅`);
    console.log(`- Testimonials: ${seedData.testimonials.length} items`);
    console.log(`- Pitch Coaching: ✅`);
    console.log(`- Blog Posts: ${seedData.blogPosts.length} items`);
    console.log(`- Career Posts: ${seedData.careerPosts.length} items`);

  } catch (error) {
    console.error('💥 Seeding failed:', error);
    process.exit(1);
  }
}

// Export for potential use as module
module.exports = { seedAllData, seedData };

// Run if called directly
if (require.main === module) {
  console.log('⚠️  This script is ready to run but not executing to avoid duplicates.');
  console.log('To run the seeder, uncomment the line below:');
  console.log('// seedAllData();');

  // Uncomment to run:
  // seedAllData();
}
