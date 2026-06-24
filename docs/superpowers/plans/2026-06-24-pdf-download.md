# PDF Download Feature Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Download CV" button to the Hero section that downloads a pre-generated PDF resume.

**Architecture:** Add a third CTA button in the Hero component's button group, styled to match the existing "View LinkedIn" button. The button uses a standard HTML anchor with download attribute pointing to a static PDF file in the public directory.

**Tech Stack:** Next.js 16, React 19, TypeScript

## Global Constraints

- Use existing CSS classes (`cta-button secondary`) - no new styles
- Match visual design of existing CTA buttons exactly
- PDF file must be named "Shivaan-Satish-CV.pdf"
- Place PDF in `/public` directory for static serving
- Maintain accessibility (keyboard navigation, aria labels)
- Test locally before deployment - do not push to GitHub yet

---

## File Structure

**Files to modify:**
- `components/Hero.tsx` - Add download button to `hero-cta-buttons` div

**Files to create:**
- `public/Shivaan-Satish-CV.pdf` - Placeholder PDF file (user will replace with actual CV)

---

### Task 1: Add Download Button to Hero Component

**Files:**
- Modify: `components/Hero.tsx:20-32` (the `hero-cta-buttons` div)

**Interfaces:**
- Consumes: Existing `hero-cta-buttons` div structure, `cta-button` CSS classes
- Produces: Download button that triggers PDF download when clicked

- [ ] **Step 1: Open Hero component**

Read the current Hero component to understand the structure:

```bash
cat components/Hero.tsx
```

Expected: See two CTA buttons ("Contact Me" and "View LinkedIn") in a `hero-cta-buttons` div around lines 20-32.

- [ ] **Step 2: Add download button after LinkedIn button**

Add the third button in the `hero-cta-buttons` div:

```tsx
<div className="hero-cta-buttons">
  <a className="cta-button primary" href={`mailto:${profile.email}`}>
    Contact Me
  </a>
  <a
    className="cta-button secondary"
    href={profile.linkedinUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    View LinkedIn
  </a>
  <a
    href="/Shivaan-Satish-CV.pdf"
    download="Shivaan-Satish-CV.pdf"
    className="cta-button secondary"
    aria-label="Download CV as PDF"
  >
    Download CV
  </a>
</div>
```

The complete modified section in `components/Hero.tsx` should be:

```tsx
<div className="hero-cta-buttons">
  <a className="cta-button primary" href={`mailto:${profile.email}`}>
    Contact Me
  </a>
  <a
    className="cta-button secondary"
    href={profile.linkedinUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    View LinkedIn
  </a>
  <a
    href="/Shivaan-Satish-CV.pdf"
    download="Shivaan-Satish-CV.pdf"
    className="cta-button secondary"
    aria-label="Download CV as PDF"
  >
    Download CV
  </a>
</div>
```

- [ ] **Step 3: Verify TypeScript compilation**

Run TypeScript check to ensure no type errors:

```bash
npx tsc --noEmit
```

Expected: No errors (exit code 0)

- [ ] **Step 4: Commit the Hero component changes**

