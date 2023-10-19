/**
 * Desert Winds
 * Kestrel Villapando
 * 
 * This is my simulator of a bird's eye view of a desert using Flow Fields. It has somewhat of a abstract look.
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
let particles = [];
const num = 1000;
const noiseScale = 0.003;
let followCursor = false; //added a boolean to control particle movement

//let bgColor;
//let strokeColor;
//let colorInverted = false; // added boolean for color inversion

function setup() {
    createCanvas(windowWidth, windowHeight);
    //bgColor = color(255); //Initial background color
    //strokeColor = color(169, 144, 117); // Initial stroke color

    for(let i = 0; i < num; i ++) {
        particles.push(createVector(random(width), random(height)));
    }
    stroke(255);
}



/**
 * Description of draw()
*/

//let cursorX, cursorY;

function draw() {
    if (followCursor) {
        background(169, 144, 117, 10);
        for(let i = 0; i < num; i ++) {
            let p = particles[i];
            point(p.x, p.y);
    
           let angle = atan2(mouseY - p.y, mouseX - p.x);
           let distance = dist(p.x, p.y, mouseX, mouseY);
    
           p.x += cos(angle) * distance * 0.01;
           p.y += sin(angle) * distance * 0.01;
    
           if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
            p.x = random(width);
            p.y = random(height);
           }
        }

    }
    

    //if (colorInverted) {
        //background(169, 144, 117, 10); //inverted background color
        //stroke(255);
    //} else {
        //background(bgColor); //Original background color
        //stroke(strokeColor); //Original stroke color
    //}
    
}

//function mouseReleased() {
    //noiseSeed(millis());
//}

//function onScreen(v) {
    //return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
//}

function mousePressed() {
    //Toggle the color inversion state when the mouse is clicked
    followCursor = true;
}

function mouseReleased() {
    followCursor = false;
}