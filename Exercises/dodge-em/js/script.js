/**
 * Dodge-Em Exercise
 * Kestrel Villapando
 * 
 * Doing the Dodge Em exercise base of the Covid19 activity done. 
 * 
 */

"use strict";

/**
 * Here I want to preload an image, putting a better visual for the Covid19 ellipse. I could not figure out how to place it in the ellipse representing the virus, I was confused with mask. 
*/

let virus;

function preload() {

    virus = loadImage('assets/images/virus.png');

}


let covid19 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    fill: {
        r: 255,
        g: 0,
        b: 0
    }
};

let user = {
    x: 250,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    acceleration: 1,
    maxSpeed: 2
}


var c1, c2;

/**
 * Setting up a Canvas
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

    c1 = color(255, 204, 0);
    c2 = color(255);
    setGradient(c1, c2);

    covid19.y = random (0,height);
    covid19.vx = covid19.speed;

    
}


/**
 * Drawing the Virus and User, I had a hard time inserting the image, it is currently active, it adds to the creative pattern alongside the other ellipses! But also if it's removed, the ellipses create a really nice 3D effect when trying to dodge the Covid19 ellipse!
*/
function draw() {

    image(virus, covid19.x, covid19.y, covid19.size);



    //Covid Mouvement
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    if (covid19.x > width) {
        covid19.x = 0;
        covid19.y = random(0,height);
    }

    //adding my new "if" statement in this next section. 
    if (covid19.x >= user.x) {
        covid19.size += 1;
    }
    else {
        covid19.size -= 1;
    }

   


    //User Mouvement, I changed it to follow mouse and using acceleration!

     if (mouseX < user.x) {
         user.ax = -user.acceleration;
     }
     else {
         user.ax = user.acceleration;
     }
    
    
     if(mouseY < user.y) {
         user.ay = -user.acceleration;
     }
     else {
         user.ay = user.acceleration;
     }
        user.vx = user.vx + user.ax;
        user.vx = constrain(user.vx,-user.maxSpeed,user.maxSpeed);
        user.vy = user.vy + user.ay;
        user.vy = constrain(user.vy,-user.maxSpeed,user.maxSpeed);
    
    
        user.x = user.x + user.vx;
        user.y = user.y + user.vy;
    

    //Check for catching Covid19
    let d = dist(user.x,user.y,covid19.x,covid19.y);
    if (d < covid19.size/2 + user.size/2) {
        noLoop();
    }

    //Displaying Covid 19 in multicolor
    fill(mouseX,mouseY);
    ellipse(covid19.x,covid19.y,covid19.size)

    //Displaying the User
    fill (0,0,255);
    ellipse(user.x,user.y,user.size);
}

/**
 * I tried a gradient, tried my best to understand, I kind of loved the result! Intense and shapes everywhere!
*/
function setGradient(c1, c2) {
    //noprotect
    noFill();
    for (var y = 0; y < height; y++) {
      var inter = map(y, 0, height, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(0, y, width, y);
    }
  }