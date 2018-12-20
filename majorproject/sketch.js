// Tyndall Johnston
// Journey of the Prarie King Remake
//
//
// class Cowboy {
//   constructor(x, y, theImage) {
//     this.x = x;
//     this.y = y;
//     this.imageToDisplay = theImage;
//     this.dx = 5;
//     this.dy = 5;
//     this.w = this.width;
//     this.h = this.height;
//     this.bulletArray = [];
//     this.isUp = false;
//     this.isDown = false;
//     this.isRight = false;
//     this.isLeft = false;
//   }
//   handleKeyPress() {
//     if (key === "w" || "W") {
//       this.isUp = true;
//     }
//     if (key === "s" || "S") {
//       this.isDown = true;
//     }
//     if (key === "a" || "A") {
//       this.isLeft = true;
//     }
//     if (key === "d" || "D") {
//       this.isRight = true;
//     }
//
//     if (key === " ") {
//       //BULLETARRAY
//     }
//   }
//
//   handleKeyRelease() {
//     if (key === "w" || "W") {
//       this.isUp = false;
//     }
//     if (key === "s" || "S") {
//       this.isDown = false;
//     }
//     if (key === "a" || "A") {
//       this.isLeft = false;
//     }
//     if (key === "d" || "D") {
//       this.isRight = false;
//     }
//   }
//   update() {
//     if (this.isMovingRight) {
//       this.x += this.dx;
//     }
//     if (this.isMovingLeft) {
//       this.x -= this.dx;
//     }
//     if (this.x >= 1575){
//       this.x -= this.dx;
//     }
//     if (this.x <= 25){
//       this.x += this.dx;
//     }
//   }
//   display() {
//     imageMode(CENTER);
//     image(this.imageToDisplay, this.x, this.y + this.h / 2.2);
//   }
// }
//
//
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let cowboyPlayer;
// let cowboyPlayerIdleImg;
// // cowboyPlayerUpImg, cowboyPlayerDownImg, cowboyPlayerLeftImg, cowboyPlayerRightImg;
// function preload() {
//   cowboyPlayer = loadImage("assets/idle.png");
// }
//
// function setup() {
//   createCanvas(600, 600);
//   cowboyPlayer = new Cowboy(width / 2, height / 1.8, cowboyPlayerIdleImg);
// }
//
// function draw() {
//   background(0);
//   cowboyPlayer.update();
//   cowboyPlayer.display();
// }
// function keyPressed() {
//   cowboyPlayer.handleKeyPress();
// }
//
// function keyReleased() {
//   cowboyPlayer.handleKeyRelease();
// }













class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.imageToDisplay = theImage;
    this.dx = 5;
    this.dy = 5;
    this.w = this.imageToDisplay.width;
    this.h = this.imageToDisplay.height;
    this.isRight = false;
    this.isLeft = false;
    this.isUp = false;
    this.isDown = false;
  }

  handleKeyPress() {
    if (key === "w" || key === "W") {
      this.isUp = true;
    }
    if (key === "s" || key === "S") {
      this.isDown = true;
    }
    if (key === "a" || key === "A") {
      this.isLeft = true;
    }
    if (key === "d" || key === "D") {
      this.isRight = true;
    }

  }

  handleKeyRelease() {
    if (key === "w" || key === "W") {
      this.isUp = false;
    }
    if (key === "s" || key === "S") {
      this.isDown = false;
    }
    if (key === "a" || key === "A") {
      this.isLeft = false;
    }
    if (key === "d" || key === "D") {
      this.isRight = false;
    }
  }
  update() {
    //move
    if (this.isRight) {
      this.x += this.dx;
    }
    if (this.isLeft) {
      this.x -= this.dx;
    }
    if (this.isUp) {
      this.y -= this.dy;
    }
    if (this.isDown) {
      this.y += this.dy;
    }
  }

  display() {
    // rectMode(CENTER);
    // fill(255);
    // rect(this.x, this.y, this.w, this.h);
    imageMode(CENTER);
    image(this.imageToDisplay, this.x, this.y);
  }

}

let spaceShip;
let shipImg, asterImg;

function preload() {
  shipImg = loadImage("assets/idle.png");
  asterImg = loadImage("assets/laser.png");
}

function setup() {
  createCanvas(600, 600);
  spaceShip = new Ship(width / 2, height / 1.8, shipImg);
}

function draw() {
  background(0);
  spaceShip.update();
  spaceShip.display();
}

function keyPressed() {
  spaceShip.handleKeyPress();
}

function keyReleased() {
  spaceShip.handleKeyRelease();
}
