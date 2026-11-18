"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Sparkles, Clock, CheckCircle2, Image as ImageIcon, ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { activitiesData, corePrograms } from "@/data/activities";
import { Activity } from "@/types";

export default function ActivitiesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "upcoming" | "past">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const upcomingEvents = activitiesData.filter((a) => a.status === "upcoming");
  const pastEvents = activitiesData.filter((a) => a.status === "past");

  const displayedEvents =
    activeTab === "all"
      ? activitiesData
      : activeTab === "upcoming"
      ? upcomingEvents
      : pastEvents;

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-secondary/60 border-b border-charcoal-border/20 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Activities & Programs" }]} />

          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-accent/80 text-xs text-primary font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nationwide Art Initiatives &amp; District Outreach</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal tracking-tight leading-tight">
              Activities &amp; Programs
            </h1>
            <p className="text-lg text-charcoal-muted font-sans mt-4 leading-relaxed">
              Showcasing Spectrum Art Association&apos;s art exhibitions, plein-air workshops, cultural symposiums, and collaborative activities across Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Events Container */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Status Tabs */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-4 border-b border-charcoal-border/20">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeTab === "all"
                    ? "bg-primary text-white shadow-sm"
                    : "bg-secondary text-charcoal hover:bg-accent/40"
                }`}
              >
                All Programs ({activitiesData.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("upcoming")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeTab === "upcoming"
                    ? "bg-primary text-white shadow-sm"
                    : "bg-secondary text-charcoal hover:bg-accent/40"
                }`}
              >
                Upcoming Events ({upcomingEvents.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("past")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeTab === "past"
                    ? "bg-primary text-white shadow-sm"
                    : "bg-secondary text-charcoal hover:bg-accent/40"
                }`}
              >
                Past Activities ({pastEvents.length})
              </button>
            </div>

            <span className="text-xs text-charcoal-muted font-sans">
              Estd. 2060 B.S. • Kathmandu &amp; Diverse Districts of Nepal
            </span>
          </div>

          {/* Events List */}
          <div className="space-y-12">
            {displayedEvents.map((event) => {
              const isUpcoming = event.status === "upcoming";

              return (
                <div
                  key={event.id}
                  className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-charcoal-border/30 shadow-card hover:shadow-art transition-all duration-300 p-6 sm:p-8 lg:p-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Featured Image (5 cols) */}
                    <div className="lg:col-span-5 relative">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal shadow-md">
                        <Image
                          src={event.featuredImage}
                          alt={event.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm ${
                              isUpcoming
                                ? "bg-primary text-white"
                                : "bg-white/90 text-charcoal backdrop-blur-md"
                            }`}
                          >
                            {isUpcoming ? "Upcoming Event" : "Completed Program"}
                          </span>
                        </div>
                      </div>

                      {/* Additional Photo Gallery Thumbnails */}
                      {event.additionalPhotos && event.additionalPhotos.length > 0 && (
                        <div className="mt-4">
                          <p className="text-[11px] uppercase tracking-wider text-charcoal-subtle font-semibold mb-2 flex items-center gap-1.5">
                            <ImageIcon className="w-3.5 h-3.5 text-primary" />
                            <span>Additional Documentation Photos ({event.additionalPhotos.length})</span>
                          </p>
                          <div className="flex gap-2">
                            {event.additionalPhotos.map((photo, pIdx) => (
                              <button
                                key={pIdx}
                                type="button"
                                onClick={() => setSelectedPhoto(photo)}
                                className="relative w-16 h-16 rounded-lg overflow-hidden border border-charcoal-border/40 hover:opacity-90 hover:scale-105 transition-all shadow-sm"
                              >
                                <Image
                                  src={photo}
                                  alt={`${event.title} detail ${pIdx + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content & Details (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase font-semibold tracking-wider px-2.5 py-0.5 rounded bg-secondary text-primary border border-accent/60">
                          {event.type}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-charcoal leading-tight">
                        {event.title}
                      </h2>

                      {/* Date & Location Pills */}
                      <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-charcoal-muted font-sans py-1">
                        <div className="flex items-center gap-1.5 text-charcoal font-medium">
                          <Calendar className="w-4 h-4 text-primary shrink-0" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-charcoal font-medium">
                          <MapPin className="w-4 h-4 text-primary shrink-0" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-base text-charcoal-muted leading-relaxed font-sans">
                        {event.description}
                      </p>

                      {/* Detailed Bullet Points */}
                      {event.fullDetails && (
                        <div className="pt-2 space-y-2">
                          {event.fullDetails.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="pt-4 flex items-center gap-4">
                        <Link
                          href="/contact?intent=participate"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white text-xs sm:text-sm font-medium hover:bg-primary-hover transition-colors shadow-sm"
                        >
                          <span>{isUpcoming ? "Inquire to Participate" : "Contact About Future Sessions"}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Program Pillars Recap */}
      <section className="py-16 bg-secondary/40 border-t border-charcoal-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Continuous Engagements"
            title="The Six Pillars of Spectrum Activities"
            description="Our structured program categories bridging artists and cultural communities."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {corePrograms.map((prog, pIdx) => (
              <div
                key={pIdx}
                className="bg-white p-4 rounded-xl border border-charcoal-border/30 text-center space-y-2 shadow-sm"
              >
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-charcoal mb-2">
                  <Image src={prog.image} alt={prog.type} fill className="object-cover" />
                </div>
                <h3 className="font-serif font-bold text-xs sm:text-sm text-charcoal leading-tight">
                  {prog.type}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Image Modal for Additional Photos */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full bg-white rounded-xl overflow-hidden p-2 shadow-2xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 px-3 py-1 bg-charcoal text-white text-xs rounded-full"
            >
              Close
            </button>
            <div className="relative w-full h-[70vh]">
              <Image
                src={selectedPhoto}
                alt="Enlarged event documentation"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
