import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Palette, Instagram, Facebook, Globe, ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PersonJsonLd } from "@/components/seo/JsonLd";
import { artistsData, getArtistBySlug } from "@/data/artists";
import { artworksData } from "@/data/artworks";
import { siteMetadata } from "@/data/siteMetadata";

interface ArtistPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return artistsData.map((artist) => ({
    slug: artist.slug,
  }));
}

export async function generateMetadata({ params }: ArtistPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    return {
      title: "Artist Not Found",
    };
  }

  return {
    title: `${artist.name} (${artist.discipline}) | Spectrum Art Association`,
    description: `${artist.bio.slice(0, 160)}...`,
    alternates: {
      canonical: `/artists/${artist.slug}`,
    },
    openGraph: {
      title: `${artist.name} - Nepali Artist | Spectrum Art Association`,
      description: artist.bio,
      images: [{ url: artist.image }],
    },
  };
}

export default async function ArtistDetailPage({ params }: ArtistPageProps) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  // Find related artworks created by this artist in gallery
  const relatedArtworks = artworksData.filter(
    (a) => a.artistName.toLowerCase() === artist.name.toLowerCase()
  );

  return (
    <div className="bg-white min-h-screen">
      <PersonJsonLd
        name={artist.name}
        jobTitle={artist.discipline}
        description={artist.bio}
        image={artist.image}
        url={`${siteMetadata.siteUrl}/artists/${artist.slug}`}
      />

      {/* Header Banner */}
      <section className="bg-secondary/60 border-b border-charcoal-border/20 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Artists Directory", href: "/artists" },
              { label: artist.name },
            ]}
          />

          <div className="mt-4">
            <Link
              href="/artists"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Artists Directory</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Artist Profile Body */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Portrait & Quick Details (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-charcoal">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Social and Location Box */}
              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-charcoal-border/30 space-y-4">
                <div className="flex items-center gap-2 text-sm text-charcoal">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-medium">{artist.location}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-charcoal">
                  <Palette className="w-4 h-4 text-primary" />
                  <span className="font-medium">{artist.discipline}</span>
                </div>

                {artist.socials && (
                  <div className="pt-3 border-t border-charcoal-border/20 flex items-center gap-3">
                    {artist.socials.instagram && (
                      <a
                        href={artist.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white border border-charcoal-border/30 flex items-center justify-center text-charcoal hover:text-primary hover:border-primary transition-all shadow-sm"
                        aria-label="Instagram Profile"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {artist.socials.facebook && (
                      <a
                        href={artist.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white border border-charcoal-border/30 flex items-center justify-center text-charcoal hover:text-primary hover:border-primary transition-all shadow-sm"
                        aria-label="Facebook Profile"
                      >
                        <Facebook className="w-4 h-4" />
                      </a>
                    )}
                    {artist.socials.website && (
                      <a
                        href={artist.socials.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white border border-charcoal-border/30 flex items-center justify-center text-charcoal hover:text-primary hover:border-primary transition-all shadow-sm"
                        aria-label="Website"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="p-6 rounded-2xl bg-primary text-white space-y-3">
                <h4 className="font-serif text-lg font-bold">Inquire About Artworks</h4>
                <p className="text-xs text-secondary leading-relaxed opacity-90 font-sans">
                  Interested in collaborating with or acquiring works by {artist.name}? Connect with the Spectrum Art Association curatorial wing.
                </p>
                <Link
                  href={`/contact?intent=artist_inquiry&artist=${encodeURIComponent(artist.name)}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent hover:text-white pt-2"
                >
                  <span>Send Curatorial Inquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Bio & Artworks (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-4">
                <span className="text-xs uppercase font-semibold tracking-widest text-primary">
                  Spectrum Member Artist
                </span>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal">
                  {artist.name}
                </h1>
                <p className="text-lg text-primary font-medium font-serif">
                  {artist.discipline}
                </p>

                <div className="pt-4 border-t border-charcoal-border/20 text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans space-y-4">
                  <p>{artist.bio}</p>
                  <p>
                    Working actively across Nepal, {artist.name} participates regularly in Spectrum Art Association&apos;s inter-district workshops, masterclasses, and national salon exhibitions, elevating traditional craft and contemporary experimentation.
                  </p>
                </div>
              </div>

              {/* Selected Artworks */}
              {artist.selectedArtworks && (
                <div className="space-y-4 pt-6 border-t border-charcoal-border/20">
                  <h3 className="text-2xl font-serif font-bold text-charcoal">
                    Selected Works &amp; Series
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {artist.selectedArtworks.map((work, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#FAF8F5] border border-charcoal-border/30 flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm font-medium text-charcoal">{work}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery Works by this Artist */}
              {relatedArtworks.length > 0 && (
                <div className="space-y-6 pt-6 border-t border-charcoal-border/20">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-serif font-bold text-charcoal">
                      Artworks in Spectrum Archive
                    </h3>
                    <Link
                      href="/gallery"
                      className="text-xs font-semibold text-primary hover:text-primary-hover flex items-center gap-1"
                    >
                      <span>View Full Gallery</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {relatedArtworks.map((art) => (
                      <div
                        key={art.id}
                        className="bg-[#FAF8F5] rounded-xl overflow-hidden border border-charcoal-border/30 shadow-card"
                      >
                        <div className="relative aspect-[4/3] bg-charcoal">
                          <Image src={art.image} alt={art.title} fill className="object-cover" />
                        </div>
                        <div className="p-4 space-y-1">
                          <span className="text-[10px] uppercase font-semibold text-primary tracking-wider">
                            {art.category}
                          </span>
                          <h4 className="font-serif font-bold text-charcoal text-base">
                            {art.title}
                          </h4>
                          <p className="text-xs text-charcoal-muted">{art.medium} • {art.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
