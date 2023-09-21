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


let bgCanvas = 600
let circle = {
    x: 0,
    y: 250,
    size: 100,
    speed: 1,
    fill: 255
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(bgCanvas,bgCanvas);
}


/**
 * Description of draw()
*/
function draw() {
    background(230,28,58);


    circle.x = circle.x + circle.speed;
    circle.x = constrain(circle.x, 0, width);
    //circle.x = map(mouseX, 0, width, 100, 200);
    if (circle.x > width);
   
    circle.size = map(mouseY,height, 0, 50, 500);
    circle.fill = map(mouseX, 0,width,0,255);
    fill(circle.fill);
    ellipse(circle.x, circle.y, circle.size);

}