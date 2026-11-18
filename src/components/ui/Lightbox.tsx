"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Artwork } from "@/types";

interface LightboxProps {
  artwork: Artwork | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export function Lightbox({
  artwork,
  onClose,
  onNext,
  onPrev,
  hasPrev = true,
  hasNext = true,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev && hasPrev) onPrev();
      if (e.key === "ArrowRight" && onNext && hasNext) onNext();
    },
    [onClose, onNext, onPrev, hasPrev, hasNext]
  );

  useEffect(() => {
    if (!artwork) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [artwork, handleKeyDown]);

  if (!artwork) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-charcoal/90 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Left nav */}
      {hasPrev && onPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Previous artwork"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Right nav */}
      {hasNext && onNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Next artwork"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Content Container */}
      <div
        className="relative z-10 max-w-5xl w-full bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Image Container */}
        <div className="relative md:w-3/5 bg-charcoal flex items-center justify-center p-4 min-h-[300px] md:min-h-[500px]">
          <Image
            src={artwork.image}
            alt={artwork.title}
            width={1200}
            height={900}
            className="max-h-[75vh] w-auto h-auto object-contain mx-auto shadow-lg"
            priority
          />
        </div>

        {/* Right: Curatorial Details */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white border-t md:border-t-0 md:border-l border-charcoal-border/30">
          <div className="space-y-4">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full mb-3">
                {artwork.category}
              </span>
              <h3
                id="lightbox-title"
                className="text-2xl sm:text-3xl font-serif font-bold text-charcoal leading-tight"
              >
                {artwork.title}
              </h3>
              <p className="text-base font-medium text-primary mt-1">
                By {artwork.artistName}
              </p>
            </div>

            <div className="space-y-2 py-4 border-y border-charcoal-border/20 text-xs sm:text-sm text-charcoal-muted font-sans">
              <div className="flex justify-between">
                <span className="text-charcoal-subtle">Medium:</span>
                <span className="font-medium text-charcoal text-right">{artwork.medium}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-subtle">Year:</span>
                <span className="font-medium text-charcoal">{artwork.year}</span>
              </div>
              {artwork.dimensions && (
                <div className="flex justify-between">
                  <span className="text-charcoal-subtle">Dimensions:</span>
                  <span className="font-medium text-charcoal">{artwork.dimensions}</span>
                </div>
              )}
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-charcoal-subtle font-semibold mb-2">
                Artwork Overview
              </h4>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                {artwork.description}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-charcoal-border/20 flex items-center justify-between text-xs text-charcoal-subtle">
            <span>Spectrum Art Association Archive</span>
            <span className="italic">Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
