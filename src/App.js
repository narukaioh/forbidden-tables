import { Router } from 'react-router'
import { ROUTES_CONFIG } from './routes/config'
import history from './routes/history'
import Routes from './routes'

import './app.css'

const App = () => {
  return (
    <Router history={history} >
      <Routes routes={ROUTES_CONFIG} />
    </Router>
  );
}

export default App;
