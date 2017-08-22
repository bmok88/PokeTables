import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import PokeRow from './PokeRow';
import { addPokemon } from '../actions/index';

class PokeBody extends React.Component {
  constructor(props) {
    super(props);

    this.renderRows = this.renderRows.bind(this);
  }

  renderRows(data) {
    let rows = [];

    for (let i = 1; i < data.length; i++) {
      let pokemon = JSON.parse(data[i]);

      rows.push(<PokeRow key={pokemon.id} {...pokemon} />);
    }

    return rows;
  }

  render() {
    return (
      <tbody>
        {this.renderRows(window.localStorage)}
      </tbody>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(PokeBody);