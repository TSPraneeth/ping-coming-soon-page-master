function validate()
{
    var x = document.getElementById("email").value;
    if(x === "")
    {
        document.getElementById("email").style.border = "1px solid red";
        document.getElementById("error").innerHTML = "Whoops! It looks like you forgot to add your email";
    }
    else
    {
        document.getElementById("email").style.border = "1px solid dodgerblue";
        document.getElementById("error").innerHTML = "";
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x))
    {
        document.getElementById("email").style.border = "1px solid dodgerblue";
        document.getElementById("error").innerHTML = "";
    }
    else
    {
        document.getElementById("email").style.border = "1px solid red";
        document.getElementById("error").innerHTML = "Please enter a valid email";
    }
}