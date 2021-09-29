export class FeatureFlag {
    key: string
    percentagePermitted: number;

    constructor(key: string, percentagePermitted: number = 100) {
        this.key = key;
        this.percentagePermitted = percentagePermitted
    }
}
