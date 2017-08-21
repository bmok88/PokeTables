import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import AddPokemon from '../containers/AddPokemon';
import PokeTable from './PokeTable';
import { getAllPokemon, addPokemon } from '../actions/index';

class App extends React.Component {
  componentDidMount() {
    axios.get(this.props.pokeAPI + '/?limit=10')
      .then(results => {
        const pokemonList = results.data.results;

        pokemonList.forEach(pokemon => {
          axios.get(pokemon.url).then(result => {
            const pokemon = result.data;
            console.log('pokemon', pokemon)
            const pokemonData = {
              name: pokemon.name,
              id: pokemon.id,
              height: pokemon.height,
              weight: pokemon.weight,
              types: pokemon.types
            };

            console.log(pokemonData);
            this.props.dispatch(addPokemon(pokemonData));
          });
        });
      });
  }
  render() {
    return (
      <div>
        <h1>React-Redux PokéTable</h1>
        <AddPokemon class="add"/>
        <PokeTable pokemon={this.props.pokemon} pokeAPI={this.props.pokeAPI}/>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);