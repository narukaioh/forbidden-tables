import EncounterPage from "../components/encounters/component"
import LegendPage from '../components/legend'
import DemonsPage from '../components/demons'

export const ROUTES_CONFIG = [
  { privated: false, path: '/', component: EncounterPage },
  { privated: false, path: '/encounters', component: EncounterPage },
  { privated: false, path: '/legend', component: LegendPage },
  { privated: false, path: '/demons', component: DemonsPage },
  { privated: false, path: '*', component: EncounterPage },
];