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

let state = `game`; //0 for beginning, 1 for game, 2 for end
let _text;

let cols, rows;
let scl = 20;
let w = 1400;
let h = 1000;

let flying = 0;

let terrain = [];

function setup() {
  mountainSetup();

  _text = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
  _text.textFont('Helvetica');
  _text.textAlign(CENTER);
  _text.textSize(50);
  _text.fill(255);
  _text.noStroke();
  _text.text('Comic Starts Here', width * 0.5, height * 0.5);
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
  _text.clear();
  background(217);
  noStroke();
  _text.text("New Text " + Math.floor(Math.random() * 10), width/2, height/2);
  texture(_text);
  plane(window.innerWidth - 4, window.innerHeight - 4);
  pop();
}

function game() {
  mountainDraw();
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

function mountainSetup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function mountainDraw() {
  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  let locX = mouseX - width / 2;
  let locY = mouseY - height / 1.5 ;
  pointLight(255, 255, 255, locX, locY, 5);

  background(0, 0, 255);
  translate(0, 50);
  rotateX(PI / 3);

  // fill(200, 200, 200);
  translate(-w / 2, -h / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    ambientLight(35 / rows * y, 0, 0);
    ambientMaterial(255 / rows * y, 20, 200);

    endShape();
  }
}
