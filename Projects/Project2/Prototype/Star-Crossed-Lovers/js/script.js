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



function preload() {

}


/**
 * Description of setup
*/

function setup() {
    createCanvas(windowWidth, windowHeight);
}


/**
 * Description of draw()
*/
function draw() {

}

function updateState() {
    background(0);
    fill(255);
    if (state === `start`) {
      title();
  }
  else if (state ===`game`) {
      simulation();
  }
  else if (state === `caught`) {
      caught();
  }
  }
  
  function mousePressed() {
    state = (state + 1) % 3; // Toggle between 0, 1, and 2
    updateState();
  }

  function game() {

  }