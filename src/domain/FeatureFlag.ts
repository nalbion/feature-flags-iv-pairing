export class FeatureFlag {
  key: string
  percentagePermitted: number

  constructor(key: string, percentagePermitted = 100) {
    this.key = key
    this.percentagePermitted = percentagePermitted
  }
}
