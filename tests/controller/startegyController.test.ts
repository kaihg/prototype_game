import { expect } from 'chai';
import {Live} from "@model/live";
import {StrategyController} from "../../src/controller/strategyController";

describe('The Strategy', () => {
    it('can choose more powerful', () => {
        let live = new Live();
        let oldStr = live.strong;

        let controller = new StrategyController(live);

        controller.bePowerful();
        expect(live.strong).equal(oldStr + 1);
    });

});