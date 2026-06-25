import { saveProgress } from '../utils/storage.js';
import { clearSearch } from '../utils/search.js';

export function initSlidePanel(slides, state) {
    function renderSlide() {
        const slide = slides[state.currentSlide];
        const stepBadge = document.getElementById('slide-step-badge');
        const title = document.getElementById('slide-title');
        const body = document.getElementById('slide-body');
        const currentNum = document.getElementById('current-slide-num');
        const totalNum = document.getElementById('total-slides-num');
        const checkbox = document.getElementById('slide-completed-checkbox');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        if (stepBadge) stepBadge.textContent = slide.step;
        if (title) title.textContent = slide.title;
        if (body) body.innerHTML = slide.body;
        if (currentNum) currentNum.textContent = state.currentSlide + 1;
        if (totalNum) totalNum.textContent = slides.length;
        if (checkbox) checkbox.checked = state.completedSlides[state.currentSlide];

        if (prevBtn) {
            if (state.currentSlide === 0) {
                prevBtn.classList.add('opacity-40', 'cursor-not-allowed');
                prevBtn.disabled = true;
            } else {
                prevBtn.classList.remove('opacity-40', 'cursor-not-allowed');
                prevBtn.disabled = false;
            }
        }

        if (nextBtn) {
            if (state.currentSlide === slides.length - 1) {
                nextBtn.innerHTML = `
                    Onboarding Completed!
                    <svg class="w-4 h-4 text-zinc-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4" />
                    </svg>
                `;
            } else {
                nextBtn.innerHTML = `
                    Next Step
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                `;
            }
        }

        if (window.renderNavigationMap) window.renderNavigationMap();
        updateCompletionProgress();
    }

    function nextSlide() {
        if (state.currentSlide < slides.length - 1) {
            state.currentSlide++;
            renderSlide();
        } else {
            window.showToast && window.showToast("All set! Remember to verify configuration on your native development hardware.");
        }
    }

    function prevSlide() {
        if (state.currentSlide > 0) {
            state.currentSlide--;
            renderSlide();
        }
    }

    function jumpToSlide(index) {
        if (index >= 0 && index < slides.length) {
            state.currentSlide = index;
            renderSlide();
            clearSearch();
        }
    }

    function toggleSlideCompletion() {
        const checkbox = document.getElementById('slide-completed-checkbox');
        if (!checkbox) return;
        state.completedSlides[state.currentSlide] = checkbox.checked;
        saveProgress(state.completedSlides);
        updateCompletionProgress();
        if (window.renderNavigationMap) window.renderNavigationMap();
        if (checkbox.checked) {
            window.showToast && window.showToast(`Step "${slides[state.currentSlide].step}" marked as completed!`);
        }
    }

    function updateCompletionProgress() {
        const completedCount = state.completedSlides.filter(Boolean).length;
        const progressPercent = (completedCount / slides.length) * 100;
        const bar = document.getElementById('global-progress');
        const ratio = document.getElementById('completion-ratio');
        if (bar) bar.style.width = `${progressPercent}%`;
        if (ratio) ratio.textContent = `${completedCount}/${slides.length}`;
    }

    window.renderSlide = renderSlide;
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
    window.jumpToSlide = jumpToSlide;
    window.toggleSlideCompletion = toggleSlideCompletion;
    window.updateCompletionProgress = updateCompletionProgress;

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            nextSlide();
        } else if (event.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    return { renderSlide, updateCompletionProgress };
}
