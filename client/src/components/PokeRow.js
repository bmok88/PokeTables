import React from 'react';

const PokeRow = ({ name, id, height, weight, sprites, types }) => {
  let imageUrl = sprites.front_default;
  let typeOne = types[0].type.name;
  let typeTwo = types[1] ? types[1].type.name : '';
  console.log(name, id, height, weight)
  return (
    <tr>
      <td>{id}</td>
      <td>{name[0].toUpperCase() + name.slice(1)}</td>
      <td>{height / 10}</td>
      <td>{weight / 10}</td>
      <td>{typeOne + ' ' + typeTwo}</td>
      <td><img src={imageUrl}></img></td>
    </tr>
  );
};

export default PokeRow;