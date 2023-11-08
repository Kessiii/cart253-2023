/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
let gravityForce = 0.0025;
let balls = [];
let numBalls = 10;
let paddle;
let paddleImage; // Variable to hold the custom paddle image
let ballImage; 

function preload() {
    // Load the custom paddle image
    paddleImage = loadImage('assets/images/running.png');
    ballImage = loadImage('assets/images/meteor.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    paddle = new Paddle(paddleImage);

    for (let i = 0; i < numBalls; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let ball = new Ball(x, y);
        balls.push(ballImage);
    }
}

function draw() {
    background(0);

    paddle.move();
    paddle.display();

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        if (ball.active) {
            ball.gravity(gravityForce);
            ball.move();
            ball.bounce(paddle);
            ball.display();
        }
    }
}