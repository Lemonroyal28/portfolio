# Portfolio Migration to Next.js - Design Specification

**Date:** 2026-05-14
**Author:** Shivaan Satish & Claude Sonnet 4.5
**Status:** Approved

## Executive Summary

Convert the existing static HTML portfolio into a modern Next.js/React/TypeScript application while preserving the exact visual styling, layout identity, colors, spacing, and overall design feel. The migration focuses on framework modernization, improved maintainability through component architecture, and content enhancement for the CUMLAUDE.AI role.

## Goals

1. **Framework Migration**: Convert from static HTML to Next.js 15 App Router with TypeScript
2. **Visual Preservation**: Maintain exact current styling (colors, fonts, spacing, effects, animations)
3. **Maintainability**: Implement component-based architecture with separated data layer
4. **Content Enhancement**: Update CUMLAUDE.AI role description and add Technology Stack & Architecture section
5. **Skills Enhancement**: Expand Skills section to show broader technical capabilities
6. **Deployment**: Ensure Vercel compatibility and successful production deployment

## Non-Goals

- Redesigning the visual identity or creating a new design system
- Adding heavy animations or motion effects
- Changing the single-page portfolio structure
- Adding authentication, CMS, or dynamic backend features
- Exposing API keys, secrets, or private environment variables

## Current State Analysis

### Existing Portfolio Structure
- Single `index.html` file with 1,230 lines
- Inline CSS (803 lines) and inline JavaScript (31 lines)
- 7 image assets in `/assets` directory
- Already integrated with Vercel Analytics

### Current Design Characteristics
- **Color Palette**: Dark theme with `#08090c` (bg), `#111318` (surface), `#6c63ff` (accent purple), `#3b82f6` (blue)
- **Typography**: Space Grotesk (headings), Space Mono (monospace)
- **Visual Effects**: Noise texture overlay, gradient accent bar, backdrop blur, radial glows, pulsing animations
- **Layout Patterns**: Timeline-based experience/education, card-based projects/activities, pill-based skills
- **Responsive Design**: Mobile hamburger menu, flexible layouts, mobile-specific photo positioning

### Current Content Sections
1. Hero (profile photo, name, summary, contact links)
2. Experience (3 roles: CUMLAUDE.AI, Royal Wagenborg, S&B Machine Works)
3. Education (MSc and BSc from University of Groningen)
4. Skills (Technical and Methodologies)
5. Languages (English, Tamil, Dutch)
6. Projects (4 project cards)
7. Extracurriculars (3 activities)
8. CTA (call-to-action)
9. Footer

## Architecture Design

### Technology Stack

**Core Framework:**
- Next.js 15 App Router
- React 19
- TypeScript
- Node.js (runtime)

**Styling:**
- Global CSS (preserving current styles exactly)
- CSS Custom Properties (already in use)
- No CSS frameworks (preserving hand-crafted CSS)

**Development Tools:**
- ESLint (Next.js default config)
- TypeScript compiler
- Git for version control

**Deployment:**
- Vercel (existing platform)
- Vercel Analytics (already integrated)

### Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout with metadata, fonts, analytics
│   ├── page.tsx                # Main portfolio page
│   ├── globals.css             # All current CSS (preserved exactly)
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx              # Fixed navigation with mobile menu
│   ├── Hero.tsx                # Hero section with photo, name, links
│   ├── Section.tsx             # Reusable section wrapper with title
│   ├── Experience/
│   │   ├── ExperienceSection.tsx
│   │   ├── TimelineEntry.tsx   # Individual experience entry
│   │   └── StackArchitecture.tsx  # NEW: Stack & Architecture section
│   ├── Education/
│   │   └── EducationSection.tsx
│   ├── Skills/
│   │   ├── SkillsSection.tsx
│   │   └── SkillGroup.tsx      # Technical/Methodologies groups
│   ├── Languages/
│   │   └── LanguagesSection.tsx
│   ├── Projects/
│   │   ├── ProjectsSection.tsx
│   │   └── ProjectCard.tsx
│   ├── Activities/
│   │   ├── ActivitiesSection.tsx
│   │   └── ActivityCard.tsx
│   ├── CTA.tsx                 # Call-to-action section
│   ├── Footer.tsx
│   └── Divider.tsx             # Gradient divider line
├── data/
│   ├── profile.ts              # Name, title, summary, location, links
│   ├── experience.ts           # Work experience entries
│   ├── stackArchitecture.ts    # NEW: CUMLAUDE.AI tech stack & architecture
│   ├── education.ts            # Education entries
│   ├── skills.ts               # Technical skills & methodologies (enhanced)
│   ├── languages.ts            # Language proficiencies
│   ├── projects.ts             # Project cards
│   └── activities.ts           # Extracurricular activities
├── lib/
│   └── utils.ts                # Utility functions (if needed)
├── public/
│   └── assets/                 # All existing images
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

### Component Architecture

#### Core Layout Components

**Navbar (`components/Navbar.tsx`)**
- Fixed position with backdrop blur effect
- Mobile hamburger menu with slide-down animation
- Active section highlighting on scroll
- Navigation items: Home, Experience, Education, Skills, Languages, Projects, Activities

**Hero (`components/Hero.tsx`)**
- Profile photo with gradient border and glow
- Name with gradient accent text
- Role labels and summary paragraph
- Contact links (email, LinkedIn)
- Location display
- Radial glow background effect (preserved)
- Responsive: photo repositions on mobile

**Divider (`components/Divider.tsx`)**
- Horizontal gradient line separator between sections

**Footer (`components/Footer.tsx`)**
- Name, contact links, location
- Gradient border top

#### Content Components

**TimelineEntry (`components/Experience/TimelineEntry.tsx`)**
- Reusable for both Experience and Education sections
- Props:
  - `date`: string (e.g., "Jan 2026 — Present")
  - `role`: string
  - `company`: string
  - `companyUrl`: string (optional)
  - `location`: string
  - `logo`: string (path to logo image)
  - `description`: string (optional)
  - `bulletPoints`: string[] (optional)
  - `tags`: string[] (optional)
  - `thesis`: string (optional, for education)
  - `isNow`: boolean (for pulsing dot animation)
- Preserves timeline line, dots, and pulsing animation for current role

**StackArchitecture (`components/Experience/StackArchitecture.tsx`)** - NEW
- Appears immediately after CUMLAUDE.AI entry
- Two subsections:
  1. **Technology Stack**: Categorized grid of tech badges
     - Core Framework
     - Frontend
     - State Management
     - Backend & API Layer
     - Database & Storage
     - AI Infrastructure
     - Automation & Workflows
     - Security & Authentication
     - Infrastructure
     - Development Tools
  2. **Architecture Overview**:
     - Text summary describing server-first architecture
     - Flow diagram (text-based): Frontend → Server Actions → Business Logic → AI/Data/Workflows
     - Principles list: Multi-tenant by default, Security by default, Type safety, etc.
- Styled to match existing card patterns with accent borders
- Responsive: categories stack on mobile

**SkillGroup (`components/Skills/SkillGroup.tsx`)**
- Props: `label` (group name), `skills` (array of skill names), `highlight` (boolean for accent styling)
- Pills match existing styling (accent background, borders, hover effects)

**ProjectCard (`components/Projects/ProjectCard.tsx`)**
- Props: `label`, `title`, `description`, `tags`
- Matches existing card styling (surface background, border, hover lift effect)

**ActivityCard (`components/Activities/ActivityCard.tsx`)**
- Props: `name`, `nameUrl`, `logo`, `years`, `description`, `bulletPoints`
- Existing styling preserved (extra-card classes)

#### Interactive Components

