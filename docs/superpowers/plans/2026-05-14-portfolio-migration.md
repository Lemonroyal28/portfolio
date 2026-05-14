# Portfolio Migration to Next.js Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert static HTML portfolio to Next.js 15 with TypeScript, preserving exact visual styling while adding enhanced CUMLAUDE.AI content and technology stack section.

**Architecture:** Next.js App Router with server components, global CSS for styling preservation, TypeScript data files for content management, component-based architecture following existing HTML structure.

**Tech Stack:** Next.js 15, React 19, TypeScript, CSS (preserved from original), next/font/google

---

## File Structure Overview

**New Files to Create:**
```
app/
  layout.tsx                    # Root layout with fonts, metadata, analytics
  page.tsx                      # Main portfolio page composition
  globals.css                   # All CSS from original (preserved exactly)

components/
  Navbar.tsx                    # Fixed nav with mobile menu
  Hero.tsx                      # Hero section with profile
  Divider.tsx                   # Gradient divider line
  Experience/
    ExperienceSection.tsx       # Experience timeline section
    TimelineEntry.tsx           # Reusable timeline item
    StackArchitecture.tsx       # NEW: Tech stack & architecture
  Education/
    EducationSection.tsx        # Education timeline section
  Skills/
    SkillsSection.tsx           # Skills section with groups
  Languages/
    LanguagesSection.tsx        # Language proficiency cards
  Projects/
    ProjectsSection.tsx         # Projects grid section
    ProjectCard.tsx             # Individual project card
  Activities/
    ActivitiesSection.tsx       # Extracurriculars section
    ActivityCard.tsx            # Individual activity card
  CTA.tsx                       # Call-to-action section
  Footer.tsx                    # Footer with links

data/
  profile.ts                    # Personal info, contact, links
  experience.ts                 # Work experience entries
  stackArchitecture.ts          # NEW: CUMLAUDE.AI tech stack data
  education.ts                  # Education entries
  skills.ts                     # Technical skills (enhanced)
  languages.ts                  # Language proficiencies
  projects.ts                   # Project cards
  activities.ts                 # Extracurricular activities

public/
  assets/                       # Existing images (copied)
```

**Files to Preserve:**
- All images in `/assets` → `/public/assets`
- Original `index.html` → `index.html.bak` (backup)

---

## Task 1: Initialize Next.js Project

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `.gitignore`, `app/` directory structure

- [ ] **Step 1: Initialize Next.js 15 with TypeScript**

```bash
npx create-next-app@latest . --typescript --app --no-tailwind --eslint --no-src-dir --import-alias "@/*"
```

When prompted:
- Would you like to use TypeScript? → **Yes**
- Would you like to use ESLint? → **Yes**
- Would you like to use Tailwind CSS? → **No**
- Would you like your code inside a `src/` directory? → **No**
- Would you like to use App Router? → **Yes**
- Would you like to use Turbopack for next dev? → **No**
- Would you like to customize the import alias? → **No**

Expected: Next.js project initialized successfully

- [ ] **Step 2: Verify installation**

```bash
npm run dev
```

Expected: Development server starts on http://localhost:3000
Stop the server with Ctrl+C

- [ ] **Step 3: Configure Next.js for image optimization**

Create/modify `next.config.ts`:

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
```

- [ ] **Step 4: Commit initial setup**

```bash
git add .
git commit -m "chore: initialize Next.js 15 with TypeScript

- Next.js 15 App Router
- TypeScript configuration
- ESLint setup
- No Tailwind (preserving custom CSS)
- Image optimization configured"
```

---

## Task 2: Copy Assets and Create Backup

**Files:**
- Create: `public/assets/` directory
- Copy: All images from `/assets` to `/public/assets`
- Create: `index.html.bak` (backup)

- [ ] **Step 1: Create public assets directory**

```bash
mkdir -p public/assets
```

- [ ] **Step 2: Copy all existing assets**

```bash
cp assets/ballie.png public/assets/
cp assets/cumlaude.jpeg public/assets/
cp assets/footy.webp public/assets/
cp assets/mamio.png public/assets/
cp assets/profile.png public/assets/
cp assets/rug.png public/assets/
cp assets/wagenborg.png public/assets/
```

- [ ] **Step 3: Backup original HTML**

```bash
cp index.html index.html.bak
```

- [ ] **Step 4: Verify assets copied**

```bash
ls -la public/assets/
```

Expected: All 7 image files listed

- [ ] **Step 5: Commit assets**

```bash
git add public/assets/ index.html.bak
git commit -m "chore: copy assets to public directory and backup original HTML"
```

---

## Task 3: Set Up Global CSS

**Files:**
- Create: `app/globals.css`
- Modify: Remove default Next.js styles

- [ ] **Step 1: Read current CSS from HTML**

Already have the CSS from index.html lines 10-803 in context.

- [ ] **Step 2: Create globals.css with complete CSS**

Create `app/globals.css`:

```css
/* ── Reset ────────────────────────────────────────── */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg:         #08090c;
  --surface:    #111318;
  --surface-2:  #181b23;
  --text:       #e4e4e7;
  --text-secondary: #8b8fa3;
  --accent:     #6c63ff;
  --accent-soft: rgba(108, 99, 255, 0.12);
  --accent-glow: rgba(108, 99, 255, 0.25);
  --blue:       #3b82f6;
  --border:     #1e2130;
  --border-light: #282c3e;
  --font-heading: 'Space Grotesk', sans-serif;
  --font-mono:    'Space Mono', monospace;
}

html {
  scroll-behavior: smooth;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-heading);
  font-size: 16px;
  line-height: 1.65;
}

body {
  position: relative;
  overflow-x: hidden;
}

/* ── Noise texture overlay ────────────────────────── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 256px 256px;
  pointer-events: none;
  z-index: 0;
}

/* ── Gradient accent bar ──────────────────────────── */
body::after {
  content: '';
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--blue), var(--accent));
  z-index: 1000;
}

/* ── Container ────────────────────────────────────── */
.container {
  position: relative;
  z-index: 1;
  max-width: 860px;
  margin: 0 auto;
  padding: 0 24px;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s, opacity 0.2s;
}
a:hover { color: var(--blue); }

section {
  padding: 48px 0;
}

/* ── Section titles ───────────────────────────────── */
.section-title {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #7e77ff;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.section-title::before {
  content: '//';
  color: var(--border-light);
}

.section-title::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--border), transparent);
}

/* ── Scroll reveal ────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── Navigation ───────────────────────────────────── */
nav {
  position: fixed;
  top: 2px;
  left: 0; right: 0;
  z-index: 999;
  background: rgba(8, 9, 12, 0.8);
  backdrop-filter: blur(16px) saturate(1.4);
  border-bottom: 1px solid var(--border);
}

nav .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
}

.nav-logo {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 1px;
}

.nav-logo span { color: var(--accent); }

nav ul {
  list-style: none;
  display: flex;
  gap: 28px;
}

nav ul li a {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-secondary);
  transition: color 0.2s;
}

nav ul li a:hover,
nav ul li a.active {
  color: var(--accent);
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.4rem;
  cursor: pointer;
}

/* ── Hero ──────────────────────────────────────────── */
#hero {
  min-height: calc(100svh - 54px);
  display: flex;
  align-items: center;
  padding-top: 20px;
  position: relative;
}

