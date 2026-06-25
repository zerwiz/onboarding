const STORAGE_KEY = 'wayofmono_onboarding_progress';

export function saveProgress(completedSlides) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(completedSlides));
    } catch (e) {
        console.warn("Could not save to localStorage", e);
    }
}

export function loadProgress(slideCount = 13) {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed.length === slideCount) {
                return parsed;
            }
        }
    } catch (e) {
        console.warn("Could not load from localStorage", e);
    }
    return Array(slideCount).fill(false);
}
