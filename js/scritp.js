//
function validate()
{
    if(document.contactform.firstname.value=="")
    {
        alert("الرجاء إدخال إسمك")
    }
    else if(document.contactform.lastname.value=="")
    {
        alert("الرجاء إدخال إسمك")
    }
    else if(document.contactform.tel.value=="")
    {
        alert("الرجاء إدخال موبايل")
    }
}