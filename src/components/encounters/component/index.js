import { useState } from "react"
import MessageError from "../../message-error"
import EncounterItem from "./encounter-item"
import EncounterForm from "./encounter-form"
import PageDefault from "../../../pages/page-default"

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
    <PageDefault>
      <p>
        <strong>Encontros aleatórios</strong>
      </p>
      <Encounter />
    </PageDefault>
  )
}

export default EncounterPage
