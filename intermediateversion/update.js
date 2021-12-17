// execute the update function every 10 milliseconds
function update() {

    timeOfCurrentFrame = new Date().getTime();
    if(timeOfLastFrame == undefined)
        timeOfLastFrame = timeOfCurrentFrame -10;
    deltaTime = timeOfCurrentFrame - timeOfLastFrame;
    timeScale = deltaTime / timeBetweenUpdates;
    timeOfLastFrame = timeOfCurrentFrame;


    Canvas.fillBackground("#b3d9ff");
    GameObject.drawAll();
    GameObject.updateAll();

    // spawn a new cloud when if it is time
    Cloud.timeSinceLastSpawn += timeBetweenUpdates;
    if(Cloud.timeSinceLastSpawn>Cloud.spawnInterval) {
        new Cloud (
            Cloud.data.drawOrder,
            Cloud.data.image,
            Cloud.data.xPosition,
            Cloud.getRandomYPosition(),
            Cloud.data.xSpeed
        );
        Cloud.timeSinceLastSpawn = 0;
    }

    // spawn new fireballs if it is time
    if(gameState == "action" &&
    Fireball.timeSinceLastSpawn > Fireball.spawnInterval) {
        new Fireball (
            Fireball.data.drawOrder,
            Fireball.data.tag,
            Fireball.data.image,
            Fireball.data.xPosition,
            Fireball.getRandomYPosition(),
            Fireball.data.hitboxRadius,
            Fireball.data.xSpeed

        );
        Fireball.timeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        Fireball.timeSinceLastSpawn += timeBetweenUpdates;
    }

     // spawn new coins
     if(gameState == "action" &&
     Coin.timeSinceLastSpawn>Coin.spawnInterval) {
         new Coin (
            Coin.data.drawOrder,
            Coin.data.tag,
            Coin.data.image,
            Coin.data.sound,
            Coin.data.xPosition,
            Coin.getRandomYPosition(),
            Coin.data.hitboxRadius,
            Coin.data.xSpeed
         );
         Coin.timeSinceLastSpawn = 0;
     }
 
     if(gameState == "action") {
         Coin.timeSinceLastSpawn += timeBetweenUpdates;
     }

}

function waitForImageToLoad() {
    if(Utility.numOfImagesLoaded == Utility.numOfImagesToLoad) {
        scaleImages();
        setInterval(update, timeBetweenUpdates);
    }
    else
        setTimeout(waitForImageToLoad, 100);
}
waitForImageToLoad();
