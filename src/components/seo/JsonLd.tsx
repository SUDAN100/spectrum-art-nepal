import React from "react";
import { siteMetadata } from "@/data/siteMetadata";
import { organizationInfo } from "@/data/organization";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "NGO"],
    name: organizationInfo.name,
    alternateName: organizationInfo.nepaliName,
    url: siteMetadata.siteUrl,
    logo: `${siteMetadata.siteUrl}/images/spectrum-logo.png`,
    description: organizationInfo.officialOverview,
    foundingDate: "2003",
    foundingLocation: {
      "@type": "Place",
      name: "Kathmandu, Nepal",
    },
    knowsAbout: [
      "Nepali Art",
      "Contemporary Art",
      "Traditional Paubha Art",
      "Himalayan Sculpture",
      "Art Exhibitions",
      "Art Workshops",
      "Cultural Tourism"
    ],
    sameAs: [
      organizationInfo.contact.socialLinks.facebook,
      organizationInfo.contact.socialLinks.instagram,
      organizationInfo.contact.socialLinks.youtube,
    ],
  };

  return <JsonLd data={schema} />;
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: organizationInfo.name,
    url: siteMetadata.siteUrl,
    description: siteMetadata.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: organizationInfo.name,
    },
  };

  return <JsonLd data={schema} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${siteMetadata.siteUrl}${item.url}`,
    })),
  };

  return <JsonLd data={schema} />;
}

export function ArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  authorName: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: organizationInfo.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteMetadata.siteUrl}/images/spectrum-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return <JsonLd data={schema} />;
}

export function PersonJsonLd({
  name,
  jobTitle,
  description,
  image,
  url,
}: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name,
    jobTitle: jobTitle,
    description: description,
    ...(image ? { image: image } : {}),
    url: url,
    worksFor: {
      "@type": "Organization",
      name: organizationInfo.name,
    },
  };

  return <JsonLd data={schema} />;
}
