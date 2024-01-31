const span = document.querySelector('.message');

export const hideErrorMessage = () => {
    setTimeout(() => {
        if (span && span.parentNode) {
            // Remove permanentemente o elemento do DOM
            span.parentNode.removeChild(span);
        }
    }, 3000);
};