import React from 'react';

export default class PokeHeaders extends React.Component {
  render() {
    return (
      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>Height (m)</th>
        <th>Weight (kg)</th>
        <th>Types</th>
        <th>Image</th>
      </tr>
    );
  }
};