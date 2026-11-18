import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const jsonLdItems = allItems.map((item) => ({
    name: item.label,
    url: item.href || "",
  }));

  return (
    <>
      <BreadcrumbJsonLd items={jsonLdItems} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-charcoal-muted">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-charcoal-subtle shrink-0" />
                )}
                {isLast || !item.href ? (
                  <span className="font-medium text-primary line-clamp-1" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {index === 0 && <Home className="w-3 h-3 text-charcoal-subtle" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
