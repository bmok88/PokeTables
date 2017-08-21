import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import PokeRow from './PokeRow';
import { addPokemon } from '../actions/index';

class PokeBody extends React.Component {
  componentDidMount() {
    // console.log(this.props.dispatch(addPokemon()), 'pokemon')
  }

  render() {
    return (
      <PokeRow />
    );
  }
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(PokeBody);