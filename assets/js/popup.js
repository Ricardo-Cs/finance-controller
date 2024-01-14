const div = document.querySelector('.errorMessage');

export const hideErrorMessage = () => {
    setTimeout(() => {
        div.style.display = 'none';
    }, 2000);
};