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
      `/blog-posts?populate=featuredImage&sort=publishedDate:desc${limitQuery}`
    );
    return data?.data?.map((item: any) => {
      // Strapi 5 returns data without .attributes wrapper
      const attrs = item.attributes || item;

      return {
        id: item.id,
        title: attrs.title,
        slug: attrs.slug,
        description: attrs.description,
        excerpt: attrs.description, // Use description as excerpt
        content: attrs.content,
        author: attrs.author,
        readTime: attrs.readTime,
        tags: attrs.tags || [],
        publishedDate: attrs.publishedDate,
        date: new Date(attrs.publishedDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        category: attrs.tags?.[0] || 'General', // Use first tag as category
        image: attrs.featuredImage?.data?.attributes?.url
          ? `${STRAPI_URL}${attrs.featuredImage.data.attributes.url}`
          : '',
      };
    }) || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Single Blog Post
export async function getBlogPost(slug: string) {
  try {
    const data: any = await fetchAPI(
      `/blog-posts?filters[slug][$eq]=${slug}&populate=featuredImage`
    );

    let item = data?.data;

    // Handle both array and single object responses
    if (Array.isArray(item)) {
      item = item.find((post: any) => post.slug === slug || post.attributes?.slug === slug) || item[0];
    }

    if (!item) {
      console.log('❌ No blog post found for slug:', slug);
      return null;
    }

    // Handle both nested attributes and flat structure
    const attrs = item.attributes || item;

    // Safely get content - it's already rich text HTML from Strapi
    const content = attrs.content || '';
    if (!content) {
      console.log('⚠️ No content found for blog post:', attrs.title);
    }

    return {
      id: item.id,
      attributes: {
        title: attrs.title || '',
        description: attrs.description || '',
        content: content, // Rich text content is already HTML
        author: attrs.author || 'Axerate Team',
        readTime: attrs.readTime || '5 min read',
        tags: attrs.tags || [],
        slug: attrs.slug || slug,
        publishedDate: attrs.publishedDate || new Date().toISOString(),
        featuredImage: attrs.featuredImage,
      }
    };
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

    // Strapi 5 returns data without .attributes wrapper
    const attrs = item.attributes || item;

    // Return the attributes directly for easier access
    return {
      title: attrs.title,
      description: attrs.description,
      keywords: attrs.keywords,
      ogTitle: attrs.ogTitle,
      ogDescription: attrs.ogDescription,
      ogImage: attrs.ogImage,
      twitterCard: attrs.twitterCard,
      canonicalUrl: attrs.canonicalUrl,
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

    // Strapi 5 returns data without .attributes wrapper
    const attrs = item.attributes || item;

    return {
      companyDescription: attrs.companyDescription,
      servicesTitle: attrs.servicesTitle,
      servicesLinks: attrs.servicesLinks,
      contactTitle: attrs.contactTitle,
      contactLinks: attrs.contactLinks,
      socialLinks: attrs.socialLinks,
      copyrightText: attrs.copyrightText,
    };
  } catch (error) {
    console.error('Error fetching footer config:', error);
    return null;
  }
}
