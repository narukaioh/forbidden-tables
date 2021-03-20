import { useState } from 'react'
import DiceComponent from '../components/dice'
import PageDefault from './page-default'
import { d6 } from '../dices'

const DicePage = () => {

  const [state, setState] = useState({ 
    attribute: 0, 
    skill: 0, 
    gear: 0,
    dices: {
      attribute: [],
      skill: [],
      gear: [],
    },
    success: {
      attribute: 0,
      skill: 0,
      gear: 0,
    },
    fail: {
      attribute: 0,
      gear: 0,
    },
  })

  const handleChange = (event) => {
    const { value, name } = event.target
    setState({
      ...state,
      [name]: parseInt(value)
    })
  }

  const countValues = (arr, value) => arr.filter(i => i === value).length

  const createListValues = (length) => [...Array(length)].map(i => d6({}))

  const handleClick = (event) => {
    let dices = { 
      attribute: createListValues(state.attribute),
      skill: createListValues(state.skill),
      gear: createListValues(state.gear)
    }

    let success = {
      attribute: countValues(dices.attribute, 6),
      skill: countValues(dices.skill, 6),
      gear: countValues(dices.gear, 6)
    }

    let fail = {
      attribute: countValues(dices.attribute, 1),
      gear: countValues(dices.gear, 1)
    }

    setState({
      ...state,
      dices,
      success,
      fail,
    })
  }

  const handlePush = (event) => {

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
        <button type="button" onClick={handlePush}>Push!</button>
      </p>

      <div className="dices-container">
        <h2>Atributo</h2>
        <div className="dice-container">
          {state.dices.attribute.map((number, index) => <DiceComponent key={index} color="white" value={number} /> )}
        </div>
        <h2>Perícia</h2>
        <div className="dice-container">
          {state.dices.skill.map((number, index) => <DiceComponent key={index} color="red" value={number} /> )}
        </div>
        <h2>Equipamento</h2>
        <div className="dice-container">
          {state.dices.gear.map((number, index) => <DiceComponent key={index} color="black" value={number} /> )}
        </div>
      </div>
    </PageDefault>
  )
}

export default DicePage
