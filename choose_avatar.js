let pics = ["robot_1.png", "robot_2.png", "robot_3.png", "robot_4.png"];
let choice;
// from first to second 
var go_click = document.getElementById("btn_next");
go_click.addEventListener("click", () => {
    document.getElementById("display_1").style.display = "none";
    document.getElementById("display_2").style.display = "block";
    document.getElementById("choose_bot").src = "./image/" + pics[choice];
    document.getElementById("intro").innerHTML = "Hello,My name is " + document.getElementById("name").value + ".<br><br>Can I be your friend?";
});

function check(obj) {
    choice = obj.id;
}
// from second to third 
var skip_click = document.getElementById("btn_skip");
skip_click.addEventListener("click", () => {
    document.getElementById("display_2").style.display = "none";
    document.getElementById("display_3").style.display = "block";
});
// sent message
let bot_message = ["Hello!", "I'm fine... How about you?", "Exciting things!", "Glad to hear it","How can I help you!","Ahh... I have special things for you!","Do you like to play music or game!", "I don't understand"];
var sent_click = document.getElementById("sent_icon");
sent_click.addEventListener("click", () => {
    document.getElementById("chatbox").innerHTML += "<div class='user' style='display:flex;'>" + document.getElementById("message").value + "</div>";
    var user_message = document.getElementById("message").value;
    document.getElementById("message").value = "";
    if (user_message.includes("Hello")) {
        document.getElementById("chatbox").innerHTML += "<div class='bot' style='display:flex;'>" + bot_message[0] + "</div>";
    } else if (user_message.includes("How")) {
        document.getElementById("chatbox").innerHTML += "<div class='bot' style='display:flex;'>" + bot_message[1] + "</div>";
    } else if (user_message.includes("What")) {
        document.getElementById("chatbox").innerHTML += "<div class='bot' style='display:flex;'>" + bot_message[2] + "</div>";
    } else if (user_message.includes("happy")) {
        document.getElementById("chatbox").innerHTML += "<div class='bot' style='display:flex;'>" + bot_message[3] + "</div>";
    }else if(user_message.includes("boring") || user_message.includes("lonely")){
        document.getElementById("chatbox").innerHTML += "<div class='bot' style='display:flex;'>" + bot_message[4] + "</div>";
    }else if(user_message.includes("know")){
        document.getElementById("chatbox").innerHTML += "<div class='bot' style='display:flex;'>" + bot_message[5] + "</div>";
    }else if(user_message.includes("tell")){
        document.getElementById("chatbox").innerHTML += "<div class='bot' style='display:flex;'>" + bot_message[6] + "</div>";
    }
});

function play_music(){
    
}

