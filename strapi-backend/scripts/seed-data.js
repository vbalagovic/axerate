const axios = require('axios');

const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN = 'e21864aac5680c36b2cbb61755ce1f22b10b9d5f8580bfa6daba523f78b5d465253e829f16cca59bc4a09e7f8b70c16b3c563384ce7dcaf88c32ab37c2605ae7d0738a98ebaa7e51aaa98e649583787a9e88b0b0aa058758fa953386943e04749bbd76bad286cd9eaa67c0087a5be77fc1b03b7cc7daa06fbd000617b76b3ea0';

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

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${API_TOKEN}`
};

async function seedData() {
  try {
    console.log('🌱 Starting data seeding via API...');

    // Seed Hero Section (single type)
    console.log('📝 Seeding hero section...');
    try {
      await axios.post(`${STRAPI_URL}/api/hero-section`, {
        data: { ...existingData.heroSection, publishedAt: new Date().toISOString() }
      }, { headers });
      console.log('✅ Hero section seeded');
    } catch (error) {
      console.log('⚠️  Hero section might already exist or need different approach:', error.response?.status);
    }

    // Seed About Section (single type)
    console.log('📝 Seeding about section...');
    try {
      await axios.post(`${STRAPI_URL}/api/about-section`, {
        data: { ...existingData.aboutSection, publishedAt: new Date().toISOString() }
      }, { headers });
      console.log('✅ About section seeded');
    } catch (error) {
      console.log('⚠️  About section might already exist or need different approach:', error.response?.status);
    }

    // Seed Service Plans
    console.log('📝 Seeding service plans...');
    for (const plan of existingData.servicePlans) {
      try {
        await axios.post(`${STRAPI_URL}/api/service-plans`, {
          data: { ...plan, publishedAt: new Date().toISOString() }
        }, { headers });
        console.log(`✅ Service plan "${plan.name}" seeded`);
      } catch (error) {
        console.log(`⚠️  Service plan "${plan.name}" error:`, error.response?.status);
      }
    }

    // Seed Why Work Features
    console.log('📝 Seeding why work features...');
    for (const feature of existingData.whyWorkFeatures) {
      try {
        await axios.post(`${STRAPI_URL}/api/why-work-features`, {
          data: { ...feature, publishedAt: new Date().toISOString() }
        }, { headers });
        console.log(`✅ Why work feature "${feature.title}" seeded`);
      } catch (error) {
        console.log(`⚠️  Why work feature "${feature.title}" error:`, error.response?.status);
      }
    }

    // Seed Pitch Coaching (single type)
    console.log('📝 Seeding pitch coaching section...');
    try {
      await axios.post(`${STRAPI_URL}/api/pitch-coaching`, {
        data: { ...existingData.pitchCoaching, publishedAt: new Date().toISOString() }
      }, { headers });
      console.log('✅ Pitch coaching section seeded');
    } catch (error) {
      console.log('⚠️  Pitch coaching section might already exist:', error.response?.status);
    }

    // Seed FAQs
    console.log('📝 Seeding FAQs...');
    for (const faq of existingData.faqs) {
      try {
        await axios.post(`${STRAPI_URL}/api/faqs`, {
          data: { ...faq, publishedAt: new Date().toISOString() }
        }, { headers });
        console.log(`✅ FAQ "${faq.question.substring(0, 50)}..." seeded`);
      } catch (error) {
        console.log(`⚠️  FAQ error:`, error.response?.status);
      }
    }

    // Seed Founder Section (single type)
    console.log('📝 Seeding founder section...');
    try {
      await axios.post(`${STRAPI_URL}/api/founder-section`, {
        data: { ...existingData.founderSection, publishedAt: new Date().toISOString() }
      }, { headers });
      console.log('✅ Founder section seeded');
    } catch (error) {
      console.log('⚠️  Founder section might already exist:', error.response?.status);
    }

    // Seed Testimonials
    console.log('📝 Seeding testimonials...');
    for (const testimonial of existingData.testimonials) {
      try {
        await axios.post(`${STRAPI_URL}/api/testimonials`, {
          data: { ...testimonial, publishedAt: new Date().toISOString() }
        }, { headers });
        console.log(`✅ Testimonial from "${testimonial.name}" seeded`);
      } catch (error) {
        console.log(`⚠️  Testimonial from "${testimonial.name}" error:`, error.response?.status);
      }
    }

    console.log('🎉 Data seeding completed!');
    console.log('📋 Next steps:');
    console.log('1. Check the Strapi admin panel at http://localhost:1337/admin');
    console.log('2. Verify the content is visible');
    console.log('3. Test your frontend integration');

    // Test API endpoints
    console.log('\n🧪 Testing API endpoints...');
    try {
      const heroResponse = await axios.get(`${STRAPI_URL}/api/hero-section`, { headers });
      console.log('✅ Hero section API:', heroResponse.data ? 'Working' : 'Empty');
    } catch (error) {
      console.log('❌ Hero section API error:', error.response?.status);
    }

    try {
      const plansResponse = await axios.get(`${STRAPI_URL}/api/service-plans`, { headers });
      console.log('✅ Service plans API:', plansResponse.data?.data?.length || 0, 'items found');
    } catch (error) {
      console.log('❌ Service plans API error:', error.response?.status);
    }

  } catch (error) {
    console.error('❌ Error during seeding:', error.message);
  }
}

seedData();