**ScrollReveal** (implemented within components using client-side hook)
- Uses IntersectionObserver API
- Adds `visible` class when elements enter viewport
- Triggers opacity and translateY transitions
- Matches current scroll reveal behavior

**MobileMenu** (within Navbar)
- Toggle button shows/hides mobile navigation
- Slide-down animation from top
- Auto-closes when nav link clicked

### Data Layer Architecture

All portfolio content will be stored in TypeScript files with proper type definitions:

**Type Definitions:**
```typescript
interface Experience {
  date: string;
  isNow?: boolean;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  logo: string;
  description?: string;
  bulletPoints?: string[];
  tags?: string[];
}

interface Education {
  date: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  logo: string;
  bulletPoints?: string[];
  thesis?: string;
}

interface StackCategory {
  category: string;
  items: string[];
}

interface StackArchitecture {
  title: string;
  subtitle: string;
  categories: StackCategory[];
  architecture: {
    description: string;
    flow: string[];
    principles: string[];
  };
}

interface SkillGroup {
  label: string;
  skills: string[];
  highlight?: boolean;
}

interface Language {
  name: string;
  proficiency: string;
  percentage: number;
}

interface Project {
  label: string;
  title: string;
  description: string;
  tags: string[];
}

interface Activity {
  name: string;
  nameUrl?: string;
  logo: string;
  logoOnDark?: boolean;
  years: string;
  description?: string;
  bulletPoints: string[];
}

interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  labels: string[];
  summary: string;
  email: string;
  linkedin: string;
  location: string;
  coordinates: string;
  photo: string;
}
```

**Data Files:**
- `data/profile.ts`: Name, title, summary, location, contact links
- `data/experience.ts`: Array of Experience objects
- `data/stackArchitecture.ts`: StackArchitecture object for CUMLAUDE.AI
- `data/education.ts`: Array of Education objects
- `data/skills.ts`: Array of SkillGroup objects (enhanced with broader skills)
- `data/languages.ts`: Array of Language objects
- `data/projects.ts`: Array of Project objects
- `data/activities.ts`: Array of Activity objects

Components import and map over these data structures, separating content from presentation.

## Styling Strategy

### CSS Preservation Approach

**Global CSS (`app/globals.css`):**
- Copy entire current CSS block (803 lines) with zero changes
- Preserve all:
  - CSS custom properties (`:root` variables)
  - Reset styles
  - Noise texture overlay (`body::before` with SVG data URI)
  - Gradient accent bar (`body::after`)
  - Container and layout styles
  - All section-specific styles (hero, timeline, cards, pills, etc.)
  - Animations (pulse, reveal, hover effects)
  - Responsive media queries
  - Print styles

**Font Loading:**
- Use `next/font/google` in `app/layout.tsx` to load Space Grotesk and Space Mono
- Apply fonts via CSS custom properties (matches current approach)

**Component Styling:**
- Use existing class names directly in JSX (e.g., `className="hero-content"`)
- No CSS Modules needed unless adding new component-specific styles
- New Stack & Architecture section will follow existing patterns:
  - Use existing card styles or similar
  - Use existing pill/tag styles for technologies
  - Use existing section-title style for heading

**Effects Preservation:**
- Noise texture SVG data URI: kept exactly as-is
- `backdrop-filter: blur(16px)` on navigation: preserved
- Gradient borders, box-shadows, glows: all unchanged
- Pulsing animation on "NOW" badge: kept with same keyframes
- Scroll reveal transitions: implemented with IntersectionObserver
- Hover transitions: all preserved

### New Styles for Stack & Architecture Section

Minimal new CSS needed, following existing patterns:

```css
/* Stack & Architecture section - follows existing card patterns */
.stack-section {
  margin-top: 48px;
  padding: 32px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  border-radius: 10px;
}

.stack-section-title {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
}

.stack-section-subtitle {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 32px;
}

.stack-category {
  margin-bottom: 24px;
}

.stack-category-name {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.architecture-flow {
  list-style: none;
  margin: 16px 0;
}

.architecture-flow li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 10px;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.architecture-flow li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}
```

