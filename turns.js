//not used, but good to know
var epochDate = new Date(0);

//Turn interval in seconds. ie. number of game seconds that pass per real world second
var turnInterval = 100;

document.getElementById("turnInterval").innerHTML = (turnInterval + " seconds");


//all of this stuff updates the values on the screen.


var startTurn = 0;
function incrementTurn() {
    startTurn += turnInterval; 
    document.getElementById("turnCount").innerHTML = (startTurn);
}
setInterval(incrementTurn, 100);

function logClick() {
    document.getElementById("clickLog").innerHTML = "Hello World";
}


// var elapsedTime = (currentTurn * turnInterval);
//    var gameStartDate = new Date(2045, 02, 06, 19, 0);
//    gameStartDate.setSeconds(gameStartDate.getSeconds() + elapsedTime);
//    var gigaSec = Math.floor(elapsedTime / (1000000000));
//    var megaSec = Math.floor(elapsedTime % (1000000000) / (1000000));
//    var kiloSec = Math.floor((elapsedTime % (1000000)) / (1000));
//    var sec = Math.floor(elapsedTime % (1000));
//    var years = Math.floor(elapsedTime / (86400 * 365));
//    var days = Math.floor(elapsedTime % (86400 * 365) / (86400));
//    var hours = Math.floor((elapsedTime % (86400)) / (3600));
//    var minutes = Math.floor((elapsedTime % (3600)) / (60));
//    var seconds = Math.floor(elapsedTime % (60));
//    document.getElementById('turnCount').innerHTML = currentTurn;
//    document.getElementById("elapsedTimeSeconds").innerHTML = (gigaSec + ":" + megaSec + ":" + kiloSec + ":" + sec);
//    document.getElementById("elapsedTime").innerHTML = (years + "y " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
//    document.getElementById("gameDate").innerHTML = (gameStartDate).toUTCString();
//
//
