import { useState } from 'react'
import { getEncounter } from '../index'
import './encounter.css'

const EncounterForm = ({ setEncounter }) => {
  const [state, setState] = useState({ d66: null, type: null })

  const handlerInput = (event) => {
    const { value, name } = event.target
    setState({ ...state, [name]: value })
  }

  const handlerClick = () => {
    const { d66, type } = state
    setEncounter(getEncounter({ d66, type }))
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
  return (
    <>
      <EncounterForm setEncounter={setEncounter} />
      { encounter ? <EncounterItem item={encounter} /> : null }
    </>
  )
}

export default Encounter