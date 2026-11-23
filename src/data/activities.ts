import { Activity, ActivityType } from "@/types";

export interface ProgramOverview {
  type: ActivityType;
  title: string;
  tagline: string;
  description: string;
  image: string;
}

export const corePrograms: ProgramOverview[] = [
  {
    type: "Art Exhibitions",
    title: "National & Regional Art Exhibitions",
    tagline: "Curated Galleries Across Nepal",
    description:
      "Showcasing original paintings, sculptures, drawings, and contemporary installations to elevate Nepali art both nationally and internationally.",
    image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    type: "Art Workshops",
    title: "Masterclasses & Skills Workshops",
    tagline: "Hands-on Mentorship",
    description:
      "Interactive training in watercolor, oil painting, traditional Paubha techniques, bronze casting, and modern mixed media led by veteran artists.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    type: "Cultural Programs",
    title: "Heritage & Living Culture Confluence",
    tagline: "Celebrating Nepali Traditions",
    description:
      "Connecting traditional craftsmanship and indigenous visual styles with community cultural celebrations and heritage preservation initiatives.",
    image: "https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?auto=format&fit=crop&w=1000&q=80",
  },
  {
    type: "Artist Collaborations",
    title: "Interdisciplinary Creative Dialogues",
    tagline: "Uniting Diverse Disciplines",
    description:
      "Creating fertile ground where painters, sculptors, poets, musicians, and performers collaborate on multi-sensory artistic projects.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
  },
  {
    type: "Creative Events",
    title: "Art Talks, Symposiums & Live Demonstrations",
    tagline: "Critical Discourse & Public Engagement",
    description:
      "Fostering thoughtful dialogue through art seminars, public live painting demonstrations, panel discussions, and artist-in-residence programs.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
  },
  {
    type: "Art & Tourism Activities",
    title: "District Art Camps & Cultural Tourism",
    tagline: "Connecting Art Across Nepal's Districts",
    description:
      "Organizing traveling plein-air painting camps across Himalayan vistas and cultural towns to connect artistic heritage with sustainable cultural tourism.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
  },
];

export const activitiesData: Activity[] = [
  // Upcoming Events (Editable sample entries)
  {
    id: "act-up-1",
    slug: "national-spring-art-salon",
    title: "National Spring Art Salon & Exhibition",
    type: "Art Exhibitions",
    status: "upcoming",
    featuredImage: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&w=1200&q=80",
    date: "Coming Soon (Season 2081/2082 B.S.)",
    location: "Nepal Art Council, Babarmahal, Kathmandu",
    description:
      "An upcoming flagship group exhibition featuring curated works by over 40 emerging and established Nepali artists spanning multiple visual mediums.",
    fullDetails: [
      "The National Spring Art Salon brings together classical Paubha masters, contemporary abstract painters, sculptors, and printmakers under one roof.",
      "The exhibition highlights themes of environmental resilience, Himalayan cultural heritage, and contemporary urban life in Nepal.",
      "Daily curatorial walkthroughs and artist talks are scheduled throughout the exhibition period."
    ],
    additionalPhotos: [
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "act-up-2",
    slug: "himalayan-plein-air-residency-pokhara",
    title: "Himalayan Plein-Air Painting Camp & Workshop",
    type: "Art & Tourism Activities",
    status: "upcoming",
    featuredImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    date: "Scheduled Event (Announcement Pending)",
    location: "Pokhara & Annapurna Foothills, Kaski",
    description:
      "A 5-day residential art camp connecting landscape watercolorists with rural communities and promoting cultural tourism through on-site painting.",
    fullDetails: [
      "Participating artists will capture dynamic alpine reflections, traditional Gurung village architecture, and pristine natural sceneries.",
      "Concludes with an open-air village exhibition engaging local schools, residents, and visitors."
    ],
    additionalPhotos: [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    ],
  },

  // Past Events (Association's established history across Kathmandu and districts)
  {
    id: "act-past-1",
    slug: "inter-district-art-outreach-program",
    title: "Inter-District Art Outreach & Youth Workshop",
    type: "Art Workshops",
    status: "past",
    featuredImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    date: "Past Program",
    location: "Janakpur & Mithila Cultural Corridor",
    description:
      "A transformative collaborative workshop bridging traditional Mithila art practitioners with contemporary painters from Kathmandu Valley.",
    fullDetails: [
      "Over 60 students and local women artists participated in 3 days of intensive creative exploration, color theory, and material conservation.",
      "Culminated in a communal wall mural celebrating shared folkloric stories and cultural solidarity."
    ],
    additionalPhotos: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "act-past-2",
    slug: "sculpture-and-sound-confluence",
    title: "Art & Music Confluence: Resonance in Clay and Bronze",
    type: "Artist Collaborations",
    status: "past",
    featuredImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    date: "Past Program",
    location: "Patan Durbar Square Precinct, Lalitpur",
    description:
      "An innovative interdisciplinary initiative bringing together traditional Newari sculptors, contemporary ceramicists, and classical Nepali sarangi/flute musicians.",
    fullDetails: [
      "Artists created live clay sculptures while classical ragas were performed, exploring the emotional synchrony between tactile form and melodic vibration.",
      "The documented proceedings and photographic catalogue were archived for educational distribution."
    ],
    additionalPhotos: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "act-past-3",
    slug: "kathmandu-valley-heritage-sketch-walk",
    title: "Heritage Sketch Walk & Preservation Symposium",
    type: "Creative Events",
    status: "past",
    featuredImage: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=80",
    date: "Past Program",
    location: "Bhaktapur Ancient Quarter",
    description:
      "A collective on-site drawing and documentation event capturing historic carved wooden struts, shrines, and traditional bahals of Bhaktapur.",
    fullDetails: [
      "Brought together over 45 sketch artists, architects, and art students.",
      "Highlighted the crucial role of observational drawing in cultural preservation and restoration records."
    ],
    additionalPhotos: [
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

export const getUpcomingActivities = () => activitiesData.filter((a) => a.status === "upcoming");
export const getPastActivities = () => activitiesData.filter((a) => a.status === "past");
