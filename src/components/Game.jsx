import { useEffect, useRef } from "react";
import Phaser from "phaser";
import Level1 from "../scenes/Level1";
import Level2 from "../scenes/Level2";

export const Game = () => {
    const gameRef = useRef(null);

    useEffect(() => {
        let player;
        let cursors;
        let scene;

        const preload = () => {
            scene.load.image("player", "/test.webp");
        };

        const create = () => {
            player = scene.physics.add.image(400, 300, "player");

            player.setCollideWorldBounds(true);

            cursors = scene.input.keyboard.createCursorKeys();
        };

        const update = () => {
            if (!player || !cursors) return;

            const speed = 200;

            player.setVelocity(0);

            if (cursors.left.isDown) {
                player.setVelocityX(-speed);
            }

            if (cursors.right.isDown) {
                player.setVelocityX(speed);
            }

            if (cursors.up.isDown) {
                player.setVelocityY(-speed);
            }

            if (cursors.down.isDown) {
                player.setVelocityY(speed);
            }
        };

        scene = new Phaser.Scene("main");

        scene.preload = preload;
        scene.create = create;
        scene.update = update;

        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: gameRef.current,
            physics: {
                default: "arcade",
                arcade: {
                    debug: false,
                },
            },
            scene: [Level1, Level2],
        };

        const game = new Phaser.Game(config);
        //this.scene.start("level2");

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div ref={gameRef} />;
};