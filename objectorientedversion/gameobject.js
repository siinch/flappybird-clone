class GameObject {

    static gameObjects = [];

    constructor (drawOrder) {
        // higher draworder is drawn in front
        this.drawOrder = drawOrder;
        GameObject.gameObjects.push(this);
        GameObject.sortAllByDrawOrder();

    }

    static drawAll() {
        let objects = GameObject.gameObjects;
        for (let i = 0; i < objects.length; i++) {
            objects[i].draw();
        }
    }

    static updateAll() {
        let objects = GameObject.gameObjects;
        for (let i = 0; i < objects.length; i++) {
            objects[i].update();
        }
    }

    static sortAllByDrawOrder () {
        let result = GameObject.gameObjects;

        // i is the current index
        for(let i = 0; i < result.length; i++) {
            // first index of the smallest number
            let s = i;

            // j is the temporary index for searching
            for(let j = i; j < result.length; j++) {
                if(result[s].drawOrder > result[j].drawOrder) {
                    s = j;
                }
            }
            // temporary index used for swapping
            let t = result[i];
            result[i] = result[s]
            result[s] = t;
        }
        GameObject.gameObjects = result;
    }

    draw () {
    }

    update() {
    }

    destroy() {
        let newobjects = [];
        for(let object of GameObject.gameObjects) {
            if (object != this)
                newobjects.push(object); 
        }
        GameObject.gameObjects = newobjects;
    }

    static destroyAll () {
        GameObject.gameObjects = [];
    }
}