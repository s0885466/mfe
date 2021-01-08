import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import {createMemoryHistory} from 'history';

const mount = (el) => {
  const history = createMemoryHistory();

  ReactDOM.render(
    <App history={history}/>,
    el
  )
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

//to launch our application in container
export {mount}
