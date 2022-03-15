let pics = ["robot_1.png", "robot_2.png", "robot_3.png", "robot_4.png"];
let choice;

var go_click = document.getElementById("btn_next");
go_click.addEventListener("click",() => {
    document.getElementById("display_1").style.display = "none";
    document.getElementById("display_2").style.display = "block";
    document.getElementById("choose_bot").src = "./image/" + pics[choice];
    document.getElementById("intro").innerHTML = "Hello,My name is " + document.getElementById("name").value + ".<br><br>Can I be your friend?";
});

function check(obj) {
    choice = obj.id;
}
