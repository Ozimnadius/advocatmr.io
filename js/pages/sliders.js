//sliders.js
$(function () {


    let ipartnersSlider = new Swiper('.slider__container', {
        slidesPerView: 3,
        spaceBetween: 40,
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        }
    });

    let acertsSlider = new Swiper('.acerts__container', {
        slidesPerView: 2,
        spaceBetween: 110,
        watchOverflow: true,
        navigation: {
            nextEl: '.acerts__next',
            prevEl: '.acerts__prev',
        }
    });

});