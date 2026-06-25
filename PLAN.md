# Modular Architecture Plan

## Goal
Break the monolithic `index.html` (1808 lines) into separate component files without a build step. Use native ES modules and inline `<script type="module">` for clean imports.

## Current Status

```
src/
├── app.js                   # Main entry point — imports all, bootstraps ✅
├── components/
│   ├── Header.js            # Search, nav buttons, resources dropdown, ESC/click-outside ✅
│   ├── SlidePanel.js        # Slide render, navigation, completion, arrow keys ✅
│   ├── Sidebar.js           # Tree folders, theme toggle, mobile drawer ✅
│   ├── NavigationMap.js     # Steps grid render ✅
│   ├── ProgressBanner.js    # Completion banner ✅
│   ├── VideoSection.js      # Static, no-op init ✅
│   ├── MarkdownViewer.js    # Modal render/close for info/*.md ✅
│   ├── Toast.js             # Toast notification ✅
│   ├── MobileDrawer.js      # Backdrop click to close ✅
│   └── ViewMode.js          # Dashboard/Presentation toggle ✅
├── utils/
│   ├── storage.js           # localStorage (loadProgress, saveProgress) ✅
│   ├── search.js            # searchSlides, renderSearchResults, clearSearch ✅
│   └── helpers.js           # copyCommand, escapeHtml, showToast, scrollToTop ✅
└── data/
    └── slides.js            # slides[] + SLIDE_COUNT export ✅
```

## Refactoring Status
- ✅ **Deploy**: Netlify auto-deploys from `main`. Confirmed working.
- ✅ **Phase 1**: data + utils extracted into ES modules
- ✅ **Phase 2**: All components extracted as ES modules with `init()` pattern
- ✅ **Phase 3**: `index.html` now uses `<script type="module" src="src/app.js"></script>` (692 lines, down from 1808)
- ⬜ **tickets.html + skills.html**: Still have inline scripts — need module extraction
- ⬜ **Meta tags**: SEO / social sharing (OG, Twitter Card, description, keywords)
- ⬜ **Meta images**: OG image, favicon, apple-touch-icon
- ⬜ **Dark theme persistence**: Save theme preference in localStorage

## Architecture Patterns

### Component pattern
```js
// components/Toast.js
export function initToast() {
    window.showToast = function (message) { ... };
}
```

### State management
- Shared `state` object in `app.js` with `currentSlide`, `viewMode`, `completedSlides`
- Passed to components that need it (SlidePanel, NavigationMap, ViewMode, etc.)
- Functions attached to `window` for backward compat with inline `onclick` handlers

### No build step
- Pure ES modules via `type="module"` — no bundler needed
- All imports are relative paths

## Migration Steps

### Done
1. ✅ Plan document created
2. ✅ `src/data/slides.js` — slides array exported
3. ✅ `src/utils/storage.js` — localStorage wrapper
4. ✅ `src/utils/search.js` — search logic
5. ✅ `src/utils/helpers.js` — copyCommand, escapeHtml, showToast, scrollToTop
6. ✅ `src/components/Toast.js` — toast notification
7. ✅ `src/components/MarkdownViewer.js` — modal render/close
8. ✅ `src/components/Header.js` — search, sidebar toggle, resources dropdown, ESC/click-outside
9. ✅ `src/components/SlidePanel.js` — slide rendering + navigation
10. ✅ `src/components/NavigationMap.js` — steps grid
11. ✅ `src/components/ProgressBanner.js` — completion banner
12. ✅ `src/components/Sidebar.js` — tree folders, theme toggle, mobile drawer
13. ✅ `src/components/VideoSection.js` — static
14. ✅ `src/components/MobileDrawer.js` — backdrop click
15. ✅ `src/components/ViewMode.js` — dashboard/presentation toggle
16. ✅ `src/app.js` — imports all, boots state, calls init in order
17. ✅ `index.html` — replaced inline script with `<script type="module">`

### Remaining
18. ⬜ Extract inline scripts from `tickets.html` and `skills.html` into modules
19. ⬜ Add SEO / social meta tags to all pages (description, keywords, OG, Twitter Card)
20. ⬜ Create OG image (1200×630 PNG) for social sharing
21. ⬜ Create favicon (SVG or PNG)
22. ⬜ Create apple-touch-icon
23. ⬜ Add dark mode persistence (localStorage)
24. ⬜ Verify all three pages work after module extraction

## Key Design Decisions

### Component pattern
- Each component exports an `init()` function
- `init()` attaches functions to `window` for inline `onclick` backward compat
- Components that need state receive it as a parameter

### CSS
- Tailwind utility classes in HTML
- Custom CSS in `<style>` block in the HTML `<head>`
- `presentation-mode` CSS class drives layout overrides
- Mobile drawer uses `fixed-drawer` + `open` classes with CSS transitions

### ES Module awareness
- `type="module"` defers script execution automatically (no need for `defer` or `DOMContentLoaded`)
- All module-scoped variables are private unless explicitly attached to `window`
- `onclick` handlers in innerHTML-rendered content must reference `window.*` functions

## Risks
- `onclick` in slides body (innerHTML) only works if functions are on `window`
- ES modules require modern browser (Chrome 61+, Firefox 60+, Safari 11+)
- tickets.html and skills.html have duplicate inline code — must be kept in sync or extracted