## Content Updates

### CUMLAUDE.AI Experience Entry (Updated)

**Current content focuses on:** Data architecture, Azure Synapse, Microsoft Fabric, Power BI, ETL processes

**New content combines:** Full-stack SaaS development (primary focus) + data engineering capabilities

**Updated entry:**
```typescript
{
  date: "Jan 2026 — Present",
  isNow: true,
  role: "Junior Full Stack Engineer",
  company: "CUMLAUDE.AI",
  companyUrl: "https://cumlaude.ai",
  location: "Kampen, NL",
  logo: "/assets/cumlaude.jpeg",
  description: "I develop and improve SaaS platforms for companies that need automation, AI-enhanced workflows, and secure digital solutions. My work focuses on building scalable platform features, integrating APIs and external software services, managing backend logic and authentication, and strengthening the security and maintainability of delivered applications.",
  bulletPoints: [
    "Develop SaaS platforms for companies requiring automation and AI-enabled workflow solutions",
    "Build multi-tenant platform architecture with secure authentication, authorization, and data isolation",
    "Integrate AI capabilities (Claude models, embeddings, RAG pipelines) into production applications",
    "Implement backend logic, API routes, server actions, and real-time data synchronization",
    "Work with data pipelines, ETL processes, and analytics dashboards to support client insights",
    "Manage deployment infrastructure, environment configuration, and automated workflows"
  ],
  tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Vercel AI SDK", "Inngest"]
}
```

### Technology Stack & Architecture Section (New)

**Placement:** Immediately after CUMLAUDE.AI timeline entry

**Section heading:** "Technology Stack & Architecture"

**Subtitle:** "Production-grade multi-tenant SaaS stack for automation platforms, AI-native workflows, and secure client solutions"

**Technology Categories:**

1. **Core Framework**
   - Next.js 15 App Router
   - React 19
   - TypeScript
   - Server Components
   - Server Actions
   - API Routes
   - Edge Middleware

2. **Frontend**
   - Tailwind CSS v4
   - shadcn/ui
   - Lucide React
   - next-themes
   - Responsive UI architecture
   - Reusable component systems

3. **State Management**
   - TanStack Query
   - Zustand
   - React local state
   - Client-side caching
   - Server-state synchronization

4. **Backend & API Layer**
   - Next.js Server Actions
   - Route Handlers
   - Protected action wrappers
   - Data Access Layer patterns
   - Webhook handling
   - Streaming AI endpoints

5. **Database & Storage**
   - Supabase
   - PostgreSQL
   - Row-Level Security
   - Supabase Auth
   - Supabase Storage
   - pgvector
   - Full-text search
   - Audit trails
   - Soft-delete patterns

6. **AI Infrastructure**
   - Vercel AI SDK
   - Anthropic Claude models
   - Cohere embeddings
   - Cohere reranking
   - Tool calling
   - Streaming chat
   - RAG pipelines
   - Hybrid search

7. **Automation & Workflows**
   - Inngest
   - Durable background jobs
   - Event-driven workflows
   - Retry logic
   - Scheduled processes
   - XState v5 state machines

8. **Security & Authentication**
   - Supabase Auth
   - JWT sessions
   - RBAC
   - Multi-tenant authorization
   - Row-Level Security policies
   - Zod validation
   - Rate limiting
   - CSRF protection
   - Audit logging

9. **Infrastructure**
   - Vercel
   - Serverless deployment
   - Edge middleware
   - Upstash Redis
   - Automatic Git deployments
   - Environment variable management

10. **Development Tools**
    - ESLint
    - Vitest
    - tsx
    - Zod
    - Supabase type generation
    - Git-based workflows
    - Type-safe development

**Architecture Overview:**

