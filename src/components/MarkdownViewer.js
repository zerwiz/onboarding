import { escapeHtml } from '../utils/helpers.js';

export function initMarkdownViewer() {
    async function renderMarkdown(path, title) {
        const viewer = document.getElementById('md-viewer');
        const titleEl = document.getElementById('md-viewer-title-text');
        const contentEl = document.getElementById('md-viewer-content');
        if (!viewer || !titleEl || !contentEl) return;
        titleEl.textContent = title;
        contentEl.innerHTML = '<div class="text-zinc-400 text-sm">Loading...</div>';
        viewer.classList.remove('hidden');
        viewer.classList.add('flex');
        document.body.classList.add('overflow-hidden');
        try {
            const res = await fetch(path);
            const text = await res.text();
            if (typeof marked !== 'undefined' && marked.parse) {
                contentEl.innerHTML = marked.parse(text);
            } else {
                contentEl.innerHTML = '<pre class="text-sm text-zinc-300 font-mono whitespace-pre-wrap">' + escapeHtml(text) + '</pre>';
            }
        } catch (err) {
            contentEl.innerHTML = '<div class="text-red-400 text-sm">Failed to load document.</div>';
        }
    }

    function closeMarkdownViewer() {
        const viewer = document.getElementById('md-viewer');
        if (!viewer) return;
        viewer.classList.add('hidden');
        viewer.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
    }

    window.renderMarkdown = renderMarkdown;
    window.closeMarkdownViewer = closeMarkdownViewer;
}
