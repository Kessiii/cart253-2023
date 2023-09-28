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

let circle = {
    x: 250,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    acceleration: 0.1,
    maxSpeed: 10
}

/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);

}


/**
 * Description of draw()
*/
function draw() {
   background(0);

   if (mouseX < circle.x) {
    circle.ax = -circle.acceleration;
}
else {
    circle.ax = circle.acceleration;
}

if(mouseY < circle.y) {
    circle.ay = -circle.acceleration;
}
else {
    circle.ay = circle.acceleration;
}
    circle.vx = circle.vx + circle.ax;
    circle.vx = constrain(circle.vx,-circle.maxSpeed,circle.maxSpeed);
    circle.vy = circle.vy + circle.ay;
    circle.vy = constrain(circle.vy,-circle.maxSpeed,circle.maxSpeed);


    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;

    ellipse(circle.x,circle.y,circle.size);
}


function mousePressed() {
}