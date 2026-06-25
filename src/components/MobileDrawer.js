export function initMobileDrawer() {
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    if (!backdrop) return;

    backdrop.addEventListener('click', function () {
        if (window.closeMobileDrawer) window.closeMobileDrawer();
    });
}
