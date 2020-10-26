let itachi;

let blueBrushBool = false;
let itachiBrushBool = false;

function preload(){
  itachi = createImg("images/Itachi.png");

}
function setup(){
  createCanvas(windowWidth, windowHeight);

  background(255);

  imageMode(CENTER);
}


function draw(){
  if(blueBrushBool == true){
    blueEllipse();
  }
  if (itachiBrushBool == true){
    itachiBrush();
  }
}


function keyPressed(){
  if(key == 'b'){
    blueBrushBool == true;
    itachiBrushBool == false;
  }

  if(key == 'i'){
    blueBrushBool == false;
    itachiBrushBool == true;
  }

  if(key == 'o'){
    blueBrushBool == false;
    itachiBrushBool == false;

  }

}




//custom function below
function blueEllipse(){
  frameRate(20);
  fill(30, 120, 200);
  noStroke();
  for(let i=0; i < 50; i++){
    ellipse(random(mouseX -30, mouseX +30), random(mouseY -30, mouseY +30), 2, 2);
  }

}

function itachiBrush(){
  image(itachi, mouseX, mouseY, 30, 40);


}
