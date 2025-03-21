const infiniteArrow = document.querySelector('.infinite-arrow i');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        infiniteArrow.style.opacity = '0';
        infiniteArrow.style.transition = 'opacity 0.5s ease-in-out';
    } else {
        infiniteArrow.style.opacity = '1';
        infiniteArrow.style.transition = 'opacity 0.5s ease-in-out';
    }
});