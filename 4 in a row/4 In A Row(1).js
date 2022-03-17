let r1 = [0, 0, 0, 0];
let r2 = [0, 0, 0, 0];
let r3 = [0, 0, 0, 0];
let r4 = [0, 0, 0, 0];

var first = 1;
var second = 2;
var start = first;
var current = start;
var finish = false;

function flip(obj) {
    if (finish == false) {
        var valid = true;
        let tmp = obj.id.split(",");
        let clickRow = Number(tmp[0]);
        let clickColumn = Number(tmp[1] - 1);
        switch (clickRow) {
            case 1:
                if (r1[clickColumn] != 0) {
                    valid = false;
                    break;
                }
                r1[clickColumn] = current;
                break;
            case 2:
                if (r2[clickColumn] != 0) {
                    valid = false;
                    break;
                }
                r2[clickColumn] = current;
                break;
            case 3:
                if (r3[clickColumn] != 0) {
                    valid = false;
                    break;
                }
                r3[clickColumn] = current;
                break;
            case 4:
                if (r4[clickColumn] != 0) {
                    valid = false;
                    break;
                }
                r4[clickColumn] = current;
                break;
        }
        if (valid) {
            obj.style.transform = "scaleY(-1)";
            playsound();
            if (current == first) {
                obj.style.background = "rgb(216, 50, 0)";
            } else {
                obj.style.background = "rgb(35, 112, 175)";
            }
            if (current == first) {
                current = second;
                document.getElementById("turn").innerHTML = "Bot Turn!";
                document.getElementById("turn").style.color = "rgb(0, 247, 255)";
                setTimeout(() => {
                    bot();
                }, 700);
            } else {
                current = first;
                document.getElementById("turn").innerHTML = "Player 1 Turn!";
                document.getElementById("turn").style.color = "rgb(160, 255, 71)";
            }
            checkWhoWin();
            draw();
        }
    }
}
function playsound() {
    var audio = new Audio('flip.ogg');
    audio.loop = false;
    audio.play(); 
}
function winsound() {
    var audiowin = new Audio("win.wav");
    audiowin.loop = false;
    audiowin.play();
}
function failsound() {
    var audiofail = new Audio("fail.wav");
    audiofail.loop = false;
    audiofail.play();
}
function drawsound() {
    var audiodraw = new Audio("draw.wav");
    audiodraw.loop = false;
    audiodraw.play();
}

function checkWhoWin() {
    if (horizontal(first)) {
        finish = true;
        document.getElementById("result").innerHTML = "Player 1 win!";
        winsound();
    }
    if (horizontal(second)) {
        finish = true;
        document.getElementById("result").innerHTML = "Bot win!";
        failsound();
    }
    if (vertical(first)) {
        finish = true;
        document.getElementById("result").innerHTML = "Player 1 win!";
        winsound();
    }
    if (vertical(second)) {
        finish = true;
        document.getElementById("result").innerHTML = "Bot win!";
        failsound();
    }
    if (cross_left(first)) {
        finish = true;
        document.getElementById("result").innerHTML = "Player 1 win!";
        winsound();
    }
    if (cross_left(second)) {
        finish = true;
        document.getElementById("result").innerHTML = "Bot win!";
        failsound();
    }
    if (cross_right(first)) {
        finish = true;
        document.getElementById("result").innerHTML = "Player 1 win!";
        winsound();
    }
    if (cross_right(second)) {
        finish = true;
        document.getElementById("result").innerHTML = "Bot win!";
        failsound();
    }
}
// horizontal begin
function horizontal(player) {
    if (hrow_check(r1, player)) {
        return true;
    } else if (hrow_check(r2, player)) {
        return true;
    } else if (hrow_check(r3, player)) {
        return true;
    } else if (hrow_check(r4, player)) {
        return true;
    }
}
function hrow_check(array, player) {
    var count = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] == player) {
            count++;
        }
    }
    if (count == 4) {
        return true;
    }
    return false;
}
// horizontal finish
// vertical begin
function vertical(player) {
    for (let index = 0; index < 4; index++) {
        if (
            r1[index] == player &&
            r2[index] == player &&
            r3[index] == player &&
            r4[index] == player
        ) {
            return true;
        }
    }
    return false;
}
// vertical finish
// cross check begin
// left
function cross_left(player) {
    if (
        r1[0] == player &&
        r2[1] == player &&
        r3[2] == player &&
        r4[3] == player
    ) {
        return true;
    }
    return false;
}
// right
function cross_right(player) {
    if (
        r1[3] == player &&
        r2[2] == player &&
        r3[1] == player &&
        r4[0] == player
    ) {
        return true;
    }
    return false;
}
// cross check finish
// Draw
function draw() {
    var count = 0;
    for (let index = 0; index < r1.length; index++) {
        if(r1[index] == 0)
            count++;
    }
    for (let index = 0; index < r2.length; index++) {
        if(r2[index] == 0)
            count++;
    }
    for (let index = 0; index < r3.length; index++) {
        if(r3[index] == 0)
            count++;
    }
    for (let index = 0; index < r4.length; index++) {
        if(r4[index] == 0)
            count++;
    }

    if (count == 0) {
        finished = true;
        document.getElementById("result").innerHTML = "Draw!";
        drawsound();
    }
}
// bot
function bot() {
    var row = Math.floor(Math.random() * 4 + 1);
    var column = Math.floor(Math.random() * 4 + 1);

    switch (row) {
        case 1:
            if (r1[column - 1] != 0) {
                bot();
                break;
            }
            break;
        case 2:
            if (r2[column - 1] != 0) {
                bot();
                break;
            }
            break;
        case 3:
            if (r3[column - 1] != 0) {
                bot();
                break;
            }
            break;
        case 4:
            if (r4[column - 1] != 0) {
                bot();
                break;
            }
            break;
    }
    document.getElementById(row + "," + column).click();
}

