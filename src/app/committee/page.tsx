import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { InitialsAvatar } from "@/components/ui/InitialsAvatar";
import { executiveCommittee, advisors } from "@/data/committee";
import { organizationInfo } from "@/data/organization";
import { ShieldCheck, Award, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Executive Committee & Leadership | Spectrum Art Association",
  description:
    "Meet the official leadership, Executive Committee, and Advisors of Spectrum Art Association, registered with District Administration Office, Kathmandu.",
  alternates: {
    canonical: "/committee",
  },
};

export default function CommitteePage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-secondary/60 border-b border-charcoal-border/20 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us", href: "/about" }, { label: "Executive Committee" }]} />

          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-accent/80 text-xs text-primary font-medium mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Leadership • DAO Kathmandu Registered</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal tracking-tight leading-tight">
              Executive Committee &amp; Advisors
            </h1>
            <p className="text-lg text-charcoal-muted font-sans mt-4 leading-relaxed">
              Guiding the governance, artistic programs, and community stewardship of Spectrum Art Association since 2060 B.S.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Committee Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Organizational Governance"
            title="Executive Committee"
            description="The dedicated office bearers and committee members leading our artistic missions, exhibitions, and district outreach."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {executiveCommittee.map((member) => (
              <div
                key={member.id}
                className="group relative bg-[#FDFCFB] rounded-2xl p-8 border border-charcoal-border/30 shadow-card hover:shadow-art transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center space-y-4"
              >
                {/* Official Photograph or Tasteful Initials-Based Profile Placeholder */}
                <div className="relative">
                  {member.image ? (
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-accent/80 shadow-md group-hover:scale-105 transition-transform duration-300 bg-secondary">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                  ) : (
                    <InitialsAvatar
                      name={member.name}
                      size="xl"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  {member.position === "President" && (
                    <span className="absolute -bottom-1 -right-1 bg-primary text-white p-1.5 rounded-full shadow-md z-10">
                      <Award className="w-4 h-4 text-accent" />
                    </span>
                  )}
                </div>

                {/* Member Position & Name */}
                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary text-primary border border-accent/60">
                    {member.position}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-charcoal group-hover:text-primary transition-colors pt-2">
                    {member.name}
                  </h3>
                </div>

                <p className="text-xs text-charcoal-muted font-sans leading-relaxed">
                  Spectrum Art Association • Kathmandu, Nepal
                </p>

                <div className="pt-2 border-t border-charcoal-border/20 w-full text-[11px] uppercase tracking-widest text-charcoal-subtle font-medium">
                  Executive Body
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-16 lg:py-20 bg-secondary/50 border-t border-charcoal-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Honorary Guidance"
            title="Advisory Council"
            description="Providing foundational artistic wisdom, cultural perspective, and legal governance to the association."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor) => (
              <div
                key={advisor.id}
                className="bg-white rounded-2xl p-8 border border-charcoal-border/30 shadow-card flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left hover:shadow-art transition-shadow"
              >
                <div className="shrink-0">
                  {advisor.image ? (
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-accent/80 shadow bg-secondary">
                      <Image
                        src={advisor.image}
                        alt={advisor.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                  ) : (
                    <InitialsAvatar name={advisor.name} size="lg" />
                  )}
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary">
                    {advisor.position === "Legal Advisor" ? (
                      <Scale className="w-3.5 h-3.5" />
                    ) : (
                      <Award className="w-3.5 h-3.5" />
                    )}
                    <span>{advisor.position}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-charcoal">
                    {advisor.name}
                  </h3>

                  <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                    Offering counsel and visionary direction for Spectrum Art Association&apos;s institutional and legal integrity.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Registration Notice */}
      <section className="py-12 border-t border-charcoal-border/20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Official Non-Governmental Organization Record
          </p>
          <p className="text-sm text-charcoal-muted font-sans">
            {organizationInfo.registration}. Established in {organizationInfo.establishedBS} ({organizationInfo.establishedAD}).
          </p>
        </div>
      </section>
    </div>
  );
}
