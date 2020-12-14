var stars = [],
    WIDTH = window.outerWidth,
    HEIGHT = window.outerHeight,
    FPS = 20, // Frames per second
    NUM_STARS = WIDTH/20; // Number of stars

function setup() {
  createCanvas(WIDTH,HEIGHT);

  // Push stars to array
  for (var i = 0; i < NUM_STARS; i++) {
    stars.push({
      x: 550,
      y: 50,
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
  background(1);
  push(10);
  noFill(8);
  colorMode(RGB, 214, 0, 0);
  stroke(250,29,47,1);
  strokeCap(ROUND);
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
    ellipse(s.x, s.y, s.radius, s.otherradius);
  }
  let detailY;
  function setup() {
    createCanvas(100, 100, WEBGL);
    rect(20, 20, 60, 80)
    detailY = createSlider(3, 20, 3);
    detailY.position(10, height + 5);
    detailY.style('width', '80px');
  }

var planetX = 1500;
var planetY = 10;

  if ((mouseX > windowWidth / 2 - planetX /2) && (mouseX < windowWidth / 2 + planetX / 2) && (mouseY > windowHeight / 2 - planetY / 2) && (mouseY < windowHeight / 2 + planetY /2)) {
    fill(color(123,62,99));
    noStroke(10);
    ellipse(windowWidth/2, windowHeight/2 ,planetX,planetY);
    var s = random(stars);
    // print(s.radius);
    s.radius = s.radius + 200;
    s.otherradius = s.radius;
    FPS = 1000;
    frameRate(FPS);
    print(FPS);
    // print(frameRate(FPS));
    colorMode(RGB, 100, 20, 123, 1);
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
  var originX = WIDTH / 2;
  var originY = HEIGHT / 2;

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
  colorMode(RGB, 124, 156, 128);

}
