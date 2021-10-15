import React from 'react';
import ReactDOM, { hydrate, render } from "react-dom";
import App from './App';


ReactDOM.render(<App/>, document.getElementById("root"));
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}