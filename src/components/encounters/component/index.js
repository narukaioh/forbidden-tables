import { useState } from "react"
import MessageError from "../../message-error"
import EncounterItem from "./encounter-item"
import EncounterForm from "./encounter-form"

import "./encounter.css"

const Encounter = () => {
  const [encounter, setEncounter] = useState(false)
  const [error, setError] = useState()

  return (
    <div className="container">
      <MessageError {...{ error }} />
      <EncounterForm {...{ setEncounter, setError }} />
      {encounter ? <EncounterItem item={encounter} /> : null}
    </div>
  )
}

const EncounterPage = () => {
  return (
    <div className="app">
      <p>
        <strong>Encontros aleatórios</strong>
      </p>
      <Encounter />
      <span className="developed-by">
        by <a href="https://github.com/narukaioh">@narukaioh</a>
      </span>
    </div>
  )
}

export default EncounterPage
