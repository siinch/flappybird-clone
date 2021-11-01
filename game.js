
class Game {

    static #instance = new Game();
    static debugModeIsOn = false;
    static gameOverSound = new Audio("sounds/gameover.mp3");

    constructor() {
        
        this.music = new Audio("sounds/music.mp3");
        this.music.loop = true;

        let game = this;
        document.addEventListener("keydown", function() {
            game.music.play();
        }, {once: true});

        this.gameloop = new Interval({
            procedure: function() {
            Canvas.drawBackground();
            GameObject.drawAll();
            GameObject.updateAll();
            },
            frequency: 10
        });

    }

}

alert("Press SPACE to flap your wings");
Cloud.startSpawner();
Fireball.startSpawner();
Coin.startSpawner();