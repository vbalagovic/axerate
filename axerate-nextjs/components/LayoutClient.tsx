"use client";

import { ThemeProvider } from "./ThemeProvider";
import Header from "./Header";
import Footer from "./Footer";

interface FooterConfig {
  companyDescription: string;
  servicesTitle: string;
  servicesLinks: any[];
  contactTitle: string;
  contactLinks: any[];
  socialLinks: any[];
  copyrightText: string;
}

export default function LayoutClient({
  children,
  footerConfig,
}: {
  children: React.ReactNode;
  footerConfig: FooterConfig | null;
}) {
  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer footerConfig={footerConfig} />
    </ThemeProvider>
  );
}
