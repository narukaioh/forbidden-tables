import { useState } from 'react'
import { getEncounter } from '../index'
import MessageError from '../../message-error'

import './encounter.css'

const EncounterForm = ({ setEncounter, setError }) => {
  const [state, setState] = useState({ d66: null, type: null })

  const handlerInput = (event) => {
    const { value, name } = event.target
    setState({ ...state, [name]: value })
  }

  const handlerClick = () => {
    const { d66, type } = state
    if (valid(d66) && type) {
      setError(false)
      setEncounter(getEncounter({ d66, type }))
    } else {
      setError(`Voce precisa preencher com valores válidos:
       11-16, 21-26, 31-36, 41-46, 51-56 e 61-66.
       Verifique também se escolheu um tipo de terreno.`)
    }
  }

  const valid = (value) => {
    const values = [
      11,12,13,14,15,16,
      21,22,23,24,25,26,
      31,32,33,34,35,36,
      41,42,43,44,45,46,
      51,52,53,54,55,56,
      61,62,63,64,65,66
    ]

    return values.includes(parseInt(value))
  }

  return (
    <form className="encounter-form">
      <input name="d66" placeholder="Digite o resultado do D66" type="number" onChange={handlerInput} />

      <select name="type" onChange={handlerInput}>
        <option>Opção de terreno</option>
        <option value="0">Planície</option>
        <option value="1">Floresta</option>
        <option value="2">Floresta Sombria</option>
        <option value="3">Colina</option>
        <option value="4">Montanha</option>
        <option value="5">Lago</option>
        <option value="6">Pântano</option>
        <option value="7">Charco</option>
        <option value="8">Ruínas</option>
      </select>
      <button type="button" onClick={handlerClick}>Encontrar!</button>
    </form>
  )
}

const EncounterItem = ({ item }) => {
  return (<div className="encounter-item">
    <h1>{item.title}</h1>
    <p className="resume">{item.resume}</p>
    <p className="description">{item.description}</p>
    { item.type ? <p><strong className="type">Tipos de Terreno:</strong> {item.type}</p> : null }
    <div className="table">{item.table}</div>
  </div>)
}

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