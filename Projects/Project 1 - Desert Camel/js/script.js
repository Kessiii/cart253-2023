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
var song;

function preload() {
    cursorImage = loadImage('assets/images/cute-camel.png'); //loading my image
    song = loadSound("Nascence.mp3");
}


/**
 * Description of setup
*/
let state = `title`; //setting up the welcome screen

let particles = [];
const num = 15000;
let noiseScale = 0.003;
const targetNoiseScale = 0.0045;
const noiseChangeRate = 0.004;
const repulsionRadius = 45

let followCursor = false

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(169, 144, 117, 10);
    for (let i = 0; i < num; i++) {
        particles.push(createVector(random(width), random(height)));
    }
    noStroke();
    noCursor();
    song.play();
    song.onended(songEnded); // Call songEnded function when the song ends
}

function draw() {
    background(169, 144, 117, 10);

    if (state === `title`) {
        title();
    }
    else if (state ===`simulation`) {
        simulation();
    }
    else if (state === "finished" && !song.isPlaying()) {
        finished();
        }
}


function simulation() {
    image(cursorImage, mouseX, mouseY, 90, 90);

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


}

function songEnded() {
    state = "finished";
}

function title() {
    push();
    textSize(35);
    fill(0);
    textAlign(CENTER,CENTER);
    text(`You are the One Heavenly Camel. 
    You descend to this plane, 
    bringing with you the continuous flow of the four winds. 
    Move and the winds will move with you. 
    Move until the end of your wind's song!
    Click and Enter...`,width/2,height/2);
    pop();
}

function finished() {
    push();
    textSize(35);
    fill(0);
    textAlign(CENTER,CENTER);
    text(`Till next time Camel...
    Till next time...`,width/2,height/2);
    pop();
}

function mousePressed() {
    if (state === "title") {
      state = "simulation";
    } else if (state === "finished") {
      state = "title";
      song.play(); // Start playing the song again
    }

    followCursor = !followCursor;
    if (!followCursor) {
        targetNoiseScale = 0.08;
    } else {
        targetNoiseScale = 0.01;
    }
}
