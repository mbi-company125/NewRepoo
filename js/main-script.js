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
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.oddEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
})

function checkInputs()
{

    // Git the value from the input

    const nusernameValue = nusername.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(uusernameValue === '')
    {
        setErrorFor(username, 'username cannot be balnk')
    }
    else{
        setSuccessFor(username)
    }
}

function setErrorFor(input, message)
{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = "form control error";
}