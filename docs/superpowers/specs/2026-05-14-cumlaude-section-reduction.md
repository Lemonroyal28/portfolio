# CUMLAUDE.AI Section Reduction

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reduce CUMLAUDE.AI experience section by ~50% to improve scannability and portfolio presentation while maintaining technical credibility.

**Approach:** Replace verbose documentation-style content with concise portfolio-appropriate structure: 2-line description, 5 focused bullets, and 5 core tech badges.

**Files Modified:**
- `data/experience.ts` - Update CUMLAUDE.AI entry content and add techStack array
- `components/Experience/TimelineEntry.tsx` - Add tech badges display capability
- `app/globals.css` - Ensure tech badge styling (may already exist)

---

## Problem Statement

The current CUMLAUDE.AI section reads like internal engineering documentation rather than a portfolio showcase:
- Description: 111 words across 3 long sentences
- Bullets: 10 items with significant repetition
- Technologies: Listed inline repeatedly throughout text
- Overall impression: "trying to prove I know everything" vs "I know what matters"

**Target aesthetic:** Modern engineering portfolio with premium SaaS feel, systems-focused technical identity, concise and confident presentation.

**Key differentiator to preserve:** Systems Thinking + Automation + Operational Engineering (not generic full-stack)

---

## Content Structure

### CUMLAUDE.AI Entry (Reduced)

**Role:** Junior Full Stack Engineer
**Company:** CUMLAUDE.AI
**Dates:** Jan 2026 — Present
**Company URL:** https://cumlaude.ai
**Logo:** /assets/cumlaude.jpeg

**Description (2 lines, ~35 words):**
Develop secure AI-enabled SaaS platforms and automation systems using Next.js, TypeScript, Supabase, and modern cloud infrastructure. Work across full-stack development, authentication, API integrations, data pipelines, and scalable multi-tenant architectures.

**Bullet Points (5 focused items):**
1. Develop secure multi-tenant SaaS platforms and AI-enabled automation workflows
2. Build full-stack features using Next.js, React, TypeScript, and Supabase with PostgreSQL
3. Integrate APIs, SDKs, and external services to extend platform functionality
4. Support AI-driven systems including streaming chat, RAG workflows, and semantic search
5. Contribute to secure backend architecture, validation, access control, and protected server actions

**Technology Stack Badges (5 core technologies):**
- Next.js
- TypeScript
- Supabase
- PostgreSQL
- Vercel AI SDK

### Comparison: Before vs After

| Metric | Before | After | Reduction |
|--------|--------|-------|-----------|
| Description words | 111 | ~35 | 68% |
| Bullet points | 10 | 5 | 50% |
| Technology mentions | Inline (repeated) | 5 badges | Cleaner |
| Overall content | Documentation-style | Portfolio-appropriate | ~50% |

---

## Technical Implementation

### Data Layer Changes

**Update Experience interface** to support optional tech stack:
```typescript
export interface Experience {
  date: string;
  role: string;
  company: string;
  companyUrl?: string;
  logo: string;
  description: string;
  bulletPoints: string[];
  techStack?: string[]; // NEW: Optional tech badges
}
```

**Update CUMLAUDE.AI entry** in experience array:
```typescript
{
  date: 'Jan 2026 — Present',
  role: 'Junior Full Stack Engineer',
  company: 'CUMLAUDE.AI',
  companyUrl: 'https://cumlaude.ai',
  logo: '/assets/cumlaude.jpeg',
  description: 'Develop secure AI-enabled SaaS platforms and automation systems using Next.js, TypeScript, Supabase, and modern cloud infrastructure. Work across full-stack development, authentication, API integrations, data pipelines, and scalable multi-tenant architectures.',
  bulletPoints: [
    'Develop secure multi-tenant SaaS platforms and AI-enabled automation workflows',
    'Build full-stack features using Next.js, React, TypeScript, and Supabase with PostgreSQL',
    'Integrate APIs, SDKs, and external services to extend platform functionality',
    'Support AI-driven systems including streaming chat, RAG workflows, and semantic search',
    'Contribute to secure backend architecture, validation, access control, and protected server actions',
  ],
  techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel AI SDK'],
}
```

### Component Changes

**TimelineEntry.tsx** already supports rendering tags (used for education/experience tags). Add tech stack rendering after bullet points:

```typescript
{techStack && techStack.length > 0 && (
  <div className="timeline-tech-stack">
    {techStack.map((tech, index) => (
      <span key={index} className="tech-badge">
        {tech}
      </span>
    ))}
  </div>
)}
```

Position: After `bulletPoints` section, before thesis section (if present).

### Styling

Tech badges should use similar styling to project tags for consistency, with slight differentiation:
- Same size and spacing as project tags
- Accent color scheme consistent with portfolio theme
- Hover effects for premium feel
- Display: flex, flex-wrap for responsive layout

CSS class `.tech-badge` should match `.project-tag` styling (already exists in globals.css).

---

## Success Criteria

- CUMLAUDE.AI description reduced from 111 words to ~35 words (68% reduction)
- Bullet points reduced from 10 to 5 (50% reduction)
- 5 core technology badges displayed below bullets
- Section maintains technical credibility while being more scannable
- Visual consistency with existing portfolio aesthetic
- Content emphasizes Systems Thinking + Automation + Operational Engineering differentiator
- No technologies mentioned inline in description (moved to badges)
- Professional, confident presentation vs documentation dump

---

## Design Rationale

**Why reduce by 50%:**
- Recruiter/founder should understand value in 15-25 seconds of scanning
- Current section is too dense for homepage portfolio
- Shorter = perceived seniority and confidence
- Visual hierarchy improvement

**Why keep these 5 bullets:**
- Multi-tenant SaaS platforms (architecture credibility)
- Full-stack with specific stack (technical depth)
- API/SDK integration (extension/integration skill)
- AI-driven systems (modern capability)
- Security architecture (production-grade thinking)

**Why these 5 tech badges:**
- Next.js: Primary framework
- TypeScript: Type safety/modern JS
- Supabase: Backend-as-a-service + PostgreSQL
- PostgreSQL: Database credibility
- Vercel AI SDK: AI integration capability

**What stays in Skills section:**
- Supporting technologies (Inngest, Redis, Zod, TanStack Query, Zustand, Tailwind)
- Infrastructure tools (Azure, Fabric, Power BI, Power Automate)
- General methodologies and approaches

This maintains technical completeness while improving homepage presentation hierarchy.
