// Tyndall Johnston
// Journey of the Prarie King Remake
//
class Cowboy {
  constructor(x, y, idleImage, upImage, downImage, leftImage, rightImage) {
    this.x = x;
    this.y = y;
    this.idleimageToDisplay = idleImage;
    this.upimageToDisplay = upImage;
    this.downimageToDisplay = downImage;
    this.leftimageToDisplay = leftImage;
    this.rightimageToDisplay = rightImage;
    this.dx = 5;
    this.dy = 5;
    this.w = this.idleimageToDisplay.width;
    this.h = this.idleimageToDisplay.height;
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
    if (this.x >= 575){
      this.x -= this.dx;
    }
    if (this.x <= 25){
      this.x += this.dx;
    }
    if (this.y >= 575){
      this.y -= this.dy;
    }
    if (this.y <= 25){
      this.y += this.dy;
    }

  }

  display() {
    // rectMode(CENTER);
    // fill(255);
    // rect(this.x, this.y, this.w, this.h);
    imageMode(CENTER);
    image(this.idleimageToDisplay, this.x, this.y);

    if (this.isRight) {
      image(this.rightimageToDisplay, this.x, this.y);
    }
    if (this.isLeft) {
      image(this.leftimageToDisplay, this.x, this.y);
    }
    if (this.isUp) {
      image(this.upimageToDisplay, this.x, this.y);
    }
    if (this.isDown) {
      image(this.downimageToDisplay, this.x, this.y);
    }
  }
}

let map1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 3],
  [3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 3],
  [3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 3],
  [3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 3],
  [3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 3],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
//Map Images and Variables
let cellSize;
let rows = 25;
let cols = 25;
let wallImg, midgrndImg, etrgrndImg, otrgrndImg;

//Character Images and Variables
let cowboyChar;
let bulletImg;
let idleImg, upImg, downImg, leftImg, rightImg;

function preload() {
  wallImg = loadImage("assets/mapborder.png");
  midgrndImg = loadImage("assets/middleground.png");
  etrgrndImg = loadImage("assets/enterground.png");
  otrgrndImg = loadImage("assets/outerground.png");

  idleImg = loadImage("assets/heroidle.png");
  upImg = loadImage("assets/heroup.png");
  downImg = loadImage("assets/herodown.png");
  leftImg = loadImage("assets/heroleft.png");
  rightImg = loadImage("assets/heroright.png");

  bulletImg = loadImage("assets/bullet.png");
}

function setup() {
  createCanvas(600, 600);
  cowboyChar = new Cowboy(width / 2, height / 1.8, idleImg, upImg, downImg, leftImg, rightImg, bulletImg);
  cellSize = 24;
}

function draw() {
  background(40,80,60);
  imageMode(CORNER);
  drawMap();
  cowboyChar.update();
  cowboyChar.display();
}

function keyPressed() {
  cowboyChar.handleKeyPress();
}

function keyReleased() {
  cowboyChar.handleKeyRelease();
}

function drawMap() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // Converting level Characters to images
      if (map1[j][i] === 1) {
        image(wallImg, i * cellSize, j * cellSize, cellSize, cellSize);
      }
      else if (map1[j][i] === 2) {
        image(midgrndImg, i * cellSize, j * cellSize, cellSize, cellSize);
      }
      else if (map1[j][i] === 3) {
        image(etrgrndImg, i * cellSize, j * cellSize, cellSize, cellSize);
      }
      else if (map1[j][i] === 4) {
        image(otrgrndImg, i * cellSize, j * cellSize, cellSize, cellSize);
      }
    }
  }
}
