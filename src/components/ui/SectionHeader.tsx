import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`space-y-3 mb-10 sm:mb-14 ${isCenter ? "text-center mx-auto" : ""} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2 ${isCenter ? "justify-center" : ""}`}>
          <span className="w-6 h-[1.5px] bg-primary/60 inline-block" />
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-primary">
            {eyebrow}
          </span>
          <span className="w-6 h-[1.5px] bg-primary/60 inline-block" />
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal font-bold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className={`text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans max-w-2xl ${isCenter ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
