import {Live} from "../model/live";

export class StrategyController{

    private mainLive: Live;

    constructor(live: Live) {
        this.mainLive = live;
    }

    bePowerful(): void {
        this.mainLive.stronger(1);
    }

}