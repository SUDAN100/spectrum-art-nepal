import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Palette } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-secondary border border-accent flex items-center justify-center mx-auto text-primary shadow-sm">
          <Palette className="w-10 h-10" />
        </div>

        <span className="text-xs uppercase font-semibold tracking-widest text-primary">
          Canvas Not Found
        </span>

        <h1 className="text-6xl sm:text-7xl font-serif font-bold text-charcoal tracking-tight">
          404
        </h1>

        <p className="text-base sm:text-lg text-charcoal-muted font-sans leading-relaxed">
          The artistic page or gallery creation you are looking for does not exist or has been relocated within the Spectrum archive.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-hover shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-charcoal border border-charcoal-border hover:border-primary text-sm font-medium transition-all"
          >
            <Compass className="w-4 h-4 text-primary" />
            <span>Explore Visual Gallery</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
