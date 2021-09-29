import {FeatureFlagService} from "./FeatureFlagService";
import {FeatureFlag} from "../domain/FeatureFlag";

enum Type {
    Permitted,
    Prohibited
}

export class FeatureFlagServiceImpl implements FeatureFlagService {

    //TODO: Change type any
    private featureFlags: Map<FeatureFlag, Map<Type, string[]>>;

    constructor() {
        this.featureFlags = new Map<FeatureFlag, Map<Type, string[]>>()
    }

    permitUser(userId: string, feature: FeatureFlag): void {
        this.populateIfNotExisting(feature)
        const users = this.featureFlags.get(feature)

        const permittedUsers = users.get(Type.Permitted)
        const prohibitedUsers = users.get(Type.Prohibited)

        const desiredPercentage = feature.percentagePermitted;
        const currentPercentage = 100 * permittedUsers.length / (permittedUsers.length + prohibitedUsers.length)

        if (currentPercentage < desiredPercentage) {
            permittedUsers.push(userId)
        } else {
            prohibitedUsers.push(userId)
        }
    }

    isUserPermitted(userId: string, feature: FeatureFlag): boolean {
        return this.featureFlags.get(feature).get(Type.Permitted).includes(userId)
    }

    getPermittedUsers(feature: FeatureFlag): string[] {
        return this.featureFlags.get(feature).get(Type.Permitted)
    }

    private populateIfNotExisting(feature: FeatureFlag) {
        if (!this.featureFlags.get(feature)) {
            const users = new Map<Type, string[]>()
            users.set(Type.Permitted, [])
            users.set(Type.Prohibited, [])
            this.featureFlags.set(feature, users)
        }
    }
}
