export function initSidebar() {
    function toggleTreeFolder(folderId) {
        const element = document.getElementById(folderId);
        if (!element) return;
        element.classList.toggle('hidden');
    }

    function toggleTheme() {
        const html = document.documentElement;
        const isDark = html.classList.contains('dark');
        const sun = document.getElementById('theme-sun');
        const moon = document.getElementById('theme-moon');

        if (isDark) {
            html.classList.remove('dark');
            if (sun) sun.classList.remove('hidden');
            if (moon) moon.classList.add('hidden');
        } else {
            html.classList.add('dark');
            if (sun) sun.classList.add('hidden');
            if (moon) moon.classList.remove('hidden');
        }
    }

    function toggleMobilePanel() {
        const panel = document.getElementById('side-panel-column');
        const backdrop = document.getElementById('mobile-drawer-backdrop');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const closeIcon = document.getElementById('hamburger-close-icon');
        if (!panel || !backdrop) return;

        panel.classList.add('fixed-drawer');
        panel.classList.toggle('open');
        backdrop.classList.toggle('opacity-0');
        backdrop.classList.toggle('pointer-events-none');
        if (hamburgerIcon) hamburgerIcon.classList.toggle('hidden');
        if (closeIcon) closeIcon.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    }

    function closeMobileDrawer() {
        const panel = document.getElementById('side-panel-column');
        const backdrop = document.getElementById('mobile-drawer-backdrop');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const closeIcon = document.getElementById('hamburger-close-icon');
        if (!panel || !backdrop) return;

        panel.classList.remove('open');
        backdrop.classList.add('opacity-0', 'pointer-events-none');
        if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

    window.toggleTreeFolder = toggleTreeFolder;
    window.toggleTheme = toggleTheme;
    window.toggleMobilePanel = toggleMobilePanel;
    window.closeMobileDrawer = closeMobileDrawer;
}
