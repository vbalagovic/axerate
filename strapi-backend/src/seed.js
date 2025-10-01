/**
 * Seed script to populate Strapi with initial content
 * Run with: npm run strapi seed
 */

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
        { title: "Monthly 45‑minute strategy call", description: "Tailored legal roadmap to help you hit your next milestone faster." },
        { title: "1 red‑flag contract scan/month", description: "Fast, founder-focused review to flag key issues." },
        { title: "Email support", description: "Timely, to-the-point legal answers — no chasing." }
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
        { title: "Bi-weekly strategy calls", description: "Deep dive legal planning twice a month" },
        { title: "3 red-flag scans/month", description: "Priority turnaround" },
        { title: "1 light doc draft/month", description: "Custom contract drafting for specific needs" },
        { title: "Priority email turnaround (24h)", description: "Same-day response for urgent matters" },
        { title: "Custom clause library access", description: "" }
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
        { title: "Custom legal strategy", description: "Tailored to your business model" },
        { title: "Complex negotiations", description: "High-stakes contract support" },
        { title: "Compliance review", description: "Industry-specific requirements" },
        { title: "M&A preparation support", description: "Due diligence and documentation" },
        { title: "International expansion guidance", description: "" }
      ],
      buttonText: "Start with a call",
      buttonLink: "https://outlook.office.com/bookwithme/user/00a494b0223b4e5486a32ce1c65641be@jes.ventures/meetingtype/XsJxbT-yrUiwz3ZuBJgaGQ2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile",
      isPopular: false,
      price: "",
      order: 3
    }
  ],
  whyWorkFeatures: [
    { title: "Flat-fee pricing", description: "No hourly surprises. Know exactly what you'll pay upfront.", icon: "DollarSign", order: 1 },
    { title: "Fast turnaround", description: "Get what you need quickly, without the bureaucracy.", icon: "Clock", order: 2 },
    { title: "Founder-first mindset", description: "We understand your challenges and priorities.", icon: "Users", order: 3 },
    { title: "No legalese, no pressure", description: "Clear communication, practical solutions.", icon: "CheckCircle", order: 4 }
  ],
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
      website: "https://legal-monitr.com/"
    }
  ]
};

async function seedData({ strapi }) {
  try {
    console.log("🌱 Starting data seeding...");

    // Seed Hero Section (single type)
    console.log("📝 Seeding hero section...");
    await strapi.db.query('api::hero-section.hero-section').create({
      data: { ...existingData.heroSection, publishedAt: new Date() }
    });

    // Seed About Section (single type)
    console.log("📝 Seeding about section...");
    await strapi.db.query('api::about-section.about-section').create({
      data: { ...existingData.aboutSection, publishedAt: new Date() }
    });

    // Seed Service Plans
    console.log("📝 Seeding service plans...");
    for (const plan of existingData.servicePlans) {
      await strapi.db.query('api::service-plan.service-plan').create({
        data: { ...plan, publishedAt: new Date() }
      });
    }

    // Seed Why Work Features
    console.log("📝 Seeding why work features...");
    for (const feature of existingData.whyWorkFeatures) {
      await strapi.db.query('api::why-work-feature.why-work-feature').create({
        data: { ...feature, publishedAt: new Date() }
      });
    }

    // Seed Pitch Coaching (single type)
    console.log("📝 Seeding pitch coaching section...");
    await strapi.db.query('api::pitch-coaching.pitch-coaching').create({
      data: { ...existingData.pitchCoaching, publishedAt: new Date() }
    });

    // Seed FAQs
    console.log("📝 Seeding FAQs...");
    for (const faq of existingData.faqs) {
      await strapi.db.query('api::faq.faq').create({
        data: { ...faq, publishedAt: new Date() }
      });
    }

    // Seed Founder Section (single type)
    console.log("📝 Seeding founder section...");
    await strapi.db.query('api::founder-section.founder-section').create({
      data: { ...existingData.founderSection, publishedAt: new Date() }
    });

    // Seed Testimonials
    console.log("📝 Seeding testimonials...");
    for (const testimonial of existingData.testimonials) {
      await strapi.db.query('api::testimonial.testimonial').create({
        data: { ...testimonial, publishedAt: new Date() }
      });
    }

    console.log("✅ Data seeding completed successfully!");
    console.log("📋 Next steps:");
    console.log("1. Configure API permissions: Settings > Roles > Public > Permissions");
    console.log("2. Enable 'find' and 'findOne' for all content types");
    console.log("3. Test your frontend integration");

  } catch (error) {
    console.error("❌ Error during seeding:", error);
    throw error;
  }
}

module.exports = { seedData };
