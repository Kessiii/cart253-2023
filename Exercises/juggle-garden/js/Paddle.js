class Paddle {
    constructor(w,h) {
        this.width = w;
        this.height = h;
        this.x = width / 2;  // Start the paddle in the center of the canvas
        this.y = height - this.height /2;
        this.speed = 5;  // Adjust the speed as needed
    }    

    move() {
        if (keyIsDown(65)) {  // Check if 'A' key is pressed (ASCII code for 'A' is 65)
            this.x -= this.speed;
        }
        if (keyIsDown(68)) {  // Check if 'D' key is pressed (ASCII code for 'D' is 68)
            this.x += this.speed;
        }

        // Limit the paddle's x position to stay within the canvas width
        this.x = constrain(this.x, this.width / 2, width - this.width / 2);
    }
    

    display() {
        push();
        fill(255);
        noStroke();
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        pop();
    }
}