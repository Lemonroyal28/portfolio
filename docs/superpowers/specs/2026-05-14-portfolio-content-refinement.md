# Portfolio Content Refinement

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refine experience section content with more detailed descriptions and project-focused organization for Royal Wagenborg and S&B Machine Works roles.

**Approach:** Project-first emphasis that organizes work by deliverables rather than organizational structure, expanding bullet points from 3-4 to 5-6 per role to capture full scope of responsibilities.

**Files Modified:** `data/experience.ts`

---

## Content Structure

### Overview

The experience section will maintain 3 entries in chronological order:
1. **CUMLAUDE.AI** - Junior Full Stack Engineer (Jan 2026 — Present) - *unchanged*
2. **Royal Wagenborg** - Junior Project Engineer (2022 — 2023) - *reorganized by project type*
3. **S&B Machine Works** - Production Planning Consultant (2021) - *expanded with detailed CNC operations*

### Royal Wagenborg Entry

**Role:** Junior Project Engineer
**Company:** Royal Wagenborg
**Dates:** 2022 — 2023
**Company URL:** https://www.wagenborg.com
**Logo:** /assets/wagenborg.png

**Description:**
Led digitalization and compliance initiatives across maritime operations, focusing on environmental reporting, hazardous materials management, and software framework development.

**Bullet Points (6 total, organized by project type):**

*Compliance & Reporting:*
1. Executed MRV (Monitoring, Reporting, Verification) fuel reporting for vessels over 5,000 GT for the 2022 reporting year
2. Created environmental consumption reports for submission to the International Maritime Organisation (IMO)

*Digitalization Initiatives:*
3. Collaborated with leading companies to evaluate and implement digitalized tracking solutions for hazardous materials management
4. Introduced protocols for tracking, handling, and disposal of hazardous materials on board ships throughout their life cycle

*Framework Development:*
5. Created a technical framework for in-house development of hazardous materials tracking software
6. Established standardized processes for maritime compliance and operational efficiency improvements

### S&B Machine Works Entry

**Role:** Production Planning Consultant
**Company:** S&B Machine Works
**Dates:** 2021
**Logo:** (empty string - uses initials placeholder)

**Description:**
Developed production planning processes and operational workflows for high-precision CNC machining operations, focusing on scheduling optimization and process improvements.

**Bullet Points (5 total):**
1. Developed and optimized production schedules for high-precision CNC machining operations
2. Ensured efficient resource allocation, minimal downtime, and on-time delivery across machining projects
3. Implemented process improvements to enhance throughput and reduce lead times
4. Maintained quality standards while optimizing production efficiency
5. Created operational procedures and workflow documentation for production planning

### CUMLAUDE.AI Entry

**No changes** - keep existing content as is:
- Role: Junior Full Stack Engineer
- Dates: Jan 2026 — Present
- Current description and 4 bullet points remain unchanged

---

## Implementation Notes

- Maintain existing TypeScript interface structure in `data/experience.ts`
- Preserve all metadata (companyUrl, logo paths)
- Keep chronological ordering (newest first)
- Ensure bullet points are concise, action-oriented, and emphasize deliverables
- Use consistent verb tenses (past tense for completed roles)
- Maintain professional tone appropriate for technical portfolio

## Success Criteria

- Royal Wagenborg entry reorganized with 6 bullets covering all three project areas
- S&B Machine Works entry expanded to 5 bullets with CNC machining detail
- CUMLAUDE.AI entry remains unchanged
- All entries maintain consistent formatting and professional tone
- Content accurately reflects the scope and impact of work performed
