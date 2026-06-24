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

Modify the CTA buttons section (`hero-cta-buttons` div) to add a third button for PDF download:
- Existing: "Contact Me" button (primary), "View LinkedIn" button (secondary)
- New: "Download CV" button (secondary)

Implementation approach:
- Use standard HTML `<a>` tag with `download` attribute
- `href="/Shivaan-Satish-CV.pdf"`
- `download="Shivaan-Satish-CV.pdf"` attribute
- Class: `cta-button secondary`
- Text: "Download CV"
- Optional: Small download SVG icon before text (14x14px, similar to location icon style)

### File Placement

**Location:** `/public/Shivaan-Satish-CV.pdf`

The PDF file will be placed in the public directory, making it accessible at the root URL path. The user will manually create and maintain this PDF file.

### Styling

The download button will use existing CTA button styles:
- Class: `cta-button secondary`
- Matches the "View LinkedIn" button styling
- Transparent background with border
- Hover effect: background changes to surface color, border becomes accent purple, slight upward translation
- Same font family (inherit), size (15px), weight, and padding (12px 24px)
- Same spacing and layout within `hero-cta-buttons` flex container

No new CSS required - existing `.cta-button` and `.cta-button.secondary` styles will be applied.

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

Add a new button element within the existing `hero-cta-buttons` div:

```tsx
<a
  href="/Shivaan-Satish-CV.pdf"
  download="Shivaan-Satish-CV.pdf"
  className="cta-button secondary"
  aria-label="Download CV as PDF"
>
  Download CV
</a>
```

Position after the "View LinkedIn" button in the `hero-cta-buttons` container.

Optional enhancement: Add a small download SVG icon (14x14px) before the text, styled similarly to the location icon.

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
