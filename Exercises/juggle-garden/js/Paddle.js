class Paddle {
    constructor(img) {
        this.width = 60;
        this.height = 80;
        this.x = width / 2; // Start the paddle in the center of the canvas
        this.y = height - this.height / 2;
        this.speed = 8; // Adjust the speed as needed
        this.image = img; // Assign the paddle image
    }

    move() {
        if (keyIsDown(65)) { // Check if 'A' key is pressed
            this.x -= this.speed;
        }
        if (keyIsDown(68)) { // Check if 'D' key is pressed
            this.x += this.speed;
        }

        // Limit the paddle's x position to stay within the canvas width
        this.x = constrain(this.x, this.width / 2, width - this.width / 2);
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height); // Display the image
    }
}
