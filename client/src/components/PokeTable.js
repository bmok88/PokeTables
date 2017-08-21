import React from 'react';
import axios from 'axios';

import PokeBody from './PokeBody';
import PokeHeaders from '../containers/PokeHeaders';

class PokeTable extends React.Component {
  componentWillMount() {
    const { pokemon, pokeAPI } = this.props;
    let url;
    console.log(pokemon, pokeAPI)
    // pokemon.forEach(p => {
    //   url = p.url;
    //   axios.get(url)
    //     .then(results => {
    //       console.log('resultssds', results);
    //     });
    // });
  }

  render() {
    return (
      <table>
        <thead>
          <PokeHeaders />
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
};

export default PokeTable;
          // <PokeBody pokemon={pokemon.pokemon}/>