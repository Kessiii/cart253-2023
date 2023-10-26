/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";


/**
 * Description of preload
*/
function preload() {

}

//let us set up our fishes!
let school = []; //setting up an empty array
let schoolSize = 4;

/**
 * Description of setup
*/
function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0, width), random(0, height));
    school.push(fish);
  }
}

//CreateFish(x, y)
//Creating a new Javascript Object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
  };
  return fish;
}


/**
 * Moves and Display the fishes & draws the background
*/
function draw() {
  background (0);

  for (let i = 0; i < school.lenght; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
  }
}

//moveFish(fish)
//This chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
  let change = random(0, 1);
  if (change < 0.5) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  //Smooth movements with ease factor
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy; 

  //Constrain the fish to the Canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

//displayFish(fish)
//Displays the provided fish on the canvas
function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

function mousePressed() {
  let fish = createFish(mouseX, mouseY);
  school.push(fish);
}
