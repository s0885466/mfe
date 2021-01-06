import React from 'react';
import {Switch, Route, BrowserRouter, Link} from "react-router-dom";
import BeerList from "./components/BeerList";

const Li = () => (
  <div>
    <Link to={'/beers'}>К Пиву</Link>
  </div>
);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/beers" component={BeerList}/>
          <Route exact path="/" component={Li}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
