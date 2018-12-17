// Tyndall Johnston
// Journey of the Prarie King Remake
//
//
class Cowboy {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.imageToDisplay = theImage;
    this.dx = 5;
    this.dy = 5;
    this.w = this.width;
    this.h = this.height;
    this.bulletArray = [];
    this.isUp = false;
    this.isDown = false;
    this.isRight = false;
    this.isLeft = false;
  }
  handleKeyPress() {
    if (key === "w" || "W") {
      this.isUp = true;
    }
    if (key === "s" || "S") {
      this.isDown = true;
    }
    if (key === "a" || "A") {
      this.isLeft = true;
    }
    if (key === "d" || "D") {
      this.isRight = true;
    }

    if (key === " ") {
      //BULLETARRAY
    }
  }

  handleKeyRelease() {
    if (key === "w" || "W") {
      this.isUp = false;
    }
    if (key === "s" || "S") {
      this.isDown = false;
    }
    if (key === "a" || "A") {
      this.isLeft = false;
    }
    if (key === "d" || "D") {
      this.isRight = false;
    }
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

}
