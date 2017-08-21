import React from 'react';

import AddPokemon from '../containers/AddPokemon';
import PokeTable from './PokeTable';

const App = (pokemon) => (
  <div>
    <h1>React-Redux PokéTable</h1>
    <AddPokemon class="add"/>
    <PokeTable pokemon={pokemon}/>
  </div>
);

export default App;