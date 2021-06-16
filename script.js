// Author:

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
let buttonDiv;
let resetButton;
let snake;
let food;
let resolution;
let scaledWidth;
let scaledHeight;
let score;
//let canvasDiv;

// Global Game Variables
//let snake;

function setup() {
  // Build the interface
canvasDiv = createDiv();
canvas = createCanvas(640, 480);
canvas.parent(canvasDiv);
  // Set the resolution to 20. Play with this later if you want.
textDiv = createDiv();
textP = createP();
textP.parent(textDiv);

  // Scaled width and height are width / resolution, height / resolution
buttonDiv = createDiv();
resetButton = createButton("Reset Game");
resetButton.mousePressed(resetGame);
resetButton.parent(buttonDiv);
  // Set the game's framerate to 5 (or whatever you prefer)
resolution = 20;
scaledWidth = floor(width / resolution);
scaledHeight = floor(height / resolution);
frameRate(5);
resetGame();



  // Call resetGame() to initialize everything else.

}

function draw() {

  snake.update();
  snake.show();
  // Scale the canvas according to resolution, then refresh the background

  // Check if snake is eating the food

  // Draw the snake

  // Draw the food

  // Check for game over

}

function createFood() {

}

function keyPressed() {

}

function resetGame() {
   snake = new Snake();



}
