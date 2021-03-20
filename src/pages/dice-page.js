import { useState } from 'react'
import DiceComponent from '../components/dice'
import PageDefault from './page-default'
import { d6 } from '../dices'

const DicePage = () => {

  const [state, setState] = useState({ 
    attribute: 0, 
    skill: 0, 
    gear: 0,
    attributesDices: [],
    skillDices: [],
    gearDices: []
  })

  const handleChange = (event) => {
    const { value, name } = event.target
    setState({
      ...state,
      [name]: parseInt(value)
    })
  }

  const handleClick = (event) => {
    let attributesDices = [...Array(state.attribute)].map(i => d6({}))
    let skillDices = [...Array(state.skill)].map(i => d6({}))
    let gearDices = [...Array(state.gear)].map(i => d6({}))

    setState({
      ...state,
      attributesDices,
      skillDices,
      gearDices
    })
  }

  return (
    <PageDefault>
      
      <header className="dices-header">
        <p>
          <strong>Atributo</strong>
          <input onChange={handleChange} type="number" name="attribute" placeholder="Ex: 2, 3" />
        </p>

        <p>
          <strong>Perícia</strong>
          <input onChange={handleChange} type="number" name="skill" placeholder="Ex: 2, 3" />
        </p>
        <p>
          <strong>Equipamento</strong>
          <input onChange={handleChange} type="number" name="gear" placeholder="Ex: 2, 3" />
        </p>
      </header>
      
      <p className="paragraph-container">
        <button type="button" onClick={handleClick}>Rolar dados!</button>
        <button type="button">Push!</button>
      </p>

      <div className="dices-container">
        <h2>Atributo</h2>
        <div className="dice-container">
          {state.attributesDices.map((number, index) => <DiceComponent key={index} color="white" value={number} /> )}
        </div>
        <h2>Perícia</h2>
        <div className="dice-container">
          {state.skillDices.map((number, index) => <DiceComponent key={index} color="red" value={number} /> )}
        </div>
        <h2>Equipamento</h2>
        <div className="dice-container">
          {state.gearDices.map((number, index) => <DiceComponent key={index} color="black" value={number} /> )}
        </div>
      </div>
    </PageDefault>
  )
}

export default DicePage
