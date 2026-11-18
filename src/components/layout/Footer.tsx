import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { organizationInfo } from "@/data/organization";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1818] text-[#EAE6DF] border-t border-[#332D2D] relative overflow-hidden">
      {/* Subtle background artistic watermarks */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Col 1: Brand & Official Registration (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="dark" size="lg" />
            <p className="text-sm leading-relaxed text-[#BFB7AC] max-w-md font-sans">
              {organizationInfo.detailedBackground[0]}
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-primary/20 border border-primary/40 text-xs text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>{organizationInfo.registration}</span>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={organizationInfo.contact.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2A2424] hover:bg-primary text-[#EAE6DF] hover:text-white flex items-center justify-center transition-all duration-300 border border-[#3D3434]"
                aria-label="Spectrum Art Association on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={organizationInfo.contact.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2A2424] hover:bg-primary text-[#EAE6DF] hover:text-white flex items-center justify-center transition-all duration-300 border border-[#3D3434]"
                aria-label="Spectrum Art Association on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={organizationInfo.contact.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2A2424] hover:bg-primary text-[#EAE6DF] hover:text-white flex items-center justify-center transition-all duration-300 border border-[#3D3434]"
                aria-label="Spectrum Art Association on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">
              Organization
            </p>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link href="/about" className="text-[#BFB7AC] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/committee" className="text-[#BFB7AC] hover:text-white transition-colors">
                  Executive Committee
                </Link>
              </li>
              <li>
                <Link href="/about#vision" className="text-[#BFB7AC] hover:text-white transition-colors">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="/about#philosophy" className="text-[#BFB7AC] hover:text-white transition-colors">
                  Artistic Philosophy
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-[#BFB7AC] hover:text-white transition-colors">
                  Activities &amp; Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Artistic Directory (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">
              Art &amp; Community
            </p>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link href="/gallery" className="text-[#BFB7AC] hover:text-white transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-[#BFB7AC] hover:text-white transition-colors">
                  Meet Our Artists
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-[#BFB7AC] hover:text-white transition-colors">
                  News &amp; Events
                </Link>
              </li>
              <li>
                <Link href="/contact?intent=join" className="text-[#BFB7AC] hover:text-white transition-colors inline-flex items-center gap-1 text-accent">
                  <span>Join Community</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information Placeholders (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent font-sans">
              Official Contact
            </p>
            <ul className="space-y-3 text-xs leading-relaxed font-sans text-[#BFB7AC]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{organizationInfo.contact.addressPlaceholder}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${organizationInfo.contact.emailPlaceholder}`}
                  className="hover:text-white transition-colors"
                >
                  {organizationInfo.contact.emailPlaceholder}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>{organizationInfo.contact.phonePlaceholder}</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-medium text-accent hover:text-white transition-colors border-b border-accent/40 pb-0.5"
              >
                <span>Send us an inquiry</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Cultural Note */}
        <div className="mt-14 pt-8 border-t border-[#332D2D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F877C] font-sans">
          <p>
            © {currentYear} {organizationInfo.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Established in {organizationInfo.establishedBS} ({organizationInfo.establishedAD}) • Kathmandu, Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
