import { expect } from 'chai';

describe('It should test', () => {
    it('even nothing want to do ', () => {
        let a = 1+1;
        expect(a).equal(2);
        expect(a).not.equal(1);
    });
});