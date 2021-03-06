import "phaser";
import { LoadingScene } from './view/loadingScene'

const config: Phaser.Types.Core.GameConfig = {
    title: "Prototype",
    width: 800,
    height: 600,
    parent: "game",
    backgroundColor: "#18216D",
    scene: [LoadingScene]
};

export class PrototypeGame extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}

window.onload = () => {
    let game = new PrototypeGame(config);
};