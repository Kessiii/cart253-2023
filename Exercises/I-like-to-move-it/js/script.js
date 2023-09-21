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

let circle = {
    x: 0,
    y: 0,
    size: 100,
    fill: 100
}


let growAmount = 1;
let grow = true;

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
    background(10, 10, 30);
    noFill()
    stroke(255,8,0);

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
    fill(150,20,94);
    ellipse(circle.x, circle.y, circle.size);
    
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
      
      
angleMode(DEGREES);
rotate(sin(frameCount + i) * 100)

fill(mouseX,mouseY,80);
triangle(mouseX, mouseY, mouseX, mouseY + 15, mouseX + 15, mouseY + 15);


}



