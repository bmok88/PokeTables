import React from 'react';

export default class PokeHeaders extends React.Component {
  render() {
    return (
      <tr>
        <th>Name</th>
        <th>Number</th>
        <th>Types</th>
        <th>Image</th>
      </tr>
    );
  }
};