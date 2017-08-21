import React from 'react';
import axios from 'axios';

import AddPokemon from '../containers/AddPokemon';
import PokeTable from './PokeTable';
const pokeAPI = 'http://pokeapi.co/api/v2/pokemon/?limit=811';

class App extends React.Component {
  componentWillMount() {
    axios.get(pokeAPI)
      .then(results => {
        console.log('results', results);
      });
  }
  render() {
    return (
      <div>
        <h1>React-Redux PokéTable</h1>
        <AddPokemon class="add"/>
        <PokeTable pokemon={this.props}/>
      </div>
    );
  }
};

export default App;