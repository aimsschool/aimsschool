// slider.js
console.log("Welcome to Easy Droper-Pakistan!");
// JavaScript to toggle the mobile menu
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = 4000; // 4 seconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initialize the slider
showSlide(currentSlide);
setInterval(nextSlide, slideInterval);
