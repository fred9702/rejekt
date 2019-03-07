import '../scss/homepage.scss';


$(document).ready(function(e) {
    $('.mobile--menu').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.overlay').toggleClass('open');
    });

    if (window.location.pathname === '/exhibitions.html') {
        $("a[href*='exhibitions.html").addClass('active_menu');
    }
});