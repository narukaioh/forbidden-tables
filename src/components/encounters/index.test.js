import { getEncounter } from './index'
describe("encounter", () => {
  it('should be return the first encounter when d66 >= 11 and d66 <=36', () => {
    const forest = 1
    const encounter = getEncounter({ d66: 11, type: forest })

    expect(encounter.id).toBe(0)
  })
})