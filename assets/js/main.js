$(document).ready(function () {

    $('.main-menu a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });
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

    $('.tariffs-col_links a').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).index());
        $(this).parents('.tariffs-col').find('.tariffs-col_tab').eq($(this).index()).addClass('active').siblings().removeClass('active');
    });

    $('.tariffs-col_btn').on('click', function () {
        $.fancybox.open({
            src: '#order',
            type: 'inline'
        });
    });

})