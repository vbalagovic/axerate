import Link from "next/link";
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
  isEmail?: boolean;
}

interface SocialLink {
  platform: string;
  url: string;
}

interface FooterConfig {
  companyDescription: string;
  servicesTitle: string;
  servicesLinks: FooterLink[];
  contactTitle: string;
  contactLinks: FooterLink[];
  socialLinks: SocialLink[];
  copyrightText: string;
}

interface FooterProps {
  footerConfig?: FooterConfig | null;
}

const defaultFooterConfig: FooterConfig = {
  companyDescription:
    "From zero to venture. We are the operational co-founder for visionary startups, providing end-to-end solutions from ideation to funding.",
  servicesTitle: "Services",
  servicesLinks: [
    { label: "Venture Catalyst", href: "#services" },
    { label: "Our Team", href: "#about" },
    { label: "Partnerships", href: "#partnerships" },
    { label: "Development", href: "/" },
  ],
  contactTitle: "Contact",
  contactLinks: [
    { label: "Launch Your Venture", href: "#contact" },
    { label: "Blog", href: "/blog" },
    { label: "ventures@axerate.com", href: "mailto:ventures@axerate.com", isEmail: true },
  ],
  socialLinks: [
    { platform: "twitter", url: "https://twitter.com/axerate" },
    { platform: "linkedin", url: "https://linkedin.com/company/axerate" },
    { platform: "github", url: "https://github.com/axerate" },
  ],
  copyrightText: "© 2025 Axerate. All rights reserved.",
};

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "twitter":
    case "x":
      return (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      );
    case "linkedin":
      return (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      );
    case "github":
      return (
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.374-12-12-12z" />
      );
    case "facebook":
      return (
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      );
    case "instagram":
      return (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      );
    default:
      return null;
  }
};

export default function Footer({ footerConfig }: FooterProps) {
  const config = footerConfig || defaultFooterConfig;

  return (
    <footer className="bg-primary border-t border-strong">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.svg"
                alt="Axerate Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-primary text-2xl font-bold tracking-wider"></span>
            </div>
            <p className="text-subtle mb-6 max-w-md">{config.companyDescription}</p>
            <div className="flex space-x-4">
              {config.socialLinks.map((social) => (
                <Link
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-card border border-strong rounded-lg text-subtle hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {getSocialIcon(social.platform)}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-primary font-semibold mb-4">{config.servicesTitle}</h4>
            <ul className="space-y-2">
              {config.servicesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-subtle hover:text-violet-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-semibold mb-4">{config.contactTitle}</h4>
            <ul className="space-y-2">
              {config.contactLinks.map((link, index) =>
                link.isEmail ? (
                  <li key={index}>
                    <span className="text-subtle">{link.label}</span>
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-subtle hover:text-violet-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="border-t border-strong pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-subtle text-sm">{config.copyrightText}</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-subtle hover:text-violet-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-subtle hover:text-violet-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
