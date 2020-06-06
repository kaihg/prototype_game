import { expect } from 'chai';
import {Live} from '@model/live';

describe('The Live', () => {
    it('can be stronger', () => {
        let live = new Live();
        let curStr = live.strong;
        live.stronger(1);

        expect(live.strong).equal(curStr + 1 );
    });
});