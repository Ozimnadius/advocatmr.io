//index.js
$(function () {

    $('.inews__list').masonry({
        itemSelector: '.inew',
    });

    let ipagSlider = new Swiper('.ipag__container', {
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        watchSlidesVisibility: true,
        loop: true,
        navigation: {
            nextEl: '.inews__next',
            prevEl: '.inews__prev',
        },
        on: {
            slideChange: function () {
                let slide = this.slides[this.activeIndex],
                    id = slide.dataset.id,
                    slides = $(inewsSlider.slides),
                    inewsSlide = slides.filter('[data-id="'+id+'"]'),
                    x = $.inArray(inewsSlide[0],slides);

                inewsSlider.slideTo (x);
            }
        }
    });

    let inewsSlider = new Swiper('.inews__slider-container', {
        spaceBetween: 0,
        slidesPerView: 1,
        allowTouchMove: false
    });


});