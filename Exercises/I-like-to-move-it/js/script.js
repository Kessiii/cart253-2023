/**
 * I Like to Move It
 * Kestrel Villapando
 * 
 * 
 * This is my try or exploring things we have not seen, it made me a bit more confused but it was fun learning!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}

let circle = {
    x: 0,
    y: 0,
    size: 100,
    fill: 100
}



var col = 0;

let growAmount = 1;
let grow = true;

let leftWall = 55;
let rightWall = 485;

/**
 * Description of setup
*/
function setup() {
    createCanvas (windowWidth, windowHeight);

    angleMode (DEGREES);
    rectMode(CENTER);

}


/**
 * Description of draw()
*/
function draw() {

    //Making the background reactive!
    background(col);
    col = map(mouseX, 0, windowWidth, 0, 255)
    noFill()
    stroke(255,8,0);

    //This is to include the third shape. I also want it to move with the mouse. 
    line(mouseX, mouseY, mouseX, 85);
    

    //This is me trying to understand and create a animation that is waveform like. 
    translate(width / 2, height / 2);

    for (var i= 0; i<200; i++) {
        push()

        rotate(sin(frameCount + i) * 100)

        rect(0, 0, 600 - i *3, 600 - i *3, 200 - i)

        pop()
    }

    //this was my try to get the circle to grow and shrink without the mouse. 
    rectMode(CENTER);
    translate(p5.Vector.fromAngle(millis() / 1000, 40));
    fill(mouseX, mouseY, 94);
    ellipse(circle.x, circle.y, circle.size);
    circle.x = constrain(mouseX, leftWall, rightWall);
  

    if (circle.size > 200) {
        grow = false
      }
      if (circle.size < 0) {
        grow = true
      }
      
      if (grow == true) {
        circle.size += growAmount
      } else {
        circle.size -= growAmount
      }
      
      






}



