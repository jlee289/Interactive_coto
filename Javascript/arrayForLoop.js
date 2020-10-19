
let itachi;
let posX;
let posY;

function preload(){
itachi = createImg("images/Itachi.png");

}

function setup(){
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);
  for(let i=0; i < 1000; i++){
    posX = random(windowWidth);
    posY = random(windowHeight);
    fill(random (225), random (225),random (225));
    ellipse(posX, posY, 70, 70);
  images(itachi, posX, posY, 10, 10);

}
}

function draw(){
stroke(140,100,200);
  for(let i=0; i< windowHeight; i++){
    line(0, i*40, windowWidth, i*40);
  }

  for(let i=0; i<windowWidth; i++);
  line(i*40, 0,i*40, windowHeight)
}
