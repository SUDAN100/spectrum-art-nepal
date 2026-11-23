import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark" | "mark-only";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "light", className = "", size = "md" }: LogoProps) {
  // Sizing preserving 923:229 aspect ratio (~4.03:1)
  const sizeConfig = {
    sm: { width: 153, height: 38, className: "h-9 w-auto" },
    md: { width: 185, height: 46, className: "h-11 sm:h-12 w-auto" },
    lg: { width: 233, height: 58, className: "h-14 w-auto" },
  }[size];

  const isDark = variant === "dark";

  if (variant === "mark-only") {
    return (
      <Link
        href="/"
        className={`inline-block transition-transform duration-300 hover:scale-105 ${className}`}
        aria-label="Spectrum Art Association Home"
      >
        <Image
          src="/images/spectrum-icon.png"
          alt="Spectrum Art Association Emblem"
          width={48}
          height={48}
          className="h-10 w-10 object-contain"
          priority
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`group inline-flex items-center transition-all duration-300 hover:opacity-95 ${className}`}
      aria-label="Spectrum Art Association - Celebrating Art, Culture & Creative Expression"
    >
      {isDark ? (
        /* Preserves 100% original logo colors with clean gallery backing plate for dark footer */
        <div className="bg-white/95 hover:bg-white px-3.5 py-1.5 rounded-xl border border-accent/40 shadow-sm transition-all duration-300 group-hover:shadow-md">
          <Image
            src="/images/spectrum-logo.png"
            alt="Spectrum Art Association Logo"
            width={sizeConfig.width}
            height={sizeConfig.height}
            style={{ width: "auto", height: "auto" }}
            className={`${sizeConfig.className} object-contain transition-transform duration-300 group-hover:scale-[1.02]`}
            priority
          />
        </div>
      ) : (
        /* Light navbar display - transparent PNG seamlessly blending into white/off-white background */
        <div className="relative py-0.5">
          <Image
            src="/images/spectrum-logo.png"
            alt="Spectrum Art Association Logo"
            width={sizeConfig.width}
            height={sizeConfig.height}
            style={{ width: "auto", height: "auto" }}
            className={`${sizeConfig.className} object-contain transition-transform duration-300 group-hover:scale-[1.02]`}
            priority
          />
        </div>
      )}
    </Link>
  );
}
