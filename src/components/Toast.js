export function initToast() {
    window.showToast = function (message) {
        const toast = document.getElementById('toast');
        const msgEl = document.getElementById('toast-message');
        if (!toast || !msgEl) return;
        msgEl.textContent = message;
        toast.classList.remove('translate-y-10', 'opacity-0', 'pointer-events-none');
        toast.classList.add('translate-y-0', 'opacity-100');
        setTimeout(() => {
            toast.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
            toast.classList.remove('translate-y-0', 'opacity-100');
        }, 3000);
    };
}
