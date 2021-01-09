import React from 'react';
import {Switch, Route, Router, Link} from "react-router-dom";
import BeerList from "./components/BeerList";
import styled from 'styled-components';
import { Normalize } from 'styled-normalize'

const HomeBeers = () => (
  <div>
    <h2>Главная про пиво</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, doloremque doloribus ducimus eius illo labore maiores mollitia, neque nesciunt obcaecati omnis quas quo quod quos reprehenderit similique, temporibus voluptate voluptatem!</p>
  </div>
);

const App = ({history}) => {

  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

  return (
    <div>
      <Normalize/>
      <Title>Hello Beers</Title>
      
      <Router history={history}>
        <ul>
          <li>
            <Link to={"/beers/"}>На главную пив</Link>
          </li>
          <li>
            <Link to={"/beers/list"}>К списку пив</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/beers/" component={HomeBeers}/>
          <Route path="/beers/list" component={BeerList}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
