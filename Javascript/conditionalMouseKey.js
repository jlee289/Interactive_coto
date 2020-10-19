
let ellipseX;
let ellipseY;

let fillR;
let fillG;
let fillB;


function setup(){
  createCanvas(windowWidth, windowHeight);

    fillR = random(255);
    fillG = random(255);
    fillB = random(255);
    background(40,100,30);
}


function draw(){
  // if (mouseIsPressed){
  //   background(100,20,10);
  // }else{
  //   background(40,100,30);
  //
  // }

  if(mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
    if(mouseX > windowWidth/2 && mouseY< windowHeight/2){
      ellipseX = 300;
      ellipseY = 200;
    } else {
      ellipseX = 900;
      ellipseY = 500;

    }

fill(fillR, fillG, fillB);

ellipse (ellipseX, ellipseY, 100,100);
textSize(50);

if(dist(mouseX, mouseY, ellipseX, ellipseY)< 50){
  text("Got the ellipse!!", 20,30);
}
strokeWeight(20);
stroke(20,120,120);
}


function mouseReleased(){
  fillR = random(255);
  fillG = random(255);
  fillB = random(255);
}

function keyPressed(){
if(key == 'f'|| key == 'F'){
  fillR = random(255);
  fillG = random(255);
  fillB = random(255);

}
if(key == 'c' || key == 'C'){
  background(40,100,30);
}

if(key =='s' || key == 'S'){
  save('drawing.png');
}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);


  }
