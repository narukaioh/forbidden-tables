import './index.css'

const DiceComponent = ({ color, value }) => {
  let label = value
  if (value === 1 && color !== 'red') { label = '☠' }
  if (value === 6) { label = '⚔' }

  return (
    <div className={`dice-component ${color}`}>
      {label}
    </div>
  )
}

export default DiceComponent