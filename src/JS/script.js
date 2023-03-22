// Main Function 
var regex  = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/);
function checking(){
    let password = document.getElementById("input_password").value;
    console.log(password)
    if (regex.test(password)){
        document.getElementById("display").innerHTML = "Valid Password";
        document.getElementById("display").style.color = "green"
    }
    else{
        document.getElementById("display").innerHTML = "Invalid Password";
        document.getElementById("display").style.color = "red"
    }
}