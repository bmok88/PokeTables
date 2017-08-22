import React from 'react';

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
