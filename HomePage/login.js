var lgprofile = document.getElementById("loginprofile");
var paw = 123456;
// var userpw = document.getElementById("pw").value;


lgprofile.addEventListener("click" , ()=>{
    document.getElementById("loginprofile").style.display="none";
    document.getElementById("loginbox").style.display="block";
})

function login(){
    
    if(document.getElementById("pw").value == paw){
        window.location.href="../choose_avatar.html";
        // document.getElementById("login-button").innerHTML = '<a href="../choose_avatar.html"> </a>';
        // document.getElementById("next").click();
    }
    else{
        window.alert("Inncorrect Password");
    }
    
}

