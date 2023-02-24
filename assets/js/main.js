$(document).ready(function () {
    const documentsSlider = new Swiper('.documents-slider .swiper-container', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.documents-slider .documents-button-next',
            prevEl: '.documents-slider .documents-button-prev',
        },
    });

    const historySlider = new Swiper('.history-slider .swiper-container', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.history-slider .documents-button-next',
            prevEl: '.history-slider .documents-button-prev',
        },
    });
})