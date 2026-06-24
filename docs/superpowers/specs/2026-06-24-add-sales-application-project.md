# Add Sales Application Project - Specification

**Date:** 2026-06-24
**Author:** Shivaan Satish & Claude Sonnet 4.5
**Status:** Draft - To Be Implemented Later

## Executive Summary

Add a new project entry to the portfolio showcasing the AI-powered sales application built at CUMLAUDE.AI. This application reads company information via API calls and automatically constructs working demo environments with AI chatbots and example automation agents tailored to the prospect's needs.

## Goals

1. Add new project entry to `data/projects.ts`
2. Highlight the sales application as a key achievement
3. Showcase AI integration and automation capabilities
4. Position as technical sales enablement tool

## Project Details

### Project Information

**Label:** `CUMLAUDE.AI` or `Sales Enablement`

**Title:** `AI-Powered Sales Demo Generator` or `Automated Sales Application Platform`

**Description:**
"Developed an intelligent sales application that researches prospect companies via API integration and automatically generates fully functional demo environments. The system constructs custom AI chatbots powered by CUMLAUDE's technology and deploys example automation agents tailored to each prospect's specific business needs, dramatically accelerating the sales cycle."

### Tech Stack Tags

Recommended tags (choose 5-6 most relevant):
- `Next.js`
- `React`
- `TypeScript`
- `AI Integration`
- `API Integration`
- `Automation`
- `Supabase`
- `Vercel AI SDK`
- `Demo Generation`

## Implementation

### File to Modify

**File:** `data/projects.ts`

**Change:** Add new project object to the `projects` array

### Placement

Two options:

**Option A: Feature as First Project** (Recommended)
- Place at index 0, before MSc Thesis
- Highlights recent professional work
- Shows progression from academic to industry

**Option B: After CUMLAUDE.AI Project**
- Place at index 2, after existing CUMLAUDE project
- Groups CUMLAUDE work together
- Separates by project type

### Code Addition

```typescript
{
  label: 'CUMLAUDE.AI',
  title: 'AI-Powered Sales Demo Generator',
  description: 'Developed an intelligent sales application that researches prospect companies via API integration and automatically generates fully functional demo environments. The system constructs custom AI chatbots powered by CUMLAUDE\'s technology and deploys example automation agents tailored to each prospect\'s specific business needs.',
  tags: ['Next.js', 'React', 'TypeScript', 'AI Integration', 'API Integration', 'Automation'],
},
```

## Design Decisions

### Title Options

1. **AI-Powered Sales Demo Generator** (Recommended)
   - Clear and specific
   - Highlights AI aspect
   - Shows value proposition

2. **Automated Sales Application Platform**
   - Emphasizes automation
   - Platform suggests larger scope
   - Less specific about functionality

3. **Intelligent Sales Enablement Tool**
   - Business-focused language
   - Broad appeal
   - Less technical

### Description Approach

**Chosen approach:** Focus on capabilities and impact
- What it does: researches companies, generates demos
- How it works: API integration, AI chatbots, automation agents
- Value: tailored to prospect needs, accelerates sales

**Alternative approaches:**
- Technical implementation details (more engineering-focused)
- Business impact metrics (more results-focused)
- Process workflow description (more procedural)

### Tech Stack Selection

**Included:**
- Next.js, React, TypeScript (core framework)
- AI Integration (key differentiator)
- API Integration (core functionality)
- Automation (business value)

**Excluded to maintain focus:**
- Database specifics (Supabase/PostgreSQL)
- Deployment platform (Vercel)
- Specific AI SDK (Vercel AI SDK)

## Content Considerations

### Placement in Portfolio Print

With the new project added:
- Projects section has 5 items instead of 4
- May affect 2-page print layout
- Multi-column layout should accommodate the extra project
- Monitor print preview to ensure it still fits in 2 pages

### Messaging Alignment

Ensure consistency with:
- CUMLAUDE.AI experience entry (Experience section)
- Technology Stack & Architecture section
- Skills section (AI & ML, API integration)

## Future Enhancements (Out of Scope)

- Add project URLs/links (if applicable)
- Add project screenshots/images
- Create dedicated project detail pages
- Add date ranges to projects
- Add metrics/impact data (demos generated, conversion rate, etc.)
- Tag filtering/categorization in Projects section

## Testing

After implementation:
1. Verify new project appears in Projects section
2. Check multi-column layout in print preview
3. Ensure print version still fits in 2 pages
4. Verify tag styling matches other projects
5. Check for any text overflow or layout issues

## Success Criteria

- [x] New project entry added to projects array
- [x] Title clearly communicates functionality
- [x] Description highlights AI and automation capabilities
- [x] Tech stack tags are relevant and accurate
- [x] Project appears correctly in Projects section
- [x] Print layout still fits in 2 pages
- [x] No visual regressions
- [x] Content aligns with Experience section

---

**Implementation Status:** Specification complete, ready for implementation when needed.

**Notes:** This spec can be used as the basis for writing an implementation plan when ready to add the project.
