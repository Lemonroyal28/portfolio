# CUMLAUDE.AI Section Reduction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce CUMLAUDE.AI section by ~50% for improved scannability while adding tech badge display capability.

**Architecture:** Direct content reduction in data layer (111→35 words description, 10→5 bullets) + extend component to display tech badges using existing styling patterns.

**Tech Stack:** TypeScript, Next.js, React

---

## File Structure

**Modified Files:**
- `data/experience.ts` - Add optional techStack field to interface, update CUMLAUDE.AI entry content
- `components/Experience/TimelineEntry.tsx` - Add tech badge display capability
- `app/globals.css` - Verify tech badge styling exists (likely already present from project tags)

All changes maintain existing TypeScript interfaces and component patterns. Tech badges reuse project tag styling for visual consistency.

---

### Task 1: Update Experience Interface

**Files:**
- Modify: `data/experience.ts:1-9`

- [ ] **Step 1: Read current interface to verify structure**

```bash
head -n 20 data/experience.ts
```

Expected: See Experience interface definition

- [ ] **Step 2: Add techStack field to Experience interface**

Add optional techStack field after bulletPoints:

```typescript
export interface Experience {
  date: string;
  role: string;
  company: string;
  companyUrl?: string;
  logo: string;
  description: string;
  bulletPoints: string[];
  techStack?: string[];
}
```

- [ ] **Step 3: Verify TypeScript compilation**

```bash
npm run build
```

Expected: No TypeScript errors, build succeeds

- [ ] **Step 4: Commit interface update**

```bash
git add data/experience.ts
git commit -m "feat: add optional techStack field to Experience interface"
```

---

### Task 2: Update CUMLAUDE.AI Entry Content

**Files:**
- Modify: `data/experience.ts:12-31`

- [ ] **Step 1: Replace CUMLAUDE.AI entry with reduced content**

Replace the CUMLAUDE.AI entry (currently lines 12-31) with:

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
  },
