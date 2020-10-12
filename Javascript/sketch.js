


function setup() {
  // put setup code here to run once


  // create canvas 500 by 500 px:
  createCanvas(windowWidth,windowHeight);

  background(110, 0, 0);
//print(windowWidth)
//change rectangle x,y cordinates to the center of the rect
rectMode(CENTER);
}

function draw() {
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

}
