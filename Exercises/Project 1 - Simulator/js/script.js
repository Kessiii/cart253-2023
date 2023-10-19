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
let followCursor = false;
var song;

function setup() {
    createCanvas(windowWidth, windowHeight);
    song = loadSound("Nascence.mp3", loaded);
    stroke(255);
    resetParticles();
}

function loaded() {
    song.play();
}

function resetParticles() {
    particles = []; //Clear the current particles
    for(let i = 0; i < num; i ++) {
        particles.push(createVector(random(width), random(height)));
    }
}

/**
 * Description of draw()
*/

//let cursorX, cursorY;

function draw() {
    //cursorX = mouseX; // Store the curent X position of the cursor
    //cursorY = mouseY; // Sotre the current Y position of the cursor

    background(169, 144, 117, 10);

    for(let i = 0; i < num; i ++) {
        let p = particles[i];

        if (followCursor) {
            let targetX = mouseX + random(-5, 5);
            let targetY = mouseY + random(-5, 5);
            p.x = lerp(p.x, targetX, 0.1);
            p.y = lerp(p.y, targetY, 0.1);
        } else {
            let n = noise(p.x * noiseScale, p.y * noiseScale);
            let a = TAU * n;
            p.x += cos(a);
            p.y += sin(a);
        }

        //Wrap particles around the canvas
        p.x = (p.x + width) % width;
        p.y = (p.y + height) % height;

        ellipse(p.x, p.y, 1, 1);

        //point(p.x, p.y);
        //let n = noise((p.x + cursorX) * noiseScale, (p.y + cursorY) * noiseScale);
        //let a = TAU * n;
        //p.x += cos(a);
        //p.y += sin(a);
        //if(!onScreen(p)) {
            //p.x = random(width);
            //p.y = random(height);
       // }
    }
    
}

//function mouseReleased() {
    //noiseSeed(millis());
//}

//function onScreen(v) {
    //return v.x >= 0 && v.x >= 0 && v.y<= height;
//}

function mousePressed() {
    followCursor = !followCursor;
    if (!followCursor) {
        resetParticles();
    }
}