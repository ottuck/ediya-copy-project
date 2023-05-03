//slide menu
jQuery(document).ready(function () {
    $('.main-menu li').mouseover(function () {
        // $(this).find('.sub-menu').stop().slideDown(200);
        $(this).find('.sub-menu').stop().slideDown(200);
    }).mouseout(function () {
        $(this).find('.sub-menu').stop().slideUp(200);
    })
});

// swiper setting
jQuery(document).ready(function () {
    new Swiper('.swiper', {
        autoplay: {
            delay: 3000
        },
        loop: true,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        }
    })
});