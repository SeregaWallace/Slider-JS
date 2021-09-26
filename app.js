const downBtn = document.querySelector('.down-button'),
    upBtn = document.querySelector('.up-button'),
    sidebar = document.querySelector('.sidebar'),
    mainSlide = document.querySelector('.main-slide'),
    container = document.querySelector('.container'),
    // getting all slides
    slidesCount = mainSlide.querySelectorAll('div').length;


let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

const slideChange = (direction) => {
    if (direction === 'up') {
        activeSlideIndex++;

        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;

        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};


document.addEventListener('keydown', ev => {
    if (ev.key === 'ArrowUp') {
        slideChange('up');
    } else if (ev.key === 'ArrowDown') {
        slideChange('down');
    }
});
downBtn.addEventListener('click', () => {
    slideChange('down');
});
upBtn.addEventListener('click', () => {
    slideChange('up');
});
