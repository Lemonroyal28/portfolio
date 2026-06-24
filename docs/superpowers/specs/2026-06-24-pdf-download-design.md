# PDF Download Feature - Design Specification

**Date:** 2026-06-24
**Author:** Shivaan Satish & Claude Sonnet 4.5
**Status:** Approved

## Executive Summary

Add a "Download CV" button to the portfolio's Hero section that allows recruiters and hiring managers to download a pre-generated PDF version of the CV. This supports the job search process by providing an easy way to share the CV with applications that require PDF submissions.

## Goals

1. Add a download link in the Hero section for a pre-generated PDF CV
2. Match existing design language and contact link styling
3. Ensure cross-browser and mobile compatibility
4. Maintain accessibility standards

## Non-Goals

- Client-side PDF generation from the portfolio content
- Server-side PDF rendering
- Multiple file format options (PDF only)
- Dynamic PDF updates (manual update process)

## Context

Shivaan's contract with CUMLAUDE ends August 19, 2026. The portfolio needs to support job applications by providing a downloadable PDF CV in addition to the live portfolio link.

## Design

### Component Changes

**File:** `components/Hero.tsx`

Modify the contact links section to add a third link for PDF download:
- Existing: Email link, LinkedIn link
- New: Download CV link

Implementation approach:
- Use standard HTML `<a>` tag with `download` attribute
- `href="/Shivaan-Satish-CV.pdf"`
- `download="Shivaan-Satish-CV.pdf"` attribute
- Include download icon (matching existing icon style)
- Text: "Download CV"

### File Placement

**Location:** `/public/Shivaan-Satish-CV.pdf`

The PDF file will be placed in the public directory, making it accessible at the root URL path. The user will manually create and maintain this PDF file.

### Styling

The download link will reuse existing contact link styles:
- Same CSS classes as email and LinkedIn links
- Same font family, size, weight, and color
- Same hover transition effect (color shift to accent purple)
- Same spacing and layout
- Download icon matches existing icon styling

No new CSS required - existing `.hero-links` and related styles will be applied.

### User Experience

**Download Behavior:**
1. User clicks "Download CV" link
2. Browser immediately downloads the PDF file
3. File saves as "Shivaan-Satish-CV.pdf" to user's default downloads folder
4. No page navigation or reload
5. Works on all modern browsers (Chrome, Firefox, Safari, Edge)

**Mobile Behavior:**
- On mobile devices, follows device's default download handling
- May prompt for download location or open PDF directly depending on device settings

**Accessibility:**
- Link is keyboard-navigable (Tab key)
- Includes appropriate aria-label: "Download CV as PDF"
- Screen reader announces link purpose clearly

## Implementation

### Files to Modify

1. `components/Hero.tsx` - Add download link to contact links section

### Files to Create

1. `/public/Shivaan-Satish-CV.pdf` - Pre-generated PDF CV (placeholder initially, user provides final version)

### Code Changes

**In Hero.tsx:**

Add a new link element within the existing contact links container:

```tsx
<a
  href="/Shivaan-Satish-CV.pdf"
  download="Shivaan-Satish-CV.pdf"
  aria-label="Download CV as PDF"
  className="[existing-link-classes]"
>
  <DownloadIcon />
  Download CV
</a>
```

Position after LinkedIn link in the same container.

## Testing Plan

### Functional Testing
- [ ] Click download link - PDF downloads correctly
- [ ] Verify downloaded filename is "Shivaan-Satish-CV.pdf"
- [ ] Test in Chrome/Edge
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Test on mobile device (iOS/Android)

### Visual Testing
- [ ] Link styling matches email and LinkedIn links
- [ ] Hover effect works (color transition)
- [ ] Icon matches existing icon style
- [ ] Spacing and alignment correct on desktop
- [ ] Spacing and alignment correct on mobile
- [ ] Responsive layout maintains proper positioning

### Accessibility Testing
- [ ] Link is reachable via keyboard (Tab navigation)
- [ ] Focus state visible
- [ ] Screen reader announces link correctly
- [ ] aria-label is descriptive

## Success Criteria

- Download link appears in Hero section alongside email and LinkedIn
- Clicking link downloads PDF with correct filename
- Styling matches existing contact links exactly
- Works across all major browsers and mobile devices
- Passes accessibility tests
- No visual regression in Hero section layout

## Risks & Mitigation

### Risk: PDF file not found (404 error)

**Mitigation:**
- Create placeholder PDF file during implementation
- Document clearly where user needs to place their final PDF
- Test download before considering feature complete

### Risk: Download attribute not supported on older browsers

**Mitigation:**
- The `download` attribute is supported in all modern browsers (Chrome 14+, Firefox 20+, Safari 10.1+, Edge 13+)
- For unsupported browsers, link will open PDF in new tab (still acceptable UX)

### Risk: Visual inconsistency with existing links

**Mitigation:**
- Reuse exact same CSS classes as email/LinkedIn links
- Visual comparison testing before deployment
- Side-by-side review with existing links

## Future Enhancements (Out of Scope)

- Auto-generate PDF from portfolio content
- Multiple file format options (PDF, DOCX)
- Version control for different CV versions
- Analytics tracking for download counts

---

**End of Design Specification**
