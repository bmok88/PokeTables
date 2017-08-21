import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import PokeRow from './PokeRow';

class PokeBody extends React.Component {
  componentDidMount() {
    console.log(this.props, 'pokemon')
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