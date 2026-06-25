# TODO

## Completed

### Core Features
- [x] Create index.html with onboarding guide
- [x] Set up Netlify config (netlify.toml)
- [x] Create dev server script (start.sh, package.json)
- [x] Add hamburger menu for mobile side panel
- [x] Add repository info pages (info/*.md)
- [x] Add video tutorial section with YouTube embed
- [x] Add PDF download buttons (footer + sidebar)
- [x] Add Google Doc link in video section
- [x] Remove scroll limit on Quick Commands sidebar
- [x] Add harness install/update commands to Quick Commands
- [x] Remove v2.5 from header, move hamburger to header title
- [x] Add desktop sidebar toggle button + toggleSidebar()
- [x] Add Resources dropdown with info page links
- [x] Add toggleResourcesDropdown() / closeResourcesDropdown()
- [x] Add AI_Engineering_Cockpit_Assembly.pdf download
- [x] Add click-outside handler + ESC key for dropdown
- [x] Add rotate-180 + transition-transform CSS classes
- [x] Create tickets.html with ticket system documentation
- [x] Add marked.js CDN for GitHub-flavored markdown rendering
- [x] Create markdown viewer modal for info/*.md files
- [x] Add repo-links-bar id for dashboard mode toggle
- [x] Rewrite ticket page with plain-English explanations
- [x] Fix dropdown chevron rotation animation
- [x] Add deep linking for ticket system page (tickets.html#section)
- [x] Fix mobile responsiveness of Ticket button
- [x] Verify presentation/dashboard mode transitions
- [x] Make Dashboard the default view
- [x] Make Presentation mode focused on setup steps
- [x] Move Ticket System button next to Presentation/Dashboard buttons
- [x] Create skills reference page (skills.html) with all ai-harness skills
- [x] Add Skills button next to Tickets button in header
- [x] Add Skills link in Resources dropdown
- [x] Verify Netlify deploy works (publish = ".", SPA redirects)

### Modular Refactoring (Phase 1-3)
- [x] Create planning document for breaking index.html into modular components
- [x] Set up modular folder structure (components/, data/, utils/)
- [x] Extract slides data into src/data/slides.js as ES module
- [x] Create src/utils/helpers.js (copyCommand, escapeHtml, showToast, scrollToTop)
- [x] Create src/utils/storage.js (localStorage wrapper)
- [x] Create src/utils/search.js (search logic across slides/commands)
- [x] Create src/components/Toast.js
- [x] Create src/components/MarkdownViewer.js
- [x] Create src/components/Header.js
- [x] Create src/components/SlidePanel.js
- [x] Create src/components/Sidebar.js
- [x] Create src/components/NavigationMap.js
- [x] Create src/components/ProgressBanner.js
- [x] Create src/components/VideoSection.js
- [x] Create src/components/MobileDrawer.js
- [x] Create src/components/ViewMode.js
- [x] Create src/app.js main entry point
- [x] Wire up index.html with `<script type="module" src="src/app.js"></script>`
- [x] index.html reduced from 1808 to 692 lines

## In Progress

### Meta & Assets
- [ ] Add SEO meta tags to all pages (description, keywords, author)
- [ ] Add Open Graph (OG) meta tags for social sharing
- [ ] Add Twitter Card meta tags
- [ ] Create OG image (1200×630 PNG)
- [ ] Create favicon (SVG or PNG, 16×16 / 32×32)
- [ ] Create apple-touch-icon (180×180 PNG)
- [ ] Add dark mode persistence in localStorage

### Module Extraction (tickets.html, skills.html)
- [ ] Extract inline scripts from tickets.html into shared modules
- [ ] Extract inline scripts from skills.html into shared modules
- [ ] Verify all three pages work identically after extraction

## Backlog
- [ ] Add unit tests for utility functions
- [ ] Add keyboard shortcut hints overlay
- [ ] Add page transition animations
