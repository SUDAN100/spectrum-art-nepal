# Spectrum Art Association – Official Website
> **Celebrating Art, Culture & Creative Expression.**  
> Established 2060 B.S. (2003 A.D.) • Registered with the District Administration Office, Kathmandu, Nepal.

A modern, high-performance, SEO-optimized, and fully responsive website designed specifically for **Spectrum Art Association**, celebrating Nepali art, artists, culture, and creative expression.

---

## 1. Brand Identity & Design System

The visual design follows a **premium editorial art-gallery** direction with generous white space, refined serif typography, and the official Spectrum color palette:

| Color Role | Color Name | Hex Code | Purpose |
|---|---|---|---|
| **Primary** | Deep Burgundy | `#7B302F` | Primary branding, buttons, accents, highlights |
| **Secondary** | Warm Off-White | `#F8F6F2` | Card backgrounds, subtle surface tones |
| **Accent** | Muted Beige | `#D9C8B8` | Borders, subtle dividers, badge frames |
| **Text** | Dark Charcoal | `#292929` | High-contrast, readable body and heading typography |
| **Background** | Clean White | `#FFFFFF` | Gallery canvas and main surface |

- **Typography**: Editorial serif headings (`Cormorant Garamond`) paired with modern, legible grotesque body text (`Plus Jakarta Sans`).
- **Logo**: Vector SVG preserving exact proportions and geometry, available in `public/images/logo.svg` and `public/images/logo-icon.svg`.

---

## 2. Website Structure & Pages

The application is structured into the following pages:

### 1. Home Page (`/`)
1. **Sticky Navigation Bar**: Official logo, clean links, active path indicators, and highlighted *"Join Our Community"* button. Fully responsive with mobile slide-in drawer.
2. **Hero Section**:
   - Headline: *"Where Art Meets Expression."*
   - Supporting text: *"Celebrating Nepali art, connecting creative minds, and exploring the endless possibilities of artistic expression."*
   - CTAs: *"Explore Our Journey"* & *"Discover Our Activities"*
   - High-fidelity art showcase and official registration pill.
3. **About Spectrum Preview**:
   - Headline: *"An Association Driven by Art and Creativity."*
   - Official heritage summary and *"Learn More"* CTA.
4. **Our Vision**:
   - Highlight cards for the 5 official commitments (Promoting Nepali art & culture, supporting artists, encouraging collaboration, exploring diverse mediums, connecting art with music/poetry/tourism) plus core philosophy card.
5. **Activities & Programs**:
   - 6 image-based program cards: *Art Exhibitions, Art Workshops, Cultural Programs, Artist Collaborations, Creative Events, Art & Tourism Activities*.
6. **Featured Art Gallery**:
   - Masonry-style grid featuring paintings, sculptures, drawings, and contemporary works with interactive Lightbox modal and *"Explore Full Gallery"* CTA.
7. **Meet Our Artists**:
   - Artist cards with portraits, names, disciplines, and short bios.
8. **Join Our Community**:
   - Editorial CTA section: *"Be Part of the Creative Journey"* with *"Get in Touch"* button.
9. **Artistic Footer**:
   - Spectrum logo, DAO Kathmandu registration notice, quick navigation, contact placeholders, and social links.

### 2. About Us (`/about`)
- Official organizational introduction preserving every detail from the constitution.
- Two-decade historical background spanning Kathmandu Valley and Nepal's diverse districts.
- Formal Vision, Mission, and Core Objectives.
- Artistic Philosophy highlighting art as a living connection beyond the canvas.

### 3. Executive Committee & Leadership (`/committee`)
- Complete official leadership roster:
  - **President**: Indra Shrestha
  - **Vice President**: Ramkrishna Thapa
  - **Secretary**: Kishor Kanaujiya
  - **Joint Secretary**: Dal Bahadur Rai
  - **Treasurer**: Deepak Maharjan
  - **Members**: Nisha Maharjan, Binita Buddhacharya, Bishnu Chaudhari, Hari Nepali
  - **Founding Advisor**: K.K. Karmacharya
  - **Legal Advisor**: Advocate Chandra Maharja
- Tasteful initials-based profile placeholders (no fake portraits or invented biographies).

### 4. Visual Gallery (`/gallery`)
- Dedicated masonry layout supporting all 7 categories:
  - *Paintings*
  - *Drawings*
  - *Sculptures*
  - *Contemporary Art*
  - *Cultural Art*
  - *Exhibition Photographs*
  - *Workshop Photographs*
