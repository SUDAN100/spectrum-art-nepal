import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Palette, Award } from "lucide-react";
import { organizationInfo } from "@/data/organization";

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center bg-[#FAF8F5] overflow-hidden pt-8 pb-16 lg:py-24">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#7B302F 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Artistic blur gradients */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text / Editorial Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Tagline / Heritage pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-accent/80 shadow-sm text-xs text-charcoal font-sans font-medium">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary font-semibold tracking-wider uppercase text-[11px]">
                Estd. {organizationInfo.establishedBS}
              </span>
              <span className="text-charcoal-subtle">•</span>
              <span className="text-charcoal-muted tracking-wide">
                DAO Kathmandu Registered
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-bold text-charcoal tracking-tight leading-[1.08]">
              Where Art Meets <br className="hidden sm:inline" />
              <span className="text-primary italic font-normal">Expression.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-charcoal-muted leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              Celebrating Nepali art, connecting creative minds, and exploring the endless possibilities of artistic expression.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white text-base font-medium tracking-wide shadow-art hover:bg-primary-hover hover:shadow-art-hover transition-all duration-300"
              >
                <span>Explore Our Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/activities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-charcoal border border-charcoal-border hover:border-primary hover:text-primary text-base font-medium tracking-wide transition-all duration-300 shadow-sm"
              >
                <span>Discover Our Activities</span>
                <Compass className="w-4 h-4 text-primary" />
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 border-t border-charcoal-border/30 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-primary">2060 B.S.</p>
                <p className="text-xs uppercase tracking-wider text-charcoal-muted font-sans mt-0.5">
                  Heritage Foundation
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-primary">Districts</p>
                <p className="text-xs uppercase tracking-wider text-charcoal-muted font-sans mt-0.5">
                  Nationwide Outreach
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-primary">Infinite</p>
                <p className="text-xs uppercase tracking-wider text-charcoal-muted font-sans mt-0.5">
                  Creative Mediums
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Composition (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative art frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80"
                    alt="Artistic painting in Spectrum Art Gallery"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  
                  {/* Floating caption on image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-widest text-accent font-sans font-semibold">
                      Featured Association Archive
                    </p>
                    <p className="text-xl font-serif font-bold mt-1">
                      Visual Symphony of Kathmandu Valley
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating accent badge: Traditional meets Contemporary */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-art border border-charcoal-border/30 hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal uppercase tracking-wider">
                    Fine Art &amp; Culture
                  </p>
                  <p className="text-[11px] text-charcoal-muted">
                    Paintings • Sculptures • Workshops
                  </p>
                </div>
              </div>

              {/* Floating stamp top right */}
              <div className="absolute -top-5 -right-5 bg-primary text-white p-3 rounded-full shadow-lg hidden sm:flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
