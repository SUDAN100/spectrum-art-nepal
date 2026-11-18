import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark" | "mark-only";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "light", className = "", size = "md" }: LogoProps) {
  // Height & width scaling
  const dimensions = {
    sm: { height: 42, width: 170 },
    md: { height: 52, width: 210 },
    lg: { height: 64, width: 260 },
  }[size];

  const isDarkFooter = variant === "dark";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-90 ${className}`}
      aria-label="Spectrum Art Association Home"
    >
      {/* Dynamic Vector Emblem */}
      <div className="relative flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
        <svg
          viewBox="0 0 128 128"
          className={size === "sm" ? "w-10 h-10" : size === "md" ? "w-12 h-12" : "w-14 h-14"}
          aria-hidden="true"
        >
          <circle cx="64" cy="64" r="60" fill="none" stroke="#D9C8B8" strokeWidth="1.5" strokeDasharray="3,3" />
          <circle cx="64" cy="64" r="54" fill={isDarkFooter ? "#292929" : "#F8F6F2"} stroke="#7B302F" strokeWidth="2.5" />
          
          <path d="M 64 64 L 64 18 A 46 46 0 0 1 104 42 Z" fill="#7B302F" />
          <path d="M 64 64 L 104 42 A 46 46 0 0 1 110 64 Z" fill="#9E3E3D" />
          <path d="M 64 64 L 110 64 A 46 46 0 0 1 97 100 Z" fill="#B85B59" />
          <path d="M 64 64 L 97 100 A 46 46 0 0 1 64 110 Z" fill="#D9C8B8" />
          <path d="M 64 64 L 64 110 A 46 46 0 0 1 24 86 Z" fill="#B8A38F" />
          <path d="M 64 64 L 24 86 A 46 46 0 0 1 18 64 Z" fill="#602423" />
          <path d="M 64 64 L 18 64 A 46 46 0 0 1 31 28 Z" fill="#451A19" />
          <path d="M 64 64 L 31 28 A 46 46 0 0 1 64 18 Z" fill="#7B302F" />

          <circle cx="64" cy="64" r="20" fill={isDarkFooter ? "#1E1B1B" : "#FFFFFF"} stroke="#7B302F" strokeWidth="2" />
          <circle cx="64" cy="64" r="14" fill="#7B302F" />
          <circle cx="64" cy="64" r="5" fill="#D9C8B8" />
        </svg>
      </div>

      {variant !== "mark-only" && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-serif tracking-[0.14em] font-bold leading-none transition-colors ${
              isDarkFooter ? "text-white" : "text-primary"
            } ${size === "sm" ? "text-xl" : size === "md" ? "text-2xl" : "text-3xl"}`}
          >
            SPECTRUM
          </span>
          <span
            className={`text-[9px] sm:text-[10px] font-semibold tracking-[0.28em] uppercase leading-tight pt-1 transition-colors ${
              isDarkFooter ? "text-accent" : "text-charcoal"
            }`}
          >
            ART ASSOCIATION
          </span>
          <span
            className={`text-[8px] tracking-[0.18em] uppercase transition-colors ${
              isDarkFooter ? "text-accent/60" : "text-primary/70"
            }`}
          >
            ESTD. 2060 B.S. • KATHMANDU
          </span>
        </div>
      )}
    </Link>
  );
}
