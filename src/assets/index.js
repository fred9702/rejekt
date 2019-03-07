import '../scss/homepage.scss';

// var activeVideo;

$(document).ready(function(e) {
    // homePageLoop();
    //
    // $('.sound').click(function() {
    //     $(this).toggleClass('sound-mute');
    //     $(activeVideo).prop("muted", !$(activeVideo).prop("muted"));
    // });

    $('.mobile--menu').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.overlay').toggleClass('open');
    });
    //
    // $('#video').on('ended',function(){
    //     $(this).hide();
    //     runSecondVideo();
    // });
});

// function setActiveVideo(videoId) {
//     activeVideo = videoId;
// };
//
// function onStartCheckIfSoundMuted() {
//     if (!$('.sound').hasClass('sound-mute')) {
//         setTimeout(function() {
//             $(activeVideo).prop("muted", false);
//         }, 300);
//     }
// }
//
// function homePageLoop() {
//     $('.home--wrapper img').hide();
//     $('.video-text').hide();
//     $('.home--wrapper img').each(function (i) {
//         if (this.complete) {
//             $(this).fadeIn(3000);
//
//             setTimeout(function () {
//                 $('.video-text').fadeIn('800');
//                 $('#video, .sound').css('display', 'block');
//                 $('#video')[0].play();
//                 setActiveVideo('#video');
//
//                 onStartCheckIfSoundMuted();
//
//                 $('.home--wrapper img').fadeOut();
//
//                 setTimeout(function () {
//                     $('.video-text').fadeOut('slow');
//                 }, 5000)
//             }, 5000)
//         } else {
//             $(this).load(function() {
//                 $(this).fadeIn();
//             });
//         }
//     });
// }
//
// function runSecondVideo() {
//     $('#video2').css('display', 'block');
//     setActiveVideo('#video2');
//
//     onStartCheckIfSoundMuted();
//
//     $('#video2').on('ended', function () {
//         $(this).css('display', 'none');
//         homePageLoop();
//     })
// }