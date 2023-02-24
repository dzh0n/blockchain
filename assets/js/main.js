$(document).ready(function () {
    const documentsSlider = new Swiper('.documents-slider .swiper-container', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.documents-button-next',
            prevEl: '.documents-button-prev',
        },
    })
})