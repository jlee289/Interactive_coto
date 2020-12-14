var stars = [],
    WIDTH = window.outerWidth,
    HEIGHT = window.outerHeight,
    FPS = 20, // Frames per second
    NUM_STARS = WIDTH/20; // Number of stars
let myCanvas;

function setup() {
  myCanvas = createCanvas(WIDTH,HEIGHT);


  // Push stars to array
  for (var i = 0; i < NUM_STARS; i++) {
    stars.push({
      x: 550,
      y: 20,
      offset: Math.random() * 200,
      // Weight orbit a little to be outside origin
      orbit: (Math.random()+0.08) * max(WIDTH, HEIGHT),
      radius: Math.random() * 10,
      // vx: Math.floor(Math.random() * 10) - 5,
      // vy: Math.floor(Math.random() * 10) - 5,
      otherradius: Math.random() * 20,
    });
  }

  frameRate(FPS);
  loop();

}

function draw() {
  background(25,204,100);
  push(10);
  noFill(2);
  colorMode(HSB);
  stroke(10,830,47,80);
  strokeCap(SQUARE);
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
   rect(s.x, s.y, s.radius, s.otherradius);
  }

var planetX = (200,250);
var planetY = (200,250);

  if ((mouseX > windowWidth / 4 - planetX /4) && (mouseX < windowWidth / 4 + planetX / 4) && (mouseY > windowHeight / 4 - planetY / 4) && (mouseY < windowHeight / 4 + planetY /4)) {
    fill(color(70, 129, 123));
    noStroke(0);
    ellipse(windowWidth/2, windowHeight/2 ,planetX/2 ,planetY/2);
    var s = random(stars);
    // print(s.radius);
    s.radius = s.radius + 500;
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
    FPS = 300;
    frameRate(FPS);
    print(FPS);

  }

  pop();
  update();
}

function update() {
  var originX = WIDTH / 4;
  var originY = HEIGHT / 4;

  for (var i = 0 , x = stars.length; i < x; i++) {
    var s = stars[i];


    var rad = (frameCount * (1/(s.orbit*2 + s.offset)) + s.offset) % TAU;
    s.x = (originX + cos(rad)*(s.orbit*2));
    s.y = (originY + sin(rad)*(s.orbit));

  }

}

function windowResized() {
    WIDTH = window.outerWidth,
    HEIGHT = window.outerHeight,
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
  colorMode(RGB,100,200,200,1);

}
