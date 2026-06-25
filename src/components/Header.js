import { searchSlides, renderSearchResults, clearSearch } from '../utils/search.js';

export function initHeader(slides) {
    let searchTimeout;

    function toggleSidebar() {
        const sideCol = document.getElementById('side-panel-column');
        const openIcon = document.getElementById('sidebar-open-icon');
        const closeIcon = document.getElementById('sidebar-close-icon');
        if (!sideCol || !openIcon || !closeIcon) return;
        const isOpen = !sideCol.classList.contains('hidden');
        if (isOpen) {
            sideCol.classList.add('hidden');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            sideCol.classList.remove('hidden');
            openIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
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
