import { randomInt } from './randomInt'

export const d6 = ({ bonus, rolls }) => {
  if (!bonus) {
    bonus = 0
  }
  if (!rolls) {
    rolls = 1
  }

  return rolls * randomInt(1, 6) + bonus
}

export const d8 = ({ bonus, rolls }) => {
  if (!bonus) {
    bonus = 0
  }
  if (!rolls) {
    rolls = 1
  }

  return rolls * randomInt(1, 8) + bonus
}

export const d3 = ({ bonus, rolls }) => {
  if (!bonus) {
    bonus = 0
  }
  if (!rolls) {
    rolls = 1
  }

  return rolls * randomInt(1, 3) + bonus
}

export const d66 = () => parseInt(`${d6({})}${d6({})}`)
