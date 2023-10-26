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
let fish1;
let fish2;
let fish3;
let fish4;

/**
 * Description of setup
*/
function setup() {
  createCanvas(600, 600);

  //Time to position the fishes anywhere
  fish1 = createFish(random(0, width), random(0, height));
  fish2 = createFish(random(0, width), random(0, height));
  fish3 = createFish(random(0, width), random(0, height));
  fish4 = createFish(random(0, width), random(0, height));
}

//CreateFish(x, y)
//Creating a new Javascript Object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    targetX: x,
    targetY: y,
    ease: 0.001 
  };
  return fish;
}


/**
 * Moves and Display the fishes & draws the background
*/
function draw() {
  background (0);

  moveFish(fish1);
  moveFish(fish2);
  moveFish(fish3);
  moveFish(fish4);

  displayFish(fish1);
  displayFish(fish2);
  displayFish(fish3);
  displayFish(fish4);
}

//moveFish(fish)
//This chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
  let change = random(0, 1);
  if (change < 0.1) {
    fish.targetX = random(0, width);
    fish.targetY = random(0, height);
  }

  //Smooth movements with ease factor
  let dx = fish.targetX - fish.x;
  let dy = fish.targetY - fish.y;
  fish.x += dx * fish.ease;
  fish.y += dy * fish.ease;

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
