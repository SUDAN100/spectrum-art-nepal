import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Palette } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFeaturedArtists } from "@/data/artists";

export function ArtistPreview() {
  const featuredArtists = getFeaturedArtists();

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeader
            eyebrow="Creative Minds"
            title="Meet Our Artists"
            description="Get to know the passionate creators, painters, sculptors, and traditional masters driving Nepal's artistic evolution."
            align="left"
            className="mb-0"
          />

          <div className="mt-6 md:mt-0">
            <Link
              href="/artists"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover border-b-2 border-primary/40 pb-1 transition-colors"
            >
              <span>View All Artists Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Artist Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredArtists.map((artist) => (
            <div
              key={artist.id}
              className="group flex flex-col bg-[#FAF8F5] rounded-2xl overflow-hidden border border-charcoal-border/30 shadow-card hover:shadow-art transition-all duration-300 hover:-translate-y-1"
            >
              {/* Portrait Container */}
              <div className="relative aspect-[4/5] bg-secondary overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-1 text-[11px] text-accent">
                    <MapPin className="w-3 h-3" />
                    <span>{artist.location}</span>
                  </div>
                </div>
              </div>

              {/* Artist Meta */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-primary transition-colors">
                    {artist.name}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 mt-1 text-xs font-medium text-primary">
                    <Palette className="w-3.5 h-3.5 shrink-0" />
                    <span className="line-clamp-1">{artist.discipline}</span>
                  </div>

                  <p className="text-xs text-charcoal-muted leading-relaxed font-sans mt-3 line-clamp-3">
                    {artist.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-charcoal-border/20">
                  <Link
                    href={`/artists/${artist.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View Profile &amp; Artworks</span>
                    <ArrowRight className="w-3 h-3" />
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
