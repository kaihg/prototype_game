export class LoadingScene extends Phaser.Scene {

    private info: Phaser.GameObjects.Text;
    private arrow;

    constructor() {
        super({ "key": "LoadingScene" })
    }

    create(): void {
        this.info = this.add.text(20, 20, "test", { font: '24px Arial Bold', fill: '#FBFBAC' });
        this.arrow = this.add.image(200,200,"arrow_d");
    }

    preload(): void {
        this.load.image("arrow_d", 'assets/arrow_d.png');
    }
}