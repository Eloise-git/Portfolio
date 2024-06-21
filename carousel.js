// carousel.js
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let index = 0;

    function showSlide(index) {
        const width = carousel.clientWidth;
        carousel.style.transform = `translateX(${-index * width}px)`;
    }

    prevButton.addEventListener('click', function () {
        if (index > 0) {
            index--;
        } else {
            index = carousel.children.length - 1;
        }
        showSlide(index);
    });

    nextButton.addEventListener('click', function () {
        if (index < carousel.children.length - 1) {
            index++;
        } else {
            index = 0;
        }
        showSlide(index);
    });

    window.addEventListener('resize', function () {
        showSlide(index);
    });

    showSlide(index);
});