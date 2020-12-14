
let playAudiobutton;

let tokimonsta;

let undoSlider;

let videoPlaying = false;


let canvas;
function preload(){


}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0, 0);

  createElement('h2', 'Mix the background color, play and pause video and audio');


  tokimonsta = loadSound("audio/Tokimonsta.mp3");
  playAudiobutton = createButton('Play Tokimonsta');
  playAudiobutton.mousePressed(playAudioToggle);
  createElement('br');
  tokimonstaSlider = createSlider(0, 3, 1, 0.01);
}


function playAudioToggle(){
  if(!tokimonsta.isPlaying()){
    tokimonsta.play();
    playAudiobutton.html('Pause tokimonsta');
  }else{
    tokimonsta.pause();
    playAudiobutton.html('Play tokimonsta');
  }
}


function draw(){
  tokimonsta.rate(tokimonstaSlider.value());

}
