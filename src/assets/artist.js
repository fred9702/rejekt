import '../scss/homepage.scss';


$(document).ready(function(e) {
    $('.single-artist p').on('click', function (e) {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        var clickedEl = $(this).attr("class");

        switch(clickedEl.split(' ')[0]) {
            case 'work':
                $('.single-artist--text').removeClass('active');
                $('.single-artist--collections').removeClass('active');
                $('.single-artist--content').addClass('active');
                break;
            case 'bio':
                $('.single-artist--collections').removeClass('active');
                $('.single-artist--content').removeClass('active');
                $('.single-artist--text').addClass('active');
                break;
            case 'col':
                $('.single-artist--content').removeClass('active');
                $('.single-artist--text').removeClass('active');
                $('.single-artist--collections').addClass('active');
                break;
        }
    });



    var bigImage = $('.single-artist--gallery img');

    $('.single-artist--images img').on('click', function (e) {
        var imageDesc = e.target.alt;

        bigImage.attr('src', this.src);
        $('p.image--description').text(imageDesc)
    });


    $('.mobile--menu').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.overlay').toggleClass('open');
    })

    if (window.location.pathname === '/artist.html') {
        $("a[href*='artist.html").addClass('active_menu');
    }
});