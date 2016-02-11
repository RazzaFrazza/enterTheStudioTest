$(document).ready(function() {

    $('.toggle-btn').addClass('closed');

    $('.closed').click(function() {
        $('.main-nav').toggle();

        if ($('.toggle-btn').hasClass('closed')) {

            $('.toggle-btn').removeClass('closed');
            $('.toggle-btn').addClass('open');

        } else if ($('.toggle-btn').hasClass('open')) {

            $('.toggle-btn').removeClass('open');
            $('.toggle-btn').addClass('closed');

        }
    });


});
