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
function preload() {

}

let paddle;

/**
 * Description of setup
*/
function setup() {

    createCanvas(windowWidth, windowHeight);
    paddle = new Paddle(300,20);
    
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    paddle.move();
    paddle.display();
    
}