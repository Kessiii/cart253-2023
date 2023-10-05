/**
 * Looking for Love
 * Kestrel Villapando
 * 
 * Following Pipin's lead and following along to complete the activity. 
 */

/**
 * Description of setup
*/

let circle1 = {
    x: 150,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3
};

let circle2 = {
    x: 350,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3
};


let state = `title`; // Can be: title, simulation, love, sadness

function setup() {
    createCanvas(500,500);

    setupCircles();
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    if (state === `title`) {
        title();
    }
    else if (state ===`simulation`) {
        simulation();
    }
    else if (state=== `love`) {

    }
    else if (state === `sadness`) {

    }

}

function title() {
    textSize(64);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text(`LOVE?`,width/2,height/2);

}

function simulation() {
   
    move();
    checkOffscreen();
    checkOverlap();
    display();

}


function move() {
    //Move the circles
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;

}

function checkOffscreen() {

     //Check if the circles have gone offscreen
     if(circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height) {
        //SAD ending
    }
}

function checkOverlap() {

       //Check if the circles overlap
       let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
       if(d < circle1.size/2 + circle2.size/2) {
           //LOVE ENDING
       }
}

function display() {
      //Diplaying the Circles
      ellipse(circle1.x,circle1.y,circle1.size);
      ellipse(circle2.x,circle2.y,circle2.size);
}

function setupCircles() {

    //Postion circles seperated from one another
    circle1.x = width/3;
    circle2.x = 2 * width / 3;

    //Start circles moving ina random direction
    circle1.vx = random(-circle1.speed,circle1.speed);
    circle1.vy = random(-circle1.speed,circle1.speed);
    circle2.vx = random(-circle2.speed,circle2.speed);
    circle2.vy = random(-circle2.speed,circle2.speed);
}

function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
}