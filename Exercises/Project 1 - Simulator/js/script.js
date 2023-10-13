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
const num = 100;

function setup() {
    createCanvas(400, 400);
    for(let i = 0; i < num; i ++) {
        particles.push(createVector(random(width), random(height)));
    }
    stroke(255);
}



/**
 * Description of draw()
*/
function draw() {
    background(0)
    for(let i = 0; i < num; i ++) {
        let p = particles[i];
        point(p.x, p.y);
    }
}