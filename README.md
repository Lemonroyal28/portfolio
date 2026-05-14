# Shivaan Satish — Portfolio

Modern portfolio website built with Next.js 15, showcasing experience as a Junior Full Stack Engineer at CUMLAUDE.AI.

## 🚀 Live Site

**Production**: https://shivaansat-portfolio-chi-pink-58.vercel.app

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Global CSS with CSS Custom Properties
- **Fonts**: Space Grotesk, Space Mono (Google Fonts)
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## 📋 Features

- **Responsive Design**: Mobile-first with smooth mobile navigation
- **Dynamic Content**: TypeScript data files for easy content updates
- **Technology Stack Section**: Showcases 10 technology categories and architecture overview
- **Enhanced CUMLAUDE.AI Role**: Full-stack SaaS development with multi-tenant architecture
- **Scroll Animations**: Intersection Observer-based reveal effects
- **Optimized Images**: Next.js Image component with AVIF/WebP support
- **Server Components**: Performance-optimized with React 19 Server Components

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Global styles (dark theme, purple accent)
├── components/
│   ├── Navbar.tsx         # Navigation with active section highlighting
│   ├── Hero.tsx           # Hero section with profile info
│   ├── Experience/        # Experience section with Stack integration
│   ├── Education/         # Education timeline
│   ├── Skills/            # Technical skills grid
│   ├── Languages/         # Language proficiency bars
│   ├── Projects/          # Project cards
│   ├── Activities/        # Extracurricular activities
│   ├── CTA.tsx           # Contact call-to-action
│   ├── Footer.tsx        # Footer with links
│   └── ScrollReveal.tsx  # Animation wrapper component
├── data/
│   ├── profile.ts         # Personal information
│   ├── experience.ts      # Work experience data
│   ├── stackArchitecture.ts  # Technology stack and architecture
│   ├── education.ts       # Academic background
│   ├── skills.ts          # Technical and methodology skills
│   ├── languages.ts       # Language proficiencies
│   ├── projects.ts        # Project portfolio
│   └── activities.ts      # Extracurricular activities
└── public/
    └── assets/            # Images and logos
```

## 🎨 Design System

- **Color Scheme**: Dark theme with purple accent (#6c63ff)
- **Typography**: Space Grotesk (headings), Space Mono (monospace)
- **Layout**: Container-based with consistent spacing
- **Components**: Modular, reusable components with TypeScript interfaces

## 📝 Content Updates

To update portfolio content, edit the TypeScript files in the `data/` directory:

- **Profile Info**: `data/profile.ts`
- **Work Experience**: `data/experience.ts`
- **Tech Stack**: `data/stackArchitecture.ts`
- **Education**: `data/education.ts`
- **Skills**: `data/skills.ts`
- **Projects**: `data/projects.ts`

## 🚀 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Deployment

Deployed on Vercel with automatic deployments from the `main` branch.

- **GitHub Repository**: https://github.com/Lemonroyal28/portfolio
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

## 📄 Migration Notes

This portfolio was migrated from static HTML to Next.js 15 while preserving:
- ✅ Exact visual styling (colors, spacing, fonts, effects)
- ✅ All original content
- ✅ Enhanced CUMLAUDE.AI role description (full-stack SaaS focus)
- ✅ New Technology Stack & Architecture section
- ✅ Improved Skills section with broader capabilities
- ✅ Vercel Analytics integration

---

**Built with ❤️ by Shivaan Satish**
