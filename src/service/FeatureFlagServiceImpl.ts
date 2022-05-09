import { FeatureFlagService } from './FeatureFlagService'
import { FeatureFlag } from '../domain/FeatureFlag'

export class FeatureFlagServiceImpl implements FeatureFlagService {
  //TODO: Change type any
  private featureFlags: any

  permitUser(userId: string, feature: FeatureFlag): void {
    // TODO 1: permit user [userId] for the feature [feature]
  }

  isUserPermitted(userId: string, feature: FeatureFlag): boolean {
    //TODO 2: Return if user [userId] is permitted to access the feature [feature]
    return false
  }

  getPermittedUsers(feature: FeatureFlag): string[] {
    // TODO 3: Get all permitted users [string[]] for the feature [feature]
    return []
  }
}
