// Tyndall Johnston
// Journey of the Prarie King Remake
//

class Shot {
  constructor(x, y, dx, dy, theImage) {
    this.x = x;
    this.y = y;
    this.tempx = dx;
    this.tempy = dy;
    this.size = 7;
    this.checkScreen = false;
    this.checkShot = false;
    this.imageToDisplay = theImage;
    this.w = this.imageToDisplay.width;
    this.h = this.imageToDisplay.height;
  }

  update() {
    this.x += this.tempx;
    this.y += this.tempy;

    checkForShot = collideRectRect(this.x, this.y, this.radius, this.radius, enemyChar.x, enemyChar.y, enemyChar.w, enemyChar.h);
    console.log(checkForShot,"bullet-enemy detect");
    if (this.x >= width + this.size - 125 || this.x <= 0 - this.size || this.y >= height + this.size || this.y <= 0 - this.size) {
      this.checkScreen = true;
    }
    if(checkForShot){
      this.wasShot = true;
    }
  }


  display() {
    fill(0);
    rect(this.x, this.y, this.size, this.size);
    imageMode(CENTER);
    image(this.imageToDisplay, this.x, this.y);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Cowboy {
  constructor(x, y, idleImage, upImage, downImage, leftImage, rightImage) {
    this.x = x;
    this.y = y;
    this.idleimageToDisplay = idleImage;
    this.upimageToDisplay = upImage;
    this.downimageToDisplay = downImage;
    this.leftimageToDisplay = leftImage;
    this.rightimageToDisplay = rightImage;
    this.dx = 4;
    this.dy = 4;
    this.bulletArray = [];
    this.w = this.idleimageToDisplay.width;
    this.h = this.idleimageToDisplay.height;
    this.idle = true;
    this.isRight = false;
    this.isLeft = false;
    this.isUp = false;
    this.isDown = false;
    this.shootRight = false;
    this.shootLeft = false;
    this.shootUp = false;
    this.shootDown = false;
  }

  handleKeyPress() {
    if (key === "w" || key === "W") {
      this.idle = false;
      this.isUp = true;
    }
    if (key === "s" || key === "S") {
      this.idle = false;
      this.isDown = true;
    }
    if (key === "a" || key === "A") {
      this.idle = false;
      this.isLeft = true;
    }
    if (key === "d" || key === "D") {
      this.idle = false;
      this.isRight = true;
    }
    if (key === "i" || key === "I") {
      this.idle = false;
      this.shootUp = true;
      someShot = new Shot(this.x, this.y, 0, -10, bulletImg);
      this.bulletArray.push(someShot);
    }
    if (key === "j" || key === "J") {
      this.idle = false;
      this.shootLeft = true;
      someShot = new Shot(this.x, this.y, -10, 0, bulletImg);
      this.bulletArray.push(someShot);
    }
    if (key === "k" || key === "K") {
      this.idle = false;
      this.shootRight = true;
      someShot = new Shot(this.x, this.y, 0, 10, bulletImg);
      this.bulletArray.push(someShot);
    }
    if (key === "l" || key === "L") {
      this.idle = false;
      this.shootLeft = true;
      someShot = new Shot(this.x, this.y, 10, 0, bulletImg);
      this.bulletArray.push(someShot);
    }
  }
  handleKeyRelease() {
    if (key === "w" || key === "W") {
      this.isUp = false;
      this.idle = true;
    }
    if (key === "s" || key === "S") {
      this.isDown = false;
      this.idle = true;
    }
    if (key === "a" || key === "A") {
      this.isLeft = false;
      this.idle = true;
    }
    if (key === "d" || key === "D") {
      this.isRight = false;
      this.idle = true;
    }
    if (key === "i" || key === "I") {
      this.shootUp = false;
      this.idle = true;
    }
    if (key === "j" || key === "J") {
      this.shootLeft = false;
      this.idle = true;
    }
    if (key === "k" || key === "K") {
      this.shootRight = false;
      this.idle = true;
    }
    if (key === "l" || key === "L") {
      this.shootLeft = false;
      this.idle = true;
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
    for (let i = this.bulletArray.length - 1; i >= 0; i--) {
      this.bulletArray[i].update();
      this.bulletArray[i].display();
      if (this.bulletArray[i].checkScreen) {
        this.bulletArray.splice(i, 1);
      }
    }
  }

  display() {
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(this.x, this.y, this.w, this.h);
    imageMode(CENTER);
    if (this.idle){
      image(this.idleimageToDisplay, this.x, this.y);
    }
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
    if (this.shootRight) {
      image(this.rightimageToDisplay, this.x, this.y);
    }
    if (this.shootLeft) {
      image(this.leftimageToDisplay, this.x, this.y);
    }
    if (this.shootUp) {
      image(this.upimageToDisplay, this.x, this.y);
    }
    if (this.shootDown) {
      image(this.downimageToDisplay, this.x, this.y);
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Enemy {
  constructor(x, y, enemyImage){
    this.x = x;
    this.y = y;
    // AI CODE = https://gamedev.stackexchange.com/questions/50978/moving-a-sprite-towards-an-x-and-y-coordinate
    this.follow = 0.01;
    this.imageToDisplay = enemyImage;
    this.w = this.imageToDisplay.width;
    this.h = this.imageToDisplay.height;
  }
  spawnin(){
    this.x = 25;
    this.y = 300;
  }
  update(){
    let targetX = cowboyChar.x;
    let dx = targetX - this.x;
    this.x += dx * this.follow;


    let targetY = cowboyChar.y;
    let dy = targetY - this.y;
    this.y += dy * this.follow;

  }
  display(){
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 255);
    rect(this.x, this.y, this.w, this.h);
    // https://gamedev.stackexchange.com/questions/50978/moving-a-sprite-towards-an-x-and-y-coordinate
    rectMode(CENTER);
    noStroke();
    fill(255,255,255);
    rect(this.x, this.y, this.w, this.h);
    imageMode(CENTER);
    image(this.imageToDisplay, this.x, this.y);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
let someShot;
let checkForShot;
let cowboyChar;
let enemyChar;
let bulletImg;
let idleImg, upImg, downImg, leftImg, rightImg;
let enemyImg;
let hoverPlay = false; // 2D Collide function that defaults the play button as false
let hoverControls = false; // 2D Collide function that defaults the Control button as false
let hoverBackControl = false; // 2D Collide function that defaults the BackControl button as false
let fillStart, fillControl;
let state;
let mainMenuScreen, controlScreen;


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

  enemyImg = loadImage("assets/enemy.png");
  mainMenuScreen = loadImage("assets/mainmenu.png");
  controlScreen = loadImage("assets/controls.png");
}

function setup() {
  state = "MainMenu";
  createCanvas(600, 600);
  background(0);
  cowboyChar = new Cowboy(width / 2, height / 1.8, idleImg, upImg, downImg, leftImg, rightImg, bulletImg);
  enemyChar = new Enemy(width / 2, height / 1.8, enemyImg);
  cellSize = 24;
  enemyChar.spawnin();
}

function draw() {
  if(state === "gameStart"){
    createCanvas(700,600);
    background(0);
    imageMode(CORNER);
    drawMap();
    cowboyChar.update();
    cowboyChar.display();
    enemyChar.update();
    enemyChar.display();
    checkCharEnemHitCoords();
  }
  else if (state === "controlSettings") {
    image(controlScreen, 0, 0, 600, 600);
  }
  else if(state === "gameOver"){
    createCanvas(600,600);
    background(0);
    textSize(20);
    textAlign(CENTER,[CENTER]);
    fill(255);
    text("you thought you had lives? Nope. Refresh page to start again",300,300);
  }
  else{
    state = "MainMenu";
    image(mainMenuScreen, 0, 0, 600, 600);
  }
mainMenu();
// Mouse to Rectangle collision detection
hoverPlay = collidePointRect(mouseX, mouseY, 200, 400, 600/2 - 100, 400/6);
hoverControls = collidePointRect(mouseX, mouseY, 200, 500, 600/2 - 100, 200/4);
hoverBackControl = collidePointRect(mouseX, mouseY, 20, 450, 75, 50);
}

function mainMenu() {
  if (state === "MainMenu") {
    push(); // Creating rectangles that are linked to 2d Collide functions
    let fillStart = controlStart();
    fill(fillStart);
    rect(200, 400, 600/2 - 100, 400/6);
    //image(playimg, 400 + 215, 220 + 40, 1600/6, 790/7 ); // Image Files that displays what button does
    pop();

    push(); // Creating rectangles that are linked to 2d Collide functions
    let fillControl = controlFill();
    fill(fillControl);
    rect(200, 500, 600/2 - 100, 200/4);
    //image(controlimg, 575 + 60.5, 500.3334 + 20, 350/1.5, 175/3); // Image Files that displays what button does
    pop();
  }
  else if (state === "controlSettings") {
    push(); // Creating rectangles that are linked to 2d Collide functions
    let fillBack = backFill();
    fill(fillBack);
    rect(20, 450, 75, 50);
    //image(backimg, 100 + 30.5, 665 + 15, 115, 35); // Image Files that displays what button does
    pop();
  }
}

function controlStart() {
  if (state === "MainMenu"){
    if(hoverPlay){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillStart = color(255);
    }
    else{
      fillStart = color(255, 100, 100);
    }
    return fillStart;
  }
}

function backFill() {
  let fillBack;
  if (state === "controlSettings"){
    if(hoverBackControl){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillBack = color(255);
    }
    else{
      fillBack = color(255, 100, 100);
    }
    return fillBack;
  }
}

function controlFill() {
  // let fillControl;
  if (state === "MainMenu"){
    if(hoverControls){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillControl = color(255);
    }
    else{
      fillControl = color(255, 100, 100);
    }
    return fillControl;
  }
}

function mousePressed() {
  if (state === "MainMenu"){
    if (hoverPlay) {
      state = "gameStart";
    }
    else if (hoverControls) {
      state = "controlSettings";
    }
  }
  else if (state === "controlSettings") {
    if (hoverBackControl){
      state = "MainMenu";
    }
  }
}

function checkCharEnemHitCoords(){
  let charHit = false;
  charHit = collideRectRect(cowboyChar.x, cowboyChar.y, cowboyChar.w, cowboyChar.h, enemyChar.x, enemyChar.y, enemyChar.w, enemyChar.h);
  console.log(charHit, "character-enemy contact");
  if (charHit === true){
    state = "gameOver";
  }
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
