import React from 'react';
import {Switch, Route, Router} from "react-router-dom";
import {StylesProvider} from '@material-ui/core/styles';
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

const App = ({history}) => {
  return (
    <div>
      <StylesProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/pricing" component={Pricing}/>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
