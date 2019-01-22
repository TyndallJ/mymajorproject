// Tyndall Johnston
// Journey of the Prarie King Remake
//
// Any error is because of the use of 2D Collide
// Source code for the movement of enemy can be found in "class Enemy - update()"

class Shot {
  constructor(x, y, dx, dy, theImage) {
    this.x = x;
    this.y = y;
    this.size = 10;
    this.tempx = dx;
    this.tempy = dy;
    this.checkScreen = false;
    this.imageToDisplay = theImage;
    this.w = this.imageToDisplay.width;
    this.h = this.imageToDisplay.height;
  }

  update() { //When its fired it contines to move in the direction it was fired in till it collides
    this.x += this.tempx;
    this.y += this.tempy;
    shotHit = collideRectRect(this.x, this.y, this.size, this.size, enemyChar.x, enemyChar.y, enemyChar.w, enemyChar.h); //Shot to Enemy collison detection
    if (this.x >= width + this.size || this.x <= 0 - this.size || this.y >= height + this.size || this.y <= 0 - this.size) {
      this.offScreen = true;
    }
    if(shotHit){
      this.enemyDetect = true;
    }
  }

  display() { //Shows the bullet on the map
    fill(255,255, 255, 0);
    rect(this.x, this.y, this.w, this.h);
    imageMode(CENTER);
    image(this.imageToDisplay, this.x, this.y);
  }
} //The shot class that the Cowboy Fires

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Cowboy { //The main character that fires Shots at Enemy
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
    this.isAlive = true;
  }

  handleKeyPress() { //When the key is down it allows the changing of coordinates
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
  handleKeyRelease() { //When the key is up it stops coordinate change
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
  update() { // Changes the coordinate of Cowboy
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
    for (let i = this.bulletArray.length - 1; i >= 0; i--) { //Array for when bullet is shot
      this.bulletArray[i].update();
      this.bulletArray[i].display();
      if (this.bulletArray[i].checkScreen) { //Removes shot from array when its off the visible screen
        this.bulletArray.splice(i, 1);
      }
      if(this.bulletArray[i].enemyDetect){ // Removes the shot from array when its collided with enemy
        this.bulletArray.splice(i, 1);
        enemyArray.splice(i,1);
        enemyChar.x = 300; // Resets the enemys coodrinates
        enemyChar.y = 575; // Resets the enemys coodrinates
        let enemy1 = {
        };
        enemyArray.push(enemy1);

        score++; //Increases the score
      }
    }

  }

  display() {
    rectMode(CENTER);
    noStroke();
    fill(255,255, 255, 0);
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

class Enemy { //The enemy that follows the Cowboy
  constructor(x, y, enemyImage){
    this.x = x;
    this.y = y;
    this.follow = 0.01;
    this.imageToDisplay = enemyImage;
    this.checkEnemy = false;
    this.w = this.imageToDisplay.width;
    this.h = this.imageToDisplay.height;
  }
  spawnin(){ //Sets the starting location
    this.x = 300;
    this.y = 575;
  }
  update(){ // Tracks the Cowboys coordinates and brings itself towards it
    let targetX = cowboyChar.x;
    let dx = targetX - this.x;
    this.x += dx * this.follow;

    let targetY = cowboyChar.y;
    let dy = targetY - this.y;
    this.y += dy * this.follow;

    //AI CODE FOR THIS UPDATE FUNCTION // https://gamedev.stackexchange.com/questions/50978/moving-a-sprite-towards-an-x-and-y-coordinate
  }
  display(){//Shows where the enemy is
    rectMode(CENTER);
    noStroke();
    fill(255,255, 255, 0);
    rect(this.x, this.y, this.w, this.h);
    image(this.imageToDisplay, this.x, this.y);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let map1 = [ // Grid that makes map layout
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1],
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Map Images and their Variables
let cellSize;
let rows = 25;
let cols = 25;
let wallImg, midgrndImg, etrgrndImg, otrgrndImg;
let hoverPlay = false;
let hoverControls = false;
let hoverBackControl = false;
let fillStart, fillControl;
let state;
let mainMenuScreen, controlScreen;
let playbutton, controlbutton, backbutton;

//Character and their Variables
let enemyArray = [];
let someShot;
let shotHit;
let cowboyChar;
let enemyChar,enemyChar2,enemyChar3,enemyChar4;
let bulletImg;
let menuSound;
let gameSound;
let idleImg, upImg, downImg, leftImg, rightImg;
let enemyImg;
let health = 100;
let score = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function preload() { //Loading in images, and sound
  //Loading Menu and Button Images
  wallImg = loadImage("assets/mapborder.png");
  midgrndImg = loadImage("assets/middleground.png");
  etrgrndImg = loadImage("assets/enterground.png");
  otrgrndImg = loadImage("assets/outerground.png");
  mainMenuScreen = loadImage("assets/mainmenu.png");
  controlScreen = loadImage("assets/controls.png");
  playbutton = loadImage("assets/playbutton.png");
  controlbutton = loadImage("assets/controlsbutton.png");
  backbutton = loadImage("assets/backbutton.png");

  //Loading the Cowboy, Enemy, and Bullet Images/Sounds
  idleImg = loadImage("assets/heroidle.png");
  upImg = loadImage("assets/heroup.png");
  downImg = loadImage("assets/herodown.png");
  leftImg = loadImage("assets/heroleft.png");
  rightImg = loadImage("assets/heroright.png");
  bulletImg = loadImage("assets/bullet.png");
  enemyImg = loadImage("assets/enemy.png");
  menuSound = loadSound("assets/MenuMusic.mp3");
  gameSound = loadSound("assets/GameMusic.mp3");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
  state = "MainMenu"; //Sets the state
  createCanvas(600, 600);
  background(0);
  cowboyChar = new Cowboy(width / 2, height / 1.8, idleImg, upImg, downImg, leftImg, rightImg, bulletImg); //Calls the classes to exist as a variable
  enemyChar = new Enemy(width / 2, height / 1.8, enemyImg); //Calls the classes to exist as a variable
  cellSize = 24; //Grid cellSize
  enemyChar.spawnin(); //Sets the location the enemy should start in
  playSounds(); //Loads the said function
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {
  mainMenu(); //Loads the said function
  mainMenuButtons(); //Loads the said function
  hoverPlay = collidePointRect(mouseX, mouseY, 200, 400, 600/2 - 100, 400/6); // Mouse to Rectangle collision detection
  hoverControls = collidePointRect(mouseX, mouseY, 200, 500, 600/2 - 100, 200/4); // Mouse to Rectangle collision detection
  hoverBackControl = collidePointRect(mouseX, mouseY, 20, 450, 75, 50); // Mouse to Rectangle collision detection
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mainMenu(){ //State checking, map loading, score and health system loading, and Class loading
  if(state === "gameStart"){
    createCanvas(700,600);
    background(0);
    imageMode(CORNER);
    drawMap(); //Displays the made grid as the map
    textSize(20); //Text size
    textAlign(CENTER, [CENTER]); //Coords of text changed to CENTER
    fill(255);
    text("Health:" + health, 650, 30); //Health system shown on right
    text("Score:" + score, 650, 60); //Score system shown on right
    cowboyChar.update(); //Updates coordinates of Class
    cowboyChar.display(); //Shows Class based on the coords from the update above

    for (let i = 0; i < enemyArray.length; i++) { //Array which loads in the enemy
      enemyChar.update(); //updates coordinates of Class
      enemyChar.display();//Shows Class based on the coords from the update above
    }
    checkCharEnemHitCoords(); //Checks for collison of Enemy and Cowboy
  }
  else if (state === "controlSettings") { //Sets image for this state
    image(controlScreen, 0, 0, 600, 600);
  }
  else if(state === "gameOver"){ //Sets image for this state
    createCanvas(600,600);
    background(0);
    textSize(20);
    textAlign(CENTER,[CENTER]);
    fill(255);
    text("you thought you had lives? Nope. Refresh page to start again",300,300);
  }
  else{
    state = "MainMenu"; //If it can't do anything it stays at menu (this shouldn't happen)
    image(mainMenuScreen, 0, 0, 600, 600);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mainMenuButtons() { // Determines size of the buttons on Menu. Checks for collision, and loads outside functions that change colors
  if (state === "MainMenu") {
    push(); // Creating rectangles that are linked to 2d Collide functions
    let fillStart = controlStart();
    fill(fillStart);
    rect(200, 400, 600/2 - 100, 400/6);
    image(playbutton, 210, 410, 600/2 - 120, 400/6 - 20); // Image Files that displays what button does
    pop();

    push(); // Creating rectangles that are linked to 2d Collide functions
    let fillControl = controlFill();
    fill(fillControl);
    rect(200, 500, 600/2 - 100, 200/4);
    imageMode(CORNER);
    image(controlbutton, 210, 510, 600/2 - 120, 200/4 - 20); // Image Files that displays what button does
    pop();
  }
  else if (state === "controlSettings") {
    push(); // Creating rectangles that are linked to 2d Collide functions
    let fillBack = backFill();
    fill(fillBack);
    rect(20, 450, 75, 50);
    image(backbutton, 30, 460, 60, 35); // Image Files that displays what button does
    pop();
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function playSounds(){ //Plays sound when its loaded
  if(state === "MainMenu"){
    menuSound.play(); //Plays the sound for both menu and gameStart
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function controlStart() { //Code for the buttons on the menu. Changes the color of the button when mouse collides with the rectangle
  if (state === "MainMenu"){
    if(hoverPlay){ //If mouse x and y are in the certian cordinates it'll change the color
      fillStart = color(255); //Changes the color of the box when hovered above it
    }
    else{
      fillStart = color(255, 100, 100); //Changes the color of the box when hovered above it
    }
    return fillStart;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function backFill() { //Code for the buttons on the menu. Changes the color of the button when mouse collides with the rectangle
  let fillBack;
  if (state === "controlSettings"){
    if(hoverBackControl){ //If mouse x and y are in the certian cordinates it'll change the color
      fillBack = color(255); //Changes the color of the box when hovered above it
    }
    else{
      fillBack = color(255, 100, 100); //Changes the color of the box when hovered above it
    }
    return fillBack;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function controlFill() { //Code for the buttons on the menu. Changes the color of the button when mouse collides with the rectangle
  let controlFill;
  if (state === "MainMenu"){ //If mouse x and y are in the certian cordinates it'll change the color
    if(hoverControls){
      fillControl = color(255); //Changes the color of the box when hovered above it
    }
    else{
      fillControl = color(255, 100, 100); //Changes the color of the box when hovered above it
    }
    return fillControl;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mousePressed() { //Function that does the things below when mouse is pressed
  if (state === "MainMenu"){
    if (hoverPlay) { //When its over the play button and clicked it changes state
      state = "gameStart";
    }
  }
  if (hoverControls) {
    state = "controlSettings"; //State change for the Controls button
  }
  else if (state === "controlSettings") { //State change for the back button under Controls state
    if (hoverBackControl){
      state = "MainMenu";
    }
  }
  else if (state === "gameStart"){ //Spawns the first enemy when you press play
    let enemy1 = {
    };
    enemyArray.push(enemy1);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkCharEnemHitCoords(){ //Checks for the collision between the Cowboy and Enemy
  let charHit = false;
  charHit = collideRectRect(cowboyChar.x, cowboyChar.y, cowboyChar.w, cowboyChar.h, enemyChar.x, enemyChar.y, enemyChar.w, enemyChar.h); //2D Collide code for the Cowboy and Enemy hitboxes

  if (charHit === true){ //When they are colliding it lowers health on the screen
    health -= 1;
  }
  if (health < 0){ // When your health hits 0 it displays a gameover screen
    state = "gameOver";
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function keyPressed() { //If the key is down it does the cowboy key down inside the Cowboy class
  cowboyChar.handleKeyPress();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function keyReleased() { //If the key is up it does the cowboy key release inside the Cowboy class
  cowboyChar.handleKeyRelease();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function drawMap() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (map1[j][i] === 1) { // If the grid has a 1, it displays the image meant for 1
        image(wallImg, i * cellSize, j * cellSize, cellSize, cellSize);
      }
      else if (map1[j][i] === 2) {// If the grid has a 2, it displays the image meant for 2
        image(midgrndImg, i * cellSize, j * cellSize, cellSize, cellSize);
      }
      else if (map1[j][i] === 3) {// If the grid has a 2, it displays the image meant for 2
        image(etrgrndImg, i * cellSize, j * cellSize, cellSize, cellSize);
      }
      else if (map1[j][i] === 4) {// If the grid has a 2, it displays the image meant for 2
        image(otrgrndImg, i * cellSize, j * cellSize, cellSize, cellSize);
      }
    }
  }
}
