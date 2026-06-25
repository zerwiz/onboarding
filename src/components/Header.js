import { searchSlides, renderSearchResults, clearSearch } from '../utils/search.js';

export function initHeader(slides) {
    let searchTimeout;

    function toggleSidebar() {
        const panel = document.getElementById('side-panel-column');
        const backdrop = document.getElementById('mobile-drawer-backdrop');
        const openIcon = document.getElementById('sidebar-open-icon');
        const closeIcon = document.getElementById('sidebar-close-icon');
        if (!panel || !backdrop || !openIcon || !closeIcon) return;

        panel.classList.add('fixed-drawer');
        const isCurrentlyOpen = panel.classList.contains('open');

        if (isCurrentlyOpen) {
            panel.classList.remove('open');
            backdrop.classList.add('opacity-0', 'pointer-events-none');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        } else {
            panel.classList.add('open');
            backdrop.classList.remove('opacity-0', 'pointer-events-none');
            openIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        }
    }

    function toggleResourcesDropdown() {
        const menu = document.getElementById('resources-menu');
        const chevron = document.getElementById('resources-chevron');
        if (!menu || !chevron) return;
        menu.classList.toggle('hidden');
        chevron.classList.toggle('rotate-180');
    }

    function closeResourcesDropdown() {
        const menu = document.getElementById('resources-menu');
        const chevron = document.getElementById('resources-chevron');
        if (!menu || !chevron) return;
        menu.classList.add('hidden');
        chevron.classList.remove('rotate-180');
    }

    function showTicketPage() {
        closeResourcesDropdown();
        window.location.href = 'tickets.html';
    }

    function showSkillsPage() {
        closeResourcesDropdown();
        window.location.href = 'skills.html';
    }

    window.toggleSidebar = toggleSidebar;
    window.toggleResourcesDropdown = toggleResourcesDropdown;
    window.closeResourcesDropdown = closeResourcesDropdown;
    window.showTicketPage = showTicketPage;
    window.showSkillsPage = showSkillsPage;
    window.clearSearch = function () {
        clearSearch();
    };

    const searchInput = document.getElementById('global-search');
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            clearTimeout(searchTimeout);
            const query = e.target.value;
            const panel = document.getElementById('search-results-panel');
            const container = document.getElementById('search-results-container');
            if (!panel || !container) return;

            if (!query) {
                panel.classList.add('hidden');
                return;
            }

            searchTimeout = setTimeout(() => {
                const matches = searchSlides(query, slides);
                const jumpFnName = 'jumpToSlide';
                renderSearchResults(matches, container, jumpFnName);
                panel.classList.remove('hidden');
            }, 150);
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeResourcesDropdown();
            window.closeMarkdownViewer && window.closeMarkdownViewer();
        }
    });

    document.addEventListener('click', function (e) {
        const dropdown = document.getElementById('resources-dropdown');
        const menu = document.getElementById('resources-menu');
        const btn = document.getElementById('resources-btn');
        if (dropdown && menu && btn && !dropdown.contains(e.target)) {
            menu.classList.add('hidden');
            const chevron = document.getElementById('resources-chevron');
            if (chevron) chevron.classList.remove('rotate-180');
        }
    });
}
