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

function setup() {
    createCanvas(1000, 800);
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
    cursorX = mouseX; // Store the curent X position of the cursor
    cursorY = mouseY; // Sotre the current Y position of the cursor

    background(169, 144, 117, 10);
    for(let i = 0; i < num; i ++) {
        let p = particles[i];
        point(p.x, p.y);
        let n = noise((p.x + cursorX) * noiseScale, (p.y + cursorY) * noiseScale);
        let a = TAU * n;
        p.x += cos(a);
        p.y += sin(a);
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
    return v.x >= 0 && v.x >= 0 && v.y<= height;
}