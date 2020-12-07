import React from "react";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import ReactDOM from "react-dom"

import routesConfig from "./routes/routesConfig";
import AppRoute from "./routes/AppRoute";

export class App extends React.Component {
  render() {
    return ( 
      <Router>
        <Switch>
          {
            routesConfig.map(
              route =>(
                <AppRoute 
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  auth={route.isPrivate}
                /> 
              )
            )
          }
          <Route exact path="/" render={() => (<Redirect to="/home"/>)} />
        </Switch>
      </Router>
    );
  }
}
ReactDOM.render( 
  <App/> ,
  document.getElementById("root")
);
