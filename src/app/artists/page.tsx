"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Palette, ArrowRight, Instagram, Facebook, Globe, Filter } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { artistsData } from "@/data/artists";
import { Artist } from "@/types";

export default function ArtistsPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("All");

  const disciplines = useMemo(() => {
    const set = new Set<string>();
    artistsData.forEach((a) => {
      // Extract main category keyword
      if (a.discipline.includes("Painting") || a.discipline.includes("Canvas")) set.add("Painting");
      if (a.discipline.includes("Sculpture") || a.discipline.includes("Metalcraft")) set.add("Sculpture");
      if (a.discipline.includes("Paubha")) set.add("Traditional Paubha");
      if (a.discipline.includes("Watercolor")) set.add("Watercolor");
      if (a.discipline.includes("Printmaking")) set.add("Printmaking");
      if (a.discipline.includes("Ceramics")) set.add("Ceramics");
    });
    return ["All", ...Array.from(set)];
  }, []);

  const filteredArtists = useMemo(() => {
    if (selectedDiscipline === "All") return artistsData;
    return artistsData.filter((a) =>
      a.discipline.toLowerCase().includes(selectedDiscipline.toLowerCase())
    );
  }, [selectedDiscipline]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-secondary/60 border-b border-charcoal-border/20 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Artists Directory" }]} />

          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-accent/80 text-xs text-primary font-medium mb-4">
              <Palette className="w-3.5 h-3.5" />
              <span>Spectrum Artist Community &amp; Creators</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal tracking-tight leading-tight">
              Artists Directory
            </h1>
            <p className="text-lg text-charcoal-muted font-sans mt-4 leading-relaxed">
              Discover the diverse visual artists, Paubha masters, contemporary painters, sculptors, and printmakers forming the creative heart of Spectrum Art Association.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Discipline Filters */}
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-3 scrollbar-none">
            <div className="flex items-center gap-1.5 shrink-0 pr-3 border-r border-charcoal-border/30 text-xs uppercase tracking-widest text-charcoal-subtle font-semibold">
              <Filter className="w-3.5 h-3.5 text-primary" />
              <span>Discipline:</span>
            </div>

            {disciplines.map((disc) => {
              const isSelected = selectedDiscipline === disc;
              return (
                <button
                  key={disc}
                  type="button"
                  onClick={() => setSelectedDiscipline(disc)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? "bg-primary text-white shadow-sm"
                      : "bg-secondary text-charcoal hover:bg-accent/40"
                  }`}
                >
                  {disc}
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredArtists.map((artist) => (
              <div
                key={artist.id}
                className="group flex flex-col bg-[#FAF8F5] rounded-2xl overflow-hidden border border-charcoal-border/30 shadow-card hover:shadow-art transition-all duration-300 hover:-translate-y-1"
              >
                {/* Artist Photo */}
                <div className="relative aspect-[4/5] bg-secondary overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-accent">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{artist.location}</span>
                    </div>
                  </div>
                </div>

                {/* Artist Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-charcoal group-hover:text-primary transition-colors leading-tight">
                      {artist.name}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mt-1.5">
                      <Palette className="w-3.5 h-3.5 shrink-0" />
                      <span className="line-clamp-1">{artist.discipline}</span>
                    </div>

                    <p className="text-xs text-charcoal-muted leading-relaxed font-sans mt-3 line-clamp-3">
                      {artist.bio}
                    </p>

                    {/* Selected Artworks Badges */}
                    {artist.selectedArtworks && (
                      <div className="mt-4 pt-3 border-t border-charcoal-border/20">
                        <p className="text-[10px] uppercase tracking-wider text-charcoal-subtle font-semibold mb-1.5">
                          Selected Works:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {artist.selectedArtworks.map((art, aIdx) => (
                            <span
                              key={aIdx}
                              className="text-[10px] px-2 py-0.5 rounded bg-secondary text-charcoal-muted border border-charcoal-border/20"
                            >
                              {art}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions & Socials */}
                  <div className="pt-4 border-t border-charcoal-border/20 flex items-center justify-between">
                    <Link
                      href={`/artists/${artist.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-hover group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Full Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {artist.socials && (
                      <div className="flex items-center space-x-2 text-charcoal-subtle">
                        {artist.socials.instagram && (
                          <a
                            href={artist.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                            aria-label={`${artist.name} on Instagram`}
                          >
                            <Instagram className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {artist.socials.facebook && (
                          <a
                            href={artist.socials.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                            aria-label={`${artist.name} on Facebook`}
                          >
                            <Facebook className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {artist.socials.website && (
                          <a
                            href={artist.socials.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                            aria-label={`${artist.name} website`}
                          >
                            <Globe className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
