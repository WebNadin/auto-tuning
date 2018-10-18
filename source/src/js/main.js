$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $('.wr_nav').css('background-color', 'blue');
        if ($('#navbarToggleExternalContent').hasClass('show')) {
            console.log('ok');
            $('.wr_nav').css('background-color', 'transparent');
        } else {
            $('.wr_nav').css('background-color', '#e58b0e');

        }
    });
    /*$('.my-slider.single-item').slick();*/
    var $width = $(document).width();
    if ($width < 767) {
        $('.autoplay').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        });
    }
    else {
        $('.autoplay').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 6000,
        });
    }
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});

