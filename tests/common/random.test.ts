import {uuid} from "../../src/common/random";
import { expect } from 'chai';

describe("The random", ()=>{
    it('can generate uuid, not repeat',()=>{
        let cache = [];
        for (let i = 0 ;i< 10 ; i++){
            let r = uuid();
            console.log(r)
            expect(cache).not.include(r);
            cache.push(r);
        }
    })
})