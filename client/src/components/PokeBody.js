import React from 'react';
import { connect } from 'react-redux';

import PokeRow from './PokeRow';

const PokeBody = ({ pokemon }) => {
  return (
    <tbody>
      {pokemon.map((p, i) => {
          return <PokeRow key={p.id} {...p} />;
      })}
    </tbody>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(PokeBody);
