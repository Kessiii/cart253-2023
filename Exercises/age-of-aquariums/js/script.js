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
let state = "welcome";

let lootText = "Treasure looted!";

function preload() {
  customCursor = loadImage('assets/images/hand.png');
  pirahna = loadImage('assets/images/pirahna.png');
  treasure = loadImage('assets/images/treasure.png');
}

let school = [];
let schoolSize = 40;

function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: random(sizeRange.min, sizeRange.max), //Random initial size!
    vx: 0,
    vy: 0,
    speed: 15,
  };
  return fish;
}

let sizeRange = {
  min: 40, // Minimum size
  max: 100, // Maximum size
};

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);

  for (let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0, width), random(0, height), sizeRange);
  }
}

function draw() {
  if (state === "welcome") {
    background(0, 255, 0);
    textSize(32);
    fill(0);
    textAlign(CENTER, CENTER);
    text(`Welcome... You found a treasure in a lake 
    INFESTED with piranhas, try and 
    get it to gain riches!
    CLICK AND RETRIEVE`, width / 2, height / 2);
  } else if (state === "play") {
    background(0, 0, 255);

    image(treasure, treasureX, treasureY, treasureSize, treasureSize);
    image(customCursor, mouseX, mouseY, 90, 60);

    for (let i = 0; i < school.length; i++) {
      moveFish(school[i]);
      displayFish(school[i]);
    }
  } else if (state === "loot") {
    background(255, 255, 0);
    textSize(32);
    fill(0);
    text(lootText, width / 2 - 100, height / 2);
  } else if (state === "love") {
    background(255, 0, 0);
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text(`They did not even bite you...
    All they wanted was your love
    Now click and try again dear.`, width / 2 - 100, height / 2);
  }
}

function moveFish(fish) {
  let change = random(0, 1);
  if (change < 0.5) {
    let targetVX = random(-fish.speed, fish.speed);
    let targetVY = random(-fish.speed, fish.speed);
    fish.vx = lerp(fish.vx, targetVX, 0.2);
    fish.vy = lerp(fish.vy, targetVY, 0.2);
  }

  // Randomly change the fish's size within the specified range
  fish.size = constrain(fish.size + random(-5, 5), sizeRange.min, sizeRange.max);

  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  image(pirahna, fish.x, fish.y, fish.size, fish.size);
  pop();
}

function mouseMoved() {
 if (state === "play") {
    let d = dist(mouseX, mouseY, treasureX, treasureY);
    if (d < treasureSize / 2) {
      state = "loot";
    }

    for (let i = 0; i < school.length; i++) {
      let dPiranha = dist(mouseX, mouseY, school[i].x, school[i].y);
      if (dPiranha < school[i].size / 2) {
        state = "love";
        break;
      }
    }
  }
}

function mousePressed() {
  if (state === "welcome") {
    state = "play";
  } else if (state === "loot" || state === "love") {
    state = "welcome";
  }
}
