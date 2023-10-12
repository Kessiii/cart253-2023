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
let p = [];
const num = 100;

function setup() {
    createCanvas(400, 400);
    for(let i = 0; i < num; i ++) {
        p.push(createVector(random(width), random(height)));
    }
}


/**
 * Description of draw()
*/
function draw() {
    background(0)
}