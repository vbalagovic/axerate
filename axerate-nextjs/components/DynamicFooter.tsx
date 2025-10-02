"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import { useEffect, useState } from "react";

interface FooterConfig {
  companyDescription: string;
  servicesTitle: string;
  servicesLinks: any[];
  contactTitle: string;
  contactLinks: any[];
  socialLinks: any[];
  copyrightText: string;
}

interface DynamicFooterProps {
  mainFooter: FooterConfig | null;
  studioFooter: FooterConfig | null;
}

export default function DynamicFooter({ mainFooter, studioFooter }: DynamicFooterProps) {
  const pathname = usePathname();
  const [footerConfig, setFooterConfig] = useState<FooterConfig | null>(mainFooter);

  useEffect(() => {
    // Determine which footer to show based on current path
    if (pathname.startsWith("/startup-studio")) {
      setFooterConfig(studioFooter);
    } else {
      setFooterConfig(mainFooter);
    }
  }, [pathname, mainFooter, studioFooter]);

  return <Footer footerConfig={footerConfig} />;
}
