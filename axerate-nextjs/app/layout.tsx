import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/components/LayoutClient";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import DynamicFooter from "@/components/DynamicFooter";
import { getFooterConfig } from "@/lib/strapi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axerate - Startup Studio",
  description:
    "The startup studio that builds from zero to funding. Ideate with us, get your MVP coded, legal setup handled, and investor doors opened. Scale smarter—join visionary founders today.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch both footer configs
  const [mainFooter, studioFooter] = await Promise.all([
    getFooterConfig("main"),
    getFooterConfig("startup-studio"),
  ]);

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        <LayoutClient>{children}</LayoutClient>
        <DynamicFooter mainFooter={mainFooter} studioFooter={studioFooter} />
      </body>
    </html>
  );
}
