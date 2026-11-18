import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Award, Landmark, Sparkles, Users, BookOpen } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { organizationInfo } from "@/data/organization";

export const metadata: Metadata = {
  title: "About Us | Spectrum Art Association",
  description:
    "Learn about Spectrum Art Association, established in 2060 B.S. and registered with DAO Kathmandu. Discover our history, vision, mission, and artistic philosophy.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Editorial Header Banner */}
      <section className="bg-secondary/60 border-b border-charcoal-border/20 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />

          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-accent/80 text-xs text-primary font-medium mb-4">
              <Landmark className="w-3.5 h-3.5" />
              <span>Registered with District Administration Office, Kathmandu • Estd. {organizationInfo.establishedBS}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal tracking-tight leading-tight">
              An Association Driven by Art &amp; Creative Expression
            </h1>
            <p className="text-lg text-charcoal-muted font-sans mt-4 leading-relaxed">
              Founded over two decades ago to nurture Nepali artistic talent, foster creative collaboration, and connect visual expression with cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Official Organization Overview & History */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-xs uppercase font-semibold tracking-[0.25em] text-primary">
                  Official Overview &amp; Background
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal leading-snug">
                About Spectrum Art Association
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans">
                <p className="text-charcoal font-medium">
                  {organizationInfo.detailedBackground[0]}
                </p>
                <p>
                  {organizationInfo.detailedBackground[1]}
                </p>
                <p>
                  {organizationInfo.detailedBackground[2]}
                </p>
                <p>
                  {organizationInfo.detailedBackground[3]}
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/committee"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-hover shadow-sm transition-all"
                >
                  <Users className="w-4 h-4" />
                  <span>Executive Committee &amp; Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/activities"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-charcoal border border-charcoal-border hover:border-primary text-sm font-medium transition-all"
                >
                  <span>Explore Activities</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-charcoal-border/30">
                  <Image
                    src="https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&w=1200&q=80"
                    alt="Spectrum Art Exhibition in Kathmandu"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Floating Heritage Stat Box */}
                <div className="mt-6 p-6 rounded-xl bg-secondary border border-accent/60 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary font-bold">
                      Established In Nepal
                    </p>
                    <p className="text-3xl font-serif font-bold text-charcoal mt-1">
                      {organizationInfo.establishedBS}
                    </p>
                    <p className="text-xs text-charcoal-muted">
                      ({organizationInfo.establishedAD} Calendar)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-widest text-primary font-bold">
                      Legal Registration
                    </p>
                    <p className="text-base font-serif font-bold text-charcoal mt-1">
                      DAO Kathmandu
                    </p>
                    <p className="text-xs text-charcoal-muted">
                      District Administration Office
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Vision & Mission Section */}
      <section className="py-16 lg:py-24 bg-secondary/50 border-y border-charcoal-border/20" id="vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Purpose & Guidance"
            title="Vision & Mission"
            description="Our fundamental commitments guiding artistic workshops, exhibitions, and community engagements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vision */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-charcoal-border/30 shadow-card space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Vision</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal">
                Cultivating a Thriving Art Ecosystem
              </h3>
              <ul className="space-y-4">
                {organizationInfo.visionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-primary shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-charcoal">{point.title}</h4>
                      <p className="text-sm text-charcoal-muted mt-0.5">{point.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-charcoal-border/30 shadow-card space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/40 text-charcoal text-xs font-semibold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-primary" />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal">
                  Empowering Artists &amp; Inspiring Society
                </h3>
                <p className="text-base text-charcoal leading-relaxed font-sans font-medium">
                  "{organizationInfo.mission}"
                </p>

                <div className="pt-2">
                  <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-3">
                    Key Objectives
                  </h4>
                  <ul className="space-y-3">
                    {organizationInfo.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal-muted">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-charcoal-border/20 text-xs text-charcoal-subtle">
                Spectrum Art Association Constitution &amp; Core Directives
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Artistic Philosophy Section */}
      <section className="py-16 lg:py-24" id="philosophy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-primary" />
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-primary">
              Artistic Philosophy
            </span>
            <span className="w-6 h-[1.5px] bg-primary" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal leading-tight">
            "Art is not limited to a canvas or a particular medium. It connects people, cultures, emotions, and ideas."
          </h2>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans max-w-3xl mx-auto">
            From historic Paubha stone pigments to bronze casting in Patan, contemporary acrylic abstractions, and plein-air landscapes across Nepal&apos;s hills, Spectrum views art as an ever-evolving cultural dialogue. By bridging visual arts with poetry, music, and cultural tourism, we ensure our creative expressions remain dynamic and deeply rooted in our homeland.
          </p>

          <div className="pt-6">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-hover shadow-art transition-all"
            >
              <span>Explore The Visual Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
