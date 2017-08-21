import React from 'react';

const PokeRow = ({ pokemon }) => {
  return (
    <tr>
      <td>pokemon.name</td>
      <td>pokemon.number</td>
      <td>pokemon.types</td>
      <td>pokemon.imageUrl</td>
    </tr>
  );
};

export default PokeRow;