import React from 'react';

import PokeRow from './PokeRow';

const PokeBody = ({ pokemon }) => {

  const pokeArray = [...pokemon];

  return (
    <PokeRow />
  );

    // {pokemon.map => (p => {
    //   <PokeRow pokemon={p}/>
    // })
    // }

};

export default PokeBody;