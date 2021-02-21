import { NavLink } from 'react-router-dom'
import './menu.css'

const Menu = () => {
  return (
    <ul className="menu">
      <li><NavLink to="/encounters">Encontros aleatório</NavLink></li>
      <li><NavLink to="/legend">Gerador de lendas</NavLink></li>
      <li><NavLink to="/demons">Gerador de demônios</NavLink></li>
    </ul>
  )
}

export default Menu