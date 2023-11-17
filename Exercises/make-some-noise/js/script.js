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
// Array to hold ball objects


// Ball object constructor
function Ball(x, y, note) {
 this.x = x;
 this.y = y;
 this.note = note;
 this.radius = 20;
 this.color = color(random(255), random(255), random(255));

 // Move the ball
 this.move = function() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
 };

 // Check if the ball bounces off the walls
 this.bounce = function() {
    if (this.x > width - this.radius || this.x < this.radius) {
      this.x += random(-5, 5);
    }
    if (this.y > height - this.radius || this.y < this.radius) {
      this.y += random(-5, 5);
    }
 };

 // Display the ball
 this.display = function() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
 };
}

// Notes array
let notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

function setup() {
 createCanvas(800, 600);
 userStartAudio();
}

function draw() {
 background(0);

 // Iterate over each ball and perform the following actions:
 // move the ball, bounce the ball off the walls, and display the ball.
 for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].bounce();
    balls[i].display();
 }
}

function mousePressed() {
 // Create a new ball with random properties
 let note = random(notes);
 let ball = new Ball(mouseX, mouseY, note);

 // Add the new ball to the balls array
 balls.push(ball);
}