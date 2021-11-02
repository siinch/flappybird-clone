class Bird extends GameObject {

    constructor (params) {
        super({draworder: params.draworder});
        this.xpos = params.xpos;
        this.ypos = params.ypos;
        this.radius = params.radius;
        this.color = params.color;
        this.image = params.image;
        this.yspeed = params.yspeed;
        let bird = this;
        document.addEventListener("keydown", function(event) {
            bird.flapwings(event.key);
        });
    }

    draw() {
        Canvas.drawImage(this.image,
            this.xpos - this.radius * 1.5,
            this.ypos - this.radius * 1.5,
            this.radius * 3,
            this.radius * 3
        );

        if(Game.debugModeIsOn) {
            Canvas.drawCircle(
                this.xpos, 
                this.ypos, 
                this.radius, 
                this.color
            );
        }
    }

    update () {
        this.yspeed += 0.2;
        this.ypos += this.yspeed;

        if(Canvas.getHeight() < this.ypos || this.ypos < 0) {
            Game.gameOverSound.play();
            alert("Game Over");
            window.location.reload(true);
        }
    }

    flapwings (key) {
        if(key == " ") // if space is pressed
            this.yspeed = -5;
    }
}
