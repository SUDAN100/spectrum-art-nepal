"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Newspaper, Filter } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { newsArticles } from "@/data/news";

const CATEGORIES = [
  "All",
  "Association Update",
  "Exhibition Announcement",
  "Event Report",
  "Art & Culture",
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const featuredArticle = newsArticles[0];

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "All") return newsArticles;
    return newsArticles.filter((n) => n.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-secondary/60 border-b border-charcoal-border/20 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "News & Events" }]} />

          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-accent/80 text-xs text-primary font-medium mb-4">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Editorial Journal &amp; Announcements</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal tracking-tight leading-tight">
              News &amp; Events
            </h1>
            <p className="text-lg text-charcoal-muted font-sans mt-4 leading-relaxed">
              Exhibition announcements, association developments, workshop field reports, and critical essays on contemporary and traditional Nepali art.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Lead Story (Editorial Layout) */}
      <section className="py-12 border-b border-charcoal-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-charcoal-border/30 shadow-card hover:shadow-art transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 relative">
                <div className="relative aspect-[16/10] bg-charcoal">
                  <Image
                    src={featuredArticle.featuredImage}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider shadow">
                      Featured Story
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 lg:pl-0 space-y-4">
                <div className="flex items-center gap-3 text-xs text-charcoal-muted">
                  <span className="font-semibold text-primary uppercase tracking-wider">
                    {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-charcoal hover:text-primary transition-colors leading-tight">
                  <Link href={`/news/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/news/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover"
                  >
                    <span>Read Full Editorial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid & Category Filters */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-3 scrollbar-none">
            <div className="flex items-center gap-1.5 shrink-0 pr-3 border-r border-charcoal-border/30 text-xs uppercase tracking-widest text-charcoal-subtle font-semibold">
              <Filter className="w-3.5 h-3.5 text-primary" />
              <span>Category:</span>
            </div>

            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? "bg-primary text-white shadow-sm"
                      : "bg-secondary text-charcoal hover:bg-accent/40"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col bg-[#FDFCFB] rounded-2xl overflow-hidden border border-charcoal-border/30 shadow-card hover:shadow-art transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] bg-charcoal overflow-hidden">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-charcoal-subtle">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>{article.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-primary transition-colors leading-snug">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-charcoal-border/20 flex items-center justify-between">
                    <span className="text-xs font-medium text-charcoal-muted">
                      By {article.author}
                    </span>
                    <Link
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-hover group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
