import React from 'react';

import PokeHeaders from '../containers/PokeHeaders';

const PokeTable = ({ pokemon }) => (
  <table>
    <thead>
      <PokeHeaders />
    </thead>
    <tbody>
      <PokeBody />
    </tbody>
  </table>
);

export default PokeTable;