import { expect } from 'chai';
import { Natural} from '@model/natural';

describe('The Natural', () => {
    it('has no live in it at startup', () => {
        let natural = new Natural();
        expect(natural.lives).is.empty

    });
});