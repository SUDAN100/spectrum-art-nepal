import React from "react";
import { Sparkles, Users, Layers, Compass, Music, Palette } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function VisionSection() {
  const visionItems = [
    {
      icon: Palette,
      title: "Promoting Nepali Art & Culture",
      description:
        "Preserving our sacred artistic traditions and advancing modern Nepali visual art on national and international stages.",
    },
    {
      icon: Users,
      title: "Supporting Emerging & Established Artists",
      description:
        "Cultivating mentorship programs, peer workshops, exhibition opportunities, and resources for artists across generations.",
    },
    {
      icon: Layers,
      title: "Encouraging Creative Collaboration",
      description:
        "Fostering cross-genre dialogues that dismantle creative silos and unite diverse artistic disciplines into shared experiences.",
    },
    {
      icon: Compass,
      title: "Exploring Diverse Forms of Expression",
      description:
        "Expanding beyond traditional canvas into bronze sculpture, woodcut prints, clay, digital mediums, and site-specific installations.",
    },
    {
      icon: Music,
      title: "Connecting Art, Music, Poetry & Tourism",
      description:
        "Creating powerful synergy between visual aesthetics, Himalayan poetry, musical rhythm, and sustainable cultural tourism.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden" id="vision">
      {/* Subtle background flourishes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Our Vision & Commitment"
          title="Shaping the Future of Nepali Art"
          description="Spectrum Art Association is dedicated to a vibrant, inclusive, and forward-looking art movement that honors Nepal's rich cultural lineage while exploring modern creative frontiers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4">
          {visionItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-charcoal-border/30 shadow-card hover:shadow-art transition-all duration-300 hover:-translate-y-1"
              >
                {/* Number indicator */}
                <span className="absolute top-6 right-6 font-serif text-3xl font-bold text-accent/40 group-hover:text-primary/20 transition-colors">
                  0{index + 1}
                </span>

                <div className="w-14 h-14 rounded-xl bg-secondary border border-accent/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-primary transition-colors leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-charcoal-border/20 flex items-center gap-1.5 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Spectrum Core Pillar</span>
                </div>
              </div>
            );
          })}

          {/* 6th Vision Summary Card */}
          <div className="relative bg-primary text-white p-8 rounded-2xl shadow-art flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Core Philosophy
              </span>
              <h3 className="text-2xl font-serif font-bold text-white leading-tight mt-3 mb-4">
                "Art is not limited to a canvas. It is a living connection."
              </h3>
              <p className="text-sm text-secondary leading-relaxed font-sans opacity-90">
                Spectrum bridges human emotions, heritage traditions, and tomorrow&apos;s artistic ideas across the Kathmandu Valley and Nepal&apos;s districts.
              </p>
            </div>
            <div className="pt-6 border-t border-white/20 text-xs text-accent font-sans">
              Est. 2060 B.S. • Registered with DAO Kathmandu
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
