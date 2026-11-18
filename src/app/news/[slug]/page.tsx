import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { newsArticles, getNewsBySlug } from "@/data/news";
import { siteMetadata } from "@/data/siteMetadata";

interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Spectrum Art Association`,
    description: article.excerpt,
    alternates: {
      canonical: `/news/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [{ url: article.featuredImage }],
    },
  };
}

export default async function NewsArticlePage({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen">
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        url={`${siteMetadata.siteUrl}/news/${article.slug}`}
        image={article.featuredImage}
        datePublished={article.date}
        authorName={article.author}
      />

      {/* Header Banner */}
      <section className="bg-secondary/60 border-b border-charcoal-border/20 py-8 lg:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "News & Events", href: "/news" },
              { label: article.title },
            ]}
          />

          <div className="mt-4">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to News &amp; Events</span>
            </Link>

            <div className="space-y-4 pt-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary text-white">
                {article.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-charcoal-muted pt-2 border-t border-charcoal-border/30">
                <span className="font-semibold text-charcoal">{article.author}</span>
                <span>•</span>
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
            </div>
          </div>
        </div>
      </section>

      {/* Article Content & Imagery */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Hero Image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl mb-12 bg-charcoal">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Lead Paragraph */}
          <p className="text-xl font-serif text-charcoal leading-relaxed border-l-4 border-primary pl-6 py-2 mb-8 bg-secondary/40 rounded-r-xl">
            {article.excerpt}
          </p>

          {/* Body Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg text-charcoal leading-relaxed font-sans">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-charcoal-border/30 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center flex-wrap gap-2">
              <Tag className="w-4 h-4 text-primary shrink-0" />
              {article.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-charcoal-muted border border-charcoal-border/20"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
