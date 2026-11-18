"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Lightbox } from "@/components/ui/Lightbox";
import { getFeaturedArtworks } from "@/data/artworks";
import { Artwork } from "@/types";

export function FeaturedGallery() {
  const featuredWorks = getFeaturedArtworks();
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);

  const currentIndex = activeArtwork
    ? featuredWorks.findIndex((a) => a.id === activeArtwork.id)
    : -1;

  const handleNext = () => {
    if (currentIndex < featuredWorks.length - 1) {
      setActiveArtwork(featuredWorks[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveArtwork(featuredWorks[currentIndex - 1]);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Curated Collection"
          title="Featured Art Gallery"
          description="A glimpse into the diverse visual tapestry created by our member artists, bridging classical Paubha, expressive sculpture, and contemporary canvases."
        />

        {/* Masonry / Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredWorks.map((artwork, idx) => (
            <div
              key={artwork.id}
              onClick={() => setActiveArtwork(artwork)}
              className="group cursor-pointer relative bg-white rounded-2xl overflow-hidden border border-charcoal-border/30 shadow-card hover:shadow-art-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[4/5] bg-charcoal overflow-hidden">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
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

                {/* Top Corner Quick View Pill */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-charcoal flex items-center justify-center shadow-md">
                    <Eye className="w-4 h-4 text-primary" />
                  </span>
                </div>
              </div>

              {/* Bottom Card Info */}
              <div className="p-5 flex items-center justify-between border-t border-charcoal-border/20">
                <div>
                  <h4 className="font-serif font-bold text-charcoal text-base group-hover:text-primary transition-colors">
                    {artwork.title}
                  </h4>
                  <p className="text-xs text-charcoal-muted font-sans mt-0.5">
                    {artwork.artistName}
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-charcoal-subtle uppercase tracking-wider bg-secondary px-2.5 py-1 rounded">
                  {artwork.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Full Gallery Button */}
        <div className="mt-14 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-primary text-white text-base font-medium tracking-wide shadow-art hover:bg-primary-hover hover:shadow-art-hover transition-all duration-300"
          >
            <span>Explore Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        artwork={activeArtwork}
        onClose={() => setActiveArtwork(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={currentIndex < featuredWorks.length - 1}
        hasPrev={currentIndex > 0}
      />
    </section>
  );
}
