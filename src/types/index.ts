export type CategoryType =
  | "All"
  | "Paintings"
  | "Drawings"
  | "Sculptures"
  | "Contemporary Art"
  | "Cultural Art"
  | "Exhibition Photographs"
  | "Workshop Photographs";

export interface CommitteeMember {
  id: string;
  name: string;
  position: string;
  category: "executive" | "advisor";
  subRole?: string;
  image?: string;
  bio?: string;
  order: number;
}

export interface Artist {
  id: string;
  slug: string;
  name: string;
  discipline: string;
  location: string;
  bio: string;
  image: string;
  featured: boolean;
  selectedArtworks?: string[];
  socials?: {
    instagram?: string;
    facebook?: string;
    website?: string;
  };
}

export interface Artwork {
  id: string;
  title: string;
  artistName: string;
  category: CategoryType;
  medium: string;
  year: string;
  dimensions?: string;
  image: string;
  description: string;
  featured?: boolean;
}

export type ActivityType =
  | "Art Exhibitions"
  | "Art Workshops"
  | "Cultural Programs"
  | "Artist Collaborations"
  | "Creative Events"
  | "Art & Tourism Activities";

export interface Activity {
  id: string;
  slug: string;
  title: string;
  type: ActivityType;
  status: "upcoming" | "past";
  featuredImage: string;
  date: string;
  location: string;
  description: string;
  fullDetails?: string[];
  additionalPhotos?: string[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: "Exhibition Announcement" | "Association Update" | "Event Report" | "Art & Culture";
  featuredImage: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface NavItem {
  name: string;
  href: string;
  isSpecial?: boolean;
}