**Description:** "Server-first architecture where secure frontend interactions connect to protected server actions, AI endpoints, business logic, Supabase-backed data layers, and background workflows."

**Flow:**
1. Frontend using Next.js and React Server Components
2. Protected Server Actions and API Routes
3. Business logic through DAL and service layers
4. AI handlers for RAG, streaming, and tool execution
5. Supabase PostgreSQL with RLS for tenant isolation
6. Inngest workflows for background jobs and process automation

**Principles:**
- Multi-tenant by default
- Security by default
- Type safety across the stack
- Server-first application design
- Reusable architecture patterns
- AI-native platform capabilities
- Maintainable and scalable SaaS delivery

### Enhanced Skills Section

**Technical Skills (Enhanced):**
- **Languages & Core**: Python, SQL, TypeScript, JavaScript, Matlab, R-Programming
- **Modern Web Stack**: Next.js, React, Node.js, HTML/CSS
- **Data & Analytics**: Azure Synapse, Microsoft Fabric, Power BI, Jupyter, ETL pipelines
- **Cloud & Infrastructure**: Vercel, Supabase, Azure, Serverless
- **Automation & Integration**: Power Automate, Power Apps, API integration, Webhooks
- **Databases**: PostgreSQL, SQL Server, Vector databases
- **AI & ML**: LLM integration, RAG systems, Embeddings, Machine Learning
- **Tools**: Git, VS Code, CAD, Vensim, Microsoft Office suite

**Methodologies & Frameworks (Enhanced):**
- Agile / Scrum
- Lean Manufacturing
- ETL Design & Data Modelling
- Systems Thinking & Process Optimisation
- Digital Twin Modelling
- Multi-tenant SaaS Architecture
- API Design & Integration
- Project Management & Stakeholder Analysis
- Security Best Practices (RBAC, RLS, Auth)
- Type-Safe Development

**Presentation:**
- Same pill/badge styling as current design
- Organized into logical groups
- Shows progression from academic tools to modern production stack
- Demonstrates breadth: engineering foundation + modern SaaS + data engineering

## Migration Implementation Plan

### Phase 1: Next.js Project Setup
1. Initialize Next.js 15 project with App Router
   ```bash
   npx create-next-app@latest portfolio --typescript --app --no-tailwind --eslint
   ```
2. Configure `next.config.ts`:
   - Enable image optimization
   - Set up proper asset handling
3. Configure `tsconfig.json`:
   - Enable strict mode
   - Set up path aliases if needed
4. Copy all assets from `/assets` to `/public/assets`
5. Test basic Next.js development server

### Phase 2: Styling Migration
1. Copy entire CSS block from `index.html` to `app/globals.css`
2. Set up font loading in `app/layout.tsx`:
   ```typescript
   import { Space_Grotesk, Space_Mono } from 'next/font/google';

   const spaceGrotesk = Space_Grotesk({
     subsets: ['latin'],
     variable: '--font-heading',
     display: 'swap'
   });

   const spaceMono = Space_Mono({
     weight: ['400', '700'],
     subsets: ['latin'],
     variable: '--font-mono',
     display: 'swap'
   });
   ```
3. Configure metadata in layout:
   - Title: "Shivaan Satish — CV"
   - Description: Professional summary
   - Viewport settings
4. Add Vercel Analytics script reference
5. Test styling in development

### Phase 3: Data Layer Implementation
1. Create TypeScript interfaces in `lib/types.ts` or inline in data files
2. Populate data files:
   - `data/profile.ts`: Extract hero content
   - `data/experience.ts`: Current + updated CUMLAUDE.AI entry
   - `data/stackArchitecture.ts`: New tech stack & architecture data
   - `data/education.ts`: Education timeline
   - `data/skills.ts`: Enhanced skills with broader technologies
   - `data/languages.ts`: Language proficiencies
   - `data/projects.ts`: Project cards
   - `data/activities.ts`: Extracurricular activities
