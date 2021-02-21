import { useState, useEffect } from 'react'
import PageDefault from '../../pages/page-default'
import { getLegend } from './legend'

import './legend.css'

const LegendPage = () => {
  const [legend, setLegend] = useState(getLegend())

  const handleClick = (e) => {
    setLegend(getLegend())
  }

  useEffect(() => {
    setLegend(getLegend())
  }, [])

  return (
    <PageDefault>
      <div className="legend">
        <h1>Gerador de Lendas</h1>
        <p><button type="button" onClick={handleClick}>clique aqui gerar outra lenda</button></p>
        <p><strong>Muito tempo atras</strong>, {legend?.whenHappened?.when} ({legend?.whenHappened?.age} anos),</p>
        <p><strong>havia um(a)</strong> {legend?.thereWasOne?.someone} {legend?.thereWasOne?.adjective}</p>
        <p><strong>que buscava</strong> {legend?.lookingFor?.something}</p>
        <p><strong>por causa de</strong> {legend?.because?.something}</p>
        <p><strong>e viajou para</strong> {legend?.traveledTo?.somewhere}</p>
        <p><strong>localizado(a)</strong> {legend?.locatedIn?.somewhere}</p>
        <p><strong>em um (a)</strong> {legend?.terrainType}</p>
        <p><strong>na direção</strong> {legend?.direction}</p>
        <p><strong>como diz a lenda, dizem que ele/ela</strong> {legend?.whatHappened?.something}</p>
        <p><strong>e que no lugar há</strong> {legend?.thatInPlace?.exist}</p>
        <p><strong>... mas também</strong> {legend?.thatInPlaceToo?.enemies}</p>
      </div>
    </PageDefault>
  )
}

export default LegendPage