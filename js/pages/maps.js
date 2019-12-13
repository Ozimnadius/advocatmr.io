//maps.js

/*YANDEX*/
$(function () {
    ymaps.ready(init);
    var myMap,
        myPlacemark,
        myPin;

    function init() {

        if ($('#imap').length) {
            var center = [55.75968406898679,37.574857499999965];
            // if ($(window).width() < 576) {
            //     center = [55.609501798660396, 37.61325538360591];
            // }

            myMap = new ymaps.Map("imap", {
                center: center,
                zoom: 17,
                controls: []
            });


            myMap.behaviors.disable(['scrollZoom', 'drag']);
            // myMap.controls.remove('geolocationControl')
            //     .remove('searchControl')
            //     .remove('trafficControl')
            //     .remove('typeSelector')
            //     .remove('fullscreenControl')
            //     .remove('zoomControl')
            //     .remove('rulerControl');
            // myMap.controls.add('zoomControl');

            myPin = new ymaps.GeoObjectCollection({}, {
                // iconLayout: 'default#image',
                // iconImageHref: '/img/icons/map-marker.svg',
                // iconImageSize: [46, 57],
                // iconImageOffset: [-15, -55]
            });


            myPlacemark = new ymaps.Placemark([55.75968406898679,37.574857499999965], {
                    balloonContentHeader: "Матвеева и партнеры",
                    balloonContentBody: "Квалифицированная юридическая помощь",
                    balloonContentFooter: "Москва, ул. Дружинниковская, 15 (киноцентр на Красной Пресне)",
                    hintContent: "advokatmr.ru"
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: '/images/icons/map-pin.svg',
                    iconImageSize: [60, 68],
                    iconImageOffset: [-30, -34]
                    // preset: 'islands#redGlyphIcon'
                });


            myPin.add(myPlacemark);
            myMap.geoObjects.add(myPin);
        }
    }
});
/*END YANDEX*/