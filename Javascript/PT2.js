function setup() {
  createCanvas(100, 100, WEBGL);
  setAttributes('antialias', true);
}
function draw() {
  orbitControl();
  background(50);
  strokeWeight(4);
  stroke(255);
  point(-25, 30);
  point(25, 30);
  point(25, -30);
  point(-25, -30);

  strokeWeight(1);
  noFill();

  beginShape();
  vertex(-25, 30);
  bezierVertex(25, 30, 25, -30, -25, -30);
  endShape();

  beginShape();
  vertex(-25, 30, 20);
  bezierVertex(25, 30, 20, 25, -30, 20, -25, -30, 20);
  endShape();
}
