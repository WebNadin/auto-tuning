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
    var $width = $(document).width();
    if ($width < 767) {
        $('.autoplay').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        });
    }
    else {
        $('.autoplay').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 6000
        });
    }
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


    $('.auto').click(function (title, local_brand, local_srcImg) {
        var brand = $(this).find('.auto__title').text();
        var srcImg = $(this).find('.auto__img').attr('src');
        localStorage.setItem('local_brand', brand);
        localStorage.setItem('local_srcImg', srcImg);
    });
    function addTitle(title, local_brand, local_srcImg) {
        var title = localStorage.getItem('local_brand');
        var brandPhoto = localStorage.getItem('local_srcImg');
        $('.brand__title').text(title);
        $('.brand__img').attr('src', brandPhoto);
    }

    addTitle();
});



