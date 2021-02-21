import PageDefault from "../../pages/page-default"
import { getDemon } from './demon'
import './demon.css'

const Demon = () => { return (<></>) }

const DemonsPage = () => {
  const demon = getDemon()
  return (
    <PageDefault>
      <div>
        <h1>Gerador de Demônios</h1>
        <p><button type="button">clique aqui para gerar outro demônio</button></p>
        <Demon entity={demon} />
      </div>
    </PageDefault>
  )
}

export default DemonsPage