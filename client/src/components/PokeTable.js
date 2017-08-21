import React from 'react';

import PokeBody from './PokeBody';
import PokeHeaders from '../containers/PokeHeaders';

const PokeTable = ({ pokemon }) => (
  <table>
    <thead>
      <PokeHeaders />
    </thead>
    <tbody>
      <PokeBody pokemon={pokemon.pokemon}/>
    </tbody>
  </table>
);

export default PokeTable;