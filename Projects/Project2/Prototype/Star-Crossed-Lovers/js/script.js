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

var flying = 0;

var terrain = [];

function mountainSetup() {
  createCanvas(900, 900, WEBGL);
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specifiying a default for now
    }
  }
}

function mountains() {
  background(0);

  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      off += 0.2;
    }
    yoff += 0.2;
  }
  
  background(0);
  translate(0, 50);
  rotateX(PI / 3);
  fill(200,200,200, 150);
  translate(-w / 2, -h / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y* scl, terrain[x][y]);
      vertex(x * scl, (y + 1)* scl,terrain[x][y + 1]);
    }
    endShape()
  }
}
