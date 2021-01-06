import React from "react";
import MarketingApp from "./components/MarketingApp";
import BeersApp from "./components/BeersApp";

import {Switch, Route, BrowserRouter, Link} from "react-router-dom";

export default () => {
  return <>
    <h1>Hi this is a container !!!</h1>
    <hr/>
    <BrowserRouter>
      <Switch>
        <Route path="/beers" component={BeersApp}/>
        <Route exact path="/" component={MarketingApp}/>
      </Switch>
    </BrowserRouter>
  </>
};
