const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const carousel = document.querySelector('.carousel');

prevButton.addEventListener('click', () => {
    carousel.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    carousel.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});