3. Validate all data exports correctly
4. Ensure type safety across all data files

### Phase 4: Component Development (Order of Implementation)

**Iteration 1: Layout Components**
1. `components/Navbar.tsx`
   - Fixed position with blur backdrop
   - Mobile toggle state management
   - Active section highlighting (client component)
2. `components/Footer.tsx`
   - Name, links, location
   - Gradient border top
3. `components/Divider.tsx`
   - Simple gradient line

**Iteration 2: Hero Section**
1. `components/Hero.tsx`
   - Profile data integration
   - Image with Next.js Image component
   - Responsive layout
   - Radial glow effect preserved

**Iteration 3: Experience Section**
1. `components/Experience/TimelineEntry.tsx`
   - Reusable timeline item
   - Props for all variations
   - Conditional rendering (bullets, tags, thesis)
   - Pulsing animation for `isNow` prop
2. `components/Experience/StackArchitecture.tsx`
   - Tech stack categories grid
   - Architecture overview text
   - Flow and principles lists
   - Matches existing card styling
3. `components/Experience/ExperienceSection.tsx`
   - Maps over experience data
   - Renders TimelineEntry components
   - Conditionally renders StackArchitecture after CUMLAUDE.AI

**Iteration 4: Other Content Sections**
1. `components/Education/EducationSection.tsx`
   - Reuses TimelineEntry component
2. `components/Skills/SkillsSection.tsx` & `SkillGroup.tsx`
   - Enhanced skills data
   - Pill styling preserved
3. `components/Languages/LanguagesSection.tsx`
   - Language cards with proficiency bars
4. `components/Projects/ProjectsSection.tsx` & `ProjectCard.tsx`
   - Project grid layout
5. `components/Activities/ActivitiesSection.tsx` & `ActivityCard.tsx`
   - Activity cards with logos
6. `components/CTA.tsx`
   - Call-to-action section

**Iteration 5: Interactivity**
1. Implement scroll reveal:
   - Create custom hook or component for IntersectionObserver
   - Apply to all `.reveal` elements
   - Trigger `visible` class addition
2. Implement mobile menu toggle:
   - State management in Navbar
   - Open/close animation
   - Auto-close on link click
3. Implement active nav highlighting:
   - Scroll position tracking
   - Active class on current section link

### Phase 5: Page Assembly
1. Compose all sections in `app/page.tsx`:
   ```typescript
   export default function Home() {
     return (
       <>
         <Navbar />
         <Hero />
         <Divider />
         <ExperienceSection />
         <Divider />
         <EducationSection />
         <Divider />
         <SkillsSection />
         <Divider />
         <LanguagesSection />
         <Divider />
         <ProjectsSection />
         <Divider />
         <ActivitiesSection />
         <Divider />
         <CTA />
         <Footer />
       </>
     );
   }
   ```
2. Verify all imports resolve correctly
3. Test full page flow in development

### Phase 6: Quality Assurance

**Visual Comparison:**
- Side-by-side comparison: Original HTML vs. Next.js version
- Check colors match exactly (use browser DevTools color picker)
- Verify spacing, padding, margins are identical
- Confirm fonts render correctly
- Test all hover effects and transitions
- Verify noise texture, gradient bar, blur effects

**Responsive Testing:**
- Desktop (1920px, 1440px, 1280px)
- Tablet (768px)
- Mobile (375px, 414px)
- Test mobile menu functionality
- Verify hero photo repositioning on mobile
- Check timeline layout on mobile

**Accessibility:**
- Semantic HTML elements (`<nav>`, `<section>`, `<article>`, `<footer>`)
- Proper heading hierarchy (h1, h2, h3)
- ARIA labels on interactive elements
- Keyboard navigation (Tab through all links)
- Focus states visible
- Alt text on all images

**Performance:**
- Run Lighthouse audit
- Target scores: 90+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO
- Check image optimization
- Verify no console errors
- Test page load speed

