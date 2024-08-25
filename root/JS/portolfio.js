// script.js



document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const dotsContainer = document.querySelector('.carousel-dots');

    let currentIndex = 0;
    const totalItems = carouselItems.length;

    // Create dots dynamically
    for (let i = 0; i < totalItems; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll('.dot');

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    rightBtn.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    leftBtn.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Initial load
    updateCarousel();
});