import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';//aca se reenderiza app x eso lo ponemos aca para q se sepa el papa.

ReactDOM.render(
  <BrowserRouter> 
      <App/>
  </BrowserRouter>, 
  document.getElementById('root')
);
