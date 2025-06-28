const GAMEBOARD_WIDTH = 500;
const GAMEBOARD_HEIGHT = 500;
const HUONG_LEFT = "left";
const HUONG_RIGHT = "right";
const HUONG_UP = "up";
const HUONG_DOWN = "down";

const CAR_WIDTH = 75;
const CAR_HEIGHT = 85/1.5;

const DEFAULT_CAR_X_POSITION = 100;
const DEFAULT_CAR_Y_POSITION = 100;
const DEFAULT_CAR_HUONG_POSITION = HUONG_DOWN;
const DEFAULT_CAR_SPEED = 20;

class Car {
    constructor(xHuong, yHuong, Huong, speed) {
        this.xHuong = xHuong;
        this.yHuong = yHuong;
        this.Huong = Huong;
        this.speed = speed;
        this.rolling = 1;
        this.buildImage();
    }

    buildImage() {
        this.image = this.Huong + this.rolling + '.svg';
    }

    move() {
        switch (this.Huong) {
            case HUONG_DOWN:
                this.yHuong += this.speed;
                break;
            case HUONG_UP:
                this.yHuong -= this.speed;
                break;
            case HUONG_LEFT:
                this.xHuong -= this.speed;
                break;
            case HUONG_RIGHT:
                this.xHuong += this.speed;
                break;
        }

        this.rolling = this.rolling === 2 ? 1 : 2;
        this.buildImage();
    }

    turn(huong) {
        this.Huong = huong;
        this.rolling = 1;
        this.buildImage();
    }

    show(ctx) {
        const image = new Image();
        const xHuong = this.xHuong;
        const yHuong = this.yHuong;

        image.onload = function () {
            ctx.drawImage(image, xHuong, yHuong, CAR_WIDTH, CAR_HEIGHT);

        };

        image.src = './webmichl-2cv4.svg';
    }
}

class GameBoard {
    constructor() {
        this.Car = new Car(
            DEFAULT_CAR_X_POSITION,
            DEFAULT_CAR_Y_POSITION,
            DEFAULT_CAR_HUONG_POSITION,
            DEFAULT_CAR_SPEED
        );
        this.ctx = undefined;
    }

    start() {
        this.ctx = document.getElementById('gameCanvas').getContext('2d');
        this.Car.show(this.ctx);
    }

    render() {
        this.ctx.clearRect(0, 0, GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT);
        this.Car.show(this.ctx);
    }

    moveCar(event) {
        let huong = null;

        switch (event.which) {
            case 37:
                huong = HUONG_LEFT;
                break;
            case 38:
                huong = HUONG_UP;
                break;
            case 39:
                huong = HUONG_RIGHT;
                break;
            case 40:
                huong = HUONG_DOWN;
                break;
        }

        if (huong) {
            if (this.Car.Huong !== huong) {
                this.Car.turn(huong);
            } else {
                this.Car.move();
            }
            this.render();
        }
    }
}

// ✅ Chỉ khởi tạo một lần
const gameBoard = new GameBoard();
gameBoard.start();

// ✅ Lắng nghe sự kiện phím
document.addEventListener("keydown", (event) => {
    gameBoard.moveCar(event);
});
