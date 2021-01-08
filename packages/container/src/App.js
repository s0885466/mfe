import React from "react";
import MarketingApp from "./components/MarketingApp";
import BeersApp from "./components/BeersApp";

import {Switch, Route, BrowserRouter, Link} from "react-router-dom";

export default () => {
  return <>
    <BrowserRouter>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/beers'}>К Пиву</Link>
        </li>
        <li>
          <Link to={'/marketing'}>В маркетинг</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
        <Route path="/beers" component={BeersApp}/>
        <Route exact path="/marketing" component={MarketingApp}/>
      </Switch>
    </BrowserRouter>
  </>
};
