# Royal Heritage — Wedding Website

A standalone, bespoke digital experience for a royal Indian wedding celebration. Built with modern, lightweight web technologies focused on high performance, accessibility, and visual elegance.

---

## Technical Stack

- **Framework**: React 18
- **Language**: TypeScript 5
- **Build Tool**: Vite 6
- **Styling**: Native CSS with centralized design tokens (CSS custom properties)
- **Zero Heavy Dependencies**: Pure, lean setup without bulky UI frameworks or unnecessary third-party packages

---

## Design System Tokens & Aesthetics

The aesthetic captures a Royal Indian Wedding palette and timeless editorial typography:

### Color Palette
- **Royal Maroon**: `#641F30` (Primary royal accent)
- **Antique Ivory**: `#F5EFE4` (Soft editorial background)
- **Antique Gold**: `#B5965B` (Metallic accents and borders)
- **Deep Charcoal**: `#28201E` (High-contrast typography)
- **Dusty Rose**: `#A87971` (Subtle warm highlights)
- **Warm Sand**: `#E7D8C1` (Secondary card and surface fills)

### Typography
- **Display**: Cormorant Garamond & Playfair Display (Serif)
- **Body & Captions**: Lato (Clean, highly legible sans-serif)

---

## Project Structure

```text
wedding_demo_01/
├── index.html                # Application HTML entry point & font preloading
├── package.json              # Project dependencies and lifecycle scripts
├── tsconfig.json             # Root TypeScript compiler configuration
├── vite.config.ts            # Vite build and bundling configuration
├── public/
│   ├── favicon.svg           # Custom Royal Heritage monogram favicon
│   └── images/
│       ├── hero-palace.avif        # Desktop landscape AVIF (269 KB)
│       ├── hero-palace.webp        # Desktop landscape WebP (352 KB)
│       ├── hero-palace.jpg         # Desktop landscape JPEG (352 KB)
│       ├── hero-palace-mobile.avif # Mobile portrait AVIF (190 KB)
│       ├── hero-palace-mobile.webp # Mobile portrait WebP (274 KB)
│       ├── hero-palace-mobile.jpg  # Mobile portrait JPEG (274 KB)
│       ├── story-couple.avif       # Couple editorial portrait AVIF (249 KB)
│       ├── story-couple.webp       # Couple editorial portrait WebP (340 KB)
│       ├── story-couple.jpg        # Couple editorial portrait JPEG (340 KB)
│       ├── event-mehendi.avif      # Mehendi garden courtyard AVIF (424 KB)
│       ├── event-mehendi.webp      # Mehendi garden courtyard WebP (536 KB)
│       ├── event-mehendi.jpg       # Mehendi garden courtyard JPEG (536 KB)
│       ├── event-sangeet.avif      # Sangeet Darbar hall AVIF (303 KB)
│       ├── event-sangeet.webp      # Sangeet Darbar hall WebP (406 KB)
│       ├── event-sangeet.jpg       # Sangeet Darbar hall JPEG (406 KB)
│       ├── event-wedding.avif      # Royal mandap ceremony AVIF (318 KB)
│       ├── event-wedding.webp      # Royal mandap ceremony WebP (416 KB)
│       └── event-wedding.jpg       # Royal mandap ceremony JPEG (416 KB)
└── src/
    ├── main.tsx              # DOM mount point
    ├── App.tsx               # Root application entry component
    ├── App.css               # Base layout shell styling
    ├── vite-env.d.ts         # Vite client type definitions
    ├── config/
    │   └── weddingConfig.ts  # Centralized wedding data and content
    ├── types/
    │   └── index.ts          # Strongly typed domain models and contracts
    ├── styles/
    │   ├── reset.css         # Modern baseline CSS reset
    │   ├── tokens.css        # Centralized CSS variables (colors, typography, spacing)
    │   ├── components.css    # Reusable design primitives (buttons, dividers, cards, frames)
    │   └── global.css        # Global CSS rules, accessible focus states, reduced-motion
    ├── components/
    │   ├── common/           # Reusable atomic UI primitives (Button, Divider, Container, SectionHeader)
    │   ├── layout/           # Page structural components (header, footer, containers)
    │   └── sections/         # Feature sections (Hero, Welcome, OurStory, Countdown)
    └── utils/
        └── index.ts          # Pure utility helpers (date formatting, etc.)
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will be served at `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```
This runs type verification (`tsc -b`) and generates an optimized production bundle in `/dist`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## Engineering Guidelines

1. **Clean Separation of Concerns**: Content, event schedules, and metadata live in `src/config/weddingConfig.ts`, typed via `src/types/index.ts`.
2. **Modular Components**: Future sections are isolated into dedicated, single-responsibility components.
3. **No Agency Branding**: Designed purely as an authentic, standalone personal wedding site.
4. **Mobile-First Responsive**: Base styles target mobile viewports first, expanding fluidly with CSS media queries.
5. **Accessibility**: Semantic HTML elements, accessible heading hierarchies, screen-reader utilities (`.sr-only`), and visible focus indicators.
