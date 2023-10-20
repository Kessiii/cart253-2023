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

let cursorImage; //Declaring a variable to store the image

function preload() {
    cursorImage = loadImage('assets/images/cute-camel.png'); //loading my image
}


/**
 * Description of setup
*/
let particles = [];
const num = 15000;
let noiseScale = 0.003;
const targetNoiseScale = 0.0045;
const noiseChangeRate = 0.004;
const repulsionRadius = 40

let followCursor = false

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(169, 144, 117, 10);
    for (let i = 0; i < num; i++) {
        particles.push(createVector(random(width), random(height)));
    }
    noStroke();
    noCursor();
    
}

function draw() {
    background(169, 144, 117, 10);
    for (let i = 0; i < num; i++) {
        let p = particles[i];

       
            let dx = p.x - mouseX;
            let dy = p.y - mouseY;
            let distance = sqrt(dx * dx + dy * dy);
            if (distance < repulsionRadius) {
                let angle = atan2(dy, dx);
                let repulsion = map(distance, 0, repulsionRadius, 10, 10); // Adjust the repulsion strength
                p.x += cos(angle) * repulsion;
                p.y += sin(angle) * repulsion;
        }

              // Wrap particles around the canvas
              p.x = (p.x + width) % width;
              p.y = (p.y + height) % height;
              if (p.x < 0) {
                p.x = width;
                p.y = random(0, height);
              }
              if (p.y > height) {
                p.y = 0
                p.x = random(0, width);
              }
              if (p.y < 0) {
                p.y = height
                p.x = random(0, width);
              }

    
            let n = noise(p.x * noiseScale, p.y * noiseScale);
            let a = TAU * n;
            p.x += cos(a);
            p.y += sin(a);
  
            ellipse(p.x, p.y, 2, 2);
    }
    image(cursorImage, mouseX, mouseY, 70, 70);

}


function mousePressed() {
    followCursor = !followCursor;
    if (!followCursor) {
        targetNoiseScale = 0.08;
    } else {
        targetNoiseScale = 0.01;
    }
}
