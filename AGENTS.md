# AGENTS.md - Onboarding Guide Project

## Project Overview
Static HTML onboarding guide for WayOfMono team setup. Three-page site with presentation/dashboard modes, interactive slides, workspace inspector, quick commands, ticket system docs, and skills reference.

## Tech Stack
- **HTML5** - `index.html` (~1808 lines, monolithic), `tickets.html` (874 lines), `skills.html` (554 lines)
- **Tailwind CSS** - Via CDN (configured in `<head>`)
- **Vanilla JS** - ES6 modules planned, currently inline `<script>`
- **marked.js** - CDN for GitHub-flavored markdown rendering of info/*.md files
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
├── index.html           # Main app (1808 lines, monolithic)
├── tickets.html         # Ticket system documentation (874 lines)
├── skills.html          # All AI Harness skills reference (554 lines)
├── CHANGELOG.md         # Historical changelog
├── PLAN.md              # Modular architecture plan
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

## Code Conventions

### HTML/CSS
- Tailwind utility classes primary
- Custom CSS in `<style>` block for animations/scrollbars, presentation-mode overrides
- CSS variables via Tailwind config (`brand` colors)
- Mobile-first, `lg:` breakpoint for desktop sidebar

### JavaScript
- Single global state object pattern (`currentSlide`, `viewMode`, `completedSlides`)
- Functions attached to `window` for inline `onclick` handlers
- localStorage key: `wayofmono_onboarding_progress`
- Slide data: `slides[]` array with `{step, title, body}` objects
- Shared toast, markdown viewer, resources dropdown, and copy utilities across pages

### Naming
- IDs: kebab-case (`#slide-title`, `#side-panel-column`, `#resources-dropdown`)
- Classes: Tailwind utilities + custom (`.slide-transition`, `.custom-scrollbar`, `.presentation-mode`)
- JS variables: camelCase
- Data attributes: `data-slide-index`

## Planned Modular Structure (PLAN.md)
See `PLAN.md` for the full modular architecture plan to break index.html into components:
- Components: Header, SlidePanel, Sidebar, WorkspaceTree, QuickCommands, RepoLinks, ProgressBanner, NavigationMap, VideoSection, MarkdownViewer, Toast, MobileDrawer
- Utils: storage.js, search.js, helpers.js
- Data: slides.js
- No build step - pure ES modules via `type="module"`

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