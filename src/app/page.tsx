import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { VisionSection } from "@/components/home/VisionSection";
import { ActivitiesPreview } from "@/components/home/ActivitiesPreview";
import { FeaturedGallery } from "@/components/home/FeaturedGallery";
import { ArtistPreview } from "@/components/home/ArtistPreview";
import { CommunityCta } from "@/components/home/CommunityCta";

export default function HomePage() {
  return (
    <>
      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. About Spectrum */}
      <AboutPreview />

      {/* 4. Our Vision */}
      <VisionSection />

      {/* 5. Activities & Programs */}
      <ActivitiesPreview />

      {/* 6. Featured Art Gallery */}
      <FeaturedGallery />

      {/* 7. Meet Our Artists */}
      <ArtistPreview />

      {/* 8. Join Our Community */}
      <CommunityCta />
    </>
  );
}
