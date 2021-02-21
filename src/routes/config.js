import EncounterPage from "../components/encounters/component"
import LegendPage from '../components/legend'

export const ROUTES_CONFIG = [
  { privated: false, path: '/', component: EncounterPage },
  { privated: false, path: '/encounters', component: EncounterPage },
  { privated: false, path: '/legend', component: LegendPage },
  { privated: false, path: '*', component: EncounterPage },
];