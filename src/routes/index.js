import { Route, Switch } from "react-router-dom"

const getRoutes = (routes) => {
  return routes.map((route, i) => (
    <Route key={i} path={route.path} exact component={route.component} />
  ));
};

const Routes = ({ routes }) => <Switch>{getRoutes(routes)}</Switch>;

export default Routes;
