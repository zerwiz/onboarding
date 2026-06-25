# AGENTS.md - Onboarding Guide Project

## Project Overview
Static HTML onboarding guide for WayOfMono team setup. Three-page site with presentation/dashboard modes, interactive slides, workspace inspector, quick commands, ticket system docs, and skills reference.

## Tech Stack
- **HTML5** - `index.html` (~692 lines post-refactor), `tickets.html` (874 lines), `skills.html` (554 lines)
- **Tailwind CSS** - Via CDN
- **Vanilla JS** - ES modules in `src/` with `<script type="module">` entry
- **marked.js** - CDN for GitHub-flavored markdown rendering of info/*.md files
- **Netlify** - Static hosting with SPA redirects

## Commands

```bash
npm run dev          # Starts npx serve on port 3000
./start.sh           # Same, with auto-browser open (Termux/Linux/Mac)
```

## Project Structure
```
onboard/
├── index.html              # Main app (692 lines, uses src/app.js module)
├── wayofteams.html          # Way of Teams project page
├── tickets.html            # Ticket system documentation (874 lines)
├── skills.html             # All 80 AI Harness skills reference (554 lines)
├── src/
│   ├── app.js              # Main entry point, imports all components
│   ├── data/
│   │   └── slides.js       # 13 slides array + SLIDE_COUNT export
│   ├── utils/
│   │   ├── helpers.js      # copyCommand, escapeHtml, showToast, scrollToTop
│   │   ├── storage.js      # localStorage wrapper (loadProgress, saveProgress)
│   │   └── search.js       # searchSlides, renderSearchResults, clearSearch
│   └── components/
│       ├── Header.js       # Search, sidebar toggle, resources dropdown, ESC/click-outside
│       ├── SlidePanel.js   # Slide render, navigation, completion, arrow keys
│       ├── Sidebar.js      # Tree folders, theme toggle, mobile drawer controls
│       ├── ViewMode.js     # Dashboard/Presentation mode toggle
│       ├── NavigationMap.js # Steps grid render
│       ├── ProgressBanner.js # Completion banner
│       ├── MarkdownViewer.js # Modal render/close for info/*.md
│       ├── Toast.js        # Notification toast
│       ├── MobileDrawer.js # Backdrop click to close
│       └── VideoSection.js # Static (no-op init)
├── favicon.svg             # SVG favicon with brand lightning bolt
├── apple-touch-icon.svg    # 180×180 apple touch icon
├── og-image.svg            # 1200×630 OG image for social sharing
├── CHANGELOG.md
├── PLAN.md                 # Modular architecture plan
├── netlify.toml            # Netlify config (SPA redirects)
├── package.json            # Dev script only
├── start.sh                # Dev server launcher
├── TODO.md                 # Task tracker
├── info.md                 # Markdown version of onboarding guide
├── AI_Engineering_Cockpit_Assembly.pdf
├── AGENTS.md               # This file
├── info/                   # Repository documentation pages
│   ├── f-rr-d.md
│   ├── wayofwork.md
│   ├── OptiCat.md
│   ├── wayofmono.md
│   └── wayofteams.md
```

## Key Features
- **Presentation Mode** - Step-by-step slide carousel (13 slides), focused layout with larger text
- **Dashboard Mode** - Full workspace overview (default view)
- **Side Panel** - Workspace tree, quick commands, repo links (mobile drawer / desktop sidebar)
- **Ticket System Page** - Plain-English docs for ticket_context, ticket_executor, ticket_manager
- **Skills Reference Page** - All 80 AI Harness skills organized in 11 categories across 6 tools
- **Markdown Viewer Modal** - Renders info/*.md files via marked.js with ESC to close
- **Resources Dropdown** - Quick links to ticket page, skills page, and info docs
- **Progress Tracking** - localStorage persistence for completed slides
- **Search** - Global search across slides/commands
- **Deep Linking** - URL hash navigation on tickets.html (e.g. tickets.html#ticket_context)
- **Copy Buttons** - One-click copy for commands throughout
- **Meta Tags** - SEO, Open Graph, Twitter Card on all pages
- **Favicon/OG Image** - SVG-based brand assets

## Code Conventions

### HTML/CSS
- Tailwind utility classes primary
- Custom CSS in `<style>` block for animations/scrollbars, presentation-mode overrides
- CSS variables via Tailwind config (`brand` colors)
- Mobile-first, `lg:` breakpoint for desktop sidebar

### JavaScript (ES Modules)
- Single shared `state` object: `{ currentSlide, viewMode, completedSlides }`
- Functions attached to `window` for backward compat with inline `onclick` handlers
- Components export `init()` functions, receive dependencies as params
- `app.js` boots state, imports all components, calls init in order
- localStorage key: `wayofmono_onboarding_progress`
- Slide data: `slides[]` array in `src/data/slides.js`

### Naming
- IDs: kebab-case (`#slide-title`, `#side-panel-column`, `#resources-dropdown`)
- Classes: Tailwind utilities + custom (`.slide-transition`, `.custom-scrollbar`, `.presentation-mode`)
- JS variables: camelCase
- Data attributes: `data-slide-index`

## Planned Work
- Extract inline scripts from tickets.html and skills.html into shared modules
- Add dark mode persistence (localStorage)
- Add page transition animations

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
- marked.js: `https://cdn.jsdelivr.net/npm/marked/marked.min.js`
- Google Fonts: Inter + JetBrains Mono
- YouTube embed: `https://www.youtube.com/embed/wIM3X0OwhKY`
- GitHub links: `https://github.com/Way-Of/*`

## Git Workflow
- Main branch deploys to Netlify
- Feature branches for changes, merged via fast-forward
- TODO.md tracks progress (checkbox format)
- Git push requires `GIT_SSH_COMMAND="ssh -i ~/.ssh/github_ed25519 -o StrictHostKeyChecking=no"`
