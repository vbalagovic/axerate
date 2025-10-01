const axios = require('axios');

const STRAPI_URL = 'http://localhost:1337';

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
  ]
};

async function importData() {
  try {
    console.log('Starting simple data import via HTTP API...');

    // Test API connection
    console.log('Testing API connection...');
    try {
      const testResponse = await axios.get(`${STRAPI_URL}/api/hero-section`);
      console.log('API connection successful');
    } catch (error) {
      console.log('Note: Content types might not exist yet, which is expected for first run');
    }

    console.log('✅ Import script is ready!');
    console.log('');
    console.log('📋 Next steps:');
    console.log('1. Make sure Strapi is running: cd strapi-backend && npm run develop');
    console.log('2. Access admin panel: http://localhost:1337/admin');
    console.log('3. Create admin account if needed');
    console.log('4. Set up API permissions in Settings > Roles > Public > Permissions');
    console.log('5. Enable "find" and "findOne" permissions for all content types');
    console.log('6. Then manually add content through the admin panel');
    console.log('');
    console.log('🎯 Content ready for import:');
    console.log(`- Hero Section: "${existingData.heroSection.title}"`);
    console.log(`- About Section: "${existingData.aboutSection.title}"`);
    console.log(`- Service Plans: ${existingData.servicePlans.length} plans`);
    console.log(`- FAQs: ${existingData.faqs.length} questions`);

  } catch (error) {
    console.error('Error during import:', error);
  }
}

importData();
