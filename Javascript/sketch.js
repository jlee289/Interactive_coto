let ellipseX = 0;
let ellipseY = 0;

let pointX = 100;
let pointY= 200;

let waiting;
let shin;

function preload(){
  waiting = createImg("images/waiting_tv.gif");
  shin = createImg("images/SHIN_CHAN.gif");
}

function setup() {
  // put setup code here to run once


  // create canvas 500 by 500 px:
  createCanvas(windowWidth, windowHeight);


//print(windowWidth)
//change rectangle x,y cordinates to the center of the rect
rectMode(CENTER);
imageMode(CENTER);

ellipseX = random(ellipseX, windowWidth);
ellipseY = random(ellipseY, windowHeight);

noCursor();
}

function draw() {
  background(100,40,130);

  smooth();
//style for ellipse

  // put drawing code here to run in a loop
ellipse(mouseX, mouseY, 100, 200);


//styles for the rect
stroke(100,255,80);
strokeWeight(20);
fill(50,200,120);
rect(0,0,0,0);

//style for the triangle
stroke(40,100,100);
strokeWeight(20);
fill(179, 212, 245);
triangle(1200,50,1300,600,mouseX,mouseY);


//styles for the points
fill(255, 233, 69);
stroke(109, 83, 224);
strokeWeight(10);
//point is only x and y cordinate
print(mouseX, mouseY);
print(mouseX);

strokeWeight(10)
line(pointX, pointY, 700, 500);
waiting.position(600, 600);

image(shin, mouseX, mouseY, 200, 200);

}
