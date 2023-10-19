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
const num = 15000;
const noiseScale = 0.033;
const repulsionDistance = 100; // Adjust this value to control the strength of repulsion

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < num; i++) {
        particles.push(createVector(random(width), random(height)));
    }
    stroke(255);
}

function draw() {
    background(0, 0, 0, 10);
    for (let i = 0; i < num; i++) {
        let p = particles[i];
        point(p.x, p.y);

        // Calculate the vector from the particle to the cursor
        let dirToCursor = createVector(cursorX - p.x, cursorY - p.y);
        let distanceToCursor = dirToCursor.mag();

        // Apply a repulsive force if the particle is too close to the cursor
        if (distanceToCursor < repulsionDistance) {
            let repulsion = dirToCursor.copy();
            repulsion.normalize();
            repulsion.mult(1 / (distanceToCursor + 1)); // Adjust the strength here
            p.add(repulsion);
        } else {
            // If not close to the cursor, apply Perlin noise movement
            let n = noise(p.x * noiseScale, p.y * noiseScale);
            let a = TAU * n;
            p.x += cos(a);
            p.y += sin(a);
        }

        // Wrap particles around the canvas
        p.x = (p.x + width) % width;
        p.y = (p.y + height) % height;
    }
}

function onScreen(v) {
    return v.x >= 0 && v.x >= 0 && v.y <= height;
}

function mouseMoved() {
    cursorX = mouseX;
    cursorY = mouseY;
}
