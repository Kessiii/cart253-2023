/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let customCursor;
let pirahna;
let treasure;
let treasureX = 500;
let treasureY = 500;
let treasureSize = 90;
let state = "welcome"; //setting up the welcome screen

let lootText = "Treasure looted!";
/**
 * Description of preload
*/
function preload() {
  customCursor = loadImage('assets/images/hand.png');
  pirahna = loadImage('assets/images/pirahna.png');
  treasure = loadImage('assets/images/treasure.png');
}

//let us set up our fishes!
let school = []; //setting up an empty array
let schoolSize = 30;


/**
 * Description of setup
*/
function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);
  noCursor();

  for (let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0, width), random(0, height));
  }
}

//CreateFish(x, y)
//Creating a new Javascript Object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 80,
    vx: 0,
    vy: 0,
    speed: 15,
  };
  return fish;
}


/**
 * Moves and Display the fishes & draws the background
*/
function draw() {

  if (state === "welcome") {
    background(0, 255, 0); // Green welcome screen
    textSize(32); // Set the text size
    fill(0); // Set text color
    textAlign(CENTER,CENTER);
    text(`Welcome... You found a treasure in a lake 
    INFESTED with piranhas, try and 
    get it to gain riches!

    CLICK AND RETRIEVE`, width / 2, height / 2);
  } else if (state === "play") {
  background (0, 0, 255);

  image(treasure, treasureX, treasureY, treasureSize, treasureSize);
  image(customCursor, mouseX, mouseY, 90, 60);

  for (let i = 0; i < school.length; i++) {
      moveFish(school[i]);
      displayFish(school[i]);
    }
  } else if (state === "loot") {
    background(255, 255, 0) //this indicates the loot has been touched
    textSize(32); // Set the text size
    fill(0); // Set text color
    text(lootText, width / 2 - 100, height / 2); // Display loot text
  } else if (state === "love") {
    background(255, 0, 0); // Change the background to indicate the love state
    textSize(32); // Set the text size
    fill(255); // Set text color
    textAlign(CENTER,CENTER);
    text(`They did not even bite you...
    All they wanted was your love`, width / 2 - 100, height / 2); // Display love text
  }


//moveFish(fish)
//This chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
  let change = random(0, 1);
  if (change < 0.5) {

  // Adding lerp to gradually change the velocity
  let targetVX = random(-fish.speed, fish.speed);
  let targetVY = random(-fish.speed, fish.speed);
    fish.vx = lerp(fish.vx, targetVX, 0.2);
    fish.vy = lerp(fish.vy, targetVY, 0.2);
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
  image(pirahna, fish.x, fish.y, fish.size, fish.size);
  pop();
}

function mouseMoved() {
  if (state === "welcome") {
    state = "play"; // Change the state to "play" when clicking on the welcome screen
  } else if (state === "play") {
    // Check if the mouse click is within the treasure's area
    let d = dist(mouseX, mouseY, treasureX, treasureY);
    if (d < treasureSize / 2) {
      state = "loot"; // Change the state to "loot" when the treasure is clicked
    }

    // Check if the mouse click touches a piranha
    for (let i = 0; i < school.length; i++) {
      let dPiranha = dist(mouseX, mouseY, school[i].x, school[i].y);
      if (dPiranha < school[i].size / 2) {
        state = "love"; // Change the state to "love" when a piranha is clicked
        break; // Exit the loop after changing state
      }
    }
  } else {
    state = "play"; // Return to the "play" state from "love" or "loot" when clicking anywhere else
  }
}

function mouseClicked() {
  if (state === "welcome") {
    state = "play"; // Transition to "play" state on click
  } else if (state === "loot" || state === "love") {
    state = "welcome"; // Transition back to "welcome" from loot or love state on click
    }
  }
}