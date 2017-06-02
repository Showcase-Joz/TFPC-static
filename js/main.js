
// // Preloader
// $(window).load(function() { // makes sure the whole site is loaded
//                 $('#status').fadeOut(); // will first fade out the loading animation
//                 $('#preloader').delay(350).fadeOut('slow'); // will fade out the yellow DIV that covers the website.
//                 $('body').delay(350).css({'overflow':'visible'});

// // initiate wow
//     new WOW({
//         mobile:       false,       // trigger animations on mobile devices (default is true)
//         live:         true  })
        
//     .init();
    
// })

  


// set copyright year date
var currentYear=(new Date).getFullYear();
$(document).ready(function(){$(".year").text(currentYear);});

(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 250
        }
    });
        
    $('a[href^="#"]').on('click', function(e) {
        var url = document.URL.split("#");
        var ancher = url[1];
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });
    

})(jQuery);

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$(function () {
  $('[data-toggle="popover"]').popover()
})





// // initiate svg animations
            
//     new Vivus('Capa1', {
//         type: 'oneByOne',
//         duration: 800,
//         animTimingFunction: Vivus.EASE
//     });
            
// // global repeat animation
// $(function () {

//     var animationName = 'animated tada';
//     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
//     $('.nav li').on('mouseover',function() {
    
//         $('.loopanimation').addClass(animationName).one(animationEnd,function() {
//             $(this).removeClass(animationName);
//         });
//     });
// });