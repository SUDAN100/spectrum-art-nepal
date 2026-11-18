"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { Logo } from "./Logo";
import { navItems } from "@/data/siteMetadata";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const regularNavItems = navItems.filter((item) => !item.isSpecial);
  const ctaItem = navItems.find((item) => item.isSpecial);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-charcoal-border/30 py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-charcoal-border/20 py-4 lg:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-7" aria-label="Main Navigation">
            {regularNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[14px] font-medium tracking-wide transition-colors py-1 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-charcoal hover:text-primary"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full animate-fadeIn" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Button (Desktop) */}
          <div className="hidden xl:flex items-center space-x-4">
            {ctaItem && (
              <Link
                href={ctaItem.href}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium tracking-wide shadow-sm hover:bg-primary-hover transition-all duration-300 hover:shadow-art"
              >
                <span>{ctaItem.name}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center space-x-3">
            {ctaItem && (
              <Link
                href={ctaItem.href}
                className="hidden sm:inline-flex items-center text-xs px-3.5 py-1.5 rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
              >
                Join
              </Link>
            )}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-charcoal hover:text-primary hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-[73px] z-40 bg-white/98 backdrop-blur-xl border-t border-charcoal-border/30 xl:hidden flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn">
          <div className="space-y-4 pt-2">
            <p className="text-xs uppercase tracking-widest text-primary/70 font-semibold mb-2">
              Navigation
            </p>
            <nav className="flex flex-col space-y-2">
              {regularNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between text-lg font-serif tracking-wide py-2.5 px-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-secondary text-primary font-bold"
                        : "text-charcoal hover:bg-secondary/60 hover:text-primary"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-charcoal-border/20 space-y-4">
            {ctaItem && (
              <Link
                href={ctaItem.href}
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-primary text-white font-medium text-base shadow-art hover:bg-primary-hover transition-all"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                <span>{ctaItem.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
            <div className="text-center">
              <p className="text-xs text-charcoal-muted">
                Estd. 2060 B.S. • Registered with DAO Kathmandu
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
