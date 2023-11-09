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
let numBalls = 20;
let paddle;
let paddleImage;
let ballImage;
let gameIsOver = false;
let survivalMessage = "You survived";
let gameState = "playing";

function preload() {
    paddleImage = loadImage('assets/images/running.png');
    ballImage = loadImage('assets/images/meteor.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    paddle = new Paddle(paddleImage);

    for (let i = 0; i < numBalls; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let ball = new Ball(x, y, ballImage);
        balls.push(ball);
    }
}

function draw() {
    if (gameState === "playing") {
        background(25, 25, 112);
        paddle.move();
        paddle.display();

        for (let i = 0; i < balls.length; i++) {
            let ball = balls[i];
            if (ball.active) {
                ball.gravity(gravityForce);
                ball.move();
                if (ball.bounce(paddle)) {
                    gameState = "burned"; // Change the game state to "burned" on collision
                }
                ball.display();
            }
        }

        // Check if the paddle has reached the edge of the screen
        if (paddle.x - paddle.width / 2 <= 0 || paddle.x + paddle.width / 2 >= width) {
            gameState = "gameOver"; // Change the game state to "gameOver"
        }
    }

    // Display your end messages
    if (gameState === "gameOver") {
        background(0);
        textSize(32);
        textAlign(CENTER, CENTER);
        fill(255);
        text(survivalMessage, width / 2, height / 2);
    } else if (gameState === "burned") {
        background(255, 0, 0);
        textSize(32);
        textAlign(CENTER, CENTER);
        fill(255);
        text("You've been burned by the meteors! Or the flamming burger patties...", width / 2, height / 2);
    }
}

