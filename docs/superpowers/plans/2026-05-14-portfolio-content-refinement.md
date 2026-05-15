# Portfolio Content Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update experience section content with comprehensive descriptions and detailed responsibilities for all three roles.

**Architecture:** Direct content update to data layer file, maintaining existing TypeScript interface structure and chronological ordering.

**Tech Stack:** TypeScript, Next.js data layer

---

## File Structure

**Modified Files:**
- `data/experience.ts` - Experience data array containing all role entries

This file exports an array of Experience objects. We'll update all three entries (CUMLAUDE.AI, Royal Wagenborg, S&B Machine Works) with refined descriptions and expanded bullet points.

---

### Task 1: Update CUMLAUDE.AI Entry

**Files:**
- Modify: `data/experience.ts:12-25`

- [ ] **Step 1: Read current experience.ts to verify structure**

```bash
cat data/experience.ts
```

Expected: See current CUMLAUDE.AI entry with 4 bullet points starting at line 12

- [ ] **Step 2: Replace CUMLAUDE.AI entry with expanded content**

Replace the CUMLAUDE.AI entry (lines 12-25) with:

```typescript
  {
    date: 'Jan 2026 — Present',
    role: 'Junior Full Stack Engineer',
    company: 'CUMLAUDE.AI',
    companyUrl: 'https://cumlaude.ai',
    logo: '/assets/cumlaude.jpeg',
    description: 'At CUMLAUDE.AI, I work on the development and improvement of secure, data-driven SaaS platforms for companies that need automation, AI-enabled workflows, and scalable digital solutions. My role combines full-stack development, backend logic, authentication, database interaction, API integrations, and platform security. I contribute to building systems that transform raw data and business requirements into automated, visual, and actionable software solutions. This includes working with modern web technologies, improving the existing application stack, integrating external services through APIs and SDKs, and supporting secure multi-tenant platform architecture. My work focuses on creating maintainable, type-safe, and production-ready software using technologies such as Next.js, React, TypeScript, Supabase, PostgreSQL, Vercel AI SDK, Anthropic Claude, Cohere, Inngest, Upstash Redis, Zod, TanStack Query, Zustand, and Tailwind CSS.',
    bulletPoints: [
      'Develop and improve SaaS platforms for companies requiring automation, AI-enabled workflows, and secure digital solutions',
      'Contribute to frontend and backend development using Next.js, React, TypeScript, Supabase, and modern full-stack tools',
      'Work on authentication, authorization, database access, and secure multi-tenant application patterns',
      'Integrate APIs, SDKs, and external software services to extend platform functionality and improve client solutions',
      'Support AI-enabled features such as streaming chat, retrieval-augmented generation, tool calling, semantic search, and automated workflows',
      'Help transform raw data into structured, visual, and actionable insights for users and client organizations',
      'Contribute to backend logic, protected server actions, API routes, webhooks, and background workflows',
      'Support security-focused development through validation, access control, audit logging, rate limiting, and safe handling of application data',
      'Work with reusable components, structured data layers, type-safe schemas, and maintainable application architecture',
      'Continuously improve the platform stack by evaluating available software tools and incorporating suitable technologies into delivered solutions',
    ],
  },
```

- [ ] **Step 3: Verify TypeScript compilation**

```bash
npm run build
```

Expected: No TypeScript errors, build succeeds

- [ ] **Step 4: Commit CUMLAUDE.AI updates**

```bash
git add data/experience.ts
git commit -m "content: expand CUMLAUDE.AI role with comprehensive technical description and 10 responsibilities"
```

---

### Task 2: Update Royal Wagenborg Entry

**Files:**
- Modify: `data/experience.ts:26-38`

- [ ] **Step 1: Replace Royal Wagenborg entry with project-organized content**

Replace the Royal Wagenborg entry (lines 26-38) with:

```typescript
  {
    date: '2022 — 2023',
    role: 'Junior Project Engineer',
    company: 'Royal Wagenborg',
    companyUrl: 'https://www.wagenborg.com',
    logo: '/assets/wagenborg.png',
    description: 'Led digitalization and compliance initiatives across maritime operations, focusing on environmental reporting, hazardous materials management, and software framework development.',
    bulletPoints: [
      'Executed MRV (Monitoring, Reporting, Verification) fuel reporting for vessels over 5,000 GT for the 2022 reporting year',
      'Created environmental consumption reports for submission to the International Maritime Organisation (IMO)',
      'Collaborated with leading companies to evaluate and implement digitalized tracking solutions for hazardous materials management',
      'Introduced protocols for tracking, handling, and disposal of hazardous materials on board ships throughout their life cycle',
      'Created a technical framework for in-house development of hazardous materials tracking software',
      'Established standardized processes for maritime compliance and operational efficiency improvements',
    ],
  },
```

- [ ] **Step 2: Verify TypeScript compilation**

```bash
npm run build
```

Expected: No TypeScript errors, build succeeds

- [ ] **Step 3: Commit Royal Wagenborg updates**

```bash
git add data/experience.ts
git commit -m "content: reorganize Royal Wagenborg role by project type with 6 detailed bullets"
```

---

### Task 3: Update S&B Machine Works Entry

**Files:**
- Modify: `data/experience.ts:39-50`

- [ ] **Step 1: Replace S&B Machine Works entry with CNC operations detail**

Replace the S&B Machine Works entry (lines 39-50) with:

```typescript
  {
    date: '2021',
    role: 'Production Planning Consultant',
    company: 'S&B Machine Works',
    logo: '',
    description: 'Developed production planning processes and operational workflows for high-precision CNC machining operations, focusing on scheduling optimization and process improvements.',
    bulletPoints: [
      'Developed and optimized production schedules for high-precision CNC machining operations',
      'Ensured efficient resource allocation, minimal downtime, and on-time delivery across machining projects',
      'Implemented process improvements to enhance throughput and reduce lead times',
      'Maintained quality standards while optimizing production efficiency',
      'Created operational procedures and workflow documentation for production planning',
    ],
  },
```

- [ ] **Step 2: Verify TypeScript compilation**

```bash
npm run build
```

Expected: No TypeScript errors, build succeeds

- [ ] **Step 3: Commit S&B Machine Works updates**

```bash
git add data/experience.ts
git commit -m "content: expand S&B Machine Works role with CNC machining and process optimization details"
```

---

### Task 4: Final Verification

**Files:**
- Verify: `data/experience.ts`

- [ ] **Step 1: Run development server to visually verify changes**

```bash
npm run dev
```

Expected: Server starts on http://localhost:3000

- [ ] **Step 2: Verify experience section displays correctly**

Open http://localhost:3000 in browser and check:
- CUMLAUDE.AI shows 3-paragraph description and 10 bullets
- Royal Wagenborg shows compliance/digitalization/framework bullets (6 total)
- S&B Machine Works shows CNC operations bullets (5 total)
- All entries maintain proper formatting and chronological order

- [ ] **Step 3: Stop development server**

```bash
# Press Ctrl+C in terminal
```

- [ ] **Step 4: Push changes to remote**

```bash
git push origin main
```

Expected: Changes pushed successfully, Vercel deployment triggered
