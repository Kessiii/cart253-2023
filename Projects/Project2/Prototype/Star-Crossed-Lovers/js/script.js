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

let state = `title`; //0 for beginning, 1 for game, 2 for end

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
  background(state === `title` ? "green" : "pink");
  fill(255);
  if (state === `title`) {
    title();
  } else if (state === `game`) {
    game();
  } else if (state === `end`) {
    end();
  }
}

function title() {
  push();
  textSize(20);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`Comic starts here`,width/2,height/2);
  pop();
}

function game() {
  push();
  textSize(20);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`RUN FOREST RUN!!`,width/2,height/2);
  pop();
}

function end() {
  push();
  textSize(20);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`end comic is here`,width/2,height/2);
  pop();
}
  
function mousePressed() {
  if (state === `title`) {
    state = `game`;
  }
  else if (state === `game`) {
      state = `end`;
  }
  else if (state === `end`) {
    state = `title`;
  }
}
