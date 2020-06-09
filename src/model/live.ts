import { Feature } from './feature'

export class Live {

    features: Array<Feature> = [];

    strong = 0;
    weight = 1;

    stronger(moreStr: number) {
        this.strong += moreStr;
    }

    addFeature(feature: Feature){
        this.features.push(feature);
    }
}