let ballX;
let ballY;

let ballXspeed = 100;
let ballYspeed = 3;

function setup(){
createCanvas(windowWidth, windowHeight);
ballX = random (225, windowWidth-125);
ballY = random (25, windowHeight -125);
background(61, 115, 108);
}

function draw(){

stroke(100,30,500);
fill (67, 20, 130);

stroke (100, 220, 150);
ellipse(ballX, ballY, 100, 320, 300);

ballX = ballX + ballXspeed;
ballY = ballY + ballYspeed;

if(ballX >= windowWidth -155 || ballX <= 155){
  ballXspeed = ballXspeed * -1;



}

if(ballY >= windowHeight -155 || ballY <= 155){
  ballYspeed = ballYspeed * -1;

}

print(ballX);


//ellipse(mouseX, mouseY, 30, 30);
line(pmouseX, pmouseY, mouseX, mouseY);

line(pmouseX + 10, pmouseY +10, mouseX +10, mouseY+10);


}
