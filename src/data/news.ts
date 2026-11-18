import { NewsArticle } from "@/types";

export const newsArticles: NewsArticle[] = [
  {
    id: "news-1",
    slug: "expanding-artistic-horizons-two-decades-of-spectrum",
    title: "Expanding Artistic Horizons: Two Decades of Spectrum Art Association",
    category: "Association Update",
    featuredImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    date: "November 2024",
    author: "Spectrum Editorial Desk",
    readTime: "5 min read",
    excerpt:
      "From our founding in 2060 B.S. to our ongoing district programs, reflection on how Spectrum has continually bridged Nepali visual traditions with contemporary experimentation.",
    content: [
      "When Spectrum Art Association was formally established in 2060 B.S. and registered with the District Administration Office in Kathmandu, Nepal's contemporary art scene stood at a pivotal juncture. The founding artists recognized that while centuries of traditional craftsmanship had earned worldwide admiration, there was an urgent imperative to foster contemporary artistic voices and support practicing creators across regions.",
      "Over the ensuing two decades, Spectrum has worked steadily not merely as an organizer of exhibitions, but as an active catalyst for creative expression. From intimate sketching camps in historic Kathmandu alleys to multi-day art camps across Terai towns and Himalayan valleys, the association has championed the democratization of art.",
      "At Spectrum, we maintain our foundational conviction: art is not confined to a piece of canvas or a specialized studio. It is a vital social bond connecting people, cultures, emotions, and ideas. As we look ahead, our mission expands toward interdisciplinary frontiers—merging visual arts with poetry, sound, environmental advocacy, and cultural tourism."
    ],
    tags: ["Association Heritage", "Nepali Art", "2060 B.S.", "Kathmandu Art Scene"],
  },
  {
    id: "news-2",
    slug: "call-for-entries-national-spring-art-salon-2081",
    title: "Call for Entries: Spectrum National Spring Art Salon",
    category: "Exhibition Announcement",
    featuredImage: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&w=1200&q=80",
    date: "October 2024",
    author: "Exhibition Committee",
    readTime: "3 min read",
    excerpt:
      "Spectrum Art Association invites submissions from artists across all 7 provinces of Nepal for the upcoming National Spring Art Salon, celebrating innovation across all visual mediums.",
    content: [
      "Spectrum Art Association is pleased to announce an open call for submissions for our upcoming National Spring Art Salon. This prestigious group exhibition aims to assemble exceptional works by emerging and senior Nepali artists, representing the full diversity of our nation's artistic talent.",
      "Artists working across painting, sculpture, printmaking, photography, traditional Paubha, ceramics, and interdisciplinary media are encouraged to submit portfolios. An independent curatorial panel will select works based on conceptual rigor, craftsmanship, and original creative voice.",
      "Selected artists will have their work exhibited in Kathmandu, documented in an archival exhibition catalogue, and presented across our digital gallery platform."
    ],
    tags: ["Open Call", "Art Exhibition", "Nepali Artists", "Curated Salon"],
  },
  {
    id: "news-3",
    slug: "field-report-youth-art-mentorship-in-bhaktapur",
    title: "Field Report: Youth Plein-Air Mentorship and Monument Drawing",
    category: "Event Report",
    featuredImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    date: "September 2024",
    author: "Outreach & Education Wing",
    readTime: "4 min read",
    excerpt:
      "A comprehensive review of our recent weekend workshop in Bhaktapur, where senior masters guided young students through architectural sketching and color dynamics.",
    content: [
      "Historic Bhaktapur provided the majestic backdrop for Spectrum's latest youth art workshop. Over thirty aspiring students from local public schools and colleges gathered at sunrise with sketchbooks, charcoal pencils, and watercolor kits.",
      "Under the mentorship of Spectrum's senior artist members, participants learned essential methods of observational perspective, atmospheric tonal values, and the distinctive geometry of Newar pagoda architecture.",
      "The program concluded with an impromptu public exhibition in the square, where local residents and international visitors marveled at the fresh interpretations of familiar heritage monuments through young eyes."
    ],
    tags: ["Workshop Report", "Bhaktapur", "Art Education", "Youth Mentorship"],
  },
  {
    id: "news-4",
    slug: "intersections-of-sacred-mineral-pigments-and-modern-canvases",
    title: "Sacred Earth: Revitalizing Natural Mineral Pigments in Contemporary Art",
    category: "Art & Culture",
    featuredImage: "https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?auto=format&fit=crop&w=1200&q=80",
    date: "August 2024",
    author: "Indra Shrestha & Spectrum Research Group",
    readTime: "6 min read",
    excerpt:
      "Exploring how modern Nepali artists are rediscovering indigenous stone grinding and botanical binders to create environmentally conscious, historically resonant works.",
    content: [
      "For centuries, sacred Himalayan art relied completely on minerals gathered from high-altitude ridges: cinnabar for vermilion, lapis lazuli for azure, malachite for emerald greens, and orpiment for brilliant yellow. These minerals were meticulously hand-ground and bonded with animal glues and botanical resins.",
      "Today, a new generation of contemporary Nepali artists within Spectrum is intentionally returning to these ancient material roots. Rather than relying solely on imported synthetic tubes, artists are blending raw ochres with contemporary acrylics or oil mediums.",
      "This revitalization connects contemporary artistic expression directly to the geology, geography, and spiritual heritage of Nepal, producing a distinctive tactile vibrancy that digital or synthetic pigments cannot replicate."
    ],
    tags: ["Art Philosophy", "Mineral Pigments", "Paubha", "Nepali Culture"],
  },
];

export const getFeaturedNews = () => newsArticles.slice(0, 3);
export const getNewsBySlug = (slug: string) => newsArticles.find((n) => n.slug === slug);
