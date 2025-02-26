var error=document.getElementById("error")
var mail=document.getElementById("email")
var email=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var notify=document.getElementById("click")
notify.addEventListener("click",function()
{

    if(!mail.value.match(email))
        {
            error.innerHTML="please enter a valid email address"
            console.log("error")
        }
        else
        {
            error.innerHTML=" "
        
        }

})
