"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-header backdrop-blur-lg sticky top-0 z-50 border-b border-header">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.svg"
            alt="Axerate Logo"
            width={150}
            height={45}
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/#process"
            className="nav-link text-subtle hover:text-primary text-sm font-medium"
          >
            Our Process
          </Link>
          <Link
            href="/#work"
            className="nav-link text-subtle hover:text-primary text-sm font-medium"
          >
            Our Work
          </Link>
          <Link
            href="/#tech"
            className="nav-link text-subtle hover:text-primary text-sm font-medium"
          >
            Technology
          </Link>
          <Link
            href="/blog"
            className="nav-link text-subtle hover:text-primary text-sm font-medium"
          >
            Blog
          </Link>
          <Link
            href="/startup-studio"
            className="nav-link text-subtle hover:text-primary text-sm font-medium"
          >
            Startup Studio
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-subtle hover:text-primary focus:outline-none"
            aria-label="Toggle theme"
            suppressHydrationWarning
          >
            {theme === "light" ? (
              <span className="material-symbols-outlined" suppressHydrationWarning>dark_mode</span>
            ) : (
              <span className="material-symbols-outlined" suppressHydrationWarning>light_mode</span>
            )}
          </button>

          <Link
            href="#contact"
            className="hidden md:inline-block cta-button bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg shadow-violet-500/20"
          >
            Let's Build
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-subtle hover:text-primary focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <span className="material-symbols-outlined">close</span>
            ) : (
              <span className="material-symbols-outlined">menu</span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu absolute top-0 left-0 w-full bg-primary md:hidden transition-transform duration-300 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-screen space-y-8">
          <Link
            href="/#process"
            className="text-2xl font-semibold text-primary"
            onClick={closeMobileMenu}
          >
            Our Process
          </Link>
          <Link
            href="/#work"
            className="text-2xl font-semibold text-primary"
            onClick={closeMobileMenu}
          >
            Our Work
          </Link>
          <Link
            href="/#tech"
            className="text-2xl font-semibold text-primary"
            onClick={closeMobileMenu}
          >
            Technology
          </Link>
          <Link
            href="/blog"
            className="text-2xl font-semibold text-primary"
            onClick={closeMobileMenu}
          >
            Blog
          </Link>
          <Link
            href="/startup-studio"
            className="text-2xl font-semibold text-primary"
            onClick={closeMobileMenu}
          >
            Startup Studio
          </Link>
          <Link
            href="/#contact"
            className="text-2xl font-semibold text-primary cta-button bg-violet-500 hover:bg-violet-600 text-white py-3 px-8 rounded-lg"
            onClick={closeMobileMenu}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
