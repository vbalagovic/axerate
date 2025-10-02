const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

interface StrapiResponse<T> {
  data: T;
  meta?: any;
}

interface StrapiAttributes {
  [key: string]: any;
}

interface StrapiData {
  id: number;
  attributes: StrapiAttributes;
}

export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const url = `${STRAPI_URL}/api${endpoint}`;

  try {
    console.log('🔄 Fetching from Strapi:', url);

    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      cache: 'no-store', // Disable caching for now to see real data
    });

    console.log('📡 Response status:', res.status, res.statusText);

    if (!res.ok) {
      console.error('❌ Strapi fetch failed:', res.status, res.statusText);
      return null;
    }

    const data = await res.json();
    console.log('✅ Strapi data received for', endpoint, ':', JSON.stringify(data).substring(0, 100));
    return data;
  } catch (error) {
    console.error('❌ Strapi fetch error for', endpoint, ':', error);
    return null;
  }
}

// Hero Section
export async function getHeroSection() {
  try {
    const data: any = await fetchAPI('/hero-section?populate=*');
    return data?.data || null;
  } catch (error) {
    console.error('Error fetching hero section:', error);
    return null;
  }
}

// About Section
export async function getAboutSection() {
  try {
    const data: any = await fetchAPI('/about-section?populate=*');
    return data?.data || null;
  } catch (error) {
    console.error('Error fetching about section:', error);
    return null;
  }
}

// Services
export async function getServices() {
  try {
    const data: any = await fetchAPI('/services?populate=*&sort=order:asc');
    return data?.data || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

// Process Steps
export async function getProcessSteps(page?: 'main' | 'startup') {
  try {
    const pageFilter = page ? `&filters[page][$eq]=${page}` : '';
    const data: any = await fetchAPI(`/process-steps?populate=*&sort=order:asc${pageFilter}`);
    return data?.data || [];
  } catch (error) {
    console.error('Error fetching process steps:', error);
    return [];
  }
}

// Team Members
export async function getTeamMembers(page?: 'main' | 'startup') {
  try {
    const pageFilter = page ? `&filters[page][$eq]=${page}` : '';
    const data: any = await fetchAPI(`/team-members?populate=*&sort=order:asc${pageFilter}`);
    return data?.data || [];
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

// Partnerships
export async function getPartnerships() {
  try {
    const data: any = await fetchAPI('/partnerships?populate=*&sort=order:asc');
    return data?.data || [];
  } catch (error) {
    console.error('Error fetching partnerships:', error);
    return [];
  }
}

// Blog Posts
export async function getBlogPosts(limit?: number) {
  try {
    const limitQuery = limit ? `&pagination[limit]=${limit}` : '';
    const data: any = await fetchAPI(
      `/blog-posts?populate=*&sort=publishedDate:desc${limitQuery}`
    );
    return data?.data?.map((item: any) => ({
      id: item.id,
      title: item.attributes.title,
      slug: item.attributes.slug,
      description: item.attributes.description,
      excerpt: item.attributes.description, // Use description as excerpt
      content: item.attributes.content,
      author: item.attributes.author,
      readTime: item.attributes.readTime,
      tags: item.attributes.tags || [],
      publishedDate: item.attributes.publishedDate,
      date: new Date(item.attributes.publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      category: item.attributes.tags?.[0] || 'General', // Use first tag as category
      image: item.attributes.featuredImage?.data?.attributes?.url
        ? `${STRAPI_URL}${item.attributes.featuredImage.data.attributes.url}`
        : '',
    })) || [];
  } catch (error) {
    // Silently fail if Strapi is not running
    return [];
  }
}

// Single Blog Post
export async function getBlogPost(slug: string) {
  try {
    const data: any = await fetchAPI(
      `/blog-posts?filters[slug][$eq]=${slug}&populate=*`
    );
    return data?.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Startup Studio Hero
export async function getStartupHero() {
  try {
    const data: any = await fetchAPI('/startup-hero?populate=*');
    return data?.data || null;
  } catch (error) {
    console.error('Error fetching startup hero:', error);
    return null;
  }
}

// Privacy Policy
export async function getPrivacyPolicy() {
  try {
    const data: any = await fetchAPI('/privacy-policy?populate=*');
    return data?.data || null;
  } catch (error) {
    console.error('Error fetching privacy policy:', error);
    return null;
  }
}

// Terms of Service
export async function getTermsOfService() {
  try {
    const data: any = await fetchAPI('/terms-of-service?populate=*');
    return data?.data || null;
  } catch (error) {
    console.error('Error fetching terms of service:', error);
    return null;
  }
}

// Page Metadata
export async function getPageMetadata(pageName: string) {
  try {
    const data: any = await fetchAPI(
      `/page-metadatas?filters[pageName][$eq]=${pageName}`
    );
    const item = data?.data?.[0];
    if (!item) return null;

    // Return the attributes directly for easier access
    return {
      title: item.attributes.title,
      description: item.attributes.description,
      keywords: item.attributes.keywords,
      ogTitle: item.attributes.ogTitle,
      ogDescription: item.attributes.ogDescription,
      ogImage: item.attributes.ogImage,
      twitterCard: item.attributes.twitterCard,
      canonicalUrl: item.attributes.canonicalUrl,
    };
  } catch (error) {
    console.error('Error fetching page metadata:', error);
    return null;
  }
}

// Contact Form Submission (Startup Studio)
export async function submitContactForm(formData: {
  name: string;
  email: string;
  ventureStage: string;
  fundingStatus: string;
  message: string;
}) {
  try {
    const url = `${STRAPI_URL}/api/contact-submissions`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formData }),
    });

    if (!res.ok) {
      throw new Error('Form submission failed');
    }

    return await res.json();
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

// General Inquiry Submission (Main Page)
export async function submitGeneralInquiry(formData: {
  name: string;
  email: string;
  enquiryType: string;
  budget: string;
  message: string;
}) {
  try {
    const url = `${STRAPI_URL}/api/general-inquiries`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formData }),
    });

    if (!res.ok) {
      throw new Error('Form submission failed');
    }

    return await res.json();
  } catch (error) {
    console.error('Error submitting general inquiry:', error);
    throw error;
  }
}

// Newsletter Subscription
export async function subscribeToNewsletter(email: string) {
  try {
    const url = `${STRAPI_URL}/api/newsletter-subscriptions`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          email,
          subscribedAt: new Date().toISOString(),
          status: 'active',
          source: 'blog'
        }
      }),
    });

    if (!res.ok) {
      throw new Error('Newsletter subscription failed');
    }

    return await res.json();
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
}

// Footer Config
export async function getFooterConfig(pageName: 'main' | 'startup-studio') {
  try {
    const data: any = await fetchAPI(
      `/footer-configs?filters[pageName][$eq]=${pageName}`
    );
    const item = data?.data?.[0];
    if (!item) return null;

    return {
      companyDescription: item.attributes.companyDescription,
      servicesTitle: item.attributes.servicesTitle,
      servicesLinks: item.attributes.servicesLinks,
      contactTitle: item.attributes.contactTitle,
      contactLinks: item.attributes.contactLinks,
      socialLinks: item.attributes.socialLinks,
      copyrightText: item.attributes.copyrightText,
    };
  } catch (error) {
    console.error('Error fetching footer config:', error);
    return null;
  }
}
