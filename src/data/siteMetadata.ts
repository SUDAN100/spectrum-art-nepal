import { NavItem } from "@/types";

export const siteMetadata = {
  title: "Spectrum Art Association | Celebrating Art, Culture & Creative Expression in Nepal",
  titleTemplate: "%s | Spectrum Art Association",
  description:
    "Official website of Spectrum Art Association (Estd. 2060 B.S., Kathmandu, Nepal). Promoting Nepali art, supporting artists, hosting art exhibitions, workshops, and celebrating creative cultural expression.",
  siteUrl: "https://spectrumartnepal.org",
  keywords: [
    // Primary Keywords
    "Spectrum Art Association",
    "Art Association Nepal",
    "Nepali Art Association",
    "Art and Culture Nepal",
    // Secondary Keywords
    "Nepali Artists",
    "Art Exhibitions in Nepal",
    "Contemporary Nepali Art",
    "Art and Cultural Activities in Nepal",
    "Art Workshops Nepal",
    "Promoting Nepali Art and Culture",
    // Long-tail & heritage keywords
    "Nepali visual artists",
    "Kathmandu art gallery",
    "Traditional Paubha art",
    "Nepali contemporary sculptures",
    "Art organization Kathmandu",
    "DAO Kathmandu Registered Art NGO"
  ],
  author: "Spectrum Art Association",
  locale: "en_US",
  ogImage: "/images/og-image.svg",
  establishedYear: "2003",
  establishedBS: "2060 B.S.",
};

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Committee", href: "/committee" },
  { name: "Activities", href: "/activities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Artists", href: "/artists" },
  { name: "News & Events", href: "/news" },
  { name: "Contact", href: "/contact" },
  { name: "Join Our Community", href: "/contact?intent=join", isSpecial: true },
];
