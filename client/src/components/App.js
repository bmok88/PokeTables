import React from 'react';
import axios from 'axios';

import AddPokemon from '../containers/AddPokemon';
import PokeTable from './PokeTable';

const App = () => {

  //Self-invoking function to fetch data from pokemonAPI...acts like componentDidMount()
  // (() => {
  //   axios.get(this.props.pokeAPI + '?limit=150')
  //     .then(results => {
  //       const pokemonList = results.data.results;

  //       pokemonList.forEach(pokemon => {
  //         axios.get(pokemon.url).then(result => {
  //           const pokemon = result.data;

  //           const pokemonData = {
  //             name: pokemon.name,
  //             id: pokemon.id,
  //             height: pokemon.height,
  //             weight: pokemon.weight,
  //             types: pokemon.types,
  //             sprites: pokemon.sprites
  //           };

  //           //store resouces on localstorage in case API gets too many requests
  //           window.localStorage.setItem(pokemon.id, JSON.stringify(pokemonData));
  //         });
  //       });
  //     });
  // })();
  return (
    <div>
      <h1>React-Redux PokéTable</h1>
      <AddPokemon />
      <PokeTable />
    </div>
  );
};

export default App;
  //GET request for all pokemon and relevant data, cached on localstorage
  // componentDidMount() {
    // axios.get(this.props.pokeAPI + '?limit=150')
    //   .then(results => {
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

    //         //store resouces on localstorage in case API gets too many requests
    //         window.localStorage.setItem(pokemon.id, JSON.stringify(pokemonData));
    //       });
    //     });
    //   });
  // }

