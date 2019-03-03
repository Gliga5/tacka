var ctx;
var ctv;
var ballY = 610;
var ballX = 400;
var ballSpeedX;
var ballSpeedY = 10;
var gravityY = 0.13;
var gravityX = 0.04;
var uravity = true;
var moveRight = false;
var moveLeft = false;

var FPS = 120;

window.onload = function(){
    //--------------------------------------------------------
    ctx = document.getElementById("gameCanvas")
    ctv = ctx.getContext("2d");

    setInterval(function(){
        drawEverything();
        moveEverything();
    },1000/FPS);

    addEventListener('keydown', logKey);
}

function logKey(e) {
    if (e.code == "KeyW"){
        uravity = false;
        ballSpeedY *= 0;
        ballSpeedY += 6;
    }

    if (e.code == "KeyD"){
        ballSpeedX = 4;
        moveLeft = false;
        moveRight = true;
    }
    if (e.code == "KeyA"){
        ballSpeedX = 4;
        moveRight = false;
        moveLeft = true;
    }
    setInterval(function(){
        uravity = true;
    },1000/FPS)
  }

function moveEverything(){
    if (uravity){
        ballSpeedY -= gravityY;
    }
    ballY -= ballSpeedY;

    if(moveRight){
        ballX += ballSpeedX;
    }
    if (moveLeft) {
        ballX -= ballSpeedX;
    }
    ballSpeedX -= gravityX;
    if (ballSpeedX < 0){
        ballSpeedX = 0;
    }
    console.log(`BallX: ${Math.round(ballX)}\nBallY: ${Math.round(ballY)}`)
}

function drawEverything(){
    ctv.fillStyle = "black";
    ctv.fillRect(0,0,ctx.width,ctx.height);

    ctv.fillStyle = "white";
    ctv.beginPath();
    ctv.arc(ballX,ballY,10,0,Math.PI*2,true)
    ctv.fill();
}
