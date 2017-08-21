import React from 'react';

import PokeRow from './PokeRow';

const PokeBody = ({ pokemon }) => (
  {pokemon.map => (p => {
    <PokeRow pokemon={...pokemon}/>
  })}
);

export default PokeBody;