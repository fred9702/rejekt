import '../scss/homepage.scss';

$(document).ready(function(e) {
    $('.mobile--menu').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.overlay').toggleClass('open');
    });

    if (window.location.pathname === '/videos.html') {
        $("a[href*='videos.html").addClass('active_menu');
    }
});