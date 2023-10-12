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

let p = [];
const num = 100;

function setup() {
    createCanvas(400,400);
    for(let i = 0; i < num; i ++) {
        particles.push(createVector(random(width), random(height)))
    }
    stroke(255);
}


/**
 * Description of draw()
*/
function draw() {
    background(0);
    for(let i = 0; i < num; i ++) {
        let p = particles[i];
        point(p.x, p.y)
    }
}