import '../scss/homepage.scss';


$(document).ready(function(e) {

    $('.about--left').on('click', function (e) {
        $(this).addClass('active-column');

        $('.about--right').removeClass('active-column');
        $('.about--right__content').removeClass('active');
        $('.about--left__content').addClass('active');
        $('.about--left p').text('read less <<<');
        $('.about--right p').text('read more>>>')
    });

    $('.about--right').on('click', function (e) {
        $(this).addClass('active-column');

        $('.about--left').removeClass('active-column');
        $('.about--left__content').removeClass('active');
        $('.about--right__content').addClass('active');
        $('.about--right p').text('read less <<<');
        $('.about--left p').text('read more>>>')
    });


    $('.mobile--menu').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.overlay').toggleClass('open');
    });


    if (window.location.pathname === '/about.html') {
        $("a[href*='about.html").addClass('active_menu');
    }
});