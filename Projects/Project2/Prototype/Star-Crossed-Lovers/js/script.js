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


function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0);

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
  mountains();
  mountainSetup();
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

var close, rows;
var scl = 20;
var w = 1400;
var h = 1000;



function mountainSetup() {

}

function mountains() {
  background(0);

  for (var x = 0; x < close; x++) {
    for (var y = 0 ; y < rows; y++) {
      

    }
  }
  
}
