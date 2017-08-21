import App from './components/App';
import PokemonData from './pokemonData';
import pokeTable from './reducers/root';

import React from 'react';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';

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
    <App pokemon={PokemonData}/>
  </Provider>,
  document.getElementById('app')
);