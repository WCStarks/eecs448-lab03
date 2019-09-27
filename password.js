function validate()
{
    let pass1 = document.getElementById("pass1");
    let pass2 = document.getElementById("pass2");
    let message = document.getElementById("message");
    
    if (pass1.value == "" || pass2.value == "")
    {
        message.innerHTML = "One or more fields is empty.";
    }
    else if (pass1.value != pass2.value) 
    {
        message.innerHTML = "Passwords do not match.";
    }
    else if (pass1.value.length < 8)
    {
        message.innerHTML = "Password too short.";
    }
    else
    {
        message.innerHTML = "Password is valid.";
    }
}
