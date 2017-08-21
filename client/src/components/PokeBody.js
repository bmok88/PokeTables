import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import PokeRow from './PokeRow';
import { addPokemon } from '../actions/index';

class PokeBody extends React.Component {

  render() {
    for (let i = 1; i < window.localStorage.length; i++) {
      let pokemon = JSON.parse(window.localStorage[i]);
      return (
        <PokeRow {...pokemon} />
      );
    }
  }
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(PokeBody);