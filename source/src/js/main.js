$(document).ready(function () {
    /*$('.wr_nav').css('background-color', 'blue');*/
    $('.navbar-toggler').click(function () {
        $('.wr_nav').css('background-color', 'blue');
        if ($('#navbarToggleExternalContent').hasClass('show')) {
            console.log('ok');
            $('.wr_nav').css('background-color', 'transparent');
        } else {
            $('.wr_nav').css('background-color', '#012d5a');

        }
    });
    /*$('.my-slider.single-item').slick();*/
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
});

