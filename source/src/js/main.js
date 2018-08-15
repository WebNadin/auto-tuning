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
    })
})

