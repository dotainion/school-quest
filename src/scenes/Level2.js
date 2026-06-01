import Phaser from "phaser";

export default class Level2 extends Phaser.Scene {
    constructor() {
        super("level2");
    }

    preload() {
        this.load.image("player", "/test.webp");
    }

    create() {
        this.player = this.physics.add.image(200, 200, "player");
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.goalX = 700;

        this.add.text(10, 10, "LEVEL 2", {
            fontSize: "24px",
            fill: "#fff",
        });
    }

    update() {
        const speed = 250;

        this.player.setVelocity(0);

        if (this.cursors.left.isDown) this.player.setVelocityX(-speed);
        if (this.cursors.right.isDown) this.player.setVelocityX(speed);
        if (this.cursors.up.isDown) this.player.setVelocityY(-speed);
        if (this.cursors.down.isDown) this.player.setVelocityY(speed);

        if (this.player.x > this.goalX) {
            this.scene.start("level1"); // or win screen later
        }
    }
}