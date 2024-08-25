// Simple Carousel Implementation
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});