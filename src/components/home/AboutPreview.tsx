import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { organizationInfo } from "@/data/organization";

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Composition (5 cols on lg) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative">
              {/* Main Artwork Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-charcoal-border/30">
                <Image
                  src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1000&q=80"
                  alt="Artists working in traditional Nepali studio"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping secondary decorative photo */}
              <div className="absolute -bottom-8 -right-6 w-3/5 aspect-square rounded-xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
                  alt="Sculpture and metal craft detail"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative stamp */}
              <div className="absolute -top-4 -left-4 bg-secondary border border-accent/80 p-4 rounded-xl shadow-md hidden sm:block">
                <p className="text-xs font-serif font-bold text-primary">DAO KATHMANDU</p>
                <p className="text-[10px] tracking-wider uppercase text-charcoal-muted">Regd. Organization</p>
              </div>
            </div>
          </div>

          {/* Right Text Content (7 cols on lg) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-xs uppercase font-semibold tracking-[0.25em] text-primary">
                About Spectrum
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal tracking-tight leading-[1.15]">
              An Association Driven by Art and Creativity.
            </h2>

            <p className="text-lg text-charcoal leading-relaxed font-sans font-medium">
              Established in 2060 B.S., Spectrum Art Association has been working to promote Nepali art, support artists, and expand the boundaries of artistic expression.
            </p>

            <p className="text-base text-charcoal-muted leading-relaxed font-sans">
              Over the years, the association has organized and participated in a wide range of art-related programs, not only within the Kathmandu Valley but also in various districts across Nepal. Spectrum believes that art is not limited to a canvas or a particular medium. It is a powerful form of expression that connects people, cultures, emotions, and ideas.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Supporting emerging &amp; senior master artists</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Exhibitions across Kathmandu &amp; districts</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Interdisciplinary arts, music &amp; poetry</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Promoting art education &amp; cultural tourism</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white text-sm font-medium tracking-wide shadow-sm hover:bg-primary-hover transition-all"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
