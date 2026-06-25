import { slides, SLIDE_COUNT } from './data/slides.js';
import { loadProgress } from './utils/storage.js';
import { copyCommand, escapeHtml, showToast } from './utils/helpers.js';
import { initToast } from './components/Toast.js';
import { initMarkdownViewer } from './components/MarkdownViewer.js';
import { initHeader } from './components/Header.js';
import { initSlidePanel } from './components/SlidePanel.js';
import { initNavigationMap } from './components/NavigationMap.js';
import { initProgressBanner } from './components/ProgressBanner.js';
import { initSidebar } from './components/Sidebar.js';
import { initVideoSection } from './components/VideoSection.js';
import { initMobileDrawer } from './components/MobileDrawer.js';
import { initViewMode } from './components/ViewMode.js';

// Shared state
const state = {
    currentSlide: 0,
    viewMode: 'dashboard',
    completedSlides: loadProgress(SLIDE_COUNT)
};

// Attach utility functions to window for inline onclick handlers
window.copyCommand = copyCommand;
window.escapeHtml = escapeHtml;
window.showToast = showToast;

// Initialize all components
initToast();
initMarkdownViewer();
initHeader(slides);
initSidebar();
initMobileDrawer();
initVideoSection();
initViewMode(state);
initProgressBanner(state);

// SlidePanel depends on NavigationMap being registered
const slidePanel = initSlidePanel(slides, state);
initNavigationMap(slides, state);

// Bootstrap on load
window.onload = function () {
    slidePanel.renderSlide();
    window.setViewMode('dashboard');
};
