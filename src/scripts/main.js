const list = document.querySelector('.characters__list');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Navegar para o item anterior
prevButton.addEventListener('click', () => {
    list.scrollBy({
        left: -list.clientWidth * 0.78,
        behavior: 'smooth'
    });
});

// Navegar para o próximo item
nextButton.addEventListener('click', () => {
    list.scrollBy({
        left: list.clientWidth * 0.78,
        behavior: 'smooth'
    });
});