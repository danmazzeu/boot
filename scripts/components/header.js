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

const infiniteDescription = document.querySelector('.infinite-description');
const phrases = [
    "Mais tempo, mais vida."
];
let phraseIndex = 0;
let charIndex = 0;

function typePhrase() {
    if (charIndex < phrases[phraseIndex].length) {
        infiniteDescription.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typePhrase, 50);
    } else {
        setTimeout(erasePhrase, 5000);
    }
}

function erasePhrase() {
    if (charIndex > 0) {
        infiniteDescription.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erasePhrase, 20);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typePhrase, 150);
    }
}

typePhrase();