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
                slidesPerColumn: 8,
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
        //console.log($(this).index());
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


    if($('body').outerWidth() < 567) {
        const tariffsSlider = new Swiper('.tariffs-slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.tariffs-slider .documents-button-next',
                prevEl: '.tariffs-slider .documents-button-prev',
            },

        });

        const aboutCardsSlider = new Swiper('.about-cards__slider .swiper-container', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: '.about-cards__slider .documents-button-next',
                prevEl: '.about-cards__slider .documents-button-prev',
            },

        });

        $('.about-cards .about-card').on('click', function () {
            //.about-close__btn
            if($('.about-close__btn').is(':visible')) {

            }
            else {
                $('.about-cards').hide();
                $('.about-cards__slider').show();
                aboutCardsSlider.update();
                aboutCardsSlider.slideTo($(this).index()+1);
                aboutCardsSlider.update();
                $('.about-close__btn').show();
            }

        });

        $('.about-close__btn').on('click', function(){
            $('.about-close__btn').hide();
            $('.about-cards__slider').hide();
            $('.about-cards').css('display','flex');
        });


        const historySliderMob = new Swiper('.history-slider__mob .swiper-container', {
            loop: false,
            slidesPerView: 1,
            navigation: {
                nextEl: '.history-slider__mob .documents-button-next',
                prevEl: '.history-slider__mob .documents-button-prev',
            },

        });

        $('.history-read__btn').on('click', function () {

                console.log();
                $('.history-slider').hide();
                $('.history-slider__mob').show();
                historySliderMob.update();
                historySliderMob.slideTo($(this).parents('.swiper-slide').index());
                historySliderMob.update();
        });

        $('.history-slider__mob .history-close__btn').on('click', function () {
            $('.history-slider').show();
            $('.history-slider__mob').hide();
        });

    }

})