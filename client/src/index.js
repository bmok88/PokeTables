import App from './components/App';
import pokeTable from './reducers/root';

import React from 'react';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';

const pokeAPI = 'http://pokeapi.co/api/v2/pokemon';
// ReactDOM.render(
//   <Provider store={createStore(todoApp)}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// );
const store = createStore(
  pokeTable,
  compose(
    applyMiddleware(logger, thunk)
  )
);

render(
  <Provider store={store}>
    <App pokeAPI={pokeAPI}/>
  </Provider>,
  document.getElementById('app')
);