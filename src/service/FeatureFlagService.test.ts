import { FeatureFlagServiceImpl } from './FeatureFlagServiceImpl'
import { FeatureFlag } from '../domain/FeatureFlag'

describe('FeatureFlag service tests', () => {
  it('should permit user for feature_1', () => {
    const service = new FeatureFlagServiceImpl()

    const flag = new FeatureFlag('feature_1')
    service.permitUser('1', flag)
    expect(service.isUserPermitted('1', flag)).toBeTruthy()
  })

  it('should permit users for 50%', () => {
    const service = new FeatureFlagServiceImpl()
    const flag = new FeatureFlag('feature_2', 50)

    service.permitUser('1', flag)
    service.permitUser('2', flag)
    service.permitUser('3', flag)
    service.permitUser('4', flag)

    expect(service.getPermittedUsers(flag)).toHaveLength(2)
  })

  it('should permit users for 0%', () => {
    const service = new FeatureFlagServiceImpl()
    const flag = new FeatureFlag('feature_2', 0)

    service.permitUser('1', flag)
    service.permitUser('2', flag)
    service.permitUser('3', flag)
    service.permitUser('4', flag)

    expect(service.getPermittedUsers(flag)).toHaveLength(0)
  })
})
