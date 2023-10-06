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


let state = `title`; // Can be: title, simulation, caught, escaped

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
    else if (state === `caught`) {
        caught();
    }
    else if (state === `escaped`) {
        escaped();
    }

}

function title() {
    push();
    textSize(15);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text(`YOU ARE A FAMOUS YOUTUBER, ESCAPE THE CRAZY FAN!
    Cross to the other side!`,width/2,height/2);
    pop();
}

function simulation() {
   
    move();
    checkOffscreen();
    checkOverlap();
    display();

}

function caught() {
    push();
    textSize(64);
    fill(150,150,255);
    textAlign(CENTER,CENTER);
    text(`GOTCHA!hehe`,width/2,height/2);
    pop();
}

function escaped() {
    push();
    textSize(20);
    fill(255,150,150);
    textAlign(CENTER,CENTER);
    text(`RUN FOREST RUN!!`,width/2,height/2);
    pop();
}


function move() {
    //Move the circles
    circle1.x = mouseX;
    circle1.y = mouseY;

    perlin()

}

function checkOffscreen() {

     //Check if the circles have gone offscreen
     if(circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height) {
        state = `escaped`;
    }
}

function checkOverlap() {

       //Check if the circles overlap
       let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
       if(d < circle1.size/2 + circle2.size/2) {
          state = `caught`;
       }
}

var xoff = 0;

//Added one extra function for perlin
function perlin() {
    var x = map(noise(xoff), 0, 1, 0, width);

    ellipse(x,circle2.y,circle2.size);

    xoff += 0.1;
}

function display() {
      //Diplaying the Circles

      ellipse(circle1.x,circle1.y,circle1.size);
}

function setupCircles() {

    //Postion circles seperated from one another
    circle1.x = width/3;
    circle2.x = 2 * width / 3;

    //Start circles moving ina random direction
    circle2.vx = random(-circle2.speed,circle2.speed);
    circle2.vy = random(-circle2.speed,circle2.speed);
}

function ponder() {
    push();
    textSize(20);
    fill(255,150,150);
    textAlign(CENTER,CENTER);
    text(`Or... should you turn back and give it a shot <3? (I suggest not...)`,width/2,height/2);
    pop();
}

function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
}

function keyPressed() {
    if (state === `escaped`) {
        state === `ponder`;
    }
}