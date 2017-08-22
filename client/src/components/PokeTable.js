import React from 'react';
import axios from 'axios';

import PokeBody from './PokeBody';
import PokeHeaders from '../containers/PokeHeaders';

const PokeTable = () => (
  <table>
    <thead>
      <PokeHeaders />
    </thead>

      <PokeBody />

  </table>
);


export default PokeTable;
          // <PokeBody pokemon={pokemon.pokemon}/>