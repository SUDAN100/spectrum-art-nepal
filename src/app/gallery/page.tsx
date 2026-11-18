"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Eye, Filter, Sparkles, Layers } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Lightbox } from "@/components/ui/Lightbox";
import { artworksData } from "@/data/artworks";
import { Artwork, CategoryType } from "@/types";

const CATEGORIES: CategoryType[] = [
  "All",
  "Paintings",
  "Drawings",
  "Sculptures",
  "Contemporary Art",
  "Cultural Art",
  "Exhibition Photographs",
  "Workshop Photographs",
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);

  // Filter artworks
  const filteredArtworks = useMemo(() => {
    if (selectedCategory === "All") return artworksData;
    return artworksData.filter((art) => art.category === selectedCategory);
  }, [selectedCategory]);

  const currentIndex = activeArtwork
    ? filteredArtworks.findIndex((a) => a.id === activeArtwork.id)
    : -1;

  const handleNext = () => {
    if (currentIndex < filteredArtworks.length - 1) {
      setActiveArtwork(filteredArtworks[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveArtwork(filteredArtworks[currentIndex - 1]);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-secondary/60 border-b border-charcoal-border/20 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Visual Gallery" }]} />

          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-accent/80 text-xs text-primary font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Spectrum Permanent &amp; Exhibition Archive</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal tracking-tight leading-tight">
              Visual Art Gallery
            </h1>
            <p className="text-lg text-charcoal-muted font-sans mt-4 leading-relaxed">
              Explore diverse expressions of Nepali creativity across paintings, sculptures, drawings, contemporary installations, and documentary photo archives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Area */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-4 scrollbar-none">
            <div className="flex items-center gap-2 shrink-0 pr-2 border-r border-charcoal-border/30 text-xs uppercase tracking-widest text-charcoal-subtle font-semibold mr-1">
              <Filter className="w-3.5 h-3.5 text-primary" />
              <span className="hidden sm:inline">Filter:</span>
            </div>

            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count =
                cat === "All"
                  ? artworksData.length
                  : artworksData.filter((a) => a.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? "bg-primary text-white shadow-sm"
                      : "bg-secondary text-charcoal hover:bg-accent/40"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-charcoal-border/40 text-charcoal-muted"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Artworks Grid */}
          {filteredArtworks.length === 0 ? (
            <div className="py-24 text-center space-y-3">
              <Layers className="w-12 h-12 text-charcoal-subtle mx-auto stroke-[1.5]" />
              <p className="text-lg font-serif text-charcoal">No artworks found in this category.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="text-sm text-primary font-semibold underline underline-offset-4"
              >
                View all artworks
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArtworks.map((artwork) => (
                <div
                  key={artwork.id}
                  onClick={() => setActiveArtwork(artwork)}
                  className="group cursor-pointer flex flex-col bg-[#FAF8F5] rounded-2xl overflow-hidden border border-charcoal-border/30 shadow-card hover:shadow-art-hover transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image Viewport */}
                  <div className="relative aspect-[4/3] sm:aspect-[4/5] bg-charcoal overflow-hidden">
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-primary text-white mb-2">
                          {artwork.category}
                        </span>
                        <h3 className="text-xl font-serif font-bold text-white leading-tight">
                          {artwork.title}
                        </h3>
                        <p className="text-xs text-accent mt-1">
                          By {artwork.artistName} • {artwork.year}
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-charcoal flex items-center justify-center shadow-md">
                        <Eye className="w-4 h-4 text-primary" />
                      </span>
                    </div>
                  </div>

                  {/* Card Metadata */}
                  <div className="p-5 flex-1 flex flex-col justify-between border-t border-charcoal-border/20 space-y-3">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif font-bold text-charcoal text-lg group-hover:text-primary transition-colors leading-snug">
                          {artwork.title}
                        </h4>
                        <span className="shrink-0 text-[10px] font-semibold text-charcoal-muted uppercase tracking-wider bg-secondary px-2 py-0.5 rounded border border-charcoal-border/20">
                          {artwork.year}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-primary mt-0.5">
                        {artwork.artistName}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-charcoal-border/20 flex items-center justify-between text-xs text-charcoal-muted">
                      <span className="line-clamp-1">{artwork.medium}</span>
                      <span className="font-semibold text-primary shrink-0 ml-2">Inspect</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        artwork={activeArtwork}
        onClose={() => setActiveArtwork(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={currentIndex < filteredArtworks.length - 1}
        hasPrev={currentIndex > 0}
      />
    </div>
  );
}
