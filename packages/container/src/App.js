import React, {lazy, Suspense} from "react";
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const BeersLazy = lazy(() => import("./components/BeersApp"));

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
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/beers" component={BeersLazy}/>
        <Route exact path="/marketing" component={MarketingLazy}/>
      </Switch>
      </Suspense>
    </BrowserRouter>
  </>
};
