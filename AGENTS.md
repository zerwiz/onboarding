# AGENTS.md - Onboarding Guide Project

## Project Overview
Static HTML onboarding guide for WayOfMono team setup. Single-page application with presentation/dashboard modes, interactive slides, workspace inspector, and quick commands.

## Tech Stack
- **HTML5** - Single `index.html` (currently monolithic, planned modular breakdown)
- **Tailwind CSS** - Via CDN (configured in `<head>`)
- **Vanilla JS** - ES6 modules planned, currently inline `<script>`
- **Netlify** - Static hosting with SPA redirects

## Commands

```bash
# Development
npm run dev          # Starts npx serve on port 3000
./start.sh           # Same, with auto-browser open (Termux/Linux/Mac)

# Deploy
# Push to main branch -> Netlify auto-deploys
```

## Project Structure
```
onboard/
├── index.html           # Main app (587 lines, monolithic)
├── netlify.toml         # Netlify config (SPA redirects)
├── package.json         # Dev script only
├── start.sh             # Dev server launcher
├── TODO.md              # Task tracker
├── info.md              # Markdown version of onboarding guide
├── AI_Engineering_Cockpit_Assembly.pdf  # Downloadable PDF
├── AGENTS.md            # This file
├── info/                # Repository documentation pages
│   ├── f-rr-d.md
│   ├── wayofwork.md
│   ├── OptiCat.md
│   └── wayofmono.md
```

## Key Features
- **Presentation Mode** - Step-by-step slide carousel (13 slides)
- **Dashboard Mode** - Full workspace overview (planned)
- **Side Panel** - Workspace tree, quick commands, repo links (mobile drawer / desktop sidebar)
- **Progress Tracking** - localStorage persistence for completed slides
- **Search** - Global search across slides/commands
- **Theme Toggle** - Dark/light mode

## Code Conventions

### HTML/CSS
- Tailwind utility classes primary
- Custom CSS in `<style>` block for animations/scrollbars
- CSS variables via Tailwind config (`brand` colors)
- Mobile-first, `lg:` breakpoint for desktop sidebar

### JavaScript
- Single global state object pattern (`currentSlide`, `viewMode`, `completedSlides`)
- Functions attached to `window` for inline `onclick` handlers
- localStorage key: `wayofmono_onboarding_progress`
- Slide data: `slides[]` array with `{step, title, body}` objects

### Naming
- IDs: kebab-case (`#slide-title`, `#side-panel-column`)
- Classes: Tailwind utilities + custom (`.slide-transition`, `.custom-scrollbar`)
- JS variables: camelCase
- Data attributes: `data-slide-index`

## Planned Modular Structure (TODO)
```
src/
├── index.html              # Entry point
├── components/
│   ├── Header/
│   ├── SlidePanel/
│   ├── Sidebar/
│   ├── WorkspaceTree/
│   ├── QuickCommands/
│   ├── RepoLinks/
│   ├── ProgressBanner/
│   ├── NavigationMap/
│   ├── VideoSection/
│   └── Toast/
├── pages/
│   ├── PresentationView/
│   └── DashboardView/
├── modals/
├── styles/
│   ├── globals.css
│   └── components.css
├── utils/
│   ├── storage.js
│   ├── search.js
│   └── helpers.js
└── data/
    └── slides.js           # Slide content extracted from inline JS
```

## Netlify Config
```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Local Development Notes
- `start.sh` detects `termux-open-url`, `xdg-open`, or `open` for auto-browser launch
- Port configurable via `PORT` env var (default 3000)
- No build step required - pure static files

## External Dependencies (CDN)
- Tailwind CSS: `https://cdn.tailwindcss.com`
- Google Fonts: Inter + JetBrains Mono
- YouTube embed: `https://www.youtube.com/embed/wIM3X0OwhKY`
- GitHub links: `https://github.com/Way-Of/*`

## Git Workflow
- Main branch deploys to Netlify
- Feature branches for changes
- TODO.md tracks progress (checkbox format)