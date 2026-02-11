# CLAUDE.md — TIDE Website

## Project Overview

Website for **TIDE**, the Data Excellence Student Club at TUM (Technical University of Munich). Built on the [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) template.

**Live site**: https://tum-tide.com/

## Commands

```bash
yarn dev          # Start dev server (uses cross-env)
yarn build        # Production build + postbuild script
yarn lint         # ESLint with --fix (pages, app, components, lib, layouts, scripts)
yarn serve        # Serve production build
```

- Package manager: **Yarn 3.6.1**
- Pre-commit: **Husky** + **lint-staged** (ESLint fix + Prettier on staged files)

## Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with `@tailwindcss/forms`, `@tailwindcss/typography`
- **Contentlayer2** for MDX blog posts (source: `data/blog/`)
- **motion** (v12, Motion.dev) for animations — import from `motion/react`
- **pliny** for search (kbar), analytics (Umami), newsletter, MDX utilities
- **next-themes** for theme management
- **@svgr/webpack** for inline SVG imports
- Deployed on **Vercel**

## Project Structure

```
app/                    # Next.js App Router pages
  layout.tsx            # Root layout (header, footer, providers)
  Main.tsx              # Homepage component (hero, sections)
  theme-providers.tsx   # ThemeProvider (dark forced)
  about/  blog/  events/  hackathon/  projects/  apply/  tags/
components/             # Shared UI components
  Header.tsx            # Navigation bar
  HeaderWrapper.tsx     # Wraps Header with scroll/position logic
  AnnouncementBanner.tsx # Site-wide banner (above header)
  MobileNav.tsx         # Mobile hamburger menu
  Footer.tsx            # Site footer
  Link.tsx              # Custom Link (adds break-words, external target)
  Card.tsx  SubpageHero.tsx  MemberCarousel.tsx  ProjectTimeline.tsx  ...
css/
  tailwind.css          # All Tailwind config, custom properties, utilities
data/
  siteMetadata.js       # Site config (URLs, analytics, comments, search)
  headerNavLinks.ts     # Top nav link definitions
  eventsData.ts         # Events/hackathon data
  projectsData.ts       # Project showcase data
  members.csv           # Current members
  blog/                 # MDX blog posts (processed by Contentlayer)
  authors/              # Author MDX profiles
layouts/                # Blog/post layout templates (PostLayout, ListLayout, etc.)
public/static/          # Images, videos, favicons
```

## Design System

### Theme

Dark mode is **forced** (`forcedTheme="dark"` in `theme-providers.tsx`). No light-mode variants needed for new components.

### Colors (defined in `css/tailwind.css`)

| Token             | Value                 | Usage                                     |
| ----------------- | --------------------- | ----------------------------------------- |
| `primary-500`     | `#5c82ff`             | Brand blue — buttons, links, accents      |
| `primary-300/400` | `#94b5ff` / `#769dff` | Light accents on dark backgrounds         |
| `primary-950`     | `#102156`             | Darkest blue — subtle tinted backgrounds  |
| Pink accent       | `#f9a8d4`             | Gradient animations (paired with primary) |
| `gray-950`        | OKLch dark            | Body background in dark mode              |

### Typography

- Font: **Space Grotesk** (variable `--font-space-grotesk`)
- Weights: `font-medium`, `font-semibold`, `font-bold`, `font-black`

### CSS Utilities (in `css/tailwind.css`)

- `.glass` / `.glass-dark` — Glassmorphism (backdrop-blur + semi-transparent bg)
- `.gradient-text` — Animated blue↔pink gradient text (15s cycle)
- `.animated-outline` — Beam animation traveling around element border
- `.float` — Gentle vertical float animation (6s cycle)

### Z-Index Scale

`z-50` (header) → `z-60` (mobile nav backdrop) → `z-70` (mobile nav panel) → `z-80`

## Key Patterns

### Component Styling

All components use **Tailwind utility classes** inline. No CSS modules or styled-components for layout components.

```tsx
// Conditional classes pattern used throughout
className={`base-classes ${condition ? 'variant-a' : 'variant-b'}`}
```

### Animations (motion/react)

```tsx
import { motion, AnimatePresence } from 'motion/react'

;<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: index * 0.2 }}
/>
```

### Homepage Header

The homepage header is **fixed** (`fixed top-0 z-50`) with glassmorphic backdrop-blur. It changes appearance on scroll (handled in `HeaderWrapper.tsx`). The hero section uses `pt-24 sm:pt-28` (or higher when a banner is present) to offset content below the fixed header.

All other pages have a **static** header in normal document flow.

### Links

Use `@/components/Link` for general links (auto-handles internal/external/anchor). For components needing full className control, import `next/link` directly.

### Blog Content

Blog posts live in `data/blog/` as MDX files processed by Contentlayer2. Frontmatter fields: `title`, `date`, `tags`, `summary`, `draft`, `images`, `authors`, `layout`.

## Important Conventions

- `@/` path alias maps to project root (configured in `tsconfig.json`)
- SVGs in `data/` can be imported as React components (via `@svgr/webpack`)
- `data/siteMetadata.js` is the single source for site-wide config
- Responsive: mobile-first with `sm:`, `md:`, `lg:` breakpoints
- Respect `prefers-reduced-motion` for CSS animations
- Nav links are defined in `data/headerNavLinks.ts`
