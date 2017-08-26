import React from 'react';
import { connect } from 'react-redux';

import PokeRow from './PokeRow';
import { sortColumn } from '../helpers/sortColumn';

const getSortedPokemon = (pokemon, column) => {
  return sortColumn(pokemon, column);
};

const PokeBody = (props) => {
  const sortedPokemon = getSortedPokemon(
    props.pokemon,
    props.columnToSort
  );

  return (
    <tbody>
      {sortedPokemon.map(p => {
        return <PokeRow key={p.id} {...p} />;
      })}
    </tbody>
  );
};


const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(PokeBody);
