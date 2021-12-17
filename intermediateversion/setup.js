//game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
const music = new Audio("../assets/sounds/music.mp3");
music.loop = true;
music.volume = 0.5;
let gameState = "menu"; // menu, action or gameover
const timeBetweenUpdates = 10; //milliseconds
const debugModeIsOn = true;
const startKey = "s";
const restartKey = "r";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
let timeOfLastFrame;
let timeOfCurrentFrame;
let deltaTime;
let timeScale;

//make the bird
let bird = new Bird(
    Bird.data.drawOrder,
    Bird.data.xPosition,
    Bird.data.yPosition,    
    Bird.data.ySpeed,
    Bird.data.yAccelleration,
    Bird.data.hitboxRadius,     
    Bird.data.image,
    Bird.data.flapSound,
    Bird.data.flapForce,     
    Bird.data.flapKey,
    Bird.data.canFlap 
);

// create the scoreboard
let scoreboard = new Scoreboard (
    Scoreboard.data.drawOrder,
    Scoreboard.data.image,
    Scoreboard.data.imageXPosition,
    Scoreboard.data.imageYPosition,
    Scoreboard.data.imageWidth,
    Scoreboard.data.imageHeight,
    Scoreboard.data.value,
    Scoreboard.data.textXPosition,
    Scoreboard.data.textYPosition,
    Scoreboard.data.textSize,
    Scoreboard.data.textColor
);


// create 3 clouds
new Cloud (
    Cloud.data.drawOrder,
    Cloud.data.image,
    Cloud.data.xPosition,
    Cloud.getRandomYPosition(),
    Cloud.data.xSpeed
);
new Cloud (
    Cloud.data.drawOrder,
    Cloud.data.image,
    Cloud.data.xPosition-1000 * Canvas.getScale(),
    Cloud.getRandomYPosition(),
    Cloud.data.xSpeed
);
new Cloud (
    Cloud.data.drawOrder,
    Cloud.data.image,
    Cloud.data.xPosition-500 * Canvas.getScale(),
    Cloud.getRandomYPosition(),
    Cloud.data.xSpeed
);


// create menu texts

let startText = new TextObject(
    10, // drawOrder
    "Press " + startKey + " to start", // text
    400 * Canvas.getScale(), //xPosition
    400 * Canvas.getScale(), //yPosition
    80 * Canvas.getScale(), // size
    "yellow" // color
);

let flapText = new TextObject(
    10,
    "Press space to flap wings",
    300 * Canvas.getScale(),
    400 * Canvas.getScale(),
    80 * Canvas.getScale(),
    "yellow"
);
flapText.isActive = false;

let gameOverText = new TextObject (
    10,
    "Press " + restartKey + " to restart",
    300 * Canvas.getScale(),
    400 * Canvas.getScale(),
    80 * Canvas.getScale(),
    "yellow"
);
gameOverText.isActive = false;

function scaleImages() {
    Scoreboard.data.image.width *= Canvas.getScale();
    Scoreboard.data.image.height *= Canvas.getScale();
    Fireball.data.image.height *= Canvas.getScale();
    Fireball.data.image.width *= Canvas.getScale();
    Cloud.data.image.width *= Canvas.getScale() * .5;
    Cloud.data.image.height *= Canvas.getScale() * .5;
}

