class Cloud extends GameObject {

    static image = Utility.loadImage("images/cloud.png");
    static spawner;

    constructor (params) {
    super({draworder: params.draworder});
        this.xpos = params.xpos; //canvas.width;
        this.ypos = params.ypos; //Math.random() * canvas.height/2;
        this.xspeed = params.xspeed;//-.5;
    }

    draw() {
        Canvas.drawImage(
            Cloud.image,
            this.xpos,
            this.ypos,
            Cloud.image.width/4,
            Cloud.image.height/4
        );
    }

    update() {
        this.xpos += this.xspeed;
    }

}