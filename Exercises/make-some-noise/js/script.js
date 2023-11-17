/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

// The balls
// Set up variables for tracking which ball is being dragged
let dragging = false;
let ballBeingDragged;
let balls = []

function setup() {
 createCanvas(600,600);

 userStartAudio();
}

function draw() {
 background(0);

 for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
 }
}

function mousePressed() {
 // Check if a ball is being clicked
 for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    let d = dist(mouseX, mouseY, ball.x, ball.y);
    if (d < ball.r) {
      dragging = true;
      ballBeingDragged = ball;
      break;
    }
 }
}

function mouseDragged() {
 if (dragging) {
    ballBeingDragged.x = mouseX;
    ballBeingDragged.y = mouseY;
    
    // Change the sound based on the mouseY position
    let newNoteIndex = constrain(floor(map(mouseY, 0, height, 0, notes.length-1)), 0, notes.length-1);
    ballBeingDragged.note = notes[newNoteIndex];
 }
}

function mouseReleased() {
 dragging = false;
}

function createBall(x,y) {
 let note = random(notes);
 let ball = new Ball(x,y,note);
 balls.push(ball);
}