export function searchSlides(query, slides) {
    if (!query) return [];
    const q = query.toLowerCase().trim();
    const matches = [];
    slides.forEach((slide, index) => {
        const textToSearch = `${slide.step} ${slide.title} ${slide.body}`.toLowerCase();
        if (textToSearch.includes(q)) {
            matches.push({ slide, index });
        }
    });
    return matches;
}

export function renderSearchResults(matches, container, jumpFn) {
    if (matches.length > 0) {
        container.innerHTML = matches.map(match => `
            <button onclick="${jumpFn}(${match.index})" class="p-3 bg-zinc-950 hover:bg-zinc-900 text-left rounded-xl border border-zinc-800 hover:border-brand/50 transition-all block w-full space-y-1">
                <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold text-brand uppercase font-mono">${match.slide.step}</span>
                    <span class="text-[10px] text-zinc-500 font-mono">View Slide →</span>
                </div>
                <h4 class="text-xs font-bold text-white line-clamp-1">${match.slide.title}</h4>
            </button>
        `).join('');
    } else {
        container.innerHTML = `
            <div class="col-span-2 text-center py-4 text-xs text-zinc-500 font-medium">
                No match found. Try searching for commands like "npm", "deno", "thoughts", or "PAT".
            </div>
        `;
    }
}

export function clearSearch() {
    const input = document.getElementById('global-search');
    const panel = document.getElementById('search-results-panel');
    if (input) input.value = '';
    if (panel) panel.classList.add('hidden');
}
