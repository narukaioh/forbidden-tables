import { useState } from 'react'
import MessageError from '../../message-error'
import EncounterItem from './encounter-item'
import EncounterForm from './encounter-form'

import './encounter.css'

const Encounter = () => {
  const [encounter, setEncounter] = useState(false)
  const [error, setError] = useState()

  return (
    <div className="encounter-container">
      <MessageError {...{ error }} />
      <EncounterForm {...{ setEncounter, setError }}/>
      { encounter ? <EncounterItem item={encounter} /> : null }
    </div>
  )
}

export default Encounter