/* Subtle radial glow behind hero */
#hero::before {
  content: '';
  position: absolute;
  top: 15%;
  left: 70%;
  transform: translateX(-50%);
  width: 700px;
  height: 700px;
  background: radial-gradient(ellipse at 50% 50%, rgba(108, 99, 255, 0.07) 0%, rgba(59, 130, 246, 0.03) 40%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 56px;
}

.hero-text { flex: 1; min-width: 0; }

.hero-photo {
  width: 260px;
  height: 260px;
  flex-shrink: 0;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  border: 2px solid var(--border-light);
  outline: 1px solid var(--accent-soft);
  outline-offset: 4px;
  box-shadow: 0 0 60px rgba(108, 99, 255, 0.12);
  order: -1;
  image-rendering: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.hero-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.hero-name {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 10vw, 6.5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -2px;
  color: var(--text);
}

.hero-name .accent {
  background: linear-gradient(135deg, var(--accent), var(--blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-summary {
  margin-top: 28px;
  max-width: 560px;
  font-size: 1rem;
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.8;
}

.hero-links {
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text);
  transition: border-color 0.2s, background 0.2s, transform 0.15s;
}

.hero-link:hover {
  border-color: var(--accent);
  background: var(--accent-soft);
  color: var(--text);
  transform: translateY(-1px);
}

.hero-link svg { opacity: 0.6; }
.hero-link:hover svg { opacity: 1; }

.hero-location {
  margin-top: 48px;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 3px;
  color: var(--border-light);
}

/* ── Divider ──────────────────────────────────────── */
.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border), transparent);
}

/* ── Timeline ──────────────────────────────────────── */
.timeline {
  position: relative;
  padding-left: 28px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background: linear-gradient(180deg, var(--accent) 0%, var(--accent) 40%, var(--border) 70%, var(--border) 100%);
}

.timeline-entry {
  position: relative;
  margin-bottom: 56px;
}

.timeline-entry:last-child { margin-bottom: 0; }

/* Timeline dot */
.timeline-entry::before {
  content: '';
  position: absolute;
  left: -34px;
  top: 7px;
  width: 12px;
  height: 12px;
  border: 2px solid var(--border-light);
  border-radius: 50%;
  background: var(--surface-2);
  z-index: 2;
}

/* Current role dot pulsing */
.timeline-entry.now::before {
  border-color: var(--accent);
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
  animation: pulse 2.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 4px var(--accent-soft); }
  50% { box-shadow: 0 0 0 8px rgba(108, 99, 255, 0.08); }
}

.timeline-date {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 2px;
  color: var(--text-secondary);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.badge-now {
  display: inline-block;
  padding: 2px 8px;
  background: var(--accent);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 4px;
}

.timeline-role {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 4px;
}

.timeline-company {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.company-logo {
  width: 26px;
  height: 26px;
  object-fit: contain;
  border-radius: 5px;
  background: #fff;
  padding: 2px;
}

.timeline-desc {
  color: var(--text-secondary);
  font-size: 0.88rem;
  line-height: 1.75;
}

.timeline-desc ul {
  list-style: none;
  margin-top: 8px;
}

.timeline-desc li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 8px;
}

.timeline-desc li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 1px;
  background: var(--accent);
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
}

.tag {
  padding: 4px 10px;
  background: rgba(108, 99, 255, 0.18);
  border: 1px solid rgba(108, 99, 255, 0.35);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--accent);
}

.timeline-thesis {
  margin-top: 14px;
  padding: 12px 16px;
  background: var(--surface);
  border-left: 2px solid var(--accent);
  border-radius: 0 6px 6px 0;
  font-size: 0.85rem;
  color: var(--text);
}

.timeline-thesis span {
  color: var(--accent);
  font-weight: 500;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* ── Stack & Architecture (NEW) ────────────────────── */
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

.stack-category:last-child {
  margin-bottom: 0;
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

.architecture-section {
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid var(--border);
}

.architecture-description {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 20px;
}

.architecture-flow {
  list-style: none;
  margin: 20px 0;
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

.architecture-principles {
  list-style: none;
  margin-top: 20px;
}

.architecture-principles li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 8px;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.architecture-principles li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 1px;
  background: var(--accent);
}

/* ── Skills ────────────────────────────────────────── */
.skills-block { margin-bottom: 40px; }

.skills-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pill {
  padding: 8px 16px;
  background: rgba(108, 99, 255, 0.18);
  border: 1px solid rgba(108, 99, 255, 0.35);
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--accent);
  transition: border-color 0.2s, background 0.2s, transform 0.15s;
}

.pill:hover {
  border-color: var(--accent);
  background: var(--accent-glow);
  transform: translateY(-1px);
}

.pill.highlight {
  border-color: rgba(108, 99, 255, 0.45);
  color: var(--accent);
}

/* ── Languages ─────────────────────────────────────── */
.lang-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.lang-card {
  padding: 24px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: border-color 0.2s, transform 0.15s;
}

.lang-card:hover {
  border-color: var(--border-light);
  transform: translateY(-2px);
}

.lang-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 4px;
}

.lang-sub {
  font-size: 0.78rem;
  color: var(--text-secondary);
  margin-bottom: 14px;
}

.lang-bar {
  height: 4px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
}

.lang-fill {
  height: 100%;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--accent), var(--blue));
}

/* ── Extracurriculars ──────────────────────────────── */
.extras-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.extra-card {
  padding: 28px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: border-color 0.2s, transform 0.15s;
}

.extra-card:hover {
  border-color: var(--border-light);
  transform: translateY(-2px);
}

.extra-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
}

.extra-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 6px;
}

/* White/light logos on dark bg: give them a subtle bg */
.extra-logo.on-dark {
  background: rgba(255, 255, 255, 0.1);
  padding: 3px;
}

.extra-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
}

a.extra-name:hover {
  color: var(--accent);
}

.extra-years {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 2px;
  color: var(--accent);
  margin-bottom: 14px;
}

.extra-card ul {
  list-style: none;
}

.extra-card li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 6px;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.extra-card li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 1px;
  background: var(--accent);
}

.extra-description {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 10px;
  font-style: italic;
}

/* ── Project cards ─────────────────────────────────── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 20px;
}

.project-card {
  padding: 28px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: border-color 0.2s, transform 0.15s;
}

.project-card:hover {
  border-color: var(--border-light);
  transform: translateY(-2px);
}

.project-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 10px;
  line-height: 1.4;
}

.project-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}

/* ── CTA ───────────────────────────────────────────── */
.cta {
  text-align: center;
  padding: 56px 0;
}

.cta-text {
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: var(--accent);
  color: #fff;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  transition: background 0.2s, transform 0.15s;
}

.cta-btn:hover {
  background: var(--blue);
  color: #fff;
  transform: translateY(-1px);
}

/* ── Footer ────────────────────────────────────────── */
footer {
  padding: 64px 0 36px;
  text-align: center;
  border-top: 1px solid transparent;
  border-image: linear-gradient(90deg, transparent, var(--border-light), var(--accent), var(--border-light), transparent) 1;
}

.footer-name {
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--text);
  margin-bottom: 16px;
}

.footer-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 28px;
}

.footer-row a {
  font-size: 0.82rem;
  color: var(--text-secondary);
  transition: color 0.2s;
}
.footer-row a:hover { color: var(--accent); }

