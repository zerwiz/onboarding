# TODO

## Completed

- [x] Create index.html with onboarding guide
- [x] Set up Netlify config (netlify.toml)
- [x] Create dev server script (start.sh, package.json)
- [x] Add hamburger menu for mobile side panel
- [x] Add repository info pages (info/f-rr-d.md, wayofwork.md, OptiCat.md, wayofmono.md)
- [x] Update UI repo links to point to local info pages
- [x] Add video tutorial section with YouTube embed
- [x] Add PDF download button in footer
- [x] Add PDF download button in sidebar
- [x] Add Google Doc link in video section
- [x] Remove scroll limit on Quick Commands sidebar
- [x] Add harness install/update commands to Quick Commands
- [x] Add --reload flag note to info.md
- [x] Remove v2.5 from header, move hamburger to header title
- [x] Create branch and push to GitHub
- [x] Merge branch to main
- [x] Add desktop sidebar toggle button in header
- [x] Add Resources dropdown in header with links to repo info pages
- [x] Add toggleSidebar() JavaScript function
- [x] Make presentation mode focused on step-by-step onboarding (hides video, repo links, sidebar)
- [x] Make dashboard mode show full workspace info (shows video, repo links, sidebar)
- [x] Add ticket system page functionality (showTicketPage)
- [x] Add toggleResourcesDropdown() JavaScript function
- [x] Add closeResourcesDropdown() JavaScript function
- [x] Add AI_Engineering_Cockpit_Assembly.pdf download
- [x] Move Ticket System button next to Presentation/Dashboard buttons in header
- [x] Add rotate-180 CSS class for dropdown chevron animation
- [x] Add click-outside handler to close resources dropdown
- [x] Add transition-transform CSS class for smooth animations

## In Progress

- [ ] Create dedicated ticket system page with full documentation (ticket.html)
  - [ ] Add ticket_context skill documentation
  - [ ] Add ticket_executor skill documentation
  - [ ] Add ticket_manager skill documentation
  - [ ] Include ticket naming conventions and storage paths
  - [ ] Add YouTube video embed (https://youtu.be/fKK1m-_bnuA)
  - [ ] Link to f-rr-d (förråd) centralized storage - Swedish for "storage"
  - [ ] Add GitHub-flavored markdown rendering for info/*.md files

## Pending

- [ ] Create markdown viewer component for Resources dropdown (rendered markdown like GitHub)
- [ ] Make md files in dropdown render with proper formatting (tables, code blocks, headings)
- [ ] Add keyboard navigation for dropdown (ESC to close, arrow keys)
- [ ] Add deep linking support for ticket system page

## Research & Documentation

- [ ] Explore wayofmono repo and document all skills in ai-harness packages
- [ ] Create skills reference page with all ai-harness skills organized by package
- [ ] Note: ticket_context, ticket_executor, ticket_manager skills are in wayofmono repo under packages/@aiengineeringharness/
- [ ] opencode skills: https://github.com/Way-Of/wayofmono/tree/main/packages%2F%40aiengineeringharness%2Fopencode%2Fskills
- [ ] f-rr-d = förråd = Swedish for "storage" (centralized thoughts repository)

## Architecture & Refactoring

- [ ] Create planning document for breaking index.html into modular components
- [ ] Set up modular folder structure (components/, pages/, modals/, styles/, utils/)
- [ ] Extract slide components into separate files
- [ ] Extract sidebar widgets into separate components
- [ ] Create shared layout/base template
- [ ] Implement component loading system (ES modules or build step)
- [ ] Migrate index.html to use modular structure
- [ ] Create separate ticket.html page for ticket system documentation

## Bug Fixes & Polish

- [ ] Fix dropdown chevron rotation animation (add transition-transform class)
- [ ] Ensure Resources dropdown closes on ESC key
- [ ] Add proper markdown rendering for info pages in dropdown (marked.js or similar)
- [ ] Test mobile responsiveness of new Ticket button
- [ ] Verify presentation/dashboard mode transitions work smoothly