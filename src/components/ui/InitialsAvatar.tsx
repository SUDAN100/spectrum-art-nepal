import React from "react";

interface InitialsAvatarProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  subTitle?: string;
}

export function InitialsAvatar({
  name,
  size = "lg",
  className = "",
  subTitle,
}: InitialsAvatarProps) {
  // Extract initials (e.g. "Indra Shrestha" -> "IS", "Advocate Chandra Maharja" -> "CM")
  const cleanName = name.replace(/^(Advocate|Dr\.|Prof\.|Mr\.|Ms\.)\s+/i, "");
  const parts = cleanName.trim().split(/\s+/);
  const initials =
    parts.length >= 2
      ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
      : name.slice(0, 2).toUpperCase();

  const sizeClasses = {
    sm: "w-10 h-10 text-xs",
    md: "w-16 h-16 text-lg",
    lg: "w-24 h-24 text-2xl",
    xl: "w-32 h-32 text-3xl",
  }[size];

  return (
    <div
      className={`relative rounded-full bg-secondary border-2 border-accent/60 flex flex-col items-center justify-center font-serif font-bold text-primary shadow-inner select-none ${sizeClasses} ${className}`}
      aria-label={`Initials placeholder for ${name}`}
    >
      <span className="tracking-widest">{initials}</span>
      {size === "xl" && subTitle && (
        <span className="text-[10px] uppercase font-sans font-normal tracking-wider text-charcoal-muted mt-1">
          {subTitle}
        </span>
      )}
    </div>
  );
}
