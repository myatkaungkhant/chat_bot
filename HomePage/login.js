var lgprofile = document.getElementById("loginprofile");
var paw = 123456;
// var userpw = document.getElementById("pw").value;


lgprofile.addEventListener("click" , ()=>{
    document.getElementById("loginprofile").style.display="none";
    document.getElementById("loginbox").style.display="block";
})

function login(){
    
    if(document.getElementById("pw").value == paw){
        document.getElementById("login-button").innerHTML = '<a href="../choose_avatar.html"> </a>';
        // document.getElementById("next").click();
        window.alert("correct");
    }
    else{
        window.alert("Password Incorrect");
    }
    
}

