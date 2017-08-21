import React from 'react';

const PokeRow = ({ name, id, height, weight, sprites, types }) => {
  console.log(types[0].type.name, types[1].type.name)
  return (
    <tr>
      <td>{name}</td>
      <td>{id}</td>

      <td>{height}</td>
      <td>{weight}</td>
    </tr>
  );
};

export default PokeRow;