import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";

const mount = (el) => {
  ReactDOM.render(
    <App/>,
    el
  )
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_beers-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

//to launch our application in container
export {mount}
