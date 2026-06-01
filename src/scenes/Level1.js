import Phaser from "phaser";

export default class Level1 extends Phaser.Scene {
    constructor() {
        super("level1");
    }

    preload() {
        // this.load.image("player", "/test.webp");

        this.load.spritesheet("player", "/assets/player.png", {
            frameWidth: 32,
            frameHeight: 32,
        });

        // 🟡 OPTIONAL: coins system
        this.load.image("coin", "/assets/coin.png");

        // 🟡 OPTIONAL: enemy system
        this.load.image("enemy", "/assets/enemy.png");
    }

    create() {
        // this.player = this.physics.add.image(400, 300, "player");

        this.player = this.physics.add.sprite(400, 300, "player");
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

        // simple win trigger area
        this.goalX = 700;

        // ----------------------------
        // 🎥 CAMERA (OPTIONAL BUT IMPORTANT)
        // ----------------------------
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, 2000, 600);

        this.physics.world.setBounds(0, 0, 2000, 600);

        // ----------------------------
        // 🎮 SCORE SYSTEM (OPTIONAL)
        // ----------------------------
        this.score = 0;

        this.scoreText = this.add.text(16, 16, "Score: 0", {
            fontSize: "20px",
            fill: "#fff",
        }).setScrollFactor(0);

        // ----------------------------
        // 🪙 COINS (OPTIONAL GAME LOOP)
        // ----------------------------
        this.coins = this.physics.add.group();

        for (let i = 0; i < 5; i++) {
            let coin = this.coins.create(200 + i * 120, 200, "coin");
            coin.body.setAllowGravity(false);
        }

        this.physics.add.overlap(
            this.player,
            this.coins,
            this.collectCoin,
            null,
            this
        );

        // ----------------------------
        // 👾 ENEMY (OPTIONAL DANGER SYSTEM)
        // ----------------------------
        this.enemy = this.physics.add.sprite(900, 300, "enemy");
        this.enemy.setVelocityX(100);
        this.enemy.setBounce(1);
        this.enemy.setCollideWorldBounds(true);

        this.physics.add.collider(
            this.player,
            this.enemy,
            this.hitEnemy,
            null,
            this
        );

        // ----------------------------
        // 🎞 ANIMATIONS (YOUR ORIGINAL)
        // ----------------------------
        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("player", {
                start: 0,
                end: 3,
            }),
            frameRate: 6,
            repeat: -1,
        });

        this.anims.create({
            key: "run",
            frames: this.anims.generateFrameNumbers("player", {
                start: 4,
                end: 9,
            }),
            frameRate: 10,
            repeat: -1,
        });

        // start idle animation
        this.player.anims.play("idle");
    }

    // ----------------------------
    // 🪙 COIN COLLECT LOGIC (ADDED)
    // ----------------------------
    collectCoin = (player, coin) => {
        coin.destroy();
        this.score += 10;
        this.scoreText.setText("Score: " + this.score);
    };

    // ----------------------------
    // 👾 ENEMY HIT LOGIC (ADDED)
    // ----------------------------
    hitEnemy = () => {
        this.scene.restart(); // reset level
    };

    update() {
        const speed = 200;

        this.player.setVelocity(0);

        let moving = false;

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-speed);
            moving = true;
        }

        if (this.cursors.right.isDown) {
            this.player.setVelocityX(speed);
            moving = true;
        }

        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-speed);
            moving = true;
        }

        if (this.cursors.down.isDown) {
            this.player.setVelocityY(speed);
            moving = true;
        }

        // 👉 animation switching (YOUR ORIGINAL LOGIC KEPT)
        if (moving) {
            if (this.player.anims.currentAnim?.key !== "run") {
                this.player.anims.play("run", true);
            }
        } else {
            if (this.player.anims.currentAnim?.key !== "idle") {
                this.player.anims.play("idle", true);
            }
        }

        // ----------------------------
        // 🧠 LEVEL COMPLETE LOGIC
        // ----------------------------
        if (this.player.x > this.goalX) {
            this.scene.start("level2", {
                score: this.score, // pass score to next level
            });
        }
    }
}