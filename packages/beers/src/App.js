import React from 'react';
import {Switch, Route, BrowserRouter, Link} from "react-router-dom";
import BeerList from "./components/BeerList";
import styled from 'styled-components';

const Li = () => (
  <div>
    <Link to={'/beers/list'}>К Пиву</Link>
  </div>
);

const App = () => {

  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

  return (
    <div>
      <Title>Hello Beers</Title>
      <BrowserRouter>
        <Switch>
          <Route path="/beers/list" component={BeerList}/>
          <Route path="/beers" component={Li}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