```

**Content changes:**
- Description: 111 words → 35 words (68% reduction)
- Bullets: 10 → 5 (50% reduction)
- Tech stack: Added 5 core badges

- [ ] **Step 2: Verify TypeScript compilation**

```bash
npm run build
```

Expected: No TypeScript errors, build succeeds

- [ ] **Step 3: Commit content reduction**

```bash
git add data/experience.ts
git commit -m "content: reduce CUMLAUDE.AI section by 50% and add tech stack badges"
```

---

### Task 3: Add Tech Badge Display to TimelineEntry

**Files:**
- Modify: `components/Experience/TimelineEntry.tsx:3-15` (interface)
- Modify: `components/Experience/TimelineEntry.tsx:17-29` (props destructuring)
- Modify: `components/Experience/TimelineEntry.tsx:73-90` (render section)

- [ ] **Step 1: Read current TimelineEntry to verify structure**

```bash
cat components/Experience/TimelineEntry.tsx
```

Expected: See TimelineEntryProps interface and component structure

- [ ] **Step 2: Add techStack to TimelineEntryProps interface**

Add techStack after tags field in interface:

```typescript
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
  techStack?: string[];
}
```

- [ ] **Step 3: Add techStack to props destructuring**

Add techStack to the destructured props in the component function:

```typescript
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
  techStack,
}: TimelineEntryProps) {
```

- [ ] **Step 4: Add tech badge rendering after bulletPoints section**

Add this section after the closing `</div>` of bulletPoints (around line 73), before the tags section:

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

Position: After bulletPoints, before tags section. This ensures tech badges appear logically after role responsibilities.

- [ ] **Step 5: Verify TypeScript compilation**

```bash
npm run build
```

Expected: No TypeScript errors, build succeeds

- [ ] **Step 6: Commit component update**

```bash
git add components/Experience/TimelineEntry.tsx
git commit -m "feat: add tech stack badge display to TimelineEntry component"
```

---

### Task 4: Update ExperienceSection to Pass TechStack

**Files:**
- Modify: `components/Experience/ExperienceSection.tsx:10-23`

- [ ] **Step 1: Read current ExperienceSection**

```bash
cat components/Experience/ExperienceSection.tsx
```

Expected: See TimelineEntry component being rendered with props

- [ ] **Step 2: Add techStack prop to TimelineEntry rendering**

Update the TimelineEntry component call to include techStack:

```typescript
          {experience.map((exp, index) => (
            <TimelineEntry
              key={index}
              date={exp.date}
              isNow={index === 0}
              role={exp.role}
              company={exp.company}
              companyUrl={exp.companyUrl}
              logo={exp.logo}
              description={exp.description}
              bulletPoints={exp.bulletPoints}
              techStack={exp.techStack}
            />
          ))}
```

- [ ] **Step 3: Verify TypeScript compilation**

```bash
npm run build
```

Expected: No TypeScript errors, build succeeds

- [ ] **Step 4: Commit ExperienceSection update**

```bash
git add components/Experience/ExperienceSection.tsx
git commit -m "feat: pass techStack prop to TimelineEntry in ExperienceSection"
```

---

### Task 5: Verify Tech Badge Styling

**Files:**
- Check: `app/globals.css`

- [ ] **Step 1: Check if tech-badge styling exists**

```bash
grep -n "tech-badge\|project-tag" app/globals.css
```

Expected: Find `.project-tag` styling (tech badges will use same styles)

- [ ] **Step 2: Add tech-badge styles if not present**

If `.tech-badge` doesn't exist, add after project-tag styles:

```css
.timeline-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.tech-badge {
  display: inline-block;
  padding: 6px 12px;
  background: var(--surface);
  color: var(--accent);
  border: 1px solid var(--accent);
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: default;
}

.tech-badge:hover {
  background: var(--accent);
  color: var(--bg);
  transform: translateY(-2px);
}
```

If `.project-tag` already exists with similar styles, you can alias:

```css
.tech-badge {
  /* Reuse project-tag styles */
  display: inline-block;
  padding: 6px 12px;
  background: var(--surface);
  color: var(--accent);
  border: 1px solid var(--accent);
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.tech-badge:hover {
  background: var(--accent);
  color: var(--bg);
  transform: translateY(-2px);
}
```

- [ ] **Step 3: Verify build if CSS was modified**

```bash
npm run build
```

Expected: Build succeeds

- [ ] **Step 4: Commit styling if changes were made**

Only run if CSS was modified:

```bash
git add app/globals.css
git commit -m "style: add tech badge styling for experience entries"
```

---

### Task 6: Final Verification

**Files:**
- Verify: All changes

- [ ] **Step 1: Run development server**

```bash
npm run dev
```

Expected: Server starts on http://localhost:3000

- [ ] **Step 2: Visual verification**

Open http://localhost:3000 and verify:
- CUMLAUDE.AI description is 2 concise lines (~35 words)
- Only 5 bullet points shown (vs previous 10)
- 5 tech badges displayed below bullets: Next.js, TypeScript, Supabase, PostgreSQL, Vercel AI SDK
- Tech badges styled consistently with portfolio theme (accent colors, hover effects)
- Section looks cleaner, more scannable, maintains technical credibility
- Royal Wagenborg and S&B entries unchanged

- [ ] **Step 3: Stop development server**

```bash
# Press Ctrl+C in terminal
```

- [ ] **Step 4: Push all changes to remote**

```bash
git push origin main
```

Expected: Changes pushed successfully, Vercel deployment triggered

---

## Verification Checklist

After implementation, verify:
- ✅ CUMLAUDE.AI description reduced from 111 to ~35 words
- ✅ Bullet points reduced from 10 to 5
- ✅ 5 tech badges display below bullets
- ✅ Tech badges use consistent styling with portfolio theme
- ✅ TypeScript compilation succeeds
- ✅ Visual presentation improved (scannable, confident, professional)
- ✅ Other experience entries (Wagenborg, S&B) unchanged
- ✅ No console errors or warnings
- ✅ Responsive layout maintained on mobile

---

## Rollback Plan

If issues occur:

```bash
# Revert all commits from this feature
git log --oneline -n 5  # Find commit hashes
git revert <commit-hash> <commit-hash> <commit-hash>  # Revert in reverse order
git push origin main
```
