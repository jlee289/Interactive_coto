var stars = [],
    WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight,
    FPS = 100, // Frames per second
    NUM_STARS = WIDTH/20; // Number of stars
let myCanvas;

function setup() {
  createCanvas(WIDTH,HEIGHT);


  // Push stars to array
  for (var i = 0; i < NUM_STARS; i++) {
    stars.push({
      x: 1050,
      y: 200,
      offset: Math.random() * 20,
      // Weight orbit a little to be outside origin
      orbit: (Math.random()+0.02) * max(WIDTH, HEIGHT),
      radius: Math.random() * 2000,
      // vx: Math.floor(Math.random() * 10) - 5,
      // vy: Math.floor(Math.random() * 10) - 5,
      otherradius: Math.random() * 100,
    });
  }

  frameRate(FPS);
  loop();

}

function draw() {
  background(850,54,100);
  push(20);
  noFill(0);
  colorMode(HSB);
  stroke(300,80,47,10);
  strokeCap(SQUARE);
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
   quad(s.x, s.y, s.radius, s.otherradius,s.x1, s.y1, s.x2, s.y2, s.x3, s.y3, s.x4, s.y4);
  }

var planetX = (350,20,30);
var planetY = (350,40,30);

  if ((mouseX > windowWidth / 1 - planetX /5) && (mouseX < windowWidth / 5 + planetX / 5) && (mouseY > windowHeight / 5- planetY / 5) && (mouseY < windowHeight / 5 + planetY /5)) {
    fill(color(209, 129, 123));
    noStroke(20);
    ellipse(windowWidth/10, windowHeight/10 ,planetX/2 ,planetY/2);
    var s = random(stars);
    // print(s.radius);
    s.radius = s.radius + 300;
    s.otherradius = s.radius;
    FPS = 1000;
    frameRate(FPS);
    print(FPS);
    // print(frameRate(FPS));
    colorMode(RGB, 225,225,225,1);
  } else {
    var s = (stars);
    // s.radius = Math.random() * 2;
    // s.otherradius = 1;
    FPS = 400;
    frameRate(FPS);
    print(FPS);

  }

  pop();
  update();
}

function update() {
  var originX = WIDTH / 2;
  var originY = HEIGHT / 2;

  for (var i = 0 , x = stars.length; i < x; i++) {
    var s = stars[i];


    var rad = (frameCount * (1/(s.orbit*4 + s.offset)) + s.offset) % TAU;
    s.x = (originX + cos(rad)*(s.orbit*4));
    s.y = (originY + sin(rad)*(s.orbit));
    s.x1 = (originX + cos(rad)*(s.orbit*8));
    s.y1 = (originX + sin(rad)*(s.orbit));
    s.x2 = (originX + cos(rad)*(s.orbit*12));
    s.y2 = (originX + sin(rad)*(s.orbit));
    s.x3 = (originX + cos(rad)*(s.orbit*16));
    s.y3 = (originX + sin(rad)*(s.orbit));

  }

}

function windowResized() {
    WIDTH = window.innerrWidth,
    HEIGHT = window.innerHeight,
    resizeCanvas(WIDTH, HEIGHT);
}

// function mousePressed() {
//     var s = random(stars);
//     print(s.radius);
//     s.radius = s.radius + 100;
//     s.otherradius = s.radius * 1;
//     s.strokeWeight = random(100);
//     FPS = FPS + 10;
//     print(FPS);
// }

function mousePressed () {
  // var s = s
  noFill();
  colorMode(RGB, 255, 25, 75, 1);
  background(255);
  strokeWeight(4);
  stroke(255, 0, 10, 0.2);
  ellipse(40, 40, 50, 50);
  ellipse(50, 50, 40, 40);

}
