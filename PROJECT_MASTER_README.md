# BMCCI Digital Gateway - Project Master Document

> **Confidentiality & Usage Note:** This document serves as a comprehensive project overview designed for Team Leads and AI Agents. It outlines what has already been successfully completed (Phase 1 Frontend & Architecture) and explicitly details the roadmap for what we want to build next in Phase 2 (Backend, Node.js Admin Panel, and REST APIs).

---

## 1. Project Overview

The **BMCCI (Bangladesh Malaysia Chamber of Commerce & Industry) Digital Gateway** is a premium, high-performance bilateral business portal. It connects corporate networks, facilitates Foreign Direct Investment (FDI), and promotes joint ventures between Bangladesh and Malaysia.

**Current Status: PHASE 1 COMPLETED (Frontend UI & Architecture)**
The entire frontend presentation layer, routing, and component library have been successfully developed. The current live website is a fully styled, high-fidelity application that demonstrates the entire user journey and business logic using static, pre-rendered HTML.

### Tech Stack & Architecture (Completed Phase 1)

- **Core Technologies:** HTML5, CSS3, Vanilla JavaScript (ES6+).
- **Styling:** Tailwind CSS (utility-first) combined with a custom Design System (`style.css`) for premium micro-animations, glassmorphism, and responsive layouts.
- **Build Tool:** Vite (Development Server & Production Bundler).
- **HTML Injection:** Uses `vite-plugin-html-inject` to maintain a component-based architecture (e.g., injecting reusable `<header>`, `<footer>`, and UI cards across multiple pages) while outputting pure static HTML.
- **Libraries:**
  - **Lucide Icons** (Vector iconography).
  - **Swiper.js** (Touch-enabled carousels and sliders).
  - **Apache ECharts** (Interactive data visualizations for economic intelligence).
  - **Lenis** (Smooth scroll inertia for a premium feel).

---

## 2. Platform Modules & Webflow

The platform is built with a multi-page architecture, ensuring clear navigation and deep-linking capabilities.

1. **Home (`index.html`):** Premium hero section with gradient text, dynamic economic snapshots, trade opportunities, and an interactive events slider.
2. **About Chamber (`about.html`):** History, mission, executive board profiles, and bilateral milestones.
3. **Trade & Investment (`trade.html`):** Detailed breakdown of customs, BEZA economic zones, tax holidays, and current FDI concessions.
4. **Economic Intelligence (`economic-intelligence.html`):** Interactive macro-economic charts (GDP, bilateral trade volumes) using ECharts and downloadable quarterly briefs.
5. **Events & Summits (`events.html`):** Upcoming expos, ministerial councils, and an interactive registration modal.
6. **Membership Experience (`membership.html`):** Membership tiers, benefits, and a multi-step inline application wizard.
7. **Business Directory (`business-directory.html`):** Filtering system to find accredited corporate members by industry and region.
8. **Discover BD & MY (`discover.html`):** Tourism, commercial hubs, and logistics corridors for both nations.
9. **News & Publications (`news.html`):** Press releases, circulars, and a dynamic article reading modal.
10. **Contact (`contact.html`):** Interactive SVG maps, department routing, and inquiry forms.

---

## 3. SEO (Search Engine Optimization) Status

The current architecture is **highly SEO-friendly** by design.

**Current SEO Capabilities:**

- **Static HTML Output:** Because the Vite build process compiles everything into static HTML pages, web crawlers (Googlebot, Bing) can parse 100% of the content instantly without waiting for JavaScript execution.
- **Semantic Structure:** Strict adherence to HTML5 semantics (`<main>`, `<article>`, `<section>`, `<nav>`, and hierarchical `<h1>` through `<h6>` tags).
- **Meta Tags & OpenGraph:** Included rich meta descriptions, keywords, OpenGraph (Facebook/LinkedIn), and Twitter cards on all pages for rich social sharing.
- **Performance:** Blazing fast load times due to minimal JavaScript overhead, achieving excellent Core Web Vitals (LCP, FID, CLS), which is a major ranking factor for Google.

**Future SEO Enhancements (Post-Backend Integration):**

- Generation of dynamic `sitemap.xml` and `robots.txt`.
- Dynamic injection of Meta Tags for individual News Articles and Trade Opportunities using a server-side language or CMS.

---

## 4. Phase 2 Roadmap: Backend, REST APIs, and Admin Panel

To move from prototype to a fully functional production application, the following backend architecture is proposed. This section serves as the prompt for future AI development.

### A. Database Design (Proposed)

A relational database (e.g., **PostgreSQL** or **MySQL**) or a NoSQL document store (**MongoDB**) is required to handle:

- `Users / Members` (Profiles, Tiers, Authentication credentials).
- `Events` (Dates, Locations, Registration lists).
- `Trade Opportunities` (Sector, Value, Status).
- `News & Publications` (Titles, Content, Author, Dates).
- `Inquiries` (Contact form submissions, B2B matchmaking requests).

### B. REST API Architecture

The frontend will transition to fetch dynamic data via REST APIs using `fetch` or `axios` in `app.js`.

- **`GET /api/v1/economic-data`** - Feeds live data to the ECharts indicators.
- **`GET /api/v1/directory`** - Fetches the business directory with search/filter queries.
- **`POST /api/v1/membership/apply`** - Handles the multi-step application wizard submission.
- **`POST /api/v1/events/register`** - Processes event seat bookings.
- **`POST /api/v1/contact`** - Submits general inquiries and routing to specific departments.

### C. Admin Panel (CMS) & Backend Stack

A secure dashboard must be built for the BMCCI Secretariat to manage platform content without coding knowledge.
**Selected Tech Stack:**

- **Backend API:** Node.js with Express.js (providing a robust REST API).
- **Admin Panel Framework:** Custom Dashboard (e.g., using React/Next.js or Vue) integrated seamlessly with the Express.js backend.
- **SEO-Friendly Architecture:** The implementation must prioritize SEO. The Node.js/Express.js backend will ensure all dynamic content (News, Events, Trade Opportunities) is served with proper server-side rendering (SSR), dynamic Meta Tags, OpenGraph data, and structured schema markup to ensure perfect indexing by search engines.
  **Admin Features Needed:**
- CRUD (Create, Read, Update, Delete) operations for News, Events, and Trade Projects.
- Membership Approval Workflow (Pending -> Approved).
- Form Submission viewer (Exporting inquiries to CSV/Excel).

---

## 5. Instructions for AI Agents (Next Steps)

If you are an AI analyzing this document to build the next phase, please follow these steps:

1. **Analyze Frontend Forms:** Review `src/pages/membership.html` (multi-step form), `contact.html` (inquiry form), and `events.html` (registration modal) to map out the required JSON request payloads and Database Schemas.
2. **Design the Schema:** Propose an Entity-Relationship Diagram (ERD) or Mongoose/Prisma schema for the required modules (Members, Events, News).
3. **Initialize Backend:** Set up a Node.js/Express server (or equivalent Python/Django backend).
4. **Implement APIs:** Build out the REST API endpoints defined in Section 4B.
5. **Wire the Frontend:** Replace the hardcoded DOM array mappings in `src/js/app.js` (such as `initDirectoryFilter` and `initNewsModalMapper`) with asynchronous API calls.
