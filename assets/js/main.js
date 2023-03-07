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
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerColumn: 2,
                slidesPerColumnFill: 'row',
                loop: false
            },
            567: {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: 'row',
                loop: true
            }
        }
    });

    const historySlider = new Swiper('.history-slider .swiper-container', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.history-slider .documents-button-next',
            prevEl: '.history-slider .documents-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                slidesPerColumn: 2,
                slidesPerColumnFill: 'row',
                loop: false
            },
            567: {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: 'row',
                loop: true
            }
        }
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

    $('.mobile-menu__btn').on('click', function () {
        $('.header').toggleClass('menu-open');
    });

})