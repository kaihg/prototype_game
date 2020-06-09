import { expect } from 'chai';
import {Live} from '@model/live';
import {Feature, FlyFeature} from '@model/feature';

describe('The Live', () => {
    it('can be stronger', () => {
        let live = new Live();
        let curStr = live.strong;
        live.stronger(1);

        expect(live.strong).equal(curStr + 1 );
    });

    it('can have many features', ()=>{
        let live = new Live();
        expect(live.features).is.empty;

        let f = new FlyFeature();
        live.addFeature(f)
        live.addFeature(f)

        expect(live.features).include(f);
        expect(live.features.length).equal(2);
    })
});