**Build Validation:**
```bash
npm run build
```
- Must complete with no TypeScript errors
- Must complete with no ESLint errors
- No warnings for missing keys in map functions
- No warnings for unoptimized images

**Cross-browser Testing:**
- Chrome/Edge (Chromium)
- Firefox
- Safari (if available)

### Phase 7: Deployment

**Pre-deployment Checklist:**
- [ ] All components render correctly
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Build succeeds (`npm run build`)
- [ ] Visual comparison passed
- [ ] Responsive design tested
- [ ] Accessibility checked
- [ ] Performance acceptable (Lighthouse)
- [ ] No secrets or API keys in code
- [ ] .gitignore properly configured
- [ ] README updated with setup instructions

**Deployment Steps:**
1. Commit all changes to Git:
   ```bash
   git add .
   git commit -m "Convert portfolio to Next.js with enhanced CUMLAUDE.AI content"
   git push origin main
   ```
2. Deploy to Vercel:
   - Automatic deployment via Git integration (if already connected)
   - Or manual deployment: `vercel --prod`
3. Verify production deployment:
   - Test live URL
   - Check Vercel Analytics integration
   - Verify all images load correctly
   - Test on mobile device
4. Compare production to original portfolio URL

**Post-deployment:**
- Update DNS if needed (likely already configured)
- Monitor Vercel Analytics for any issues
- Archive old `index.html` (keep as backup)

## Risk Mitigation

### Risk: Visual Differences from Original

**Mitigation:**
- Preserve CSS exactly as-is in globals.css
- Use existing class names in components
- Side-by-side visual comparison during development
- Pixel-perfect checks with browser DevTools
- Test all effects (blur, gradients, shadows, animations)

### Risk: TypeScript Type Errors

**Mitigation:**
- Define clear interfaces for all data structures
- Use strict TypeScript configuration
- Validate data files early in development
- Test build frequently (`npm run build`)

### Risk: Mobile Responsiveness Issues

**Mitigation:**
- Test mobile layout at each phase
- Preserve existing media queries exactly
- Test mobile menu functionality thoroughly
- Use Chrome DevTools device emulation

### Risk: Performance Degradation

**Mitigation:**
- Use Next.js Image component for optimization
- Preserve existing lightweight approach (no heavy libraries)
- Monitor bundle size
- Run Lighthouse audits throughout development

### Risk: Breaking Existing Deployment

**Mitigation:**
- Test build locally before deploying
- Use Vercel preview deployments for testing
- Keep backup of original index.html
- Can rollback deployment in Vercel dashboard if needed

## Success Criteria

### Functional Requirements
- [x] Portfolio successfully runs on Next.js 15 with TypeScript
- [x] All sections render correctly (Hero, Experience, Education, Skills, Languages, Projects, Activities, CTA, Footer)
- [x] New Stack & Architecture section displays after CUMLAUDE.AI entry
- [x] Mobile menu works correctly
- [x] Scroll reveal animations function
- [x] All links work (email, LinkedIn, external URLs)
- [x] Navigation highlights active section on scroll

### Visual Requirements
- [x] Color palette matches exactly (dark theme, accent colors)
- [x] Fonts render correctly (Space Grotesk, Space Mono)
- [x] Spacing and layout identical to original
- [x] All effects preserved (noise texture, blur, gradients, glows, pulsing animation)
- [x] Responsive design matches original on all screen sizes
- [x] Hover effects and transitions work identically

### Code Quality Requirements
- [x] TypeScript builds without errors (`npm run build`)
- [x] ESLint passes with no errors
- [x] Components are modular and reusable
- [x] Data is separated into data files
- [x] Proper type safety throughout
- [x] No secrets or private keys in code

### Content Requirements
- [x] CUMLAUDE.AI role updated to Junior Full Stack Engineer
- [x] Role description focuses on SaaS platform development
- [x] Technology Stack section includes all 10 categories
- [x] Architecture Overview explains server-first approach
- [x] Skills section enhanced with broader technologies
- [x] All existing content preserved (education, projects, activities)

### Deployment Requirements
- [x] Successfully deploys to Vercel
- [x] Production URL loads correctly
- [x] Vercel Analytics integrated and working
- [x] No 404 errors for assets or pages
- [x] Performance acceptable (Lighthouse scores)

### Maintainability Requirements
- [x] Easy to update content (change data files only)
- [x] Components are understandable and well-organized
- [x] README includes setup and development instructions
- [x] Clear separation of concerns (data, components, styling)

## Future Enhancements (Out of Scope)

These are explicitly not included in this migration but could be considered later:

- Dark/light mode toggle
- Blog or content management system
- Contact form with backend
- Project detail pages
- Animations beyond current scroll reveal
- Search functionality
- PDF resume download generator
- Multilingual support (Dutch, Tamil)
- Performance monitoring dashboard
- A/B testing different content variations

## Appendix

### File Manifest

**New Files to Create:**
```
app/layout.tsx
app/page.tsx
app/globals.css
components/Navbar.tsx
components/Hero.tsx
components/Divider.tsx
components/Experience/ExperienceSection.tsx
components/Experience/TimelineEntry.tsx
components/Experience/StackArchitecture.tsx
components/Education/EducationSection.tsx
components/Skills/SkillsSection.tsx
components/Skills/SkillGroup.tsx
components/Languages/LanguagesSection.tsx
components/Projects/ProjectsSection.tsx
components/Projects/ProjectCard.tsx
components/Activities/ActivitiesSection.tsx
components/Activities/ActivityCard.tsx
components/CTA.tsx
components/Footer.tsx
data/profile.ts
data/experience.ts
data/stackArchitecture.ts
data/education.ts
data/skills.ts
data/languages.ts
data/projects.ts
data/activities.ts
lib/types.ts (optional, types can be inline)
lib/utils.ts (if needed)
```

**Files to Preserve:**
```
public/assets/ballie.png
public/assets/cumlaude.jpeg
public/assets/footy.webp
public/assets/mamio.png
public/assets/profile.png
public/assets/rug.png
public/assets/wagenborg.png
```

**Files to Archive:**
```
index.html (backup as index.html.bak)
```

### Dependencies

**Required:**
- next: ^15.0.0
- react: ^19.0.0
- react-dom: ^19.0.0
- typescript: ^5.0.0
- @types/node: latest
- @types/react: latest
- @types/react-dom: latest

**No additional dependencies needed** - portfolio is self-contained with no external libraries beyond Next.js and React.

### Testing Checklist

#### Before Deployment
- [ ] Run `npm run dev` - no errors
- [ ] Run `npm run build` - successful build
- [ ] Run `npm run start` - production mode works locally
- [ ] Visual comparison: Original vs. Next.js (desktop)
- [ ] Visual comparison: Original vs. Next.js (mobile)
- [ ] Test mobile menu: open/close/navigation
- [ ] Test scroll reveal: elements fade in on scroll
- [ ] Test active nav: highlights current section
- [ ] Test all external links: open in new tab
- [ ] Test email link: opens mail client
- [ ] Lighthouse audit: acceptable scores
- [ ] TypeScript: no errors
- [ ] ESLint: no errors
- [ ] Check console: no warnings or errors
- [ ] Test on Chrome/Edge
- [ ] Test on Firefox
- [ ] Test on Safari (if available)
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: focus states visible

#### After Deployment
- [ ] Production URL loads
- [ ] Vercel Analytics shows data
- [ ] No 404 errors
- [ ] All images load correctly
- [ ] Test on actual mobile device
- [ ] Compare to original portfolio: visual match
- [ ] Share URL with stakeholders for review

---

**End of Design Specification**
