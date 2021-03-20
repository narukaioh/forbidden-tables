import { d6 } from '../../dices'
import './index.css'

const DiceComponent = ({ color, value }) => {
  return (
    <div className={`dice-component ${color}`}>
      { value }
    </div>
  )
}

export default DiceComponent