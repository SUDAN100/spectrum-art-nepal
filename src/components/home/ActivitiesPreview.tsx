import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { corePrograms } from "@/data/activities";

export function ActivitiesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeader
            eyebrow="Initiatives & Outreach"
            title="Activities & Programs"
            description="Explore the multifaceted artistic initiatives organized and supported by Spectrum Art Association across Nepal."
            align="left"
            className="mb-0"
          />

          <div className="mt-6 md:mt-0">
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover border-b-2 border-primary/40 pb-1 transition-colors"
            >
              <span>View All Events &amp; Activities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Image-Based Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corePrograms.map((program, index) => (
            <div
              key={index}
              className="group flex flex-col bg-[#FDFCFB] rounded-2xl overflow-hidden border border-charcoal-border/30 shadow-card hover:shadow-art transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">
                    {program.type}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark font-sans">
                    {program.tagline}
                  </p>
                  <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-primary transition-colors leading-snug mt-1">
                    {program.title}
                  </h3>
                  <p className="text-sm text-charcoal-muted leading-relaxed font-sans mt-3">
                    {program.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-charcoal-border/20 flex items-center justify-between">
                  <span className="text-xs font-medium text-charcoal-subtle">
                    Ongoing Program
                  </span>
                  <Link
                    href="/activities"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
