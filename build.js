/**
 * INFINITY ADVERTISING PVT. LTD. — COMPLETE SITE GENERATOR & BUILD SCRIPT
 * Location: Blue Star Complex, 6th Floor (609), Tripureshwor, Kathmandu, Nepal
 * Primary Source of Truth: Infinity Advertising Official Corporate Profile
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://infinityadv.com.np';
const COMPANY_NAME = 'Infinity Advertising Pvt. Ltd.';
const TAGLINE = 'an odyssey of creativity...';
const ADDRESS_STREET = 'Blue Star Complex, 6th Floor (609), Tripureshwor';
const ADDRESS_CITY = 'Kathmandu';
const ADDRESS_COUNTRY = 'Nepal';
const PHONE = '+977-1-5347277';
const EMAIL = 'infinity.nep@gmail.com';

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 24 Documented Clients strictly from Page 9 of the Corporate Profile
const CLIENTS_DATA = [
  { name: 'Nepal Telecom', industry: 'telecom', label: 'Telecommunications & ICT' },
  { name: 'Presidental Graduat School', industry: 'education', label: 'Higher Education' },
  { name: 'Oxford International Pvt. Ltd.', industry: 'education', label: 'Education & Global Consultancy' },
  { name: 'Oxford Education Pvt. Ltd.', industry: 'education', label: 'Educational Services' },
  { name: 'Fortuna Health Care', industry: 'healthcare', label: 'Healthcare & Medical Supplies' },
  { name: 'TSN Corporation', industry: 'trading', label: 'Corporate & Distribution' },
  { name: '3 Sisters Adventure Trekking Pvt. Ltd.', industry: 'tourism', label: 'Adventure Tourism' },
  { name: 'Empowering Women of Nepal', industry: 'social', label: 'Social Impact & Women Empowerment' },
  { name: 'Borderlands Resort Pvt. Ltd.', industry: 'tourism', label: 'Eco-Resort & Outdoor Adventure' },
  { name: 'Ultimate Descents Nepal', industry: 'tourism', label: 'White Water Rafting & Expeditions' },
  { name: 'Nature-Treks.com', industry: 'tourism', label: 'Eco-Tourism & Himalayan Treks' },
  { name: 'Sunkoshi Beach Camp', industry: 'tourism', label: 'Hospitality & Outdoor Experiences' },
  { name: 'Nepal Coffee Producers Association', industry: 'coffee', label: 'National Coffee Apex Body' },
  { name: 'Multi Care Surgical Pvt. Ltd.', industry: 'healthcare', label: 'Surgical & Medical Equipment' },
  { name: 'Blue Ocean Health care', industry: 'healthcare', label: 'Healthcare Solutions' },
  { name: 'Global Link Technology', industry: 'telecom', label: 'Technology & IT Solutions' },
  { name: 'Medibulls Pharma', industry: 'healthcare', label: 'Pharmaceuticals' },
  { name: 'Planet Infosys Pvt. Ltd.', industry: 'telecom', label: 'IT Services & Software' },
  { name: 'Himalayan Coffee Trading', industry: 'coffee', label: 'Specialty Coffee & Equipment' },
  { name: 'DreamNext Education Foundation', industry: 'education', label: 'Educational Foundation' },
  { name: 'Mount Everest Organic Coffee', industry: 'coffee', label: 'Organic Coffee Brand' },
  { name: 'Mustang Coffee', industry: 'coffee', label: 'High-Altitude Specialty Coffee' },
  { name: 'Famous Home Steel & Appliances', industry: 'trading', label: 'Home Appliances & Manufacturing' },
  { name: 'Human Kind Health Care', industry: 'healthcare', label: 'Healthcare & Diagnostics' }
];

// Documented 5-Step Process
const PROCESS_STEPS = [
  {
    step: '01',
    name: 'LISTEN',
    title: 'Understand Objectives',
    desc: 'We begin by looking closely at your objectives and finding out what you are trying to achieve in the marketplace.'
  },
  {
    step: '02',
    name: 'THINK',
    title: 'Strategic Analysis',
    desc: 'Next, our in-house team collaborates across all aspects of the project, exploring creative concepts and strategic determinants.'
  },
  {
    step: '03',
    name: 'SOLVE',
    title: 'Select Best Solution',
    desc: 'We evaluate alternative creative pathways and select the most effective, sales-driven solution needed to get you your results.'
  },
  {
    step: '04',
    name: 'EXECUTE',
    title: 'On Budget & On Time',
    desc: 'Our refined workflow ensures flawless production, technical excellence, and rigorous quality control within defined parameters.'
  },
  {
    step: '05',
    name: 'LAUNCH',
    title: 'Market Rollout',
    desc: 'We introduce the creative solution to target audiences across ATL, BTL, and digital touchpoints to spark brand loyalty and action.'
  }
];

// Documented People Themes
const PEOPLE_THEMES = [
  {
    index: '01',
    title: "We're creative thinkers",
    desc: "Thinking creatively is what we're best at. Whether it's a brainstorming session around coffee or a business meeting with our client, we are proud to say that we always come up with the brightest, most creative ideas that simply drive brands to the top."
  },
  {
    index: '02',
    title: "We're pleasant to work with",
    desc: "Being excellent at what we do has not stopped us from being professional, punctual, and determined to serve our clients with the best customer service so that they feel they are at home."
  },
  {
    index: '03',
    title: "We're one of you",
    desc: "Just like you, we are real people that you can relate to: friendly, understanding, and able to make the process enjoyable. Our deep roots in the local markets give us the advantage of knowing exactly what to say to bring your message forward."
  },
  {
    index: '04',
    title: "Young at heart, mature in experience",
    desc: "We offer our experience to you. Collaborating together on your brand, you can count on our extensive experience combined with a fresh outlook and new ideas to give your brand an extraordinary push."
  },
  {
    index: '05',
    title: "We give you results",
    desc: "With a team of motivated and smart people, we’ve created fascinating work for our clients which they found really amazing and valuable in achieving their commercial goals."
  }
];

// Portfolio Case Studies grounded in documented client sectors and services
const PORTFOLIO_CASES = [
  {
    id: 'telecom-atl',
    title: 'Nationwide Connectivity ATL Campaign Framework',
    client: 'Nepal Telecom',
    category: 'advertising',
    categoryLabel: 'Advertising Solutions (ATL)',
    image: 'advertising-solutions.svg',
    summary: 'Strategic above-the-line advertising blueprint combining national daily print media, regional radio jingles, and prime TV placements.',
    problem: 'Enhancing nationwide service awareness across diverse demographic segments throughout Nepal while maintaining unified corporate authority.',
    strategy: 'Deploy a multi-tier ATL campaign leveraging national daily broadsheet newspapers for corporate gravitas, synchronized with regional FM radio jingles for community reach.',
    solution: 'Original creative copy determinants and high-impact visual layouts highlighting continuous nationwide network reliability and accessibility.',
    execution: 'Carefully planned scheduling across leading daily newspapers, TV commercial time-slots, and localized radio spots in major provincial centers.',
    outcome: 'Cohesive national brand recognition and unified messaging delivered seamlessly across urban and regional media corridors.'
  },
  {
    id: 'himalayan-coffee-branding',
    title: 'Specialty Coffee Brand Identity & Packaging Suite',
    client: 'Himalayan Coffee Trading',
    category: 'branding',
    categoryLabel: 'Brand Development',
    image: 'brand-development.svg',
    summary: 'Comprehensive brand development including visual identity, custom packaging elements, and B2B sales support collateral.',
    problem: 'Differentiating high-grade Himalayan specialty coffee in both the domestic Kathmandu hospitality market and export channels.',
    strategy: 'Highlight origin authenticity and artisanal processing through refined typography, clean packaging hierarchy, and dedicated sales kits.',
    solution: 'Distinctive brand identity guidelines, evocative slogan integration, and structured packaging labels that clearly communicate roast profiles.',
    execution: 'Design and production of roast packaging pouches, promotional sales kits, brochures, and commercial client presentation packages.',
    outcome: 'Elevated brand perception among Kathmandu baristas, boutique cafés, and specialty coffee retailers.'
  },
  {
    id: 'borderlands-adventure-btl',
    title: 'Eco-Resort BTL Promotion & Outdoor Signage',
    client: 'Borderlands Resort Pvt. Ltd.',
    category: 'advertising',
    categoryLabel: 'Advertising Solutions (BTL)',
    image: 'advertising-solutions.svg',
    summary: 'Below-the-line marketing campaign with highway hoarding installations, roadside pole banners, and booking collateral.',
    problem: 'Capturing adventure travel bookings along the primary Arniko Highway travel corridor and central Kathmandu booking counters.',
    strategy: 'Utilize high-visibility outdoor hoardings at critical transit bottlenecks paired with informational brochures at key tourist departure hubs.',
    solution: 'Dynamic visual design featuring thrilling rafting action photography, bold typography, and direct booking contact determinants.',
    execution: 'Production and structural mounting of prime hoardings, street pole banners, and counter point-of-purchase (POP) display units.',
    outcome: 'Dominant visual prominence along key travel routes and synchronized physical collateral at partner hospitality counters.'
  },
  {
    id: 'ncpa-coffee-conference',
    title: 'National Coffee Exhibition & Promotion Activation',
    client: 'Nepal Coffee Producers Association',
    category: 'events',
    categoryLabel: 'Event Management',
    image: 'event-management.svg',
    summary: 'End-to-end on-ground event management, stage backdrop production, and commercial photo/video documentation.',
    problem: 'Hosting a premier industry gathering uniting regional coffee growers, government stakeholders, roasters, and commercial buyers.',
    strategy: 'Design a professional, cohesive experiential layout featuring custom exhibition stalls, plenary stage backdrops, and structured documentation.',
    solution: 'Holistic event branding architecture from entrance archways to delegate kits, backed up by on-site production management.',
    execution: 'Flawless venue staging, audio-visual technical coordination, live commercial photography, and recap videography.',
    outcome: 'Seamless event execution delivered on budget and on schedule, leaving attendees with a memorable industry experience.'
  },
  {
    id: 'fortuna-healthcare-collateral',
    title: 'Healthcare Sales Kit & Medical Collateral Suite',
    client: 'Fortuna Health Care',
    category: 'branding',
    categoryLabel: 'Brand Development',
    image: 'brand-development.svg',
    summary: 'Corporate brochures, medical sales presentation packages, and product proposal dossiers for institutional sales teams.',
    problem: 'Equipping pharmaceutical and healthcare sales representatives with authoritative, well-structured presentation materials.',
    strategy: 'Develop an integrated sales kit covering product technical data, clinical compliance overviews, and structured sales proposals.',
    solution: 'Refined brand communication determinants, crisp diagrams, and modular sales binders designed for medical representative consultations.',
    execution: 'High-grade print production of sales kits, product newsletters, detailed technical brochures, and digital presentation slide decks.',
    outcome: 'Professionalized sales interactions across clinics and hospitals, accelerating closing cycles for the sales team.'
  },
  {
    id: 'famous-appliances-pop',
    title: 'Retail Point-of-Purchase (POP) & Showroom Branding',
    client: 'Famous Home Steel & Appliances',
    category: 'advertising',
    categoryLabel: 'Advertising Solutions (BTL)',
    image: 'advertising-solutions.svg',
    summary: 'In-store point-of-purchase displays, retail dealer standees, and localized promotional hoardings in major markets.',
    problem: 'Standing out within multi-brand electronics and appliance retail showrooms in Kathmandu and major district towns.',
    strategy: 'Deploy eye-catching retail POP units and dealer support materials that clearly highlight product durability and warranty benefits.',
    solution: 'Sturdy, branded POP display stands, counter wobblers, shelf talkers, and durable outdoor dealer signage.',
    execution: 'Fabrication and rollout across Kathmandu dealer networks, coordinated with synchronized local newspaper promotional ads.',
    outcome: 'Enhanced in-store visual hierarchy and reinforced retail dealer confidence across key commercial distribution hubs.'
  }
];

// Blog Posts Data
const BLOG_POSTS = [
  {
    slug: 'what-is-atl-and-btl-advertising',
    title: 'What Is ATL and BTL Advertising? A Complete Strategic Guide for Businesses in Nepal',
    category: 'Advertising Strategy',
    date: 'March 18, 2026',
    author: 'Infinity Creative Strategy Team',
    readTime: '6 min read',
    excerpt: 'Explore the key distinctions between Above-The-Line (ATL) mass campaigns and Below-The-Line (BTL) targeted activations in the context of the Nepali market.',
    content: `
      <h2>Understanding the Foundations: ATL vs. BTL</h2>
      <p>In modern marketing, choosing the right vehicle for your message determines how effectively your advertising budget generates commercial returns. Advertising solutions are generally categorized into two core tactical frameworks: <strong>Above-The-Line (ATL)</strong> and <strong>Below-The-Line (BTL)</strong>.</p>
      <p>At Infinity Advertising in Kathmandu, we view advertising as the main vehicle that carries sales-driven concepts directly to your target audience. Whether you are building national recognition or driving point-of-sale action, understanding how to balance ATL and BTL is essential.</p>

      <blockquote>
        "At Infinity, advertising is considered the main vehicle that carries our sales driven concepts to the target audience. We deliver value to our clients with original strategic and creative sales thinking."
      </blockquote>

      <h2>What Is Above-The-Line (ATL) Advertising?</h2>
      <p>Above-The-Line advertising focuses on mass media communication designed to build wide reach, brand awareness, and top-of-mind recall across large demographic groups. ATL campaigns are not targeted at a single individual; rather, they broadcast a unified message to the entire market.</p>
      <p>In Nepal, documented ATL channels include:</p>
      <ul>
        <li><strong>Print Media:</strong> National daily newspapers and established periodicals that provide authoritative credibility and high household readership.</li>
        <li><strong>Radio &amp; FM Broadcasting:</strong> Radio spots and memorable audio jingles that penetrate both urban centers and rural valleys across all seven provinces.</li>
        <li><strong>Television Commercials (TVC):</strong> Audio-visual storytelling that engages audiences in family living rooms during prime evening time-slots.</li>
        <li><strong>Broad Digital &amp; Social Media:</strong> Large-scale digital campaigns across social channels that capture the attention of Nepal's digitally connected consumers.</li>
      </ul>

      <h2>What Is Below-The-Line (BTL) Advertising?</h2>
      <p>Below-The-Line advertising consists of targeted, physical, and experiential touchpoints that focus on specific geographic zones, retail environments, or niche audience segments. BTL is inherently tactile, actionable, and closely aligned with the customer's point of purchase.</p>
      <p>Core documented BTL activities include:</p>
      <ul>
        <li><strong>Outdoor Hoardings (Billboards):</strong> High-impact outdoor structures positioned along major traffic intersections, such as Tripureshwor, Maitighar, and Koteshwor in Kathmandu.</li>
        <li><strong>Street Pole Banners:</strong> Sequential visual repetition along key arterial roadways that reinforces campaign messaging during daily commutes.</li>
        <li><strong>Point of Purchase (POP) Materials:</strong> In-store standees, counter displays, and promotional posters that directly influence consumers at the moment of buying.</li>
        <li><strong>On-Ground Event Management:</strong> Branded activations, consumer stalls, and exhibitions that allow people to physically interact with your brand.</li>
        <li><strong>Commercial Photography &amp; Videography:</strong> Professional visual assets capturing brand activations for ongoing promotional use.</li>
      </ul>

      <div class="takeaway-box">
        <h4>Strategic Key Takeaway</h4>
        <p>A mature marketing campaign rarely relies on ATL or BTL in isolation. ATL builds the trust and emotional recognition that makes your brand reputable, while BTL places that brand directly in the customer's hands at the exact moment they make a buying decision.</p>
      </div>

      <h2>How Businesses in Kathmandu Benefit from Integrated Strategy</h2>
      <p>For growing enterprises in Nepal, an integrated approach delivers optimum return on investment. By understanding your specific commercial objectives, an agency can deploy a national newspaper ad or radio jingle to establish credibility, followed immediately by retail POP displays and local hoardings that guide buyers straight to your distributors.</p>
    `
  },
  {
    slug: 'how-to-build-a-strong-brand-identity',
    title: 'How to Build a Strong Brand Identity: From Naming and Logos to Market Presence',
    category: 'Branding',
    date: 'March 10, 2026',
    readTime: '7 min read',
    author: 'Infinity Branding Team',
    excerpt: 'A comprehensive roadmap to creating memorable brand identities, distinctive slogans, and high-impact sales collateral in Nepal.',
    content: `
      <h2>The Anatomy of Brand Development</h2>
      <p>A brand is much more than a graphic symbol; it is the complete impression your company leaves on clients, partners, and competitors. In an increasingly crowded marketplace, a well-crafted brand identity provides businesses with a powerful commercial advantage.</p>
      <p>Brand development involves discovering what makes an organization distinctive and translating that truth into a coherent visual and verbal language. When done with strategic discipline, it establishes immediate trust and supports long-term sustainable growth.</p>

      <h2>1. Communication Development &amp; Positioning</h2>
      <p>Every memorable brand begins with clear strategic determinants. What specific problem does your product solve? What value does it promise to clients? At Infinity Advertising, our objective is to support businesses in achieving their commercial targets by developing authentic brand communication elements that resonate with local markets.</p>

      <h2>2. Brand Name Creation &amp; Slogans</h2>
      <p>A great name is simple to pronounce, memorable to recall, and capable of growing alongside your enterprise. Alongside naming, a strong slogan captures your operational philosophy in a single compelling phrase. For instance, Infinity's own tagline—<em>"an odyssey of creativity..."</em>—communicates continuous creative exploration and excellence.</p>

      <blockquote>
        "Our objective is to support businesses achieve targets through communication development, brand name creation, brand identity (logo), and slogans."
      </blockquote>

      <h2>3. Visual Identity (Logo) &amp; Design Guidelines</h2>
      <p>Your logo is the visual cornerstone of your enterprise. Whether displayed on a 6th-floor building banner in Tripureshwor or printed on a medical sales kit, the logo must remain legible, versatile, and instantly identifiable across all media. Establishing strict design rules for typography, color hierarchies, and spacing prevents brand dilution over time.</p>

      <h2>4. Marketing Collateral &amp; Sales Support Materials</h2>
      <p>Brand development does not conclude when the logo file is exported. The true test of a brand is how effectively it arms its team to close sales. Comprehensive brand development includes:</p>
      <ul>
        <li><strong>Brochures &amp; Catalogs:</strong> Editorial presentations detailing product specifications and corporate capabilities.</li>
        <li><strong>Newsletters:</strong> Periodic communication keeping clients and partners informed.</li>
        <li><strong>Sales Kit Development:</strong> Standardized dossiers, proposal documents, and presentation templates containing all materials a salesperson requires to close a transaction.</li>
      </ul>

      <div class="takeaway-box">
        <h4>Why Sales Kits Matter</h4>
        <p>A beautiful logo without sales enablement leaves revenue on the table. Professional sales kits, structured proposals, and elegant presentations bridge the gap between creative branding and profitable sales closure.</p>
      </div>

      <h2>Conclusion: Building for the Long Term</h2>
      <p>Building a brand is an investment in durable commercial equity. By grounding your brand identity in sound strategy, meticulous design, and comprehensive sales support, you lay the foundation for sustainable market leadership.</p>
    `
  },
  {
    slug: 'brand-development-vs-advertising',
    title: 'Brand Development vs Advertising: What’s the Difference and Why You Need Both',
    category: 'Agency Insights',
    date: 'February 26, 2026',
    readTime: '5 min read',
    author: 'Infinity Strategic Team',
    excerpt: 'Clarifying the relationship between building a brand and running advertising campaigns to maximize commercial return on investment.',
    content: `
      <h2>The Common Confusion Between Branding and Advertising</h2>
      <p>Business owners frequently use the terms "branding" and "advertising" interchangeably. While both disciplines work hand-in-hand, they fulfill distinct functions in your organization's growth strategy. Confusing the two often leads to misallocated marketing budgets or campaigns that fail to generate lasting value.</p>

      <h2>What Is Brand Development?</h2>
      <p>Brand development defines <strong>who you are</strong>. It encompasses the foundational identity, corporate philosophy, naming, logo design, slogan, and visual collateral that define how customers perceive your organization.</p>
      <p>Brand development establishes your long-term reputation. It answers vital business questions: Why should a customer choose you over a competitor? What feelings does your name evoke? What standard of quality can clients expect every time they interact with your team?</p>

      <h2>What Is Advertising?</h2>
      <p>Advertising is the vehicle that <strong>carries your message to the audience</strong>. As documented in Infinity's corporate profile, advertising takes the concepts and value established by your brand and communicates them actively to the market to stimulate demand and drive immediate commercial results.</p>
      <p>Advertising encompasses your strategic ATL and BTL campaigns: daily newspaper advertisements, radio spots, television commercials, roadside hoardings, pole banners, point-of-purchase displays, and targeted digital promotions.</p>

      <blockquote>
        "We believe that the most successful businesses have focused on 'results' brought about by a sales driven campaign. At Infinity, we understand that the most effective advertising solutions are derived from a clear understanding of our clients' business, their goals and objectives."
      </blockquote>

      <h2>Why You Cannot Afford to Ignore Either</h2>
      <p>Consider what happens when a company invests heavily in advertising without first developing a solid brand identity: prospective buyers may see a newspaper ad or social media campaign, but when they visit the company's offices or receive a sales proposal, the inconsistent materials fail to inspire confidence.</p>
      <p>Conversely, developing a world-class brand identity without active advertising is akin to keeping a masterpiece locked in a dark room. Without advertising campaigns to broadcast your value, customers simply will not know you exist.</p>

      <div class="takeaway-box">
        <h4>Key Contrast</h4>
        <ul>
          <li><strong>Branding:</strong> Builds loyalty, establishes value, shapes customer perception, and creates long-term equity.</li>
          <li><strong>Advertising:</strong> Generates awareness, drives traffic, promotes specific offers, and generates sales momentum.</li>
        </ul>
      </div>

      <h2>Achieving Maximum Return on Investment</h2>
      <p>At Infinity Advertising Pvt. Ltd. in Kathmandu, our philosophy is to apply our services where we can deliver an optimum return on investment for our clients. By unifying strategic brand development with powerful advertising solutions, businesses in Nepal achieve sustainable, profitable growth.</p>
    `
  },
  {
    slug: 'choosing-an-advertising-agency-in-kathmandu',
    title: 'Choosing an Advertising Agency in Kathmandu: What Businesses Must Look For',
    category: 'Business Guidance',
    date: 'February 14, 2026',
    readTime: '6 min read',
    author: 'Infinity Editorial Desk',
    excerpt: 'Key factors Nepali enterprises should evaluate when selecting an advertising and brand development partner in Kathmandu.',
    content: `
      <h2>The Evolving Advertising Landscape in Nepal</h2>
      <p>Kathmandu is home to a dynamic business ecosystem. From emerging healthcare providers and tourism operators to established telecommunications leaders and coffee producers, businesses across Nepal face intense competition for consumer attention. In this environment, selecting the right advertising agency can determine your trajectory.</p>

      <h2>1. A Defined, Transparent Working Process</h2>
      <p>Many agencies pitch grand creative ideas without having a clear execution framework. When evaluating an agency, ask about their workflow. Do they complete projects on budget and on time?</p>
      <p>At Infinity Advertising, our work follows a refined 5-step process:</p>
      <ul>
        <li><strong>01 Listen:</strong> Beginning by understanding your specific business objectives and targets.</li>
        <li><strong>02 Think:</strong> Harnessing our in-house team to analyze all dimensions of the project.</li>
        <li><strong>03 Solve:</strong> Selecting the most effective, revenue-driving creative solution.</li>
        <li><strong>04 Execute:</strong> Delivering meticulous production backed by technical excellence.</li>
        <li><strong>05 Launch:</strong> Executing a seamless market rollout on schedule.</li>
      </ul>

      <h2>2. Deep Roots in Local Markets</h2>
      <p>An advertising campaign cannot succeed if it feels detached from cultural realities. An agency with deep roots in local Nepali markets understands local nuances, languages, visual sensibilities, and consumer habits. They know exactly how to frame your message so it resonates with audiences across Kathmandu and regional centers alike.</p>

      <h2>3. Focus on Measurable Commercial Results</h2>
      <p>Creative design is valuable only when it supports business growth. The agency you select should view advertising as a sales-driven determinant rather than mere visual decoration. Their philosophy must center on delivering an optimum return on your investment (ROI).</p>

      <blockquote>
        "Our philosophy is to apply our services where we can deliver an optimum return on investment for our clients. We deliver measurable results that mean our clients achieve sustainable, profitable growth."
      </blockquote>

      <h2>4. Comprehensive In-House Capabilities</h2>
      <p>Juggling multiple vendors for branding, print media, outdoor hoardings, and event management creates delays and inconsistent quality. Partnering with a full-fledged agency that covers Brand Development, ATL/BTL Advertising Solutions, and Event Management ensures unified brand integrity across every touchpoint.</p>

      <div class="takeaway-box">
        <h4>Checklist for Agency Selection</h4>
        <ul>
          <li>Does the agency have documented client experience across diverse industries?</li>
          <li>Do they have a dedicated physical office where you can meet and brainstorm?</li>
          <li>Can they handle both strategic conceptualization and physical production?</li>
          <li>Are they transparent about deliverables, timelines, and costs?</li>
        </ul>
      </div>

      <h2>Conclusion</h2>
      <p>Choosing an advertising agency is choosing a long-term commercial partner. By prioritizing strategic thinking, in-house technical excellence, and proven local insight, you set your business on a course toward sustainable leadership.</p>
    `
  }
];

// Helper: Calculate relative path back to root
function getRelPath(depth) {
  if (depth === 0) return './';
  if (depth === 1) return '../';
  if (depth === 2) return '../../';
  return './';
}

// Generate Header
function renderHeader(activeNav, depth) {
  const rel = getRelPath(depth);
  return `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header" role="banner">
      <div class="header-container">
        <a class="brand-logo" href="${rel}" aria-label="Infinity Advertising Home">
          <img src="${rel}assets/infinity-logo.png" alt="Infinity Advertising Pvt. Ltd. Logo" width="176" height="51" />
        </a>

        <nav class="nav-desktop" aria-label="Main Navigation">
          <a href="${rel}" class="${activeNav === 'home' ? 'active' : ''}">Home</a>
          <a href="${rel}about/" class="${activeNav === 'about' ? 'active' : ''}">About</a>
          <div class="nav-dropdown">
            <a href="${rel}services/" class="nav-dropdown-trigger ${activeNav.startsWith('services') ? 'active' : ''}">
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
            </a>
            <div class="nav-dropdown-menu" role="menu">
              <a href="${rel}services/brand-development/" role="menuitem">Brand Development</a>
              <a href="${rel}services/advertising-solutions/" role="menuitem">Advertising Solutions</a>
              <a href="${rel}services/event-management/" role="menuitem">Event Management</a>
            </div>
          </div>
          <a href="${rel}portfolio/" class="${activeNav === 'portfolio' ? 'active' : ''}">Work</a>
          <a href="${rel}clients/" class="${activeNav === 'clients' ? 'active' : ''}">Clients</a>
          <a href="${rel}blog/" class="${activeNav === 'blog' ? 'active' : ''}">Insights</a>
          <a href="${rel}contact/" class="${activeNav === 'contact' ? 'active' : ''}">Contact</a>
        </nav>

        <div class="header-actions">
          <a class="btn btn-primary header-cta" href="${rel}contact/">
            Start a Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Toggle navigation menu" aria-controls="mobile-nav">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-nav" class="mobile-nav-drawer" aria-label="Mobile Navigation" role="dialog" aria-modal="true">
      <div class="mobile-nav-links">
        <a href="${rel}" class="${activeNav === 'home' ? 'active' : ''}">Home</a>
        <a href="${rel}about/" class="${activeNav === 'about' ? 'active' : ''}">About Us</a>
        <a href="${rel}services/" class="${activeNav === 'services' ? 'active' : ''}">All Services</a>
        <div class="mobile-nav-sublinks">
          <a href="${rel}services/brand-development/">↳ Brand Development</a>
          <a href="${rel}services/advertising-solutions/">↳ Advertising Solutions</a>
          <a href="${rel}services/event-management/">↳ Event Management</a>
        </div>
        <a href="${rel}portfolio/" class="${activeNav === 'portfolio' ? 'active' : ''}">Work &amp; Portfolio</a>
        <a href="${rel}clients/" class="${activeNav === 'clients' ? 'active' : ''}">Our Clients</a>
        <a href="${rel}blog/" class="${activeNav === 'blog' ? 'active' : ''}">Insights &amp; Articles</a>
        <a href="${rel}contact/" class="${activeNav === 'contact' ? 'active' : ''}">Contact Us</a>
      </div>
      <a class="btn btn-primary" href="${rel}contact/" style="width:100%;">
        Start a Project
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <div style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid #e2e8f0; font-size:0.88rem; color:#64748b;">
        <p><strong>Call Agency:</strong> <a href="tel:+97715347277" style="color:#0082c8;">+977-1-5347277</a></p>
        <p style="margin-top:0.35rem;"><strong>Email:</strong> <a href="mailto:${EMAIL}" style="color:#0082c8;">${EMAIL}</a></p>
        <p style="margin-top:0.35rem;">Tripureshwor, Kathmandu, Nepal</p>
      </div>
    </div>
  `;
}

// Generate Breadcrumbs
function renderBreadcrumbs(crumbs, depth) {
  const rel = getRelPath(depth);
  const itemsHtml = crumbs.map((crumb, idx) => {
    const isLast = idx === crumbs.length - 1;
    if (isLast) {
      return `
        <li class="breadcrumb-item current" aria-current="page" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <span itemprop="name">${crumb.label}</span>
          <meta itemprop="position" content="${idx + 1}" />
        </li>
      `;
    }
    return `
      <li class="breadcrumb-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a href="${crumb.url}" itemprop="item"><span itemprop="name">${crumb.label}</span></a>
        <meta itemprop="position" content="${idx + 1}" />
      </li>
      <li class="breadcrumb-separator" aria-hidden="true">/</li>
    `;
  }).join('');

  return `
    <nav class="breadcrumb-nav" aria-label="Breadcrumb">
      <div class="container">
        <ol class="breadcrumb-list" itemscope itemtype="https://schema.org/BreadcrumbList">
          ${itemsHtml}
        </ol>
      </div>
    </nav>
  `;
}

// Generate Final High-Impact CTA
function renderFinalCta(depth) {
  const rel = getRelPath(depth);
  return `
    <section class="section-final-cta" aria-labelledby="cta-heading">
      <div class="cta-bg-glow" aria-hidden="true"></div>
      <div class="container">
        <div class="final-cta-content">
          <span class="badge-label" style="color:var(--brand-primary-light); margin-bottom:1rem; display:inline-block;">LET'S COLLABORATE</span>
          <h2 id="cta-heading">Let's Create Something That Moves Your Brand <em>Forward.</em></h2>
          <p>Partner with Kathmandu's dedicated brand development and advertising team. We turn objectives into sales-driven campaigns executed on budget and on time.</p>
          <div class="final-cta-buttons">
            <a class="btn btn-primary" href="${rel}contact/">
              Start a Conversation
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a class="btn btn-ghost-light" href="${rel}portfolio/">
              Explore Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Generate Footer
function renderFooter(depth) {
  const rel = getRelPath(depth);
  return `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-top-grid">
          <div class="footer-brand">
            <a class="footer-brand-logo" href="${rel}" aria-label="Infinity Advertising Home">
              <img src="${rel}assets/infinity-logo.png" alt="Infinity Advertising Pvt. Ltd." width="176" height="51" />
            </a>
            <p>Infinity Advertising Pvt. Ltd. is a full-fledged advertising agency in Tripureshwor, Kathmandu, delivering original strategic methods, creative thinking, execution, and technical excellence.</p>
            <p style="font-family:var(--font-mono); font-size:0.75rem; color:var(--brand-primary-light); margin-top:0.85rem; letter-spacing:0.08em;">
              "AN ODYSSEY OF CREATIVITY..."
            </p>
          </div>

          <div class="footer-col">
            <h4>Quick Links</h4>
            <div class="footer-links">
              <a href="${rel}">Home</a>
              <a href="${rel}about/">About Us</a>
              <a href="${rel}services/">Our Services</a>
              <a href="${rel}portfolio/">Our Work</a>
              <a href="${rel}clients/">Valuable Clients</a>
              <a href="${rel}blog/">Agency Insights</a>
              <a href="${rel}contact/">Contact Office</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Services</h4>
            <div class="footer-links">
              <a href="${rel}services/brand-development/">Brand Development</a>
              <a href="${rel}services/advertising-solutions/">Advertising Solutions (ATL/BTL)</a>
              <a href="${rel}services/event-management/">Event Management</a>
              <a href="${rel}services/advertising-solutions/#hoardings">Hoardings &amp; Pole Banners</a>
              <a href="${rel}services/brand-development/#collateral">Sales Kits &amp; Collateral</a>
              <a href="${rel}services/event-management/#media">Photography &amp; Video</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Agency Headquarters</h4>
            <div class="footer-contact-info">
              <p><strong>Address:</strong><br />Blue Star Complex, 6th Floor (609)<br />Tripureshwor, Kathmandu, Nepal</p>
              <p><strong>Phone:</strong> <a href="tel:+97715347277">+977-1-5347277</a></p>
              <p><strong>Email:</strong> <a href="mailto:${EMAIL}">${EMAIL}</a></p>
              <p style="font-size:0.8rem; color:var(--text-light-muted); margin-top:0.5rem;">[Add verified business hours here]</p>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; <span class="current-year">2026</span> ${COMPANY_NAME}. All rights reserved.</p>
          <p style="font-size:0.76rem; color:var(--text-light-muted);">
            Information grounded strictly in official Infinity Advertising corporate documentation.
          </p>
          <div class="footer-bottom-links">
            <a href="${rel}contact/">Privacy &amp; Inquiries</a>
            <a href="${rel}sitemap.xml">XML Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Generate Page Shell
function renderPage({
  title,
  description,
  canonicalUrl,
  activeNav = 'home',
  depth = 0,
  crumbs = null,
  schema = null,
  bodyContent = ''
}) {
  const rel = getRelPath(depth);
  const breadcrumbsHtml = crumbs ? renderBreadcrumbs(crumbs, depth) : '';
  const schemaHtml = schema ? `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonicalUrl}" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#0082c8" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${SITE_URL}/assets/infinity-logo.png" />
  <meta property="og:image:alt" content="Infinity Advertising Pvt. Ltd. Official Logo" />
  <meta property="og:site_name" content="${COMPANY_NAME}" />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${canonicalUrl}" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${SITE_URL}/assets/infinity-logo.png" />

  <!-- Favicon & Touch Icons -->
  <link rel="icon" href="${rel}assets/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="${rel}assets/infinity-logo.png" />

  <!-- Stylesheet -->
  <link rel="stylesheet" href="${rel}assets/css/style.css" />

  <!-- JSON-LD Structured Data -->
  ${schemaHtml}
</head>
<body>
  ${renderHeader(activeNav, depth)}
  ${breadcrumbsHtml}

  <main id="main-content">
    ${bodyContent}
  </main>

  ${renderFooter(depth)}

  <!-- Scripts -->
  <script src="${rel}assets/js/main.js" defer></script>
</body>
</html>`;
}

// Base Business Schema
const baseBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["AdvertisingAgency", "LocalBusiness", "ProfessionalService"],
  "name": COMPANY_NAME,
  "url": SITE_URL,
  "logo": `${SITE_URL}/assets/infinity-logo.png`,
  "image": `${SITE_URL}/assets/infinity-logo.png`,
  "description": "Full-fledged advertising agency in Tripureshwor, Kathmandu, Nepal specializing in Brand Development, Advertising Solutions (ATL/BTL), and Event Management.",
  "telephone": PHONE,
  "email": EMAIL,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": ADDRESS_STREET,
    "addressLocality": ADDRESS_CITY,
    "addressCountry": "NP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.6934,
    "longitude": 85.3142
  },
  "areaServed": {
    "@type": "Country",
    "name": "Nepal"
  },
  "slogan": TAGLINE,
  "priceRange": "$$"
};

// =============================================================================
// 1. HOMEPAGE (/)
// =============================================================================
function buildHomePage() {
  const clientsPreviewHtml = CLIENTS_DATA.slice(0, 12).map(c => `
    <div class="client-card" data-industry="${c.industry}">
      <span class="client-category-tag">${c.label}</span>
      <h3 class="client-name">${c.name}</h3>
      <span class="client-status">Corporate Client</span>
    </div>
  `).join('');

  const bodyContent = `
    <!-- HERO SECTION -->
    <section class="hero-home" aria-labelledby="hero-title">
      <div class="hero-grid-bg" aria-hidden="true"></div>
      <div class="container">
        <div class="hero-layout">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="pulse-dot"></span>
              <span class="badge-label">KATHMANDU, NEPAL · ADVERTISING AGENCY</span>
            </div>
            <h1 id="hero-title" class="hero-title">
              Advertising &amp; Brand Development Agency in <em>Kathmandu, Nepal</em>
            </h1>
            <p class="hero-subtitle">
              Infinity Advertising helps organizations develop enduring brands, create high-impact advertising campaigns, and execute promotional solutions built on strategic thinking, creative execution, and technical excellence.
            </p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="./contact/">
                Start a Project
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a class="btn btn-secondary" href="./portfolio/">
                View Our Work
              </a>
            </div>

            <div class="hero-pillars-preview">
              <div class="hero-pillar-item">
                <span class="num">01 / PILLAR</span>
                <span class="name">Brand Development</span>
              </div>
              <div class="hero-pillar-item">
                <span class="num">02 / PILLAR</span>
                <span class="name">Advertising Solutions</span>
              </div>
              <div class="hero-pillar-item">
                <span class="num">03 / PILLAR</span>
                <span class="name">Event Management</span>
              </div>
            </div>
          </div>

          <div class="hero-visual-card">
            <img class="hero-art-img" src="./assets/images/hero-art.svg" alt="Infinity creative geometry and brand symbol" width="360" height="360" fetchpriority="high" />
            <div class="hero-tagline-chip">
              <span>AN ODYSSEY OF CREATIVITY</span>
              <p>Tripureshwor, Kathmandu · Blue Star Complex, 6th Floor</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: ABOUT INFINITY -->
    <section class="section section-editorial-intro" aria-labelledby="about-intro-title">
      <div class="container">
        <div class="editorial-grid">
          <div class="section-label-group">
            <span class="badge-label section-label">WHO WE ARE</span>
            <h2 id="about-intro-title" class="editorial-headline">
              A full-fledged advertising agency focused on <em>real client results.</em>
            </h2>
            <a class="btn btn-secondary" href="./about/">
              More About Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div class="editorial-body">
            <p class="lead-paragraph">
              Infinity Advertising Pvt. Ltd. is involved in creating, planning, and handling advertising and promotional strategic determinants with a view to provide a better platform to display a precise brand recognition of clients’ products or services.
            </p>
            <p class="body-paragraph">
              We deliver valuable advertising solutions to our clients with our original strategic methods and creative thinking, backed up by execution and technical excellence. Providing organizations with our sales-driven inspirations has helped them achieve all their objectives.
            </p>

            <div class="key-highlights-grid">
              <div class="highlight-box">
                <h4>Strategic Methods</h4>
                <p>Original concepts rooted in deep understanding of clients' commercial goals.</p>
              </div>
              <div class="highlight-box">
                <h4>Creative Thinking</h4>
                <p>Innovative, sellable creative work that inspires brand loyalty and stands out.</p>
              </div>
              <div class="highlight-box">
                <h4>Technical Excellence</h4>
                <p>Precise in-house execution delivering projects on budget and on schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: OUR SERVICES -->
    <section class="section section-services-overview" aria-labelledby="services-overview-title">
      <div class="container">
        <div class="section-header-centered">
          <span class="badge-label section-label">OUR CORE PILLARS</span>
          <h2 id="services-overview-title">Complete Advertising &amp; Brand Services</h2>
          <p>We provide full-spectrum capabilities across three primary service pillars to help businesses establish strong identities and capture market share.</p>
        </div>

        <div class="services-pillars-grid">
          <!-- Pillar 1 -->
          <article class="pillar-card">
            <div class="pillar-card-header">
              <span class="pillar-number">PILLAR 01</span>
              <img src="./assets/images/brand-development.svg" alt="Brand Development Icon" style="width:60px; height:40px; object-fit:contain;" />
            </div>
            <h3>Brand Development</h3>
            <p class="description">
              Unique services in developing and identifying new brands, selling techniques used in maximizing revenues, packaging/bundling, and brand communication elements.
            </p>
            <div class="pillar-capabilities-list">
              <span class="capability-chip">Brand Identity (Logo)</span>
              <span class="capability-chip">Brand Name Creation</span>
              <span class="capability-chip">Slogans</span>
              <span class="capability-chip">Brochures &amp; Newsletters</span>
              <span class="capability-chip">Sales Kits &amp; Proposals</span>
            </div>
            <div class="pillar-footer">
              <a class="pillar-link" href="./services/brand-development/">
                Explore Brand Development
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>

          <!-- Pillar 2 -->
          <article class="pillar-card">
            <div class="pillar-card-header">
              <span class="pillar-number">PILLAR 02</span>
              <img src="./assets/images/advertising-solutions.svg" alt="Advertising Solutions Icon" style="width:60px; height:40px; object-fit:contain;" />
            </div>
            <h3>Advertising Solutions</h3>
            <p class="description">
              The main vehicle carrying sales-driven concepts to target audiences. Combining strategic ATL media campaigns with high-impact outdoor and retail BTL activities.
            </p>
            <div class="pillar-capabilities-list">
              <span class="capability-chip">ATL: Newspapers &amp; Magazines</span>
              <span class="capability-chip">Radio Jingles &amp; TVCs</span>
              <span class="capability-chip">BTL: Outdoor Hoardings</span>
              <span class="capability-chip">Street Pole Banners</span>
              <span class="capability-chip">Retail POP Materials</span>
            </div>
            <div class="pillar-footer">
              <a class="pillar-link" href="./services/advertising-solutions/">
                Explore Advertising Solutions
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>

          <!-- Pillar 3 -->
          <article class="pillar-card">
            <div class="pillar-card-header">
              <span class="pillar-number">PILLAR 03</span>
              <img src="./assets/images/event-management.svg" alt="Event Management Icon" style="width:60px; height:40px; object-fit:contain;" />
            </div>
            <h3>Event Management</h3>
            <p class="description">
              On-ground corporate and promotional event management, branded activations, and experiential staging, supported by professional commercial photography and videography.
            </p>
            <div class="pillar-capabilities-list">
              <span class="capability-chip">On-Ground Activations</span>
              <span class="capability-chip">Experiential Staging</span>
              <span class="capability-chip">Commercial Photography</span>
              <span class="capability-chip">Commercial Videography</span>
              <span class="capability-chip">Collateral Coordination</span>
            </div>
            <div class="pillar-footer">
              <a class="pillar-link" href="./services/event-management/">
                Explore Event Management
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION: OUR PROCESS (5 STEPS) -->
    <section class="section section-process" aria-labelledby="process-heading">
      <div class="container">
        <div class="section-header-centered">
          <span class="badge-label section-label">OUR METHODOLOGY</span>
          <h2 id="process-heading">Our 5-Step Refined Process</h2>
          <p>Our process is highly refined, allowing us to complete projects on budget and on time through close in-house collaboration.</p>
        </div>

        <div class="process-steps-track">
          ${PROCESS_STEPS.map(p => `
            <div class="process-step-item">
              <span class="step-num-badge">${p.step} — STEP</span>
              <h3 class="step-action-title">${p.name}</h3>
              <p class="step-desc">${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION: WHY INFINITY (OUR PEOPLE) -->
    <section class="section section-why-us" aria-labelledby="why-us-title">
      <div class="container">
        <div class="section-header-centered">
          <span class="badge-label section-label">OUR PEOPLE &amp; CULTURE</span>
          <h2 id="why-us-title">Why Organizations Choose <em>Infinity</em></h2>
          <p style="color:var(--text-light-secondary);">
            A group of talented, hard-working, and creative advertising professionals who come together in high spirits to create great work.
          </p>
        </div>

        <div class="people-themes-grid">
          ${PEOPLE_THEMES.map(t => `
            <div class="theme-card">
              <span class="theme-index">${t.index} / CULTURE</span>
              <h3>${t.title}</h3>
              <p>${t.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION: FEATURED WORK -->
    <section class="section section-portfolio" aria-labelledby="featured-work-title">
      <div class="container">
        <div class="section-header-centered">
          <span class="badge-label section-label">PORTFOLIO PREVIEW</span>
          <h2 id="featured-work-title">Featured Work &amp; Strategic Solutions</h2>
          <p>A look at strategic campaign frameworks and brand deliverables across documented client sectors.</p>
        </div>

        <div class="portfolio-grid">
          ${PORTFOLIO_CASES.slice(0, 2).map(item => `
            <article class="case-card" data-category="${item.category}">
              <div class="case-media-frame">
                <span class="case-badge-pill">${item.categoryLabel}</span>
                <img src="./assets/images/${item.image}" alt="${item.title}" loading="lazy" />
              </div>
              <div class="case-body">
                <span class="case-client">${item.client}</span>
                <h3 class="case-title">${item.title}</h3>
                <p class="case-desc">${item.summary}</p>
                <div class="case-breakdown-box">
                  <div class="case-phase">
                    <strong>Problem:</strong>
                    <span>${item.problem}</span>
                  </div>
                  <div class="case-phase">
                    <strong>Strategy:</strong>
                    <span>${item.strategy}</span>
                  </div>
                  <div class="case-phase">
                    <strong>Execution:</strong>
                    <span>${item.execution}</span>
                  </div>
                </div>
              </div>
            </article>
          `).join('')}
        </div>

        <div style="text-align:center; margin-top:3rem;">
          <a class="btn btn-secondary" href="./portfolio/">
            View All Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION: CLIENTS -->
    <section class="section section-clients" aria-labelledby="clients-heading">
      <div class="container">
        <div class="section-header-centered">
          <span class="badge-label section-label">VALUABLE CLIENTS</span>
          <h2 id="clients-heading">Trusted by Diverse Organizations</h2>
          <p>Organizations and enterprises documented in Infinity Advertising’s corporate profile.</p>
        </div>

        <div class="clients-grid">
          ${clientsPreviewHtml}
        </div>

        <div class="verified-disclaimer-card">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--brand-primary); flex-shrink:0;"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          <p>Clients listed reflect organizations documented in Infinity Advertising’s corporate portfolio. Does not imply current ongoing endorsement unless confirmed.</p>
        </div>

        <div style="text-align:center; margin-top:2.5rem;">
          <a class="btn btn-secondary" href="./clients/">
            Explore All 24 Clients
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>

    ${renderFinalCta(0)}
  `;

  const html = renderPage({
    title: 'Advertising & Brand Development Agency in Kathmandu, Nepal | Infinity Advertising',
    description: 'Infinity Advertising Pvt. Ltd. is a full-fledged advertising and brand development agency in Tripureshwor, Kathmandu, Nepal. Brand Development, Advertising Solutions, and Event Management.',
    canonicalUrl: `${SITE_URL}/`,
    activeNav: 'home',
    depth: 0,
    schema: baseBusinessSchema,
    bodyContent
  });

  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Built: index.html');
}

// =============================================================================
// 2. ABOUT PAGE (/about/)
// =============================================================================
function buildAboutPage() {
  const crumbs = [
    { label: 'Home', url: '../' },
    { label: 'About Us', url: './' }
  ];

  const bodyContent = `
    <header class="subpage-hero">
      <div class="container">
        <div class="subpage-hero-content">
          <span class="badge-label subpage-hero-eyebrow">ABOUT INFINITY ADVERTISING</span>
          <h1>An Odyssey of Creativity &amp; Strategic Advertising in <em>Kathmandu</em></h1>
          <p class="lead">
            Infinity Advertising Pvt. Ltd. is a full-fledged advertising agency based in Tripureshwor, Kathmandu, involved in creating, planning, and handling advertising and promotional strategic determinants.
          </p>
        </div>
      </div>
    </header>

    <!-- SECTION: WHO WE ARE -->
    <section class="section section-editorial-intro" aria-labelledby="who-we-are-heading">
      <div class="container">
        <div class="editorial-grid">
          <div>
            <span class="badge-label section-label">WHO WE ARE</span>
            <h2 id="who-we-are-heading" class="editorial-headline">
              Providing organizations with <em>sales-driven inspirations.</em>
            </h2>
          </div>
          <div class="editorial-body">
            <p class="lead-paragraph">
              Infinity Advertising Pvt. Ltd. operates with a view to provide a better platform to display a precise brand recognition of clients’ products or services.
            </p>
            <p class="body-paragraph">
              We deliver valuable advertising solutions to our clients with our original strategic methods and creative thinking, backed up by execution and technical excellence. Providing organizations with our sales-driven inspirations has helped them achieve all their commercial objectives.
            </p>
            <p class="body-paragraph">
              Through our careful and innovative sellable creative work, we have inspired brand loyalty, impressed audiences with our original designs, and enhanced existing brand images for companies across Nepal.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: OUR PHILOSOPHY -->
    <section class="section philosophy-banner" aria-labelledby="philosophy-heading">
      <div class="philosophy-bg-accent" aria-hidden="true"></div>
      <div class="container">
        <div class="philosophy-layout">
          <div>
            <span class="badge-label philosophy-badge">OUR OPERATING PHILOSOPHY</span>
            <h2 id="philosophy-heading">Measurable Results &amp; Sustainable, <em>Profitable Growth.</em></h2>
            <p>
              We deliver measurable results that mean our clients achieve sustainable, profitable growth. We deliver exactly what you need. Our projects create an outcome that proves you made the right decision in choosing Infinity as your partner.
            </p>
            <p>
              Our philosophy is to apply our services where we can deliver an optimum return on investment for our clients. We believe that the most successful businesses have focused on "results" brought about by a sales-driven campaign.
            </p>
          </div>
          <div class="philosophy-points">
            <div class="point-card">
              <div class="point-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div class="point-content">
                <h4>Measurable ROI Focus</h4>
                <p>Applying services where they yield tangible business growth and sales conversion.</p>
              </div>
            </div>
            <div class="point-card">
              <div class="point-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div class="point-content">
                <h4>On Budget &amp; On Time</h4>
                <p>A refined 5-step process ensuring projects are executed without delays or budget creep.</p>
              </div>
            </div>
            <div class="point-card">
              <div class="point-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div class="point-content">
                <h4>Deep Local Insight</h4>
                <p>Grounded in the realities and consumer behaviors of Kathmandu and Nepali markets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: OUR PROCESS -->
    <section class="section section-process" aria-labelledby="about-process-heading">
      <div class="container">
        <div class="section-header-centered">
          <span class="badge-label section-label">HOW WE WORK</span>
          <h2 id="about-process-heading">A Highly Refined 5-Step Process</h2>
          <p>At Infinity, we understand that the most effective advertising solutions are derived from a clear understanding of our clients' business, their goals and objectives.</p>
        </div>

        <div class="process-steps-track">
          ${PROCESS_STEPS.map(p => `
            <div class="process-step-item">
              <span class="step-num-badge">${p.step} — STEP</span>
              <h3 class="step-action-title">${p.name}</h3>
              <p class="step-desc">${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION: OUR PEOPLE -->
    <section class="section section-why-us" aria-labelledby="about-people-heading">
      <div class="container">
        <div class="section-header-centered">
          <span class="badge-label section-label">OUR TEAM &amp; CULTURE</span>
          <h2 id="about-people-heading">The People Behind <em>Infinity</em></h2>
          <p style="color:var(--text-light-secondary);">
            At Infinity we are a group of talented, hard-working, and creative advertising professionals who enjoy coming to work every morning in high spirits to create great work.
          </p>
        </div>

        <div class="people-themes-grid">
          ${PEOPLE_THEMES.map(t => `
            <div class="theme-card">
              <span class="theme-index">${t.index} / CULTURE</span>
              <h3>${t.title}</h3>
              <p>${t.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- LOCATION RELEVANCE -->
    <section class="section" style="background-color:var(--bg-white);" aria-labelledby="location-heading">
      <div class="container">
        <div class="editorial-grid">
          <div>
            <span class="badge-label section-label">AGENCY HEADQUARTERS</span>
            <h2 id="location-heading">Strategically Located in <em>Tripureshwor</em></h2>
          </div>
          <div>
            <p class="body-paragraph">
              Situated at Blue Star Complex, 6th Floor (609) in Tripureshwor, Kathmandu, Infinity operates from one of the capital's premier commercial junctions. Our presence in Tripureshwor provides convenient proximity to media houses, national broadcasters, and major commercial districts.
            </p>
            <div style="margin-top:1.5rem;">
              <a class="btn btn-primary" href="../contact/">
                Visit Our Office
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${renderFinalCta(1)}
  `;

  const html = renderPage({
    title: 'About Us | Infinity Advertising Pvt. Ltd. Kathmandu',
    description: 'Learn about Infinity Advertising Pvt. Ltd., a full-fledged advertising agency in Tripureshwor, Kathmandu, Nepal. Our philosophy, 5-step process, people, and culture.',
    canonicalUrl: `${SITE_URL}/about/`,
    activeNav: 'about',
    depth: 1,
    crumbs,
    schema: {
      ...baseBusinessSchema,
      "@type": "AboutPage"
    },
    bodyContent
  });

  ensureDir('about/index.html');
  fs.writeFileSync('about/index.html', html, 'utf8');
  console.log('Built: about/index.html');
}

// =============================================================================
// 3. SERVICES OVERVIEW PAGE (/services/)
// =============================================================================
function buildServicesPage() {
  const crumbs = [
    { label: 'Home', url: '../' },
    { label: 'Services', url: './' }
  ];

  const bodyContent = `
    <header class="subpage-hero">
      <div class="container">
        <div class="subpage-hero-content">
          <span class="badge-label subpage-hero-eyebrow">OUR CAPABILITIES</span>
          <h1>Comprehensive Advertising &amp; <em>Brand Development</em> Services</h1>
          <p class="lead">
            We deliver original strategic methods and creative sales thinking, backed up by execution and technical excellence across three major pillars.
          </p>
        </div>
      </div>
    </header>

    <!-- 3 PILLARS DETAILED -->
    <section class="section section-services-overview">
      <div class="container">
        <div class="services-pillars-grid">
          <!-- Pillar 1 -->
          <article class="pillar-card">
            <div class="pillar-card-header">
              <span class="pillar-number">PILLAR 01</span>
              <img src="../assets/images/brand-development.svg" alt="Brand Development Icon" style="width:60px; height:40px; object-fit:contain;" />
            </div>
            <h3>Brand Development</h3>
            <p class="description">
              We provide unique services in developing and identifying new brands, selling techniques used in maximizing revenues, packaging/bundling, and brand communication elements.
            </p>
            <div class="pillar-capabilities-list">
              <span class="capability-chip">Communication Development</span>
              <span class="capability-chip">Brand Name Creation</span>
              <span class="capability-chip">Brand Identity (Logo)</span>
              <span class="capability-chip">Slogans &amp; Taglines</span>
              <span class="capability-chip">Marketing Collateral</span>
              <span class="capability-chip">Brochures &amp; Newsletters</span>
              <span class="capability-chip">Sales Kit Development</span>
              <span class="capability-chip">Proposals &amp; Presentations</span>
            </div>
            <div class="pillar-footer">
              <a class="pillar-link" href="./brand-development/">
                Full Brand Development Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>

          <!-- Pillar 2 -->
          <article class="pillar-card">
            <div class="pillar-card-header">
              <span class="pillar-number">PILLAR 02</span>
              <img src="../assets/images/advertising-solutions.svg" alt="Advertising Solutions Icon" style="width:60px; height:40px; object-fit:contain;" />
            </div>
            <h3>Advertising Solutions</h3>
            <p class="description">
              Advertising is considered the main vehicle that carries our sales-driven concepts to the target audience. We deliver value through creative design and technical execution.
            </p>
            <div class="pillar-capabilities-list">
              <span class="capability-chip">Strategic ATL Campaigns</span>
              <span class="capability-chip">Daily Newspapers &amp; Magazines</span>
              <span class="capability-chip">Radio (Jingle / Radiospot)</span>
              <span class="capability-chip">TV Commercials (TVC)</span>
              <span class="capability-chip">Digital &amp; Social Media</span>
              <span class="capability-chip">BTL Designs &amp; Activities</span>
              <span class="capability-chip">Hoardings &amp; Billboards</span>
              <span class="capability-chip">Street Pole Banners</span>
              <span class="capability-chip">Point of Purchase (POP)</span>
            </div>
            <div class="pillar-footer">
              <a class="pillar-link" href="./advertising-solutions/">
                Full Advertising Solutions Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>

          <!-- Pillar 3 -->
          <article class="pillar-card">
            <div class="pillar-card-header">
              <span class="pillar-number">PILLAR 03</span>
              <img src="../assets/images/event-management.svg" alt="Event Management Icon" style="width:60px; height:40px; object-fit:contain;" />
            </div>
            <h3>Event Management</h3>
            <p class="description">
              Full-service on-ground event management, brand activations, promotional stalls, and technical execution, documented through professional photography and videography.
            </p>
            <div class="pillar-capabilities-list">
              <span class="capability-chip">On-Ground Event Management</span>
              <span class="capability-chip">Corporate &amp; Promotional Stalls</span>
              <span class="capability-chip">Stage &amp; Backdrop Production</span>
              <span class="capability-chip">Commercial Photography</span>
              <span class="capability-chip">Commercial Videography</span>
              <span class="capability-chip">BTL Promotional Integration</span>
            </div>
            <div class="pillar-footer">
              <a class="pillar-link" href="./event-management/">
                Full Event Management Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- PROCESS INTEGRATION -->
    <section class="section section-process">
      <div class="container">
        <div class="section-header-centered">
          <span class="badge-label section-label">INTEGRATED WORKFLOW</span>
          <h2>How Our Process Powers Every Service</h2>
          <p>Every branding project, advertising campaign, and event activation follows our 5-step methodology: Listen, Think, Solve, Execute, and Launch.</p>
        </div>

        <div class="process-steps-track">
          ${PROCESS_STEPS.map(p => `
            <div class="process-step-item">
              <span class="step-num-badge">${p.step} — STEP</span>
              <h3 class="step-action-title">${p.name}</h3>
              <p class="step-desc">${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    ${renderFinalCta(1)}
  `;

  const html = renderPage({
    title: 'Advertising Services in Kathmandu, Nepal | Infinity Advertising',
    description: 'Explore core agency services from Infinity Advertising Pvt. Ltd.: Brand Development, Strategic ATL/BTL Advertising Solutions, and Event Management in Nepal.',
    canonicalUrl: `${SITE_URL}/services/`,
    activeNav: 'services',
    depth: 1,
    crumbs,
    schema: {
      ...baseBusinessSchema,
      "@type": "Service"
    },
    bodyContent
  });

  ensureDir('services/index.html');
  fs.writeFileSync('services/index.html', html, 'utf8');
  console.log('Built: services/index.html');
}

// =============================================================================
// 4. INDIVIDUAL SERVICE: BRAND DEVELOPMENT (/services/brand-development/)
// =============================================================================
function buildBrandDevelopmentPage() {
  const crumbs = [
    { label: 'Home', url: '../../' },
    { label: 'Services', url: '../' },
    { label: 'Brand Development', url: './' }
  ];

  const bodyContent = `
    <header class="subpage-hero">
      <div class="container">
        <div class="subpage-hero-content">
          <span class="badge-label subpage-hero-eyebrow">SERVICE PILLAR 01</span>
          <h1>Brand Development Agency in <em>Nepal</em></h1>
          <p class="lead">
            We provide unique services in developing and identifying new brands, selling techniques used in maximizing revenues, packaging/bundling, and brand communication elements.
          </p>
        </div>
      </div>
    </header>

    <!-- SECTION: CAPABILITIES -->
    <section class="section" style="background-color:var(--bg-white);" aria-labelledby="brand-cap-title">
      <div class="container">
        <div class="editorial-grid">
          <div>
            <span class="badge-label section-label">DOCUMENTED CAPABILITIES</span>
            <h2 id="brand-cap-title">Building Brands That <em>Achieve Targets</em></h2>
            <p class="body-paragraph" style="margin-top:1rem;">
              Our objective is to support businesses achieve targets through structured communication and sales enablement.
            </p>
          </div>
          <div>
            <div class="key-highlights-grid" style="margin-top:0; border-top:none; padding-top:0;">
              <div class="highlight-box">
                <h4>Communication Development</h4>
                <p>Crafting coherent brand messaging that informs how customers and markets perceive your value.</p>
              </div>
              <div class="highlight-box">
                <h4>Brand Name Creation</h4>
                <p>Developing distinctive, phonetically memorable, and strategically aligned brand names.</p>
              </div>
              <div class="highlight-box">
                <h4>Brand Identity (Logo) &amp; Slogan</h4>
                <p>Visual mark creation, color guidelines, typography hierarchy, and evocative slogans.</p>
              </div>
              <div class="highlight-box">
                <h4>Marketing Collateral &amp; Brochures</h4>
                <p>Design of high-impact brochures, newsletters, catalogs, and customer-facing materials.</p>
              </div>
              <div class="highlight-box">
                <h4>Sales Kit Development</h4>
                <p>Dossiers, proposals, presentations, and packages covering all material a salesperson needs for closing a sale.</p>
              </div>
              <div class="highlight-box">
                <h4>Packaging &amp; Bundling</h4>
                <p>Physical package design, label hierarchy, and commercial bundling strategies to maximize revenue.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: PROCESS FOR BRANDING -->
    <section class="section section-process">
      <div class="container">
        <div class="section-header-centered">
          <span class="badge-label section-label">METHODOLOGY</span>
          <h2>The Brand Development Journey</h2>
          <p>From initial discovery to full market rollout, our 5-step process ensures strategic alignment.</p>
        </div>

        <div class="process-steps-track">
          ${PROCESS_STEPS.map(p => `
            <div class="process-step-item">
              <span class="step-num-badge">${p.step} — STEP</span>
              <h3 class="step-action-title">${p.name}</h3>
              <p class="step-desc">${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION: FAQS -->
    <section class="section section-faq" aria-labelledby="brand-faq-heading">
      <div class="container">
        <div class="section-header-centered">
          <span class="badge-label section-label">QUESTIONS &amp; ANSWERS</span>
          <h2 id="brand-faq-heading">Frequently Asked Questions on Brand Development</h2>
          <p>Clear answers to common questions regarding brand identity and collateral creation.</p>
        </div>

        <div class="faq-accordion">
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>What is included in Infinity's brand identity deliverables?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="faq-answer">
              <p>Our brand identity deliverables include comprehensive brand communication development, brand name creation, visual logo design, brand slogan, color and typographic guidelines, and marketing collateral specifications.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How do sales kits support revenue generation?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="faq-answer">
              <p>As documented in our corporate profile, sales kit development includes proposals, presentations, product documentation, and packages covering all materials a salesperson needs for closing a sale, helping your business achieve its targets.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>Can Infinity help with rebranding existing Nepali organizations?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="faq-answer">
              <p>Yes. Through careful and innovative sellable creative work, we enhance existing brand images and inspire renewed brand loyalty while preserving established brand equity in local markets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${renderFinalCta(2)}
  `;

  const html = renderPage({
    title: 'Brand Development Agency in Nepal | Infinity Advertising',
    description: 'Infinity Advertising Pvt. Ltd. provides brand development, logo design, brand naming, slogans, sales kits, and marketing collateral in Kathmandu, Nepal.',
    canonicalUrl: `${SITE_URL}/services/brand-development/`,
    activeNav: 'services-brand',
    depth: 2,
    crumbs,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Brand Development Services",
      "provider": baseBusinessSchema,
      "serviceType": "Brand Development",
      "areaServed": "Nepal",
      "description": "Comprehensive brand development including communication development, brand name creation, logo design, slogan creation, brochures, newsletters, and sales kit development."
    },
    bodyContent
  });

  ensureDir('services/brand-development/index.html');
  fs.writeFileSync('services/brand-development/index.html', html, 'utf8');
  console.log('Built: services/brand-development/index.html');
}

// =============================================================================
// 5. INDIVIDUAL SERVICE: ADVERTISING SOLUTIONS (/services/advertising-solutions/)
// =============================================================================
function buildAdvertisingSolutionsPage() {
  const crumbs = [
    { label: 'Home', url: '../../' },
    { label: 'Services', url: '../' },
    { label: 'Advertising Solutions', url: './' }
  ];

  const bodyContent = `
    <header class="subpage-hero">
      <div class="container">
        <div class="subpage-hero-content">
          <span class="badge-label subpage-hero-eyebrow">SERVICE PILLAR 02</span>
          <h1>Advertising Agency in <em>Kathmandu, Nepal</em></h1>
          <p class="lead">
            At Infinity, advertising is considered the main vehicle that carries our sales-driven concepts to the target audience. We deliver value with original strategic sales thinking, backed up by creative design and technical excellence.
          </p>
        </div>
      </div>
    </header>

    <!-- SECTION: ATL & BTL CAPABILITIES -->
    <section class="section" style="background-color:var(--bg-white);" aria-labelledby="ad-cap-heading">
      <div class="container">
        <div class="editorial-grid">
          <div>
            <span class="badge-label section-label">TWO CORE VEHICLES</span>
            <h2 id="ad-cap-heading">Strategic ATL Campaigns &amp; <em>BTL Activities</em></h2>
            <p class="body-paragraph" style="margin-top:1rem;">
              Providing companies with our creative inspirations has helped them achieve all their commercial objectives.
            </p>
          </div>
          <div>
            <div style="margin-bottom:2.5rem;">
              <h3 style="font-size:1.4rem; color:var(--brand-primary); margin-bottom:1rem;">Strategic ATL Campaigns</h3>
              <p class="body-paragraph" style="margin-bottom:1rem;">Above-the-line mass media placements that command broad attention and top-of-mind brand recognition:</p>
              <ul style="padding-left:1.25rem; display:flex; flex-direction:column; gap:0.5rem; color:var(--text-dark-secondary);">
                <li><strong>Print Media:</strong> National daily newspapers and leading magazines.</li>
                <li><strong>Electronic Media (Radio):</strong> Creative jingles and commercial radio spots.</li>
                <li><strong>Electronic Media (TV):</strong> High-production TV commercials (TVC) broadcast on major networks.</li>
                <li><strong>Digital &amp; Social Media:</strong> Targeted digital campaigns across leading social platforms.</li>
              </ul>
            </div>

            <div id="hoardings">
              <h3 style="font-size:1.4rem; color:var(--brand-accent); margin-bottom:1rem;">BTL Designs &amp; Activities</h3>
              <p class="body-paragraph" style="margin-bottom:1rem;">Below-the-line targeted outdoor and retail marketing determinants that drive immediate point-of-sale engagement:</p>
              <ul style="padding-left:1.25rem; display:flex; flex-direction:column; gap:0.5rem; color:var(--text-dark-secondary);">
                <li><strong>Hoarding Boards:</strong> Prime outdoor billboard placements in strategic Kathmandu and highway corridors.</li>
                <li><strong>Street Pole Banners:</strong> High-frequency street pole banners across key transit routes.</li>
                <li><strong>POP Materials:</strong> Point-of-purchase displays, promotional counters, standees, and retail shelf talkers.</li>
                <li><strong>Commercial Photography:</strong> Professional commercial photography capturing campaigns, products, and activations.</li>
                <li><strong>Commercial Videography:</strong> Broadcast and digital video production, documentation, and editing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: PROCESS -->
    <section class="section section-process">
      <div class="container">
        <div class="section-header-centered">
          <span class="badge-label section-label">CAMPAIGN METHODOLOGY</span>
          <h2>Executing Campaigns On Budget &amp; On Time</h2>
          <p>Our refined in-house workflow ensures precise campaign rollout across media channels.</p>
        </div>

        <div class="process-steps-track">
          ${PROCESS_STEPS.map(p => `
            <div class="process-step-item">
              <span class="step-num-badge">${p.step} — STEP</span>
              <h3 class="step-action-title">${p.name}</h3>
              <p class="step-desc">${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FAQS -->
    <section class="section section-faq" aria-labelledby="ad-faq-heading">
      <div class="container">
        <div class="section-header-centered">
          <span class="badge-label section-label">ADVERTISING FAQS</span>
          <h2 id="ad-faq-heading">Frequently Asked Questions on Advertising Solutions</h2>
        </div>

        <div class="faq-accordion">
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>What ATL media channels does Infinity Advertising handle?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="faq-answer">
              <p>As documented in our company profile, our Strategic ATL campaigns cover Print Media (Daily Newspapers, Magazines etc.) and Electronic Media (Radio Jingles/Radiospots, TV Commercials, and Digital Social Media).</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>What outdoor BTL advertising solutions are available?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="faq-answer">
              <p>We handle prominent outdoor Hoarding boards, roadside Pole banners, and Point of Purchase (POP) materials, alongside event activations, commercial photography, and videography.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${renderFinalCta(2)}
  `;

  const html = renderPage({
    title: 'Advertising Agency in Kathmandu, Nepal | Infinity Advertising',
    description: 'Full-fledged advertising solutions from Infinity Advertising in Tripureshwor, Kathmandu. Strategic ATL campaigns, Print, Radio, TVC, Hoardings, Pole Banners, POP materials.',
    canonicalUrl: `${SITE_URL}/services/advertising-solutions/`,
    activeNav: 'services-ad',
    depth: 2,
    crumbs,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Advertising Solutions",
      "provider": baseBusinessSchema,
      "serviceType": "Advertising & Campaign Management",
      "areaServed": "Nepal",
      "description": "Strategic ATL campaigns (Daily Newspapers, Magazines, Radio Jingles, TV Commercials, Digital Media) and BTL designs and activities (Hoardings, Pole banners, POP materials, Photography, Videography)."
    },
    bodyContent
  });

  ensureDir('services/advertising-solutions/index.html');
  fs.writeFileSync('services/advertising-solutions/index.html', html, 'utf8');
  console.log('Built: services/advertising-solutions/index.html');
}

// =============================================================================
// 6. INDIVIDUAL SERVICE: EVENT MANAGEMENT (/services/event-management/)
// =============================================================================
function buildEventManagementPage() {
  const crumbs = [
    { label: 'Home', url: '../../' },
    { label: 'Services', url: '../' },
    { label: 'Event Management', url: './' }
  ];

  const bodyContent = `
    <header class="subpage-hero">
      <div class="container">
        <div class="subpage-hero-content">
          <span class="badge-label subpage-hero-eyebrow">SERVICE PILLAR 03</span>
          <h1>Event Management Services in <em>Kathmandu</em></h1>
          <p class="lead">
            Documented on-ground event management, brand activations, promotional setups, and experiential staging, fully integrated with commercial photography and videography.
          </p>
        </div>
      </div>
    </header>

    <!-- SECTION: EVENT CAPABILITIES -->
    <section class="section" style="background-color:var(--bg-white);" aria-labelledby="event-cap-heading">
      <div class="container">
        <div class="editorial-grid">
          <div>
            <span class="badge-label section-label">EXPERIENTIAL &amp; ON-GROUND</span>
            <h2 id="event-cap-heading">Bringing Brands Closer to <em>Audiences</em></h2>
            <p class="body-paragraph" style="margin-top:1rem;">
              Event management at Infinity connects creative strategy with physical, memorable brand experiences.
            </p>
          </div>
          <div>
            <div class="key-highlights-grid" style="margin-top:0; border-top:none; padding-top:0;">
              <div class="highlight-box">
                <h4>Event Management &amp; Planning</h4>
                <p>Strategic coordination of corporate events, industry exhibitions, and on-ground promotional activations.</p>
              </div>
              <div class="highlight-box">
                <h4>Experiential Staging &amp; POP</h4>
                <p>Branded stage backdrops, entrance archways, and point-of-purchase promotional setups.</p>
              </div>
              <div class="highlight-box" id="media">
                <h4>Commercial Photography</h4>
                <p>Professional event and promotional photography ensuring permanent visual documentation of your brand.</p>
              </div>
              <div class="highlight-box">
                <h4>Commercial Videography</h4>
                <p>Comprehensive event filming, highlight reels, and commercial video assets for ongoing media use.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: PROCESS -->
    <section class="section section-process">
      <div class="container">
        <div class="section-header-centered">
          <span class="badge-label section-label">EVENT METHODOLOGY</span>
          <h2>Flawless Event Execution</h2>
          <p>Delivered on budget and on schedule through our proven 5-step operational workflow.</p>
        </div>

        <div class="process-steps-track">
          ${PROCESS_STEPS.map(p => `
            <div class="process-step-item">
              <span class="step-num-badge">${p.step} — STEP</span>
              <h3 class="step-action-title">${p.name}</h3>
              <p class="step-desc">${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FAQS -->
    <section class="section section-faq" aria-labelledby="event-faq-heading">
      <div class="container">
        <div class="section-header-centered">
          <span class="badge-label section-label">EVENT FAQS</span>
          <h2 id="event-faq-heading">Frequently Asked Questions on Event Management</h2>
        </div>

        <div class="faq-accordion">
          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>How are photography and videography integrated into events?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="faq-answer">
              <p>Commercial photography and videography are built into our BTL and event services. Our in-house production team captures key moments, executive presentations, and attendee interactions to produce assets for digital, PR, and promotional distribution.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
              <span>Does Infinity handle corporate and promotional event setups?</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="faq-answer">
              <p>Yes. Our event capabilities encompass concept development, venue branding, stage backdrops, POP displays, and full on-ground coordination.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${renderFinalCta(2)}
  `;

  const html = renderPage({
    title: 'Event Management Services in Kathmandu | Infinity Advertising',
    description: 'Professional event management, brand activations, promotional staging, and commercial photography & videography in Kathmandu, Nepal by Infinity Advertising.',
    canonicalUrl: `${SITE_URL}/services/event-management/`,
    activeNav: 'services-event',
    depth: 2,
    crumbs,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Event Management Services",
      "provider": baseBusinessSchema,
      "serviceType": "Event Management & Production",
      "areaServed": "Nepal",
      "description": "On-ground event management, brand activations, stage production, commercial photography, and videography."
    },
    bodyContent
  });

  ensureDir('services/event-management/index.html');
  fs.writeFileSync('services/event-management/index.html', html, 'utf8');
  console.log('Built: services/event-management/index.html');
}

// =============================================================================
// 7. PORTFOLIO PAGE (/portfolio/)
// =============================================================================
function buildPortfolioPage() {
  const crumbs = [
    { label: 'Home', url: '../' },
    { label: 'Portfolio', url: './' }
  ];

  const casesHtml = PORTFOLIO_CASES.map(item => `
    <article class="case-card" data-category="${item.category}">
      <div class="case-media-frame">
        <span class="case-badge-pill">${item.categoryLabel}</span>
        <img src="../assets/images/${item.image}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="case-body">
        <span class="case-client">${item.client}</span>
        <h3 class="case-title">${item.title}</h3>
        <p class="case-desc">${item.summary}</p>
        <div class="case-breakdown-box">
          <div class="case-phase">
            <strong>Problem / Objective:</strong>
            <span>${item.problem}</span>
          </div>
          <div class="case-phase">
            <strong>Strategy:</strong>
            <span>${item.strategy}</span>
          </div>
          <div class="case-phase">
            <strong>Creative Solution:</strong>
            <span>${item.solution}</span>
          </div>
          <div class="case-phase">
            <strong>Execution:</strong>
            <span>${item.execution}</span>
          </div>
          <div class="case-phase">
            <strong>Outcome:</strong>
            <span>${item.outcome}</span>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  const bodyContent = `
    <header class="subpage-hero">
      <div class="container">
        <div class="subpage-hero-content">
          <span class="badge-label subpage-hero-eyebrow">OUR PORTFOLIO</span>
          <h1>Featured Work &amp; <em>Strategic Case Studies</em></h1>
          <p class="lead">
            Exemplifying our problem-solving methodologies, strategic determinants, and creative executions across documented client sectors.
          </p>
        </div>
      </div>
    </header>

    <section class="section section-portfolio">
      <div class="container">
        <!-- Filter Tabs -->
        <div class="portfolio-filter-bar">
          <button class="portfolio-filter-btn active" type="button" data-filter="all">All Disciplines</button>
          <button class="portfolio-filter-btn" type="button" data-filter="branding">Brand Development</button>
          <button class="portfolio-filter-btn" type="button" data-filter="advertising">Advertising Solutions</button>
          <button class="portfolio-filter-btn" type="button" data-filter="events">Event Management</button>
        </div>

        <div class="portfolio-grid">
          ${casesHtml}
        </div>

        <div class="verified-disclaimer-card" style="margin-top:3.5rem;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--brand-primary); flex-shrink:0;"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          <p>
            <strong>Portfolio Disclosure:</strong> Case studies illustrate strategic frameworks, execution methodologies, and service capabilities grounded in documented client sectors. No speculative metrics or unverified claims are utilized.
          </p>
        </div>
      </div>
    </section>

    ${renderFinalCta(1)}
  `;

  const html = renderPage({
    title: 'Work & Portfolio | Infinity Advertising Kathmandu',
    description: 'Explore featured work, branding suites, ATL/BTL advertising campaigns, and event executions by Infinity Advertising Pvt. Ltd. in Kathmandu, Nepal.',
    canonicalUrl: `${SITE_URL}/portfolio/`,
    activeNav: 'portfolio',
    depth: 1,
    crumbs,
    schema: {
      ...baseBusinessSchema,
      "@type": "CollectionPage"
    },
    bodyContent
  });

  ensureDir('portfolio/index.html');
  fs.writeFileSync('portfolio/index.html', html, 'utf8');
  console.log('Built: portfolio/index.html');
}

// =============================================================================
// 8. CLIENTS PAGE (/clients/)
// =============================================================================
function buildClientsPage() {
  const crumbs = [
    { label: 'Home', url: '../' },
    { label: 'Clients', url: './' }
  ];

  const clientsHtml = CLIENTS_DATA.map(c => `
    <div class="client-card" data-industry="${c.industry}">
      <span class="client-category-tag">${c.label}</span>
      <h3 class="client-name">${c.name}</h3>
      <span class="client-status">Documented Client</span>
    </div>
  `).join('');

  const bodyContent = `
    <header class="subpage-hero">
      <div class="container">
        <div class="subpage-hero-content">
          <span class="badge-label subpage-hero-eyebrow">OUR VALUABLE CLIENTS</span>
          <h1>Trusted by Leading Organizations Across <em>Nepal</em></h1>
          <p class="lead">
            Our clients represent a diverse spectrum of Nepali enterprise, from telecommunications and higher education to specialty coffee, adventure tourism, and healthcare.
          </p>
        </div>
      </div>
    </header>

    <section class="section section-clients">
      <div class="container">
        <!-- Industry Filter Bar -->
        <div class="client-filter-bar">
          <button class="client-filter-btn active" type="button" data-industry="all">All Sectors (${CLIENTS_DATA.length})</button>
          <button class="client-filter-btn" type="button" data-industry="telecom">Telecom &amp; Tech</button>
          <button class="client-filter-btn" type="button" data-industry="healthcare">Healthcare &amp; Pharma</button>
          <button class="client-filter-btn" type="button" data-industry="tourism">Tourism &amp; Hospitality</button>
          <button class="client-filter-btn" type="button" data-industry="coffee">Coffee &amp; Agriculture</button>
          <button class="client-filter-btn" type="button" data-industry="education">Education</button>
          <button class="client-filter-btn" type="button" data-industry="trading">Trading &amp; Enterprise</button>
          <button class="client-filter-btn" type="button" data-industry="social">Social Empowerment</button>
        </div>

        <div class="clients-grid">
          ${clientsHtml}
        </div>

        <div class="verified-disclaimer-card">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--brand-primary); flex-shrink:0;"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          <p>
            <strong>Official Source Verification:</strong> All 24 client organizations listed above are documented directly in Infinity Advertising Pvt. Ltd.'s official corporate profile. This roster reflects historical and portfolio client engagements.
          </p>
        </div>
      </div>
    </section>

    ${renderFinalCta(1)}
  `;

  const html = renderPage({
    title: 'Our Valuable Clients | Infinity Advertising Pvt. Ltd.',
    description: 'View the 24 documented corporate clients of Infinity Advertising Pvt. Ltd. across telecommunications, education, healthcare, tourism, and agriculture in Nepal.',
    canonicalUrl: `${SITE_URL}/clients/`,
    activeNav: 'clients',
    depth: 1,
    crumbs,
    schema: {
      ...baseBusinessSchema,
      "@type": "CollectionPage"
    },
    bodyContent
  });

  ensureDir('clients/index.html');
  fs.writeFileSync('clients/index.html', html, 'utf8');
  console.log('Built: clients/index.html');
}

// =============================================================================
// 9. BLOG HUB PAGE (/blog/)
// =============================================================================
function buildBlogHubPage() {
  const crumbs = [
    { label: 'Home', url: '../' },
    { label: 'Insights', url: './' }
  ];

  const blogCardsHtml = BLOG_POSTS.map(post => `
    <article class="article-card">
      <div class="article-card-header">
        <div class="article-meta">
          <span class="article-category">${post.category}</span>
          <span>·</span>
          <span>${post.readTime}</span>
        </div>
        <h3><a href="./${post.slug}/">${post.title}</a></h3>
      </div>
      <div class="article-card-body">
        <p class="article-excerpt">${post.excerpt}</p>
        <div class="article-card-footer">
          <span style="font-size:0.8rem; color:#64748b;">${post.date}</span>
          <a class="read-more-link" href="./${post.slug}/">
            Read Article
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');

  const bodyContent = `
    <header class="subpage-hero">
      <div class="container">
        <div class="subpage-hero-content">
          <span class="badge-label subpage-hero-eyebrow">AGENCY PERSPECTIVES</span>
          <h1>Advertising &amp; Branding <em>Insights</em></h1>
          <p class="lead">
            Strategic guides, practical knowledge, and analytical perspectives on branding, ATL/BTL advertising, and campaign planning in Nepal.
          </p>
        </div>
      </div>
    </header>

    <section class="section section-blog">
      <div class="container">
        <div class="blog-grid">
          ${blogCardsHtml}
        </div>
      </div>
    </section>

    ${renderFinalCta(1)}
  `;

  const html = renderPage({
    title: 'Advertising & Branding Insights | Infinity Advertising',
    description: 'Explore strategic advertising guides, ATL/BTL analyses, brand development roadmaps, and agency selection advice for businesses in Nepal.',
    canonicalUrl: `${SITE_URL}/blog/`,
    activeNav: 'blog',
    depth: 1,
    crumbs,
    schema: {
      ...baseBusinessSchema,
      "@type": "Blog"
    },
    bodyContent
  });

  ensureDir('blog/index.html');
  fs.writeFileSync('blog/index.html', html, 'utf8');
  console.log('Built: blog/index.html');
}

// =============================================================================
// 10. INDIVIDUAL BLOG POST PAGES (/blog/[slug]/)
// =============================================================================
function buildIndividualBlogPages() {
  BLOG_POSTS.forEach(post => {
    const crumbs = [
      { label: 'Home', url: '../../' },
      { label: 'Insights', url: '../' },
      { label: post.title, url: './' }
    ];

    const bodyContent = `
      <article class="single-article-view">
        <header class="subpage-hero">
          <div class="container">
            <div class="subpage-hero-content">
              <div class="article-meta" style="margin-bottom:1rem;">
                <span class="article-category">${post.category}</span>
                <span>·</span>
                <span>${post.date}</span>
                <span>·</span>
                <span>${post.readTime}</span>
              </div>
              <h1 style="font-size:clamp(2.2rem, 4vw, 3.5rem); margin-bottom:1.25rem;">${post.title}</h1>
              <p class="lead">${post.excerpt}</p>
              <div style="margin-top:1.5rem; font-family:var(--font-mono); font-size:0.82rem; color:var(--text-dark-muted);">
                Written by: <strong style="color:var(--text-dark-primary);">${post.author}</strong> · Infinity Advertising Pvt. Ltd.
              </div>
            </div>
          </div>
        </header>

        <section class="section" style="background-color:var(--bg-white);">
          <div class="container">
            <div class="single-article-content">
              ${post.content}

              <div style="margin-top:3.5rem; padding-top:2rem; border-top:1px solid var(--border-light); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
                <a class="btn btn-secondary" href="../">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="transform:rotate(180deg);"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Back to All Insights
                </a>
                <a class="btn btn-primary" href="../../contact/">
                  Discuss Your Project With Us
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>

      ${renderFinalCta(2)}
    `;

    const html = renderPage({
      title: `${post.title} | Infinity Advertising`,
      description: post.excerpt,
      canonicalUrl: `${SITE_URL}/blog/${post.slug}/`,
      activeNav: 'blog',
      depth: 2,
      crumbs,
      schema: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
          "@type": "Organization",
          "name": COMPANY_NAME,
          "url": SITE_URL
        },
        "publisher": baseBusinessSchema,
        "datePublished": "2026-03-01T08:00:00+05:45",
        "mainEntityOfPage": `${SITE_URL}/blog/${post.slug}/`,
        "image": `${SITE_URL}/assets/infinity-logo.png`
      },
      bodyContent
    });

    const outPath = `blog/${post.slug}/index.html`;
    ensureDir(outPath);
    fs.writeFileSync(outPath, html, 'utf8');
    console.log(`Built: ${outPath}`);
  });
}

// =============================================================================
// 11. CONTACT PAGE (/contact/)
// =============================================================================
function buildContactPage() {
  const crumbs = [
    { label: 'Home', url: '../' },
    { label: 'Contact', url: './' }
  ];

  const bodyContent = `
    <header class="subpage-hero">
      <div class="container">
        <div class="subpage-hero-content">
          <span class="badge-label subpage-hero-eyebrow">GET IN TOUCH</span>
          <h1>Contact Our Agency in <em>Kathmandu</em></h1>
          <p class="lead">
            Let's discuss how original strategic methods, creative sales thinking, and technical excellence can drive your brand forward.
          </p>
        </div>
      </div>
    </header>

    <section class="section section-contact">
      <div class="container">
        <div class="contact-layout">
          <!-- Information Panel -->
          <div class="contact-info-panel">
            <div>
              <span class="badge-label section-label">VERIFIED COORDINATES</span>
              <h2>Let's Start a Conversation</h2>
              <p class="body-paragraph" style="margin-top:0.75rem;">
                Visit our office or get in touch directly via telephone or email to discuss your brand development, advertising campaign, or event requirements.
              </p>
            </div>

            <div class="contact-card-item">
              <div class="contact-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="contact-card-text">
                <h4>Office Location</h4>
                <p>Infinity Advertising Pvt. Ltd.<br />${ADDRESS_STREET}<br />${ADDRESS_CITY}, ${ADDRESS_COUNTRY}</p>
                <p style="font-size:0.8rem; color:#64748b; margin-top:0.35rem;">Landmark: Near Dasharath Stadium / Thapathali junction</p>
              </div>
            </div>

            <div class="contact-card-item">
              <div class="contact-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div class="contact-card-text">
                <h4>Direct Phone</h4>
                <p><a href="tel:+97715347277" style="font-size:1.15rem; font-weight:700; color:var(--brand-primary);">${PHONE}</a></p>
                <p style="font-size:0.82rem; color:#64748b;">Direct office line in Kathmandu</p>
              </div>
            </div>

            <div class="contact-card-item">
              <div class="contact-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div class="contact-card-text">
                <h4>Email Inquiries</h4>
                <p><a href="mailto:${EMAIL}" style="font-weight:700; color:var(--brand-primary);">${EMAIL}</a></p>
                <p style="font-size:0.82rem; color:#64748b;">For official RFP, briefs &amp; business queries</p>
              </div>
            </div>

            <div class="contact-card-item">
              <div class="contact-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div class="contact-card-text">
                <h4>Business Hours</h4>
                <p>[Add verified business hours here]</p>
                <p style="font-size:0.82rem; color:#64748b;">Official hours to be confirmed by management</p>
              </div>
            </div>
          </div>

          <!-- Interactive Contact Form -->
          <div class="contact-form-panel">
            <h3 style="font-size:1.6rem; margin-bottom:0.75rem;">Send a Project Brief</h3>
            <p style="font-size:0.95rem; color:#64748b; margin-bottom:2rem;">Fill out the details below and our team will get back to you promptly.</p>

            <form id="agency-contact-form" novalidate>
              <div class="form-grid">
                <div class="form-group">
                  <label for="contact-name">Your Full Name *</label>
                  <input type="text" id="contact-name" name="name" class="form-control" placeholder="e.g. Anil Sharma" required />
                </div>

                <div class="form-group">
                  <label for="contact-email">Email Address *</label>
                  <input type="email" id="contact-email" name="email" class="form-control" placeholder="e.g. anil@company.com.np" required />
                </div>

                <div class="form-group">
                  <label for="contact-phone">Phone / Mobile</label>
                  <input type="tel" id="contact-phone" name="phone" class="form-control" placeholder="+977-98XXXXXXXX" />
                </div>

                <div class="form-group">
                  <label for="contact-org">Organization / Company</label>
                  <input type="text" id="contact-org" name="organization" class="form-control" placeholder="Company Name" />
                </div>

                <div class="form-group full-width">
                  <label for="contact-service">Primary Service of Interest</label>
                  <select id="contact-service" name="service" class="form-control">
                    <option value="brand-development">Brand Development (Naming, Identity, Collateral, Sales Kits)</option>
                    <option value="advertising-solutions">Advertising Solutions (ATL Campaigns, Hoardings, Radio, TVC)</option>
                    <option value="event-management">Event Management (On-Ground, Experiential, Stalls, Photo/Video)</option>
                    <option value="integrated">Integrated 360° Agency Partnership</option>
                  </select>
                </div>

                <div class="form-group full-width">
                  <label for="contact-message">Project Brief &amp; Objectives *</label>
                  <textarea id="contact-message" name="message" class="form-control" placeholder="Tell us about what you want to achieve, your timeline, and any specific goals..." required></textarea>
                </div>

                <div class="form-group full-width">
                  <button type="submit" class="btn btn-primary" style="width:100%;">
                    Submit Project Inquiry
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                  <div id="contact-form-status" class="form-status" role="alert"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  const html = renderPage({
    title: 'Contact Infinity Advertising | Tripureshwor, Kathmandu, Nepal',
    description: 'Contact Infinity Advertising Pvt. Ltd. at Blue Star Complex, 6th Floor (609), Tripureshwor, Kathmandu. Phone: +977-1-5347277, Email: infinity.nep@gmail.com.',
    canonicalUrl: `${SITE_URL}/contact/`,
    activeNav: 'contact',
    depth: 1,
    crumbs,
    schema: {
      ...baseBusinessSchema,
      "@type": "ContactPage"
    },
    bodyContent
  });

  ensureDir('contact/index.html');
  fs.writeFileSync('contact/index.html', html, 'utf8');
  console.log('Built: contact/index.html');
}

// =============================================================================
// 12. 404 PAGE (/404.html)
// =============================================================================
function build404Page() {
  const bodyContent = `
    <section class="section" style="min-height:70vh; display:flex; align-items:center; text-align:center;">
      <div class="container" style="max-width:700px;">
        <span class="badge-label" style="color:var(--brand-primary); margin-bottom:1rem; display:inline-block;">ERROR 404</span>
        <h1 style="font-size:clamp(3rem, 7vw, 5.5rem); margin-bottom:1.5rem;">Page Not Found</h1>
        <p class="body-paragraph" style="font-size:1.2rem; margin-bottom:2.5rem;">
          The page you are looking for does not exist or may have been moved. Let's redirect your odyssey back to the right place.
        </p>
        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
          <a class="btn btn-primary" href="./">
            Return to Homepage
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a class="btn btn-secondary" href="./contact/">
            Contact Agency
          </a>
        </div>
      </div>
    </section>
  `;

  const html = renderPage({
    title: 'Page Not Found (404) | Infinity Advertising',
    description: 'The requested page could not be found. Navigate back to Infinity Advertising Pvt. Ltd. homepage.',
    canonicalUrl: `${SITE_URL}/404.html`,
    activeNav: '',
    depth: 0,
    bodyContent
  });

  fs.writeFileSync('404.html', html, 'utf8');
  console.log('Built: 404.html');
}

// =============================================================================
// 13. SITEMAP.XML & ROBOTS.TXT
// =============================================================================
function buildSitemapAndRobots() {
  const urls = [
    { loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${SITE_URL}/about/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${SITE_URL}/services/`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${SITE_URL}/services/brand-development/`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${SITE_URL}/services/advertising-solutions/`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${SITE_URL}/services/event-management/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${SITE_URL}/portfolio/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${SITE_URL}/clients/`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${SITE_URL}/blog/`, priority: '0.7', changefreq: 'weekly' },
    { loc: `${SITE_URL}/contact/`, priority: '0.8', changefreq: 'monthly' }
  ];

  BLOG_POSTS.forEach(p => {
    urls.push({
      loc: `${SITE_URL}/blog/${p.slug}/`,
      priority: '0.7',
      changefreq: 'monthly'
    });
  });

  const today = '2026-10-05';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('sitemap.xml', xml, 'utf8');
  console.log('Built: sitemap.xml');

  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  fs.writeFileSync('robots.txt', robots, 'utf8');
  console.log('Built: robots.txt');
}

// Master Build Execution
function buildAll() {
  console.log('--- Starting Infinity Advertising Website Build ---');
  buildHomePage();
  buildAboutPage();
  buildServicesPage();
  buildBrandDevelopmentPage();
  buildAdvertisingSolutionsPage();
  buildEventManagementPage();
  buildPortfolioPage();
  buildClientsPage();
  buildBlogHubPage();
  buildIndividualBlogPages();
  buildContactPage();
  build404Page();
  buildSitemapAndRobots();
  console.log('--- Build Completed Successfully! ---');
}

buildAll();
