class Bird {
    constructor({
        x,
        y,
        width,
        height,
        frames,
        spiteSheet,
        birdDrawEngine,
        game,
        gravity,
        flapSpeed,
    }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 0;
        this.falling = false;

        this._gravity = gravity;
        this._frames = frames;
        this._frameIdx = 0;
        this._spriteSheet = spiteSheet;
        this._birdDrawEngine = birdDrawEngine;
        this._game = game;
        this._flapSpeed = flapSpeed
    }

    draw() {
        
        this._birdDrawEngine.drawImage({
            spriteSheet: this._spriteSheet,
            image: this._frames[this._frameIdx],
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        });
    }

    update(delta) {

        // this.speed += this._gravity * delta;
        // this.y += this.speed * delta;
        // if (this.y < 0) {
        //     this.y = 0;
        // }

        // if (this.y + this.height > this._game._canvas.height) {
        //     console.log('game')
        //     this._game.gameOver();
        // }
    }
    updateWings(delta){
        this._frameIdx = (this._frameIdx + Math.ceil(delta)) % 4;

    }

    flap(delta) {

        this.speed = -this._flapSpeed;


    }
}

// class Bird extends Entity {
//     constructor(params) {
//         super(params);
//         this._flapSpeed = params.flapSpeed;
//         this._physicsEngine = params.physicsEngine;
//         this.falling = true;
//     }

//     update(entity, delta) {
//         super.update(entity, delta);

//         // this._physicsEngine.update(this, delta);

//             if (entity.falling) {
//                 entity.speed += this._gravity * delta;
//                 entity.y += entity.speed * delta;
//             }
//         if (this.y < 0) {
//             this.y = 0;
//         }

//         if (this.y + this.height >= this._game.height) {
//             this._game.gameOver();
//         }
//     }

//     flap() {
//         this.speed = -this._flapSpeed;
//     }
// }