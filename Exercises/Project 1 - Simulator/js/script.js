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
const num = 10000;
const noiseScale = 0.033;
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

let cursorX, cursorY;

function draw() {
    if (followCursor) {
        cursorX = mouseX; // Store the curent X position of the cursor
        cursorY = mouseY; // Sotre the current Y position of the cursor
    }
    
    background(169, 144, 117, 10);

    //if (colorInverted) {
        //background(169, 144, 117, 10); //inverted background color
        //stroke(255);
    //} else {
        //background(bgColor); //Original background color
        //stroke(strokeColor); //Original stroke color
    //}


    for(let i = 0; i < num; i ++) {
        let p = particles[i];
        point(p.x, p.y);

        if (followCursor) {
            let n = noise((p.x + cursorX) * noiseScale, (p.y + cursorY) * noiseScale);
            let a = TAU * n;
            p.x += cos(a);
            p.y += sin(a);
        }

        if(!onScreen(p)) {
            p.x = random(width);
            p.y = random(height);
        }
    }
    
}

//function mouseReleased() {
    //noiseSeed(millis());
//}

function onScreen(v) {
    return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

function mousePressed() {
    //Toggle the color inversion state when the mouse is clicked
    followCursor = true;
}

function mouseReleased() {
    followCursor = false;
}