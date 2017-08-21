import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import AddPokemon from '../containers/AddPokemon';
import PokeTable from './PokeTable';
import { getAllPokemon, addPokemon } from '../actions/index';

class App extends React.Component {
  //GET request for all pokemon and relevant data, cached on localstorage
  componentDidMount() {
    // axios.get(this.props.pokeAPI + '?limit=150')
    //   .then(results => {
    //     console.log(results)
    //     const pokemonList = results.data.results;

    //     pokemonList.forEach(pokemon => {
    //       axios.get(pokemon.url).then(result => {
    //         const pokemon = result.data;

    //         const pokemonData = {
    //           name: pokemon.name,
    //           id: pokemon.id,
    //           height: pokemon.height,
    //           weight: pokemon.weight,
    //           types: pokemon.types,
    //           sprites: pokemon.sprites
    //         };
    //         console.log(pokemonData)
    //         window.localStorage.setItem(pokemon.id, JSON.stringify(pokemonData));

    //       });
    //     });
    //   });
  }
  render() {
    return (
      <div>
        <h1>React-Redux PokéTable</h1>
        <AddPokemon class="add"/>
        <PokeTable pokeAPI={this.props.pokeAPI}/>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);