# Changelog

All notable changes to the Onboarding Guide project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Modular architecture: ES modules in `src/` with `type="module"` entry point
- `src/app.js` — main entry point with shared state and component initialization
- `src/data/slides.js` — slides array extracted as ES module
- `src/utils/helpers.js` — copyCommand, escapeHtml, showToast, scrollToTop
- `src/utils/storage.js` — localStorage wrapper (loadProgress, saveProgress)
- `src/utils/search.js` — searchSlides, renderSearchResults, clearSearch
- `src/components/Toast.js` — notification toast component
- `src/components/MarkdownViewer.js` — modal render/close for info/*.md files
- `src/components/Header.js` — search, sidebar toggle, resources dropdown, ESC/click-outside
- `src/components/SlidePanel.js` — slide rendering, navigation, completion, arrow keys
- `src/components/NavigationMap.js` — steps grid render
- `src/components/ProgressBanner.js` — completion banner component
- `src/components/Sidebar.js` — tree folders, theme toggle, mobile drawer controls
- `src/components/ViewMode.js` — dashboard/presentation mode toggle
- `src/components/VideoSection.js` — static video section component
- `src/components/MobileDrawer.js` — backdrop click to close drawer
- SEO meta tags (description, keywords, author) on all 3 pages
- Open Graph meta tags for social sharing on all 3 pages
- Twitter Card meta tags on all 3 pages
- `favicon.svg` — SVG favicon with brand lightning bolt
- `apple-touch-icon.svg` — 180×180 apple touch icon
- `og-image.svg` — 1200×630 OG image for social sharing
- `stop.sh` — dev server stop script (kills serve on configurable PORT)

### Changed
- `index.html` reduced from 1808 to 692 lines — inline script replaced with `<script type="module" src="src/app.js"></script>`
- All event handlers and state management now in modular component files
- `start.sh` — no functional change, compatible with new module architecture

### Infrastructure
- PLAN.md updated with comprehensive architecture documentation
- TODO.md restructured with completed/in-progress/backlog sections
- AGENTS.md updated with full project state and file inventory