- Interactive category filtering with item counts.
- High-fidelity modal Lightbox with keyboard navigation (`Esc`, `←`, `→`).

### 5. Activities & Events (`/activities`)
- Categorized into **Upcoming Events** and **Past Activities**.
- Supporting title, featured image, date, location, description, and additional photo documentation galleries.
- Respects authentic association initiatives (no fabricated events).

### 6. Artists Directory (`/artists` & `/artists/[slug]`)
- Comprehensive artist directory with discipline filtering.
- Individual SEO-friendly artist profile pages statically generated via `generateStaticParams()`.
- Artist bio, discipline, location, selected artworks, and curatorial inquiry CTA.

### 7. News & Editorial (`/news` & `/news/[slug]`)
- Editorial magazine format featuring association updates, exhibition announcements, event reports, and cultural essays.
- Individual article pages with Schema.org `Article` structured data, reading times, publication dates, and tags.

### 8. Contact (`/contact`)
- Interactive validated contact form: Full Name, Email, Phone number, Subject, Inquiry Category, and Message.
- Real-time client-side validation with error states and submission success feedback.
- Editable placeholders for Office Address (Kathmandu, Nepal), Email, Phone, Office Hours, and Google Maps location.

---

## 3. SEO Optimization & Core Web Vitals

Built following modern technical SEO standards:
- **Semantic HTML5**: Native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Structured Data (Schema.org)** via JSON-LD:
  - `Organization` & `NGO` schema with DAO Kathmandu details, founding date (2003 / 2060 B.S.), and social links.
  - `WebSite` schema with language and publisher metadata.
  - `BreadcrumbList` schema on all interior pages.
  - `Article` schema on individual news pages.
  - `Person` schema for artist directory profiles.
- **Dynamic XML Sitemap**: Auto-generated at `/sitemap.xml` covering static and dynamic routes.
- **Robots.txt**: Auto-generated at `/robots.txt`.
- **Open Graph & Twitter Cards**: Dynamic social sharing metadata with dedicated banner (`/images/og-image.svg`).
- **Target Keywords naturally integrated**:
  - *Primary*: Spectrum Art Association, Art Association Nepal, Nepali Art Association, Art and Culture Nepal.
  - *Secondary*: Nepali Artists, Art Exhibitions in Nepal, Contemporary Nepali Art, Art and Cultural Activities in Nepal, Art Workshops Nepal, Promoting Nepali Art and Culture.

---

## 4. Easy Content Management Guide

All content is cleanly organized in typed data modules inside `src/data/`. This makes future integration with a headless CMS (Sanity, Strapi) or database (Supabase) effortless:

| Content Area | File Location | How to Update |
|---|---|---|
| **Organization Facts & Contacts** | `src/data/organization.ts` | Edit office address, email, phone, social links, or mission |
| **Executive Committee** | `src/data/committee.ts` | Add/update members, positions, or photos |
| **Artists Directory** | `src/data/artists.ts` | Add new artist objects, bios, and disciplines |
| **Gallery Artworks** | `src/data/artworks.ts` | Add artwork entries with image URL, title, medium, and category |
| **Activities & Events** | `src/data/activities.ts` | Add upcoming exhibitions or past workshop reports |
| **News & Announcements** | `src/data/news.ts` | Publish new articles, press releases, or calls for entries |

---

## 5. Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components, Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font Stack**: Cormorant Garamond (Editorial Serif) & Plus Jakarta Sans (Clean Modern Sans)

---

## 6. Development & Deployment Instructions

### Prerequisites
- Node.js 18.18+ or 20+
- npm or yarn

### Running Locally
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

### Production Build & Verification
```bash
# Build the optimized production bundle
npm run build

# Start the production server
npm run start -p 3000
```

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your repository. Next.js will be automatically detected.
4. Click **Deploy**. Vercel will build and distribute the site globally on its Edge network.

### Deploying to Any VPS (Ubuntu, Debian, Windows Server)
1. Clone the repository and run `npm install`.
2. Run `npm run build`.
3. Use PM2 to run the application in the background:
   ```bash
   npm install -g pm2
   pm2 start npm --name "spectrum-art" -- start -- -p 3000
   pm2 save
   ```
4. Set up an Nginx reverse proxy with SSL (Let's Encrypt Certbot) pointing to port 3000.
