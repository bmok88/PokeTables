import React from 'react';
import { connect } from 'react-redux';

import { getAllPokemon } from '../actions/index';

class PokeHeaders extends React.Component {
  componentDidMount() {
    let rows = [];

    for (let i = 1; i < window.localStorage.length; i++) {
      let pokemon = JSON.parse(window.localStorage[i]);

      rows.push(pokemon);
    }
    this.props.dispatch(getAllPokemon(rows));
  }

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


const mapDispatchToProps = dispatch => {
  return dispatch;
};

export default connect(mapDispatchToProps)(PokeHeaders);
