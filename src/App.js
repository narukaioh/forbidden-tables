import Encounter from './components/encounters/component'
import './app.css'

const App = () => {
  return (
    <div className="app">
      <p><strong>Encontros aleatórios</strong></p>
      <Encounter />

      <span className="developed-by">by <a href="https://github.com/narukaioh">@narukaioh</a></span>
    </div>
  );
}

export default App;