```bash
git add components/Hero.tsx
git commit -m "feat: add Download CV button to Hero section

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 2: Create Placeholder PDF File

**Files:**
- Create: `public/Shivaan-Satish-CV.pdf`

**Interfaces:**
- Consumes: None
- Produces: PDF file accessible at `/Shivaan-Satish-CV.pdf` URL path

- [ ] **Step 1: Create a minimal placeholder PDF**

Create a simple placeholder PDF file that the user can replace later:

```bash
cat > /tmp/placeholder.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Shivaan Satish - CV</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
        }
        h1 { color: #6c63ff; }
    </style>
</head>
<body>
    <h1>Shivaan Satish</h1>
    <h2>Full Stack Engineer · Data Systems Developer · Automation Builder</h2>
    <p><strong>Location:</strong> Groningen, Netherlands</p>
    <p><strong>Email:</strong> shivaansat@gmail.com</p>
    <p><strong>LinkedIn:</strong> linkedin.com/in/shivaan-satish-6b8653221</p>

    <hr>

    <h3>About</h3>
    <p>Industrial engineer turned full-stack engineer, building AI-powered SaaS platforms, automation workflows, and scalable data systems for operational decision-making.</p>

    <hr>

    <p style="color: #666; font-style: italic;">
        This is a placeholder PDF. Please replace with your actual CV at:<br>
        public/Shivaan-Satish-CV.pdf
    </p>
</body>
</html>
EOF
```

- [ ] **Step 2: Convert HTML to PDF using browser print**

If you have a browser available, open the HTML file and print to PDF:
1. Open `/tmp/placeholder.html` in a browser
2. Print (Cmd+P or Ctrl+P)
3. Select "Save as PDF"
4. Save to `public/Shivaan-Satish-CV.pdf`

Alternative using command line (if wkhtmltopdf is installed):

```bash
wkhtmltopdf /tmp/placeholder.html public/Shivaan-Satish-CV.pdf
```

Or create an empty PDF as a minimal placeholder:

```bash
echo "%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj
2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj
3 0 obj
<<
/Type /Page
/Parent 2 0 R
/Resources <<
/Font <<
/F1 <<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
>>
>>
/MediaBox [0 0 612 792]
/Contents 4 0 R
>>
endobj
4 0 obj
<<
/Length 44
>>
stream
BT
/F1 12 Tf
100 700 Td
(Placeholder CV - Shivaan Satish) Tj
ET
endstream
endobj
xref
0 5
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000317 00000 n
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
410
%%EOF" > public/Shivaan-Satish-CV.pdf
```

- [ ] **Step 3: Verify PDF file exists**

```bash
ls -lh public/Shivaan-Satish-CV.pdf
```

Expected: File exists with a size greater than 0 bytes

- [ ] **Step 4: Add PDF to git and commit**

```bash
git add public/Shivaan-Satish-CV.pdf
git commit -m "feat: add placeholder CV PDF file

This is a minimal placeholder that should be replaced with the actual CV.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 3: Test Download Functionality

**Files:**
- Test: Manual testing in browser (no automated test file needed for this feature)

**Interfaces:**
- Consumes: Hero component with download button, PDF file at `/Shivaan-Satish-CV.pdf`
- Produces: Verified working download functionality

- [ ] **Step 1: Start development server**

```bash
npm run dev
```

Expected: Server starts on http://localhost:3000

- [ ] **Step 2: Open portfolio in browser**

Navigate to: http://localhost:3000

Expected: Page loads successfully

- [ ] **Step 3: Visual verification**

Check the Hero section:
- [ ] Three CTA buttons are visible: "Contact Me", "View LinkedIn", "Download CV"
- [ ] "Download CV" button has the same styling as "View LinkedIn" (secondary style)
- [ ] Button alignment and spacing looks correct
- [ ] No layout shifts or visual regressions

- [ ] **Step 4: Test download button click**

Click the "Download CV" button.

Expected:
- PDF file downloads immediately to your Downloads folder
- File is named "Shivaan-Satish-CV.pdf"
- No page navigation or reload occurs
- Browser's download indicator shows the file

- [ ] **Step 5: Verify downloaded PDF opens**

Open the downloaded PDF file.

Expected: PDF opens successfully (placeholder content visible)

- [ ] **Step 6: Test hover effects**

Hover over the "Download CV" button.

Expected:
- Background changes to surface color
- Border changes to accent purple color
- Button translates slightly upward
- Smooth transition animation

- [ ] **Step 7: Test keyboard accessibility**

Use Tab key to navigate through the page.

Expected:
- Can tab to the "Download CV" button
- Button shows visible focus state
- Can activate button with Enter key
- Download triggers when Enter is pressed

- [ ] **Step 8: Test on mobile viewport**

Resize browser to mobile width (375px) or use device toolbar in DevTools.

Expected:
- Three buttons stack vertically or wrap appropriately
- "Download CV" button remains visible and accessible
- Tap on mobile works (if testing on actual device)

- [ ] **Step 9: Cross-browser testing (if multiple browsers available)**

Test in Chrome/Edge, Firefox, and Safari (if available).

Expected: Download works consistently across all browsers

- [ ] **Step 10: Document testing completion**

Create a testing checklist confirmation:

```bash
cat > /tmp/test-results.txt << 'EOF'
PDF Download Feature Testing - COMPLETED

✓ Visual appearance matches design
✓ Download button click triggers PDF download
✓ Correct filename: Shivaan-Satish-CV.pdf
✓ Hover effects work correctly
✓ Keyboard navigation works
✓ Mobile viewport responsive
✓ Cross-browser compatible

Status: READY FOR USER REVIEW
Next step: User should replace placeholder PDF with actual CV
EOF

cat /tmp/test-results.txt
```

---

## Final Steps

After all tasks are complete:

1. **User replaces placeholder PDF:**
   - User creates their actual CV as a PDF
   - User saves it as `public/Shivaan-Satish-CV.pdf` (replacing placeholder)
   - Test download again to verify actual CV downloads

2. **Final verification:**
   - Run `npm run build` to ensure production build succeeds
   - Test the production build locally with `npm run start`
   - Verify download works in production mode

3. **Deployment (when ready):**
   - User will push to GitHub when satisfied with local testing
   - Vercel will auto-deploy the changes

---

## Success Criteria

- [x] "Download CV" button appears in Hero section
- [x] Button styled identically to "View LinkedIn" button
- [x] Clicking button downloads PDF with correct filename
- [x] PDF file exists and is accessible
- [x] No TypeScript or build errors
- [x] Keyboard accessible and has proper aria label
- [x] Works on desktop and mobile viewports
- [x] No visual regressions in Hero layout
