export function initViewMode(state) {
    function setViewMode(mode) {
        state.viewMode = mode;
        const presBtn = document.getElementById('view-presentation');
        const dashBtn = document.getElementById('view-dashboard');
        const mainCol = document.getElementById('main-content-column');
        const sideCol = document.getElementById('side-panel-column');
        const videoSection = document.getElementById('video-section');
        const repoLinksBar = document.getElementById('repo-links-bar');
        const completionBanner = document.getElementById('completion-banner');
        const stepsGridParent = document.querySelector('#steps-grid')?.parentElement?.parentElement;

        const activeClass = "px-1.5 sm:px-3 py-1 rounded text-[9px] sm:text-xs font-medium bg-brand text-zinc-950 shadow-sm transition-all";
        const inactiveClass = "px-1.5 sm:px-3 py-1 rounded text-[9px] sm:text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-all";

        if (mode === 'presentation') {
            if (presBtn) presBtn.className = activeClass;
            if (dashBtn) dashBtn.className = inactiveClass;
            document.body.classList.add('presentation-mode');
            if (mainCol) mainCol.className = "lg:col-span-12 flex flex-col gap-6 h-full";
            if (sideCol) sideCol.classList.add('hidden');
            if (window.closeMobileDrawer) window.closeMobileDrawer();
            if (completionBanner) completionBanner.classList.add('hidden');
            if (stepsGridParent) stepsGridParent.classList.add('hidden');
            if (videoSection) videoSection.classList.add('hidden');
            if (repoLinksBar) repoLinksBar.classList.add('hidden');
        } else {
            if (dashBtn) dashBtn.className = activeClass;
            if (presBtn) presBtn.className = inactiveClass;
            document.body.classList.remove('presentation-mode');
            if (mainCol) mainCol.className = "lg:col-span-8 flex flex-col gap-6 h-full";
            if (sideCol) sideCol.classList.remove('hidden', 'fixed-drawer', 'open');
            if (completionBanner) completionBanner.classList.remove('hidden');
            if (stepsGridParent) stepsGridParent.classList.remove('hidden');
            if (videoSection) videoSection.classList.remove('hidden');
            if (repoLinksBar) repoLinksBar.classList.remove('hidden');

            const treeWow = document.getElementById('tree-wow');
            const treeOpticat = document.getElementById('tree-opticat');
            const treeWayofmono = document.getElementById('tree-wayofmono');
            if (treeWow) treeWow.classList.remove('hidden');
            if (treeOpticat) treeOpticat.classList.remove('hidden');
            if (treeWayofmono) treeWayofmono.classList.remove('hidden');

            if (window.showToast) window.showToast("Dashboard mode: full workspace view enabled.");
        }
    }

    window.setViewMode = setViewMode;
}
