import { Feature } from './feature'
import {uuid} from "../common/random";

export class Live {

    private id;
    features: Array<Feature> = [];

    strong = 0;
    weight = 1;

    constructor() {
        this.id = uuid();
    }

    stronger(moreStr: number) {
        this.strong += moreStr;
    }

    addFeature(feature: Feature){
        this.features.push(feature);
    }
}