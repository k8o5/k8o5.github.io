let ball;
let player1, player2;
let playerSize = 50;
let goalSize = 100;

function setup() {
    createCanvas(800, 400);
    ball = new Ball();
    player1 = new Player(50, height / 2, 'Q', 'A');
    player2 = new Player(width - 50, height / 2, 'P', 'L');
}

function draw() {
    background(51);
    
    // Zeichne Mittellinie
    stroke(255);
    line(width/2, 0, width/2, height);
    
    // Zeichne Tore
    noFill();
    rect(0, height/2 - goalSize/2, 20, goalSize);
    rect(width - 20, height/2 - goalSize/2, 20, goalSize);
    
    ball.update();
    ball.show();
    
    player1.update();
    player1.show();
    player2.update();
    player2.show();
    
    // Kollisionslogik
    ball.checkCollision(player1);
    ball.checkCollision(player2);
}

class Ball {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.vel = createVector(random(-5, 5), random(-5, 5));
        this.r = 10;
    }

    update() {
        this.pos.add(this.vel);
        
        // Ball prallt von den Seiten ab
        if (this.pos.y < this.r || this.pos.y > height - this.r) {
            this.vel.y = -this.vel.y;
        }
        
        // Torlogik
        if (this.pos.x < 0) {
            console.log("Player 2 scores!");
            this.reset();
        } else if (this.pos.x > width) {
            console.log("Player 1 scores!");
            this.reset();
        }
    }

    show() {
        fill(255);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }

    checkCollision(player) {
        if (dist(this.pos.x, this.pos.y, player.pos.x, player.pos.y) < this.r + playerSize/2) {
            let angle = atan2(this.pos.y - player.pos.y, this.pos.x - player.pos.x);
            this.vel.x = 5 * cos(angle);
            this.vel.y = 5 * sin(angle);
        }
    }

    reset() {
        this.pos = createVector(width / 2, height / 2);
        this.vel = createVector(random(-5, 5), random(-5, 5));
    }
}

class Player {
    constructor(x, y, upKey, downKey) {
        this.pos = createVector(x, y);
        this.upKey = upKey;
        this.downKey = downKey;
    }

    update() {
        if (keyIsDown(this.upKey.charCodeAt(0))) {
            this.pos.y -= 5;
        }
        if (keyIsDown(this.downKey.charCodeAt(0))) {
            this.pos.y += 5;
        }
        this.pos.y = constrain(this.pos.y, playerSize/2, height - playerSize/2);
    }

    show() {
        fill(0, 255, 0);
        noStroke();
        ellipse(this.pos.x, this.pos.y, playerSize);
    }
}