.footer-copy {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 2px;
  color: var(--border-light);
}

/* ── Mobile ────────────────────────────────────────── */
@media (max-width: 768px) {
  nav ul {
    position: fixed;
    top: 54px;
    left: 0; right: 0;
    background: rgba(8, 9, 12, 0.97);
    backdrop-filter: blur(16px);
    flex-direction: column;
    align-items: center;
    padding: 28px 0;
    gap: 20px;
    border-bottom: 1px solid var(--border);
    transform: translateY(-120%);
    transition: transform 0.3s;
  }

  nav ul.open {
    transform: translateY(0);
  }

  .nav-toggle { display: block; }

  section { padding: 40px 0; }

  .hero-content { flex-direction: column; text-align: center; gap: 32px; }
  .hero-photo { width: 200px; height: 200px; order: -1; }
  .hero-name { font-size: clamp(2.5rem, 12vw, 4.5rem); letter-spacing: -1px; }
  .hero-links { justify-content: center; }

  .hero-links { flex-direction: column; }
  .hero-link { justify-content: center; }

  .timeline { padding-left: 22px; }
  .timeline-entry::before { left: -27px; width: 8px; height: 8px; }
}

/* ── Print ─────────────────────────────────────────── */
@media print {
  body::before, body::after, nav { display: none; }
  section { padding: 20px 0; break-inside: avoid; }
  .reveal { opacity: 1; transform: none; }
  html { font-size: 11px; color: #111; background: #fff; }
  .hero-name { font-size: 2.5rem; color: #111; -webkit-text-fill-color: #111; }
  .section-title { color: #333; }
  a { color: #111; }
  .pill, .tag { border-color: #ccc; color: #333; background: #f5f5f5; }
}
```

- [ ] **Step 3: Commit globals.css**

```bash
git add app/globals.css
git commit -m "style: add global CSS from original portfolio

- Preserve all original styling exactly
- Dark theme with purple accent
- Timeline, card, and pill patterns
- Scroll reveal animations
- Mobile responsive styles
- NEW: Stack & Architecture section styles"
```

---

## Task 4: Set Up Root Layout with Fonts

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create root layout with fonts and metadata**

Update `app/layout.tsx`:

```typescript
import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shivaan Satish — CV',
  description: 'Industrial engineer turned full-stack data engineer. I build data systems, automate workflows, and solve operational problems — from maritime compliance to AI-powered dashboards.',
  keywords: ['Shivaan Satish', 'Full Stack Engineer', 'Data Engineer', 'Next.js', 'React', 'TypeScript', 'SaaS', 'AI', 'Automation'],
  authors: [{ name: 'Shivaan Satish' }],
  openGraph: {
    title: 'Shivaan Satish — CV',
    description: 'Junior Full Stack Engineer at CUMLAUDE.AI',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body>
        {children}
        <script defer src="/_vercel/insights/script.js"></script>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify layout compiles**

```bash
npm run dev
```

Expected: No TypeScript errors, server starts successfully
Stop server with Ctrl+C

- [ ] **Step 3: Commit layout**

```bash
git add app/layout.tsx
git commit -m "feat: configure root layout with fonts and metadata

- Load Space Grotesk and Space Mono from Google Fonts
- Add metadata for SEO
- Include Vercel Analytics script
- Apply font CSS variables"
```

---

## Task 5: Create Data Types and Profile Data

**Files:**
- Create: `data/profile.ts`

- [ ] **Step 1: Create profile data file**

Create `data/profile.ts`:

```typescript
export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  labels: string[];
  summary: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  location: string;
  coordinates: string;
  photo: string;
}

export const profile: Profile = {
  name: 'Shivaan Satish',
  firstName: 'Shivaan',
  lastName: 'Satish',
  labels: ['Engineer', 'Developer', 'Problem Solver'],
  summary: 'Industrial engineer turned full-stack data engineer. I build data systems, automate workflows, and solve operational problems — from maritime compliance to AI-powered dashboards.',
  email: 'shivaansat@gmail.com',
  linkedin: 'LinkedIn',
  linkedinUrl: 'https://linkedin.com/in/shivaan-satish-6b8653221',
  location: 'Groningen, NL',
  coordinates: '53.2194° N · 6.5665° E',
  photo: '/assets/profile.png',
};
```

- [ ] **Step 2: Commit profile data**

```bash
git add data/profile.ts
git commit -m "feat: add profile data with type definitions"
```

---

## Task 6: Create Experience Data with Enhanced CUMLAUDE.AI

**Files:**
- Create: `data/experience.ts`

- [ ] **Step 1: Create experience data file**

Create `data/experience.ts`:

```typescript
export interface Experience {
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

export const experiences: Experience[] = [
  {
    date: 'Jan 2026 — Present',
    isNow: true,
    role: 'Junior Full Stack Engineer',
    company: 'CUMLAUDE.AI',
    companyUrl: 'https://cumlaude.ai',
    location: 'Kampen, NL',
    logo: '/assets/cumlaude.jpeg',
    description: 'I develop and improve SaaS platforms for companies that need automation, AI-enhanced workflows, and secure digital solutions. My work focuses on building scalable platform features, integrating APIs and external software services, managing backend logic and authentication, and strengthening the security and maintainability of delivered applications.',
    bulletPoints: [
      'Develop SaaS platforms for companies requiring automation and AI-enabled workflow solutions',
      'Build multi-tenant platform architecture with secure authentication, authorization, and data isolation',
      'Integrate AI capabilities (Claude models, embeddings, RAG pipelines) into production applications',
      'Implement backend logic, API routes, server actions, and real-time data synchronization',
      'Work with data pipelines, ETL processes, and analytics dashboards to support client insights',
      'Manage deployment infrastructure, environment configuration, and automated workflows',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel AI SDK', 'Inngest'],
  },
  {
    date: '2022 — 2023',
    role: 'Junior Project Engineer',
    company: 'Royal Wagenborg',
    companyUrl: 'https://www.wagenborg.com',
    location: '',
    logo: '/assets/wagenborg.png',
    bulletPoints: [
      'Led MRV fuel reporting for vessels over 5000GT for the year 2022',
      'Introduced protocols for tracking, handling, and disposal of hazardous materials on board ships throughout their life cycle',
      'Collaborated with leading companies on digitalised tracking solutions and created a framework for in-house tracking software development',
      'Developed environmental consumption reports for submission to the IMO',
    ],
  },
  {
    date: '2021 — 2022',
    role: 'Production Planning Consultant',
    company: 'S&B Machine Works (Partnership)',
    location: '',
    logo: '',
    bulletPoints: [
      'Developed and optimised production schedules for high-precision CNC machining operations, ensuring efficient resource allocation, minimal downtime, and on-time delivery. Implemented process improvements to enhance throughput, reduce lead times, and maintain quality standards.',
    ],
  },
];
```

- [ ] **Step 2: Commit experience data**

```bash
git add data/experience.ts
git commit -m "feat: add experience data with enhanced CUMLAUDE.AI role

- Updated role to Junior Full Stack Engineer
- Focus on SaaS platform development
- Added description and comprehensive bullet points
- Tech stack tags for current role"
```

---

## Task 7: Create Stack Architecture Data

**Files:**
- Create: `data/stackArchitecture.ts`

- [ ] **Step 1: Create stack architecture data file**

Create `data/stackArchitecture.ts`:

```typescript
export interface StackCategory {
  category: string;
  items: string[];
}

export interface StackArchitecture {
  title: string;
  subtitle: string;
  categories: StackCategory[];
  architecture: {
    title: string;
    description: string;
    flow: string[];
    principlesTitle: string;
    principles: string[];
  };
}

export const stackArchitecture: StackArchitecture = {
  title: 'Technology Stack & Architecture',
  subtitle: 'Production-grade multi-tenant SaaS stack for automation platforms, AI-native workflows, and secure client solutions',
  categories: [
    {
      category: 'Core Framework',
      items: ['Next.js 15 App Router', 'React 19', 'TypeScript', 'Server Components', 'Server Actions', 'API Routes', 'Edge Middleware'],
    },
    {
      category: 'Frontend',
      items: ['Tailwind CSS v4', 'shadcn/ui', 'Lucide React', 'next-themes', 'Responsive UI architecture', 'Reusable component systems'],
    },
    {
      category: 'State Management',
      items: ['TanStack Query', 'Zustand', 'React local state', 'Client-side caching', 'Server-state synchronization'],
    },
    {
      category: 'Backend & API Layer',
      items: ['Next.js Server Actions', 'Route Handlers', 'Protected action wrappers', 'Data Access Layer patterns', 'Webhook handling', 'Streaming AI endpoints'],
    },
    {
      category: 'Database & Storage',
      items: ['Supabase', 'PostgreSQL', 'Row-Level Security', 'Supabase Auth', 'Supabase Storage', 'pgvector', 'Full-text search', 'Audit trails', 'Soft-delete patterns'],
    },
    {
      category: 'AI Infrastructure',
      items: ['Vercel AI SDK', 'Anthropic Claude models', 'Cohere embeddings', 'Cohere reranking', 'Tool calling', 'Streaming chat', 'RAG pipelines', 'Hybrid search'],
    },
    {
      category: 'Automation & Workflows',
      items: ['Inngest', 'Durable background jobs', 'Event-driven workflows', 'Retry logic', 'Scheduled processes', 'XState v5 state machines'],
    },
    {
      category: 'Security & Authentication',
      items: ['Supabase Auth', 'JWT sessions', 'RBAC', 'Multi-tenant authorization', 'Row-Level Security policies', 'Zod validation', 'Rate limiting', 'CSRF protection', 'Audit logging'],
    },
    {
      category: 'Infrastructure',
      items: ['Vercel', 'Serverless deployment', 'Edge middleware', 'Upstash Redis', 'Automatic Git deployments', 'Environment variable management'],
    },
    {
      category: 'Development Tools',
      items: ['ESLint', 'Vitest', 'tsx', 'Zod', 'Supabase type generation', 'Git-based workflows', 'Type-safe development'],
    },
  ],
  architecture: {
    title: 'Architecture Overview',
    description: 'Server-first architecture where secure frontend interactions connect to protected server actions, AI endpoints, business logic, Supabase-backed data layers, and background workflows.',
    flow: [
      'Frontend using Next.js and React Server Components',
      'Protected Server Actions and API Routes',
      'Business logic through DAL and service layers',
      'AI handlers for RAG, streaming, and tool execution',
      'Supabase PostgreSQL with RLS for tenant isolation',
      'Inngest workflows for background jobs and process automation',
    ],
    principlesTitle: 'Principles',
    principles: [
      'Multi-tenant by default',
      'Security by default',
      'Type safety across the stack',
      'Server-first application design',
      'Reusable architecture patterns',
      'AI-native platform capabilities',
      'Maintainable and scalable SaaS delivery',
    ],
  },
};
```

- [ ] **Step 2: Commit stack architecture data**

```bash
git add data/stackArchitecture.ts
git commit -m "feat: add stack architecture data for CUMLAUDE.AI

- 10 technology categories
- Architecture overview with flow and principles
- Complete tech stack used in current role"
```

---

## Task 8: Create Remaining Data Files

**Files:**
- Create: `data/education.ts`, `data/skills.ts`, `data/languages.ts`, `data/projects.ts`, `data/activities.ts`

- [ ] **Step 1: Create education data**

Create `data/education.ts`:

```typescript
export interface Education {
  date: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  logo: string;
  bulletPoints?: string[];
  thesis?: string;
}

export const education: Education[] = [
  {
    date: '2024 — Feb 2026',
    degree: 'MSc Technology & Operations Management',
    institution: 'University of Groningen',
    logo: '/assets/rug.png',
    bulletPoints: ['Focus area: Smart Industry Operations and Development'],
    thesis: 'An Integrated Digital Twin and Machine Learning Framework for Carbon Emission Reduction in Industrial Processes',
  },
  {
    date: '2019 — 2024',
    degree: 'BSc Industrial Engineering & Management',
    institution: 'University of Groningen',
    logo: '/assets/rug.png',
    bulletPoints: [
      'Specialisation in Production Technology and Logistics',
      'Minor in Entrepreneurship and Digital Transformation',
    ],
    thesis: "Unlocking Hydrogen's Potential for Reliable Energy Storage",
  },
];
```

- [ ] **Step 2: Create enhanced skills data**

Create `data/skills.ts`:

```typescript
export interface SkillGroup {
  label: string;
  skills: string[];
  highlight?: boolean;
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Technical',
    skills: [
      'Python',
      'SQL',
      'TypeScript',
      'JavaScript',
      'Matlab',
      'R-Programming',
      'Next.js',
      'React',
      'Node.js',
      'Jupyter',
      'Azure Synapse',
      'Microsoft Fabric',
      'Power Automate',
      'Power Apps',
      'Vercel',
      'Supabase',
      'PostgreSQL',
      'ETL',
      'Power BI',
      'Git',
      'CAD',
      'Vensim',
      'Microsoft Office',
    ],
    highlight: true,
  },
  {
    label: 'Methodologies & Frameworks',
    skills: [
      'Agile / Scrum',
      'Lean Manufacturing',
      'ETL Design',
      'Data Modelling',
      'Systems Thinking',
      'Process Optimisation',
      'Digital Twin Modelling',
      'Multi-tenant SaaS Architecture',
      'API Design & Integration',
      'Project Management',
      'Stakeholder Analysis',
      'Consulting',
      'Security Best Practices (RBAC, RLS)',
      'Type-Safe Development',
    ],
  },
];
```

- [ ] **Step 3: Create languages data**

Create `data/languages.ts`:

```typescript
export interface Language {
  name: string;
  proficiency: string;
  percentage: number;
}

export const languages: Language[] = [
  {
    name: 'English',
    proficiency: 'Native speaker',
    percentage: 95,
  },
  {
    name: 'Tamil',
    proficiency: 'Native speaker',
    percentage: 95,
  },
  {
    name: 'Dutch',
    proficiency: 'Conversational',
    percentage: 40,
  },
];
```

- [ ] **Step 4: Create projects data**

Create `data/projects.ts`:

```typescript
export interface Project {
  label: string;
  title: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    label: 'MSc Thesis',
    title: 'Digital Twin & ML Framework for Carbon Emission Reduction',
    description: 'Developed an integrated digital twin and machine learning framework targeting carbon emission reduction in industrial processes. Combined simulation modelling with predictive analytics to identify optimisation opportunities in real-world production environments.',
    tags: ['Python', 'Machine Learning', 'Digital Twin', 'Simulation', 'Industrial Processes'],
  },
  {
    label: 'Cumlaude.AI',
    title: 'AI-Powered Data Dashboards & Automated Pipelines',
    description: 'Designed and built end-to-end data pipelines and dynamic visual dashboards for clients, integrating multiple data sources with AI-driven analytics. Automated reporting workflows that reduced manual processing and improved data-driven decision making.',
    tags: ['SQL', 'Azure Synapse', 'Power BI', 'Power Automate', 'ETL'],
  },
  {
    label: 'Royal Wagenborg',
    title: 'Hazardous Materials Tracking & Digital Framework',
    description: 'Introduced protocols for tracking, handling, and disposal of hazardous materials on board ships throughout their life cycle. Collaborated with leading companies on digitalised tracking solutions and created a framework for in-house tracking software development.',
    tags: ['Maritime Compliance', 'Process Design', 'Software Framework', 'Hazmat Protocols'],
  },
  {
    label: 'BSc Thesis',
    title: "Unlocking Hydrogen's Potential for Reliable Energy Storage",
    description: 'Researched and modelled hydrogen-based energy storage solutions, evaluating technical feasibility and economic viability as a pathway toward reliable renewable energy infrastructure.',
    tags: ['Energy Systems', 'Modelling', 'Hydrogen', 'Matlab'],
  },
];
```

- [ ] **Step 5: Create activities data**

Create `data/activities.ts`:

```typescript
export interface Activity {
  name: string;
  nameUrl?: string;
  logo: string;
  logoOnDark?: boolean;
  years: string;
  description?: string;
  bulletPoints: string[];
}

export const activities: Activity[] = [
  {
    name: 'V.V. Mamio',
    nameUrl: 'https://vvmamiogroningen.nl',
    logo: '/assets/mamio.png',
    years: '2020 — Present',
    bulletPoints: [
      'Player from 2020 to present',
      'Secretary of the club (2023–2024)',
      'Social Media Manager (2022–Present)',
      'Team coach and manager (2023–Present)',
    ],
  },
  {
    name: 'FOOTY',
    nameUrl: 'https://www.footy.nl/en/groningen-deparrel/',
    logo: '/assets/footy.webp',
    logoOnDark: true,
    years: '2022 — 2025',
    description: 'Recreational small-sided football league in Groningen',
    bulletPoints: [
      'Referee and coordinator — enforcing rules within established standards, ensuring player safety, promoting fair play, communicating with players and coaches, and reporting incidents and match outcomes',
    ],
  },
  {
    name: 'BALLIE',
    nameUrl: 'https://ballie.nl',
    logo: '/assets/ballie.png',
    years: '2025 — Present',
    description: '7v7 football competition platform with 1000+ weekly participants across NL',
    bulletPoints: [
      'Referee and coordinator — enforcing rules within established standards, ensuring player safety, promoting fair play, communicating with players and coaches, and reporting incidents and match outcomes',
      'Acquisitions liaison',
    ],
  },
];
```

- [ ] **Step 6: Commit all data files**

```bash
git add data/
git commit -m "feat: add all portfolio data files

- Education data (MSc and BSc)
- Enhanced skills data with broader tech capabilities
- Languages data (English, Tamil, Dutch)
- Projects data (4 projects)
- Activities data (extracurriculars)"
```

---

## Task 9: Create Navbar Component

**Files:**
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Create Navbar component with mobile menu**

Create `components/Navbar.tsx`:

```typescript
'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const handleScroll = () => {
      let current = 'hero';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 120) {
          current = section.getAttribute('id') || 'hero';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="container">
        <div className="nav-logo">
          <span>S</span>S
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
        <ul className={isOpen ? 'open' : ''}>
          <li>
            <a
              href="#hero"
              className={activeSection === 'hero' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={activeSection === 'education' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#languages"
              className={activeSection === 'languages' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Languages
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#extras"
              className={activeSection === 'extras' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Activities
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Test Navbar compiles**

```bash
npm run dev
```

Expected: No TypeScript errors
Stop server with Ctrl+C

- [ ] **Step 3: Commit Navbar**

```bash
git add components/Navbar.tsx
git commit -m "feat: add Navbar component with mobile menu and active section highlighting"
```

---

## Task 10: Create Hero and Supporting Components

**Files:**
- Create: `components/Hero.tsx`, `components/Divider.tsx`, `components/Footer.tsx`

- [ ] **Step 1: Create Hero component**

Create `components/Hero.tsx`:

```typescript
import Image from 'next/image';
import { profile } from '@/data/profile';

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-label">{profile.labels.join(' · ')}</p>
            <h1 className="hero-name">
              {profile.firstName}
              <br />
              <span className="accent">{profile.lastName}</span>
            </h1>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-links">
              <a className="hero-link" href={`mailto:${profile.email}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 4 10 8 10-8" />
                </svg>
                {profile.email}
              </a>
              <a
                className="hero-link"
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                {profile.linkedin}
              </a>
            </div>
            <p className="hero-location">
              {profile.coordinates} — {profile.location}
            </p>
          </div>
          <Image
            className="hero-photo"
            src={profile.photo}
            alt={profile.name}
            width={260}
            height={260}
            priority
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create Divider component**

Create `components/Divider.tsx`:

```typescript
export default function Divider() {
  return <div className="divider"></div>;
}
```

- [ ] **Step 3: Create Footer component**

Create `components/Footer.tsx`:

```typescript
import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-name">{profile.name}</div>
        <div className="footer-row">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
            {profile.linkedin}
          </a>
        </div>
        <div className="footer-copy">{profile.location}</div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Commit Hero, Divider, Footer**

```bash
git add components/Hero.tsx components/Divider.tsx components/Footer.tsx
git commit -m "feat: add Hero, Divider, and Footer components

- Hero with profile photo and contact links
- Simple gradient divider
- Footer with contact info"
```

---

## Task 11: Create Experience Components (Part 1: TimelineEntry)

**Files:**
- Create: `components/Experience/TimelineEntry.tsx`

- [ ] **Step 1: Create TimelineEntry component**

Create `components/Experience/TimelineEntry.tsx`:

```typescript
import Image from 'next/image';

interface TimelineEntryProps {
  date: string;
  isNow?: boolean;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  logo?: string;
  description?: string;
  bulletPoints?: string[];
  tags?: string[];
  thesis?: string;
}

export default function TimelineEntry({
  date,
  isNow = false,
  role,
  company,
  companyUrl,
  location,
  logo,
  description,
  bulletPoints,
  tags,
  thesis,
}: TimelineEntryProps) {
  return (
    <div className={`timeline-entry ${isNow ? 'now' : ''}`}>
      <div className="timeline-date">
        {date}
        {isNow && <span className="badge-now">NOW</span>}
      </div>
      <div className="timeline-role">{role}</div>
      <div className="timeline-company">
        {logo && (
          <Image
            className="company-logo"
            src={logo}
            alt={company}
            width={26}
            height={26}
          />
        )}
        {companyUrl ? (
          <a href={companyUrl} target="_blank" rel="noopener noreferrer">
            {company}
          </a>
        ) : (
          <span>{company}</span>
        )}
        {location && <span> — {location}</span>}
      </div>
      {description && (
        <div className="timeline-desc">
          <p>{description}</p>
        </div>
      )}
      {bulletPoints && bulletPoints.length > 0 && (
        <div className="timeline-desc">
          <ul>
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
      {tags && tags.length > 0 && (
        <div className="timeline-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      {thesis && (
        <div className="timeline-thesis">
          <span>Thesis</span>
          <br />
          {thesis}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Commit TimelineEntry**

```bash
git add components/Experience/TimelineEntry.tsx
git commit -m "feat: add TimelineEntry component

- Reusable for experience and education
- Supports NOW badge with pulsing animation
- Optional description, bullets, tags, thesis
- Company logo and link support"
```

---

## Task 12: Create Experience Components (Part 2: StackArchitecture)

**Files:**
- Create: `components/Experience/StackArchitecture.tsx`

- [ ] **Step 1: Create StackArchitecture component**

Create `components/Experience/StackArchitecture.tsx`:

```typescript
import { stackArchitecture } from '@/data/stackArchitecture';

export default function StackArchitecture() {
  return (
    <div className="stack-section">
      <h3 className="stack-section-title">{stackArchitecture.title}</h3>
      <p className="stack-section-subtitle">{stackArchitecture.subtitle}</p>

      {/* Technology Categories */}
      {stackArchitecture.categories.map((category, index) => (
        <div key={index} className="stack-category">
          <div className="stack-category-name">{category.category}</div>
          <div className="timeline-tags">
            {category.items.map((item, itemIndex) => (
              <span key={itemIndex} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Architecture Overview */}
      <div className="architecture-section">
        <h4 className="stack-section-title">{stackArchitecture.architecture.title}</h4>
        <p className="architecture-description">
          {stackArchitecture.architecture.description}
        </p>

        <ul className="architecture-flow">
          {stackArchitecture.architecture.flow.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>

        <div className="stack-category-name" style={{ marginTop: '20px' }}>
          {stackArchitecture.architecture.principlesTitle}
        </div>
        <ul className="architecture-principles">
          {stackArchitecture.architecture.principles.map((principle, index) => (
            <li key={index}>{principle}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit StackArchitecture**

```bash
git add components/Experience/StackArchitecture.tsx
git commit -m "feat: add StackArchitecture component

- Display 10 technology categories
- Architecture overview with flow and principles
- Matches existing card and tag styling"
```

---

## Task 13: Create Experience Section with Stack Integration

**Files:**
- Create: `components/Experience/ExperienceSection.tsx`

- [ ] **Step 1: Create ExperienceSection component**

Create `components/Experience/ExperienceSection.tsx`:

```typescript
import { experiences } from '@/data/experience';
import TimelineEntry from './TimelineEntry';
import StackArchitecture from './StackArchitecture';

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <>
              <TimelineEntry
                key={index}
                date={exp.date}
                isNow={exp.isNow}
                role={exp.role}
                company={exp.company}
                companyUrl={exp.companyUrl}
                location={exp.location}
                logo={exp.logo}
                description={exp.description}
                bulletPoints={exp.bulletPoints}
                tags={exp.tags}
              />
              {/* Show Stack & Architecture section after CUMLAUDE.AI (first entry) */}
              {index === 0 && <StackArchitecture />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit ExperienceSection**

```bash
git add components/Experience/ExperienceSection.tsx
git commit -m "feat: add ExperienceSection with Stack integration

- Maps over experience data
- Renders StackArchitecture after CUMLAUDE.AI entry
- Timeline layout preserved"
```

---

## Task 14: Create Education Section

**Files:**
- Create: `components/Education/EducationSection.tsx`

- [ ] **Step 1: Create EducationSection component**

Create `components/Education/EducationSection.tsx`:

```typescript
import { education } from '@/data/education';
import TimelineEntry from '@/components/Experience/TimelineEntry';

export default function EducationSection() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <TimelineEntry
              key={index}
              date={edu.date}
              role={edu.degree}
              company={edu.institution}
              companyUrl={edu.institutionUrl}
              logo={edu.logo}
              bulletPoints={edu.bulletPoints}
              thesis={edu.thesis}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit EducationSection**

```bash
git add components/Education/EducationSection.tsx
git commit -m "feat: add EducationSection reusing TimelineEntry component"
```

---

## Task 15: Create Skills Section

**Files:**
- Create: `components/Skills/SkillsSection.tsx`

- [ ] **Step 1: Create SkillsSection component**

Create `components/Skills/SkillsSection.tsx`:

```typescript
import { skillGroups } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        {skillGroups.map((group, index) => (
          <div key={index} className="skills-block">
            <div className="skills-label">{group.label}</div>
            <div className="pills">
              {group.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`pill ${group.highlight ? 'highlight' : ''}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit SkillsSection**

```bash
git add components/Skills/SkillsSection.tsx
git commit -m "feat: add SkillsSection with enhanced skill groups"
```

---

## Task 16: Create Languages Section

**Files:**
- Create: `components/Languages/LanguagesSection.tsx`

- [ ] **Step 1: Create LanguagesSection component**

Create `components/Languages/LanguagesSection.tsx`:

```typescript
import { languages } from '@/data/languages';

export default function LanguagesSection() {
  return (
    <section id="languages">
      <div className="container">
        <h2 className="section-title">Languages</h2>
        <div className="lang-row">
          {languages.map((lang, index) => (
            <div key={index} className="lang-card">
              <div className="lang-title">{lang.name}</div>
              <div className="lang-sub">{lang.proficiency}</div>
              <div className="lang-bar">
                <div
                  className="lang-fill"
                  style={{ width: `${lang.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit LanguagesSection**

```bash
git add components/Languages/LanguagesSection.tsx
git commit -m "feat: add LanguagesSection with proficiency bars"
```

---

## Task 17: Create Projects Section

**Files:**
- Create: `components/Projects/ProjectCard.tsx`, `components/Projects/ProjectsSection.tsx`

- [ ] **Step 1: Create ProjectCard component**

Create `components/Projects/ProjectCard.tsx`:

```typescript
interface ProjectCardProps {
  label: string;
  title: string;
  description: string;
  tags: string[];
}

export default function ProjectCard({
  label,
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-label">{label}</div>
      <div className="project-title">{title}</div>
      <div className="project-desc">{description}</div>
      <div className="timeline-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create ProjectsSection component**

Create `components/Projects/ProjectsSection.tsx`:

```typescript
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              label={project.label}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit Projects components**

```bash
git add components/Projects/
git commit -m "feat: add Projects section with ProjectCard component"
```

---

## Task 18: Create Activities Section

**Files:**
- Create: `components/Activities/ActivityCard.tsx`, `components/Activities/ActivitiesSection.tsx`

- [ ] **Step 1: Create ActivityCard component**

Create `components/Activities/ActivityCard.tsx`:

```typescript
import Image from 'next/image';

interface ActivityCardProps {
  name: string;
  nameUrl?: string;
  logo: string;
  logoOnDark?: boolean;
  years: string;
  description?: string;
  bulletPoints: string[];
}

export default function ActivityCard({
  name,
  nameUrl,
  logo,
  logoOnDark = false,
  years,
  description,
  bulletPoints,
}: ActivityCardProps) {
  return (
    <div className="extra-card">
      <div className="extra-header">
        <Image
          className={`extra-logo ${logoOnDark ? 'on-dark' : ''}`}
          src={logo}
          alt={name}
          width={32}
          height={32}
        />
        {nameUrl ? (
          <a
            href={nameUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="extra-name"
          >
            {name}
          </a>
        ) : (
          <div className="extra-name">{name}</div>
        )}
      </div>
      <div className="extra-years">{years}</div>
      {description && <p className="extra-description">{description}</p>}
      <ul>
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
```

- [ ] **Step 2: Create ActivitiesSection component**

Create `components/Activities/ActivitiesSection.tsx`:

```typescript
import { activities } from '@/data/activities';
import ActivityCard from './ActivityCard';

export default function ActivitiesSection() {
  return (
    <section id="extras">
      <div className="container">
        <h2 className="section-title">Extracurriculars</h2>
        <div className="extras-grid">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              name={activity.name}
              nameUrl={activity.nameUrl}
              logo={activity.logo}
              logoOnDark={activity.logoOnDark}
              years={activity.years}
              description={activity.description}
              bulletPoints={activity.bulletPoints}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit Activities components**

```bash
git add components/Activities/
git commit -m "feat: add Activities section with ActivityCard component"
```

---

## Task 19: Create CTA Section

**Files:**
- Create: `components/CTA.tsx`

- [ ] **Step 1: Create CTA component**

Create `components/CTA.tsx`:

```typescript
import { profile } from '@/data/profile';

export default function CTA() {
  return (
    <div className="cta">
      <div className="container">
        <p className="cta-text">
          Open to opportunities in data engineering and operations — let&apos;s connect.
        </p>
        <a className="cta-btn" href={`mailto:${profile.email}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m2 4 10 8 10-8" />
          </svg>
          Get in touch
        </a>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit CTA**

```bash
git add components/CTA.tsx
git commit -m "feat: add CTA (call-to-action) component"
```

---

## Task 20: Assemble Main Page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Update page.tsx with all sections**

Update `app/page.tsx`:

```typescript
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import ExperienceSection from '@/components/Experience/ExperienceSection';
import EducationSection from '@/components/Education/EducationSection';
import SkillsSection from '@/components/Skills/SkillsSection';
import LanguagesSection from '@/components/Languages/LanguagesSection';
import ProjectsSection from '@/components/Projects/ProjectsSection';
import ActivitiesSection from '@/components/Activities/ActivitiesSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

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

- [ ] **Step 2: Verify page compiles**

```bash
npm run dev
```

Expected: Development server starts, navigate to http://localhost:3000
Check that all sections render
Stop server with Ctrl+C

- [ ] **Step 3: Commit page assembly**

```bash
git add app/page.tsx
git commit -m "feat: assemble main portfolio page with all sections"
```

---

## Task 21: Add Scroll Reveal Animation

**Files:**
- Create: `components/ScrollReveal.tsx`
- Modify: All section components to use ScrollReveal

- [ ] **Step 1: Create ScrollReveal wrapper component**

Create `components/ScrollReveal.tsx`:

```typescript
'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Update ExperienceSection with ScrollReveal**

Update `components/Experience/ExperienceSection.tsx`:

```typescript
import { experiences } from '@/data/experience';
import TimelineEntry from './TimelineEntry';
import StackArchitecture from './StackArchitecture';
import ScrollReveal from '@/components/ScrollReveal';

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Experience</h2>
        </ScrollReveal>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <>
              <ScrollReveal key={index}>
                <TimelineEntry
                  date={exp.date}
                  isNow={exp.isNow}
                  role={exp.role}
                  company={exp.company}
                  companyUrl={exp.companyUrl}
                  location={exp.location}
                  logo={exp.logo}
                  description={exp.description}
                  bulletPoints={exp.bulletPoints}
                  tags={exp.tags}
                />
              </ScrollReveal>
              {index === 0 && <StackArchitecture />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update EducationSection with ScrollReveal**

Update `components/Education/EducationSection.tsx`:

```typescript
import { education } from '@/data/education';
import TimelineEntry from '@/components/Experience/TimelineEntry';
import ScrollReveal from '@/components/ScrollReveal';

export default function EducationSection() {
  return (
    <section id="education">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Education</h2>
        </ScrollReveal>
        <div className="timeline">
          {education.map((edu, index) => (
            <ScrollReveal key={index}>
              <TimelineEntry
                date={edu.date}
                role={edu.degree}
                company={edu.institution}
                companyUrl={edu.institutionUrl}
                logo={edu.logo}
                bulletPoints={edu.bulletPoints}
                thesis={edu.thesis}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Update SkillsSection with ScrollReveal**

Update `components/Skills/SkillsSection.tsx`:

```typescript
import { skillGroups } from '@/data/skills';
import ScrollReveal from '@/components/ScrollReveal';

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Skills</h2>
        </ScrollReveal>

        {skillGroups.map((group, index) => (
          <ScrollReveal key={index}>
            <div className="skills-block">
              <div className="skills-label">{group.label}</div>
              <div className="pills">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`pill ${group.highlight ? 'highlight' : ''}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Update LanguagesSection with ScrollReveal**

Update `components/Languages/LanguagesSection.tsx`:

```typescript
import { languages } from '@/data/languages';
import ScrollReveal from '@/components/ScrollReveal';

export default function LanguagesSection() {
  return (
    <section id="languages">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Languages</h2>
        </ScrollReveal>
        <div className="lang-row">
          {languages.map((lang, index) => (
            <ScrollReveal key={index}>
              <div className="lang-card">
                <div className="lang-title">{lang.name}</div>
                <div className="lang-sub">{lang.proficiency}</div>
                <div className="lang-bar">
                  <div
                    className="lang-fill"
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Update ProjectsSection with ScrollReveal**

Update `components/Projects/ProjectsSection.tsx`:

```typescript
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ScrollReveal from '@/components/ScrollReveal';

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Projects</h2>
        </ScrollReveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ScrollReveal key={index}>
              <ProjectCard
                label={project.label}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Update ActivitiesSection with ScrollReveal**

Update `components/Activities/ActivitiesSection.tsx`:

```typescript
import { activities } from '@/data/activities';
import ActivityCard from './ActivityCard';
import ScrollReveal from '@/components/ScrollReveal';

export default function ActivitiesSection() {
  return (
    <section id="extras">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Extracurriculars</h2>
        </ScrollReveal>
        <div className="extras-grid">
          {activities.map((activity, index) => (
            <ScrollReveal key={index}>
              <ActivityCard
                name={activity.name}
                nameUrl={activity.nameUrl}
                logo={activity.logo}
                logoOnDark={activity.logoOnDark}
                years={activity.years}
                description={activity.description}
                bulletPoints={activity.bulletPoints}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 8: Update CTA with ScrollReveal**

Update `components/CTA.tsx`:

```typescript
import { profile } from '@/data/profile';
import ScrollReveal from '@/components/ScrollReveal';

export default function CTA() {
  return (
    <div className="cta">
      <div className="container">
        <ScrollReveal>
          <p className="cta-text">
            Open to opportunities in data engineering and operations — let&apos;s connect.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <a className="cta-btn" href={`mailto:${profile.email}`}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 4 10 8 10-8" />
            </svg>
            Get in touch
          </a>
        </ScrollReveal>
      </div>
    </div>
  );
}
```

- [ ] **Step 9: Test scroll reveal animations**

```bash
npm run dev
```

Navigate to http://localhost:3000 and scroll down to verify elements fade in
Stop server with Ctrl+C

- [ ] **Step 10: Commit scroll reveal implementation**

```bash
git add components/
git commit -m "feat: add scroll reveal animations to all sections

- ScrollReveal wrapper component using IntersectionObserver
- Applied to all section titles and content blocks
- Matches original fade-in on scroll behavior"
```

---

## Task 22: Build and Quality Assurance

**Files:**
- Test build, fix any errors

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: Build completes successfully with no errors
If errors occur, fix them and rebuild

- [ ] **Step 2: Test production build locally**

```bash
npm run start
```

Navigate to http://localhost:3000 and verify:
- All sections render correctly
- Images load properly
- Navigation works
- Mobile menu functions
- Scroll reveal animations work
- All links open correctly
- Styling matches original portfolio

Stop server with Ctrl+C

- [ ] **Step 3: Run Lighthouse audit (optional but recommended)**

Open Chrome DevTools → Lighthouse → Run audit on localhost:3000

Check scores for:
- Performance (target 90+)
- Accessibility (target 100)
- Best Practices (target 100)
- SEO (target 100)

- [ ] **Step 4: Visual comparison with original**

Open both:
- Original: index.html.bak (open in browser)
- New: http://localhost:3000

Compare side-by-side:
- Colors match exactly
- Spacing identical
- Fonts render correctly
- Effects preserved (blur, gradients, shadows)
- Animations work the same

- [ ] **Step 5: Commit build verification**

```bash
git add .
git commit -m "chore: verify production build and quality assurance

- Build completes successfully
- All features tested and working
- Visual comparison passed
- Ready for deployment"
```

---

## Task 23: Deployment to Vercel

**Files:**
- Deploy to production

- [ ] **Step 1: Push to GitHub**

```bash
git push origin main
```

Expected: Code pushed successfully to remote repository

- [ ] **Step 2: Deploy to Vercel (automatic or manual)**

If Vercel is connected to your GitHub repository:
- Deployment will trigger automatically
- Monitor deployment at https://vercel.com/dashboard

If manual deployment needed:
```bash
vercel --prod
```

Follow prompts to deploy

- [ ] **Step 3: Verify production deployment**

Navigate to your production URL (e.g., shivaansat-portfolio-chi-pink-58.vercel.app or your custom domain)

Test:
- All sections load correctly
- Images display properly
- Navigation works
- Mobile menu functions
- Scroll animations work
- All external links open correctly
- Vercel Analytics loads (check Network tab)

- [ ] **Step 4: Test on mobile device**

Open production URL on actual mobile device:
- Check responsive layout
- Test mobile menu
- Verify touch interactions
- Check hero photo positioning

- [ ] **Step 5: Final deployment commit**

```bash
git add .
git commit -m "docs: document successful Vercel deployment

- Production deployment verified
- All features working in production
- Mobile testing completed
- Vercel Analytics integrated"
git push origin main
```

---

## Task 24: Create README and Documentation

**Files:**
- Create: `README.md`

- [ ] **Step 1: Create comprehensive README**

Create `README.md`:

```markdown
# Shivaan Satish — Portfolio

Modern portfolio website built with Next.js 15, TypeScript, and React, showcasing professional experience, projects, and skills.

## Tech Stack

- **Framework:** Next.js 15 App Router
- **Language:** TypeScript
- **Styling:** Custom CSS (preserved from original design)
- **Fonts:** Space Grotesk & Space Mono (Google Fonts)
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Experience/         # Experience section components
│   ├── Education/          # Education section components
│   ├── Skills/             # Skills section components
│   ├── Languages/          # Languages section components
│   ├── Projects/           # Projects section components
│   ├── Activities/         # Activities section components
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── ScrollReveal.tsx    # Scroll animation wrapper
├── data/                   # Portfolio content (TypeScript)
│   ├── profile.ts
│   ├── experience.ts
│   ├── stackArchitecture.ts
│   ├── education.ts
│   ├── skills.ts
│   ├── languages.ts
│   ├── projects.ts
│   └── activities.ts
└── public/
    └── assets/             # Images

```

## Development

**Prerequisites:**
- Node.js 18+ installed
- npm or yarn package manager

**Setup:**
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

**Build:**
```bash
# Create production build
npm run build

# Test production build locally
npm run start
```

**Linting:**
```bash
npm run lint
```

## Updating Content

All portfolio content is in the `data/` directory as TypeScript files:

- **Profile info:** `data/profile.ts` (name, email, links, summary)
- **Work experience:** `data/experience.ts`
- **Tech stack:** `data/stackArchitecture.ts`
- **Education:** `data/education.ts`
- **Skills:** `data/skills.ts`
- **Languages:** `data/languages.ts`
- **Projects:** `data/projects.ts`
- **Activities:** `data/activities.ts`

Edit these files to update your portfolio content. Changes will be reflected immediately in development mode.

## Deployment

Deployed automatically to Vercel on push to main branch.

**Manual deployment:**
```bash
vercel --prod
```

## Design

The portfolio preserves the exact visual styling from the original HTML version:
- Dark theme with purple/blue accent colors
- Space Grotesk and Space Mono typography
- Timeline-based experience and education sections
- Card-based layouts for projects and activities
- Scroll reveal animations
- Fully responsive with mobile menu

## Features

- Server-side rendering with Next.js 15
- TypeScript for type safety
- Optimized images with next/image
- Scroll reveal animations
- Mobile-responsive navigation
- SEO metadata
- Vercel Analytics integration
- Accessible HTML markup

## License

Personal portfolio — all rights reserved.

## Contact

**Shivaan Satish**
- Email: shivaansat@gmail.com
- LinkedIn: [linkedin.com/in/shivaan-satish-6b8653221](https://linkedin.com/in/shivaan-satish-6b8653221)
- Location: Groningen, Netherlands
```

- [ ] **Step 2: Commit README**

```bash
git add README.md
git commit -m "docs: add comprehensive README with setup and usage instructions"
git push origin main
```

---

## Plan Complete

All tasks completed. Portfolio successfully migrated from static HTML to Next.js 15 with TypeScript.

**Summary:**
- ✅ Next.js 15 project initialized
- ✅ All assets copied to public directory
- ✅ Global CSS preserved exactly from original
- ✅ All data files created with TypeScript types
- ✅ All components built (Navbar, Hero, Experience, Education, Skills, Languages, Projects, Activities, CTA, Footer)
- ✅ Stack & Architecture section added for CUMLAUDE.AI
- ✅ Enhanced Skills section with broader tech capabilities
- ✅ Scroll reveal animations implemented
- ✅ Production build successful
- ✅ Deployed to Vercel
- ✅ README documentation created

The portfolio is now live with:
- Modern Next.js architecture
- Enhanced CUMLAUDE.AI content showing full-stack SaaS engineering work
- Technology Stack & Architecture section with 10 categories
- Enhanced Skills section covering full career breadth
- All original visual styling preserved exactly
- Improved maintainability through components and data separation
- Full TypeScript type safety
