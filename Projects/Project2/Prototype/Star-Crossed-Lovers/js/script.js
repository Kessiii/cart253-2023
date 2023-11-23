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

let state = `title`; // 

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
  background(0);

  if (state === `title`) {
      title();
  }
  else if (state ===`simulation`) {
      simulation();
  }
  else if (state === `caught`) {
      caught();
  }
}

  function game() {

  }