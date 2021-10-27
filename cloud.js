class Cloud extends GameObject {

    static image = Utility.loadImage("images/cloud.png");
    static spawnloop = setInterval(function() {
        new Cloud();
    }, 5000);

    constructor () {
        super();
        this.xpos = window.innerWidth;
        this.ypos = Math.random() * window.innerHeight;
        this.xspeed = -1;
    }

    draw() {
        Utility.drawImage(
            Cloud.image,
            this.xpos,
            this.ypos,
            Cloud.image.width/2,
            Cloud.image.height/2
        );
    }

    update() {
        this.xpos += this.xspeed;
    }

}