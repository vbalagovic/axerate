# Axerate - Next.js Version

This is a Next.js conversion of the Axerate startup studio landing page. The project uses Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Dark/Light Mode** with persistent theme
- ✅ **Responsive Design** for all devices
- ✅ **Scroll Animations** using Intersection Observer
- ✅ **SEO Optimized** with metadata
- ✅ **Component-Based Architecture**

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
axerate-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer
│   ├── ThemeProvider.tsx   # Dark mode provider
│   └── sections/           # Page sections
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Process.tsx
│       ├── About.tsx
│       ├── Partnerships.tsx
│       ├── Blog.tsx
│       └── Contact.tsx
├── public/                 # Static assets
└── styles/                 # Additional styles

```

## Key Improvements Over HTML Version

1. **Component Reusability** - All sections are modular React components
2. **Type Safety** - TypeScript catches errors at compile time
3. **Better Performance** - Next.js optimizations (image optimization, code splitting)
4. **SEO** - Built-in metadata and SSR support
5. **Developer Experience** - Hot reload, better tooling
6. **Maintainability** - Organized code structure

## Customization

### Theme Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: "#F15A29",
    hover: "#D23F2A",
  },
}
```

### Content

All content is in the component files. Edit:
- Hero text: `components/sections/Hero.tsx`
- Services: `components/sections/Services.tsx`
- Team members: `components/sections/About.tsx`
- etc.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
```

Deploy the `.next` folder and `public` directory to your hosting provider.

## Technologies Used

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **@tailwindcss/forms** - Form styling
