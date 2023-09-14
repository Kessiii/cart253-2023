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


/**
 * Description of setup
*/
function setup() {
    createCanvas(640,480)
    angleMode(DEGREES);
}


/**
 * Description of draw()
*/
function draw() {
    background(255,100,100);
    //DRAWING THE BODY
    noStroke();
    fill(0,255,mouseY);
    ellipse(320,480,300,330);

  

    //DRAWING THE HEAD
    fill(0,240,20);
    ellipse(320,240,200,200);

    //DRAWING THE EYES
    fill(0,mouseX,mouseY);
    rect(260,175,20,70,20);
    fill(0,mouseX,mouseY);
    ellipse(350,210,70,70);
    fill(0,240,20);
    ellipse(350,210,50,50);

    //DRAWING THE MOUTH
    fill(0,0,0)
    arc(320, 265, 120, 120, 0, 180, OPEN);

    fill(255,255,255);
    arc(290, 265, 30, 30, 0, 180, OPEN);

    fill(255,255,255);
    arc(350, 265, 30, 30, 0, 180, OPEN);

    //DRAWING THE EARS
    stroke(0);
    strokeWeight(1);
    fill(0,240,20);
    ellipse(320,80,mouseX,90);

    fill(0,mouseX,20);
    rect(310,90,20,70,20);

    //DRAWING SMALL SPACESHIP
    fill(80,80,80);
    arc(110, 245, 90, 90, 0, 180, OPEN);

    fill(80,80,80);
    ellipse(110,240,130,50);

    fill(45,10,205);
    arc(110, 240, 90, 90, 180, 0, OPEN);

    fill(255,0,0);
    arc(90, 270, 10, 10, 0, 180, OPEN);

    fill(0,255,0);
    arc(110, 270, 10, 10, 0, 180, OPEN);

    fill(0,0,255);
    arc(130, 270, 10, 10, 0, 180, OPEN);

}
