# TODO

## Completed

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
  - [x] ticket_context, ticket_executor, ticket_manager skill docs
  - [x] Ticket naming conventions and storage paths
  - [x] YouTube video embed + f-rr-d centralized storage link
- [x] Add marked.js CDN for GitHub-flavored markdown rendering
- [x] Create markdown viewer modal for info/*.md files
- [x] Add repo-links-bar id for dashboard mode toggle
- [x] Rewrite ticket page with plain-English explanations
- [x] Fix dropdown chevron rotation animation
- [x] Add deep linking for ticket system page (tickets.html#section)
- [x] Fix mobile responsiveness of Ticket button
- [x] Verify presentation/dashboard mode transitions
- [x] Make Dashboard the default view (shows all info)
- [x] Make Presentation mode focused on just the setup steps (larger text, cleaner layout)
- [x] Move Ticket System button next to Presentation/Dashboard buttons

## Completed

- [x] Explore wayofmono repo and document all skills in ai-harness packages
- [x] Create skills reference page with all ai-harness skills (skills.html)
- [x] Add Skills button next to Tickets button in header
- [x] Add Skills link in Resources dropdown

## Architecture & Refactoring

- [x] Create planning document for breaking index.html into modular components
- [ ] Set up modular folder structure (components/, pages/, modals/, styles/, utils/)
- [ ] Extract slide components into separate files
- [ ] Extract sidebar widgets into separate components
- [ ] Create shared layout/base template
- [ ] Implement component loading system (ES modules or build step)
- [ ] Migrate index.html to use modular structure
