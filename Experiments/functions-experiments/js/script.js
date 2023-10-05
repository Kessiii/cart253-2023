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


/**
 * Description of setup
*/
let circle = {
    x:0,
    y:250,
    size:100,
    vx: 1,
    vy:0
}

function setup() {
    createCanvas(500,500);
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy; 

    if (circle.x > width) {
        circle.x = 0;
        circle.vx = circle.vx + 2;
        circle.size = circle.size + 5;
    }

    fill(255,0,0)
    ellipse(circle.x,circle.y,circle.size);
}

function mousePressed() {
    circle.x = 0;
    circle.vx = circle.vx + 2;
    circle.size + circle.size + 5;
}