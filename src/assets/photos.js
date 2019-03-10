import '../scss/homepage.scss';


$(document).ready(function(e) {
    $('.mobile--menu').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.overlay').toggleClass('open');
    })

    if (window.location.pathname === '/photos.html') {
        $("a[href*='photos.html").addClass('active_menu');
    }
});