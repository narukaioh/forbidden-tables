import { getDemonAttack } from './demon'

describe("demon.js", () => {
  it("conseguir criar um demon com recursividade", () => {
    const result = getDemonAttack(63)
    expect(result.length).toBeGreaterThanOrEqual(3)
  })

  it("conseguir criar um demon com recursividade", () => {
    const result = getDemonAttack(66)
    expect(result.length).toBeGreaterThanOrEqual(4)
  })

})