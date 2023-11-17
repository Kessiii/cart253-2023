/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

// The balls
let balls = [];

// F-minor
let notes = [`F3`,`G3`,`Ab4`,`Bb4`,`C4`,`Db4`,`Eb4`,`F4`];

// setup()
//
// Just creates the canvas.
function setup() {
  createCanvas(600,600);

  userStartAudio();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(mouseX, mouseY);

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
}

function mousePressed() {
  createMusicalBall(mouseX,mouseY);
}

//function createBall(x,y) {
  //let note = random(notes);
  //let ball = new MusicalBall(x,y,note);
 // balls.push(ball);
//}

function createMusicalBall(x, y) {
      // Create different types of balls based on some condition (for example, random)
  let note = random(notes);

  // Define appearance properties
  let ballSize = random();
  let ballColor = {
    r: random(100, 255),
    g: random(100, 255),
    b: random(100, 255),
  };

  // Create instances of different ball types with appearance properties
  let ball;
  if (random() > 0.5) {
    ball = new SineWaveBall(x, y, note, ballSize, ballColor);
  } else {
    ball = new SawtoothWaveBall(x, y, note, ballSize, ballColor);
  }

  balls.push(ball);
  }