import React from 'react';
import {Switch, Route, Router, Link} from "react-router-dom";
import BeerList from "./components/BeerList";
import styled from 'styled-components';

const App = ({history}) => {

  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

  return (
    <div>
      <Title>Hello Beers</Title>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={BeerList}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
