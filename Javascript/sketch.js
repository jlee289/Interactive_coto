


function setup() {
  // put setup code here to run once


  // create canvas 500 by 500 px:
  createCanvas(windowWidth,windowHeight);

  background('rgba(0,255,0, 0.25)');


}

function draw() {
  smooth();
  //styles for the points
  fill(120);
  stroke(40,200,100);
  strokeWeight(10);
//point is only x,y cordinate
point(mouseX,mouseY);
//style for ellipse
noStroke();
  // put drawing code here to run in a loop
ellipse(300, 500, 150, 150);


//styles for the rect
stroke(100,255,80);
strokeWeight(20);
fill(50,200,120);
rect(800,300,200,300);

//style for the triangle
stroke(40,100,100);
strokeWeight(20);
noFill();
triangle(1200,50,1300,600,800,950,400);


print(mouseX);
}
