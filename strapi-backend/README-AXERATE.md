# Axerate Strapi Backend

This Strapi backend is configured to serve content for the Axerate Next.js application.

## Content Types

### Single Types
- **Hero Section**: Homepage hero content with title, subtitle, and CTA
- **About Section**: About page content with title and description

### Collection Types
- **Services**: The services offered by Axerate
- **Process Steps**: The development process steps
- **Team Members**: Team member profiles with images and LinkedIn links
- **Partnerships**: Strategic partnership information
- **Blog Posts**: Blog articles with full content, tags, and metadata

### Existing Collection Types (from strapi-backend copy)
- **Blog Posts**: Enhanced with slug, description, author, readTime, tags, publishedDate
- **Career Posts**: Job postings
- **FAQs**: Frequently asked questions
- **Testimonials**: Client testimonials
- **Service Plans**: Service tier information
- **Why Work Features**: Feature highlights
- **Founder Section**: Founder information
- **Pitch Coaching**: Pitch coaching service details

## Setup Instructions

### 1. Install Dependencies
```bash
cd strapi-backend
npm install
```

### 2. Environment Configuration
Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

Update the `.env` file with your database and other configuration details.

### 3. Build the Admin Panel
```bash
npm run build
```

### 4. Start Strapi
```bash
npm run develop
```

The admin panel will be available at: http://localhost:1337/admin

### 5. Create Admin User
On first run, you'll be prompted to create an admin user through the web interface.

## Data Seeding

### Seed Axerate Data
A comprehensive seeder script has been created with all content from the Next.js app:

```bash
node scripts/axerate-seed-data.js
```

This will seed:
- Hero Section
- About Section
- 6 Services
- 4 Process Steps
- 4 Team Members
- 1 Partnership (The Founders' Group)
- 3 Blog Posts with full content

### Other Seeder Scripts
- `scripts/comprehensive-seed-data.js` - Original comprehensive seeder
- `scripts/seed-data.js` - Basic seed data
- `scripts/updated-seed-data.js` - Updated seed data

## API Endpoints

All content types are accessible via REST API:

### Single Types (GET/PUT)
- `GET /api/hero-section`
- `GET /api/about-section`

### Collection Types (GET/POST/PUT/DELETE)
- `GET /api/services`
- `GET /api/process-steps`
- `GET /api/team-members`
- `GET /api/partnerships`
- `GET /api/blog-posts`
- `GET /api/career-posts`
- `GET /api/faqs`
- `GET /api/testimonials`
- `GET /api/service-plans`

### Example API Calls

```bash
# Get all services
curl http://localhost:1337/api/services

# Get single blog post by ID
curl http://localhost:1337/api/blog-posts/1

# Get hero section
curl http://localhost:1337/api/hero-section
```

## Connecting to Next.js

### 1. Install Strapi Client in Next.js
```bash
cd axerate-nextjs
npm install @strapi/client
```

### 2. Create API Client
Create `lib/strapi.ts` in your Next.js app:

```typescript
import { Strapi } from '@strapi/strapi';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchAPI(endpoint: string, options = {}) {
  const res = await fetch(`${strapiUrl}/api${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`API call failed: ${res.status}`);
  }

  return res.json();
}

export async function getHeroSection() {
  const data = await fetchAPI('/hero-section');
  return data.data;
}

export async function getServices() {
  const data = await fetchAPI('/services');
  return data.data;
}

export async function getBlogPosts() {
  const data = await fetchAPI('/blog-posts?populate=*');
  return data.data;
}

// Add more helper functions as needed
```

### 3. Update Next.js Environment
Add to `.env.local` in your Next.js app:
```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### 4. Use in Components
```typescript
// In a server component
import { getHeroSection } from '@/lib/strapi';

export default async function Hero() {
  const heroData = await getHeroSection();

  return (
    <section>
      <h1>{heroData.attributes.title}</h1>
      <p>{heroData.attributes.subtitle}</p>
      {/* ... */}
    </section>
  );
}
```

## Content Management

### Adding New Content Types

1. Create schema in `src/api/[content-type]/content-types/[content-type]/schema.json`
2. Create controller in `src/api/[content-type]/controllers/[content-type].ts`
3. Create router in `src/api/[content-type]/routes/[content-type].ts`
4. Create service in `src/api/[content-type]/services/[content-type].ts`
5. Rebuild Strapi: `npm run build`
6. Restart Strapi: `npm run develop`

### Modifying Existing Content

1. Update via Admin Panel (http://localhost:1337/admin)
2. Or update via API using PUT/POST requests
3. Or modify seeder scripts and re-run them

## Authentication & Permissions

### Public API Access
By default, all GET endpoints should be public. To configure:

1. Go to Settings → Roles → Public
2. Enable read permissions for each content type
3. Save changes

### API Tokens
For authenticated requests:

1. Go to Settings → API Tokens
2. Create a new token
3. Use in headers: `Authorization: Bearer YOUR_TOKEN`

## Development Workflow

1. **Start Strapi**: `npm run develop`
2. **Make schema changes**: Modify schema files or use admin panel
3. **Rebuild**: Strapi auto-rebuilds on schema changes in dev mode
4. **Test API**: Use Postman/curl to test endpoints
5. **Seed data**: Run seeder scripts when needed
6. **Update Next.js**: Fetch data in Next.js components

## Production Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Environment Variables
Set these in production:
- `DATABASE_URL` - Production database connection
- `APP_KEYS` - Secure random keys
- `API_TOKEN_SALT` - Secure random salt
- `ADMIN_JWT_SECRET` - Secure random secret
- `JWT_SECRET` - Secure random secret

### Database Migration
For production database setup:
1. Create production database
2. Update `config/database.ts` with production settings
3. Run migrations: `npm run strapi migration:run`

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 1337
lsof -ti:1337 | xargs kill -9
```

### Schema Changes Not Reflecting
```bash
# Clean build and restart
rm -rf .cache build
npm run build
npm run develop
```

### Seeder Errors
- Ensure Strapi is running before running seeders
- Check that all content types exist
- Verify API permissions are set correctly

## Resources

- [Strapi Documentation](https://docs.strapi.io)
- [Strapi REST API Reference](https://docs.strapi.io/dev-docs/api/rest)
- [Next.js Integration Guide](https://docs.strapi.io/dev-docs/integrations/next-js)

## Support

For issues or questions about this backend setup, contact the development team.
