import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, HeartHandshake } from "lucide-react";

export function CommunityCta() {
  return (
    <section className="py-20 lg:py-28 bg-[#1F1A1A] text-white relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-accent font-sans">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-widest uppercase font-semibold text-[11px]">
            Artist &amp; Community Membership
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]">
          Be Part of the Creative Journey.
        </h2>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl text-[#D6CFC4] max-w-2xl mx-auto leading-relaxed font-sans">
          Connect with artists, explore creative opportunities, and become part of a growing artistic community.
        </p>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact?intent=join"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-primary text-white text-base font-medium tracking-wide shadow-art hover:bg-primary-hover hover:scale-105 transition-all duration-300 border border-primary-light/40"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white hover:bg-white/15 text-base font-medium tracking-wide transition-all duration-300 border border-white/20"
          >
            <HeartHandshake className="w-4 h-4 text-accent" />
            <span>Discover Our Vision</span>
          </Link>
        </div>

        {/* Cultural footnote */}
        <p className="text-xs text-[#9E9589] tracking-wider uppercase pt-6">
          Established 2060 B.S. • Registered with District Administration Office, Kathmandu
        </p>
      </div>
    </section>
  );
}
