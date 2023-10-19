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
const noiseScale = 0.005;
let followCursor = false; //added a boolean to control particle movement
let titleScreen = true;
let enterButton;

//let bgColor;
//let strokeColor;
//let colorInverted = false; // added boolean for color inversion

function setup() {
    createCanvas(windowWidth, windowHeight);
    //bgColor = color(255); //Initial background color
    //strokeColor = color(169, 144, 117); // Initial stroke color

    noStroke();
    resetParticles();

    //Creating the "Enter" button
    enterButton = createButton('Enter');
    enterButton.position(width / 2 - 40, height / 2);
    enterButton.mousePressed(enterFlowField);
    enterButton.style('background-color', 'brown');
    enterButton.mousePressed(enterFlowField)
}

function resetParticles() {
    particles = []
    for(let i = 0; i < num; i ++) {
        particles.push(createVector(random(width), random(height)));
    }
}




/**
 * Description of draw()
*/

//let cursorX, cursorY;

function draw() {
    if (titleScreen) {
        background(169, 144, 117, 10);
    } else {

        followCursor = !followCursor;
        for(let i = 0; i < num; i ++) {
            let p = particles[i];

            if (followCursor) {
                let targetX = mouseX + random(-10, 10);
                let targetY = mouseY + random(-10, 10);
                p.x = lerp(p.x, targetX, 0.1);
                p.y = lerp(p.y, targetY, 0.1);
            } else {
                let n = noise(p.x * noiseScale, p.y * noiseScale);
                let a = TAU * n;
                p.x += cos(a);
                p.y += sin(a);
            }

            p.x = (p.x + width) % width;
            p.y = (p.y + height) % height;
    
            fill(255, 100)
            ellipse(p.x, p.y, 5, 5);
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
    
//}

//function mouseReleased() {
    //noiseSeed(millis());
//}

//function onScreen(v) {
    //return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
//}

function enterFlowField() {
    titleScreen = false;
    followCursor = true;
    enterButton.remove();
}

function mousePressed() {

    if (!titleScreen) {
        followCursor = !followCursor;
    }
   

    if(!followCursor) {
        resetParticles();
    }
}
