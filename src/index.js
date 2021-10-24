import React from 'react';
import ReactDOM from 'react-dom';
import App from './views';
import reportWebVitals from './reportWebVitals';
import services from "./infrastructure";
import { Provider } from 'react-redux';
import { configureStore } from "./application/store";
import { GlobalStyles } from "./mainStyles";

ReactDOM.render(
  <Provider store={configureStore(services)}>
    <GlobalStyles> 
      <App />
    </GlobalStyles>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
