//sliders.js
$(function () {

    let imediaSlider = new Swiper('.imedia__slider-container', {
        watchOverflow: true,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 'auto',
                spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            },
            // when window width is >= 1240px
            1240: {
                slidesPerView: 4,
            }
        }
    });

    let ipartnersSlider = new Swiper('.slider__container', {
        slidesPerView: 3,
        spaceBetween: 40,
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 790px
            768: {
                slidesPerView: 1,
            },
            // when window width is >= 1240px
            1240: {
                slidesPerView: 3,
            }
        }
    });

    let acertsSlider = new Swiper('.acerts__container', {
        slidesPerView: 2,
        spaceBetween: 110,
        watchOverflow: true,
        navigation: {
            nextEl: '.acerts__next',
            prevEl: '.acerts__prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                spaceBetween: 20,
                slidesPerView: 1,
            },
            // when window width is >= 790px
            768: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            // when window width is >= 1240px
            1240: {
                spaceBetween: 110,
            }
        }
    });

});