/**
 * Star-Crossed Lovers
 * Kestrel Villapando
 * 
 * Should you ask your lover to be your boyfriend? Even if he is working for the competition?
 */

"use strict";

/**
 * Description of preload
*/

let state = 0; //0 for beginning, 1 for game, 2 for end

function preload() {

}


/**
 * Description of setup
*/

function setup() {
    createCanvas(windowWidth, windowHeight);
  noStroke();
  textFont("Arial");
  textSize(24);
  textAlign(CENTER, CENTER);
  updateState();
}


/**
 * Description of draw()
*/
function draw() {

}

function updateState() {
    background(state === 0 ? "green" : "pink");
    fill(255);
    if (state === 0) {
      text("Insert comic here", width / 2, height / 2);
    } else if (state === 1) {
      text("Game is here", width / 2, height / 2);
    } else {
      text("End comic here", width / 2, height / 2);
    }
  }
  
  function mousePressed() {
    state = (state + 1) % 3; // Toggle between 0, 1, and 2
    updateState();
  }