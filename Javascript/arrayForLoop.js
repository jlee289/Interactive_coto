
let itachi;
let posX;
let posY;
let randName;

let squareNums = [25, 36, 49, 64, 82, 100, 121, 144];
let names = ['jon', 'susie', 'maranda'];

function preload(){
itachi = createImg("images/Itachi.png");

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  imageMode(CENTER);

frameRate(10);

}
randName = int(random(names.length));


  for(let i=0; i < windowWidth; i++);
  line(i*40, 0,i*40, windowHeight);


function draw(){
  background(20,40,10);

  text(names[randName], 200,300);

  for(let i=0; i < 500; i++){
      posX = random(windowWidth);
      posY = random(windowHeight);
    fill(random (225), random (225),random (225));
    ellipse(posX, posY, 120, 120);
    image(itachi, posX, posY, 80, 80);
  }
    stroke(140,100,200);
    for(let i=0; i< windowHeight; i++){
    line(0, i*40, windowWidth, i*40);
  }

  for(i=0; i<squareNums.length; i++){
    print(squareNums[i]);
    rect(random(windowWidth), random(windowHeight), squareNums[i], squareNums[i]);
    fill(random (225), random (225),random (225));
  }
}
