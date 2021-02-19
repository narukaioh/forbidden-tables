import { encounters } from './data/encouters-db'
import { table } from './data/table-db'

export const getEncounter = ({ d66, type }) => {
  let id = d66

  if (d66 >= 11 && d66 <= 36) {
    id = "11-36"
  }

  return encounters.find(encounter => encounter.id === table[id][type])
}