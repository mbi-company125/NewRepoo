$(function () {

    'use strict';

    // var


    //scroll to element 
     $('.navbar-nav li a').click(function (e) {
        
        
        e.preventDefault();

        //  window.console.log($(this).data('scroll'));

       // Scroll
        $("html, body").animate({
            scrollTop: $( '#' + $(this).data('scroll')).offset().top - 80

        }, 1000);

        
    });

    
    
});