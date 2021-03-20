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
    total: {
      success: 0,
      fail: 0
    }
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

    let total = {
      success: success.attribute + success.skill + success.gear,
      fail: fail.attribute + fail.gear,
    }

    setState({
      ...state,
      dices,
      success,
      fail,
      total,
    })
  }

  const handlePush = (event) => {

    let quantity = {
      attribute: state.attribute - (state.success.attribute + state.fail.attribute),
      skill: state.skill - state.success.skill,
      gear: state.gear - (state.success.gear + state.fail.gear)
    }

    console.log({ state, quantity})

    let dices = {
      attribute: createListValues(quantity.attribute),
      skill: createListValues(quantity.skill),
      gear: createListValues(quantity.gear)
    }

    let success = {
      attribute: state.success.attribute + countValues(dices.attribute, 6),
      skill: state.success.skill + countValues(dices.skill, 6),
      gear: state.success.gear + countValues(dices.gear, 6)
    }

    let fail = {
      attribute: state.fail.attribute + countValues(dices.attribute, 1),
      gear: state.fail.gear + countValues(dices.gear, 1)
    }

    let total = {
      success: success.attribute + success.skill + success.gear,
      fail: fail.attribute + fail.gear,
    }

    setState({
      ...state,
      dices,
      success,
      fail,
      total,
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
        <button type="button" onClick={handlePush}>Push!</button>
      </p>

      <div className="dices-result-container">
        <div className="success">
        { [...Array(state.success.attribute)].map((i, index) => <DiceComponent key={index} value={6} color="white" />) }
        { [...Array(state.success.skill)].map((i, index) => <DiceComponent key={index} value={6} color="red" />) }
        { [...Array(state.success.gear)].map((i, index) => <DiceComponent key={index} value={6} color="black" />) }
        </div>
        <div className="fail">
        { [...Array(state.fail.attribute)].map((i, index) => <DiceComponent key={index} value={1} color="white" />) }
        { [...Array(state.fail.gear)].map((i, index) => <DiceComponent key={index} value={1} color="black" />) }
        </div>
      </div>

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
