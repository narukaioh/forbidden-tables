import DiceComponent from '../components/dice'
import PageDefault from './page-default'

const DicePage = () => {
  return (
    <PageDefault>
      
      <header className="dices-header">
        <p>
          <strong>Atributo</strong>
          <input type="number" placeholder="Ex: 2, 3" />
        </p>

        <p>
          <strong>Perícias</strong>
          <input type="number" placeholder="Ex: 2, 3" />
        </p>
        <p>
          <strong>Equipamento</strong>
          <input type="number" placeholder="Ex: 2, 3" />
        </p>
      </header>
      
      <p className="paragraph-container">
        <button type="button">Rolar dados!</button>
        <button type="button">Push!</button>
      </p>

      <div className="dices-container">
        <h2>Atributo</h2>
        <div className="dice-container">
          {[1,3,4,3,3,2,6].map(number => <DiceComponent color="white" value={number} /> )}
        </div>
        <h2>Perícia</h2>
        <div className="dice-container">
          {[1,3,4,3,3,2,6].map(number => <DiceComponent color="red" value={number} /> )}
        </div>
        <h2>Equipamento</h2>
        <div className="dice-container">
          {[1,3,4,3,3,2,6].map(number => <DiceComponent color="black" value={number} /> )}
        </div>
      </div>
    </PageDefault>
  )
}

export default DicePage
