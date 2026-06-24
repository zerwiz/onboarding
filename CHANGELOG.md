# Changelog

All notable changes to the Onboarding Guide project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Desktop sidebar toggle button in header with SVG icons
- Resources dropdown menu in header with links to:
  - Ticket System page
  - f-rr-d (Centralized Thoughts)
  - Way of Work
  - OptiCat
  - WayOfMono
- `toggleSidebar()` function for desktop sidebar control
- `toggleResourcesDropdown()` and `closeResourcesDropdown()` functions
- Presentation mode now hides video section, repo links bar, and sidebar for focused onboarding
- Dashboard mode shows full workspace with video, repo links, and expanded sidebar trees
- Ticket system page navigation function (`showTicketPage`)
- AI_Engineering_Cockpit_Assembly.pdf download in footer and sidebar
- YouTube video tutorial section with embed (wIM3X0OwhKY)
- Google Doc link in video section (docs.google.com/document/d/1TDRuNEkg3EyPqednL8xIHzRVEQGMtCgZXPJu0RaUeA8)
- Harness install/update commands to Quick Commands palette:
  - Harness Install (Update) with `--reload` flag
  - Harness Update (`ai-harness --update`)
  - Install All 7 Tools (`ai-harness --tool=all --yes`)
- `--reload` flag documentation in info.md for Deno installs
- Removed v2.5 version badge from header
- Hamburger menu moved to header title area
- Mobile side panel drawer with backdrop overlay
- Removed `max-h-80 overflow-y-auto` limit on Quick Commands for full visibility
- Repository info pages in `info/` directory:
  - f-rr-d.md (Centralized Thoughts)
  - wayofwork.md (Construction Platform)
  - OptiCat.md (HVAC Service Pro)
  - wayofmono.md (AI Engineering Monorepo)
- Netlify configuration (netlify.toml) with SPA redirects
- Dev server script (start.sh) with auto-browser open
- Package.json with `npm run dev` script

### Changed
- Updated `setViewMode()` to conditionally show/hide video section and repo links bar
- Updated `setViewMode()` to expand/collapse sidebar trees in dashboard mode
- Moved view mode buttons to the right in header (md:justify-end)
- Search input hidden on desktop (md:hidden)
- Sidebar toggle only visible on desktop (hidden md:flex)
- Mobile search only visible on mobile (md:hidden)

### Fixed
- Removed duplicate content in info.md
- Fixed hamburger menu positioning in header
- Fixed sidebar state management between presentation/dashboard modes

## [1.0.0] - 2026-06-24

### Added
- Initial onboarding guide with 13 slides
- Presentation mode with step-by-step slide carousel
- Dashboard mode with workspace overview
- Side panel with workspace tree, quick commands, repo links
- Progress tracking with localStorage persistence
- Global search across slides and commands
- Dark/light theme toggle
- Video tutorial section with YouTube embed
- PDF download capability
- Mobile-responsive design with drawer navigation
- Tailwind CSS via CDN
- Google Fonts (Inter + JetBrains Mono)
- Netlify deployment configuration

### Infrastructure
- Repository initialization
- Git workflow setup (main branch deploys to Netlify)
- Feature branch workflow
- TODO.md task tracking
- AGENTS.md project documentation