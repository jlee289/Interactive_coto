let playVideoButton;
let playAudiobutton;

let undo;
let glitch;

let undoSlider;
let glitchSlider;

let sliderR;
let sliderG;
let sliderB;

let videoPlaying = false;


let canvas;
function preload(){


}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0, 0);

  createElement('h2', 'Mix the background color, play and pause video and audio');


  createP('Red value');
  sliderR = createSlider(0, 255, 255, 1);
  createP('Green value');
  sliderG = createSlider(0, 255, 255, 1);
  createP('Blue value');
  sliderB = createSlider(0, 255, 255, 1);

  glitch = createVideo(['video/HYPERSPEKTIV 12.mp4']);
  glitch.style('width', '540px');
  glitch.style('height', '360px');
  glitch.position (300, 100);

  playVideoButton = createButton('Play Glitch');
  playVideoButton.class('glitchVid')
  playVideoButton.mousePressed(playVideoToggle);
  createElement('br');
  glitchSlider = createSlider(0, 4, 1);
  createElement('br');

  undo = loadSound("audio/UNDO.mp3");
  playAudiobutton = createButton('Play Undo');
  playAudiobutton.mousePressed(playAudioToggle);
  createElement('br');
  undoSlider = createSlider(0, 3, 1, 0.01);
}

function playVideoToggle(){
  if(videoPlaying){
    glitch.pause();
    playVideoButton.html('Play Glitch');
  }else{
    glitch.loop();
    playVideoButton.html('Pause Glitch');
  }
  videoPlaying = !videoPlaying;


}

function playAudioToggle(){
  if(!undo.isPlaying()){
    undo.play();
    playAudiobutton.html('Pause Undo');
  }else{
    undo.pause();
    playAudiobutton.html('Play Undo');
  }
}


function draw(){
  undo.rate(undoSlider.value());
  glitch.speed(glitchSlider.value());
  background(sliderR.value(), sliderG.value(), sliderB.value());

  print(sliderR.value());

}
