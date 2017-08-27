import React from 'react';

const PokeRow = ({ name, id, height, weight, sprites, types, columnToHide }) => {
  let imageUrl = sprites.front_default;
  let typeOne = types[0].type.name[0].toUpperCase() + types[0].type.name.slice(1);
  let typeTwo = types[1] ? types[1].type.name[0].toUpperCase() + types[1].type.name.slice(1) : null;

  if (!typeTwo) {
    return (
      <tr>
        <td className="number">{id}</td>
        <td className="name">{name[0].toUpperCase() + name.slice(1)}</td>
        <td className="height">{height / 10}</td>
        <td className="weight">{weight / 10}</td>
        <td className="types">{typeOne}</td>
        <td className="sprite"><img src={imageUrl}></img></td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td className="number">{id}</td>
        <td className="name">{name[0].toUpperCase() + name.slice(1)}</td>
        <td className="height">{height / 10}</td>
        <td className="weight">{weight / 10}</td>
        <td className="types">{typeOne + '/' + typeTwo}</td>
        <td className="sprite"><img src={imageUrl}></img></td>
      </tr>
    );
  }
};

export default PokeRow;