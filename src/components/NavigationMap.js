export function initNavigationMap(slides, state) {
    function renderNavigationMap() {
        const grid = document.getElementById('steps-grid');
        if (!grid) return;
        grid.innerHTML = slides.map((slide, index) => {
            const isActive = index === state.currentSlide;
            const isDone = state.completedSlides[index];

            let borderClass = "border-zinc-800";
            let bgClass = "bg-zinc-950/40 text-zinc-400";

            if (isActive) {
                borderClass = "border-brand glow-accent";
                bgClass = "bg-brand/10 text-brand font-extrabold";
            } else if (isDone) {
                borderClass = "border-zinc-700";
                bgClass = "bg-zinc-900/80 text-emerald-400";
            }

            return `
                <button onclick="jumpToSlide(${index})" class="p-3 text-left rounded-xl border ${borderClass} ${bgClass} hover:border-zinc-500 hover:text-white transition-all flex items-center justify-between gap-1">
                    <div class="truncate">
                        <span class="block text-[9px] uppercase tracking-wider font-semibold text-zinc-500">${slide.step}</span>
                        <span class="block text-xs truncate max-w-[120px] text-zinc-200">${slide.title}</span>
                    </div>
                    ${isDone ? `
                        <span class="text-emerald-500 flex-shrink-0">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        </span>
                    ` : ''}
                </button>
            `;
        }).join('');
    }

    window.renderNavigationMap = renderNavigationMap;
}
