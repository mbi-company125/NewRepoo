/*** 
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

    // Toggle Slide 
    $("#quet").click(function(){
        $(".card-body").slideToggle("slow");
      });

    
    
});**/

// Validate Column
function validate()
{
    if(document.contactform.name.value=="")
    {
        alert("الرجاء إدخال إسمك")
    }
    else if(document.contactform.tel.value=="")
    {
        alert("الرجاء إدخال موبايلك")
    }
    else if(document.contactform.email.value=="")
    {
        alert("الرجاء إدخال ايملك")
    }
}