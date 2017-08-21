import App from './components/App';

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// ReactDOM.render(
//   <Provider store={createStore(todoApp)}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// );

render(<App pokemon={PokemonData}/>, document.getElementById('app'));