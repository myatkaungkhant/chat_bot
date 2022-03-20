let pics = ["robot_1.png", "robot_2.png", "robot_3.png", "robot_4.png"];
let choice;
var audio = document.getElementById("audio");
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
let bot_message = ["Hello!", "I'm fine... How about you?", "Exciting things!", "Glad to hear it", "How can I help you!", "Ahh... I have special things for you!", "Do you like to play music or game!", "I don't understand"];
var sent_click = document.getElementById("sent_icon");
sent_click.addEventListener("click", () => {
    document.getElementById("chatbox").innerHTML += "<div class='user' style='display:flex;'>" + document.getElementById("message").value + "</div>";
    var user_message = document.getElementById("message").value;
    document.getElementById("message").value = "";
    setTimeout(() => {
        if (user_message.includes("Hello")) {
            document.getElementById("chatbox").innerHTML +=
                "<div class='bot' style='display:flex;'>" + bot_message[0] + "</div>";
        } else if (user_message.includes("How")) {
            document.getElementById("chatbox").innerHTML +=
                "<div class='bot' style='display:flex;'>" + bot_message[1] + "</div>";
        } else if (user_message.includes("What")) {
            document.getElementById("chatbox").innerHTML +=
                "<div class='bot' style='display:flex;'>" + bot_message[2] + "</div>";
        } else if (user_message.includes("happy")) {
            document.getElementById("chatbox").innerHTML +=
                "<div class='bot' style='display:flex;'>" + bot_message[3] + "</div>";
        } else if (
            user_message.includes("boring") ||
            user_message.includes("lonely")
        ) {
            document.getElementById("chatbox").innerHTML +=
                "<div class='bot' style='display:flex;'>" + bot_message[4] + "</div>";
        } else if (user_message.includes("know")) {
            document.getElementById("chatbox").innerHTML +=
                "<div class='bot' style='display:flex;'>" + bot_message[5] + "</div>";
        } else if (user_message.includes("tell")) {
            document.getElementById("chatbox").innerHTML +=
                "<div class='bot' style='display:flex;'>" + bot_message[6] + "</div>";
        } else if (user_message.includes("play")) {
            play_music();
        } else if (user_message.includes("stop")) {
            stop_music();
        } else {
            document.getElementById("chatbox").innerHTML +=
            "<div class='bot' style='display:flex;'>" + bot_message[7] + "</div>";
        }
    }, 1500);
});
// play music
function play_music(){
    document.getElementById("content").style.display = "block";
    audio.src = "../music/01 Overture.flac";
    audio.play();
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        var r = barHeight + 25 * (i / bufferLength);
        var g = 250 * (i / bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }
    renderFrame();
}
function stop_music(){
    document.getElementById("content").style.display = "none";
    audio.pause();
    audio.currentTime=0;
}

var change = document.getElementById("change");
change.addEventListener("click",() => {
            document.getElementById("bgchange").style.backgroundImage = "url('./image/wallpaper2.jpg')";
            document.getElementById("bgchange").style.backgroundSize = "cover";
            document.getElementById("bgchange").style.backgroundRepeat = "no-repeat";
            document.getElementById("bgchange").style.backgroundPosition = "center";
});


