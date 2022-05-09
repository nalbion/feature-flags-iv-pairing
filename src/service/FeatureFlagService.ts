import { FeatureFlag } from '../domain/FeatureFlag'

export interface FeatureFlagService {
  permitUser(userId: string, feature: FeatureFlag): void

  isUserPermitted(userId: string, feature: FeatureFlag): boolean

  getPermittedUsers(feature: FeatureFlag): string[]
}
