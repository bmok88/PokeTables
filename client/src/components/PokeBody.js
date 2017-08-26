import React from 'react';
import { connect } from 'react-redux';

import PokeRow from './PokeRow';
import { sortColumn } from '../helpers/sortColumn';

const getSortedPokemon = (pokemon, column) => {
  return sortColumn(pokemon, column);
};

const getPage = (pokemon, page) => {
  if (page === 'default') {
    return pokemon.slice(0, 10);
  }
  const lastRow = (pokemon.length / 15) * page;

  return pokemon.slice(lastRow - 10, lastRow);
};

const PokeBody = (props) => {
  const sortedPokemon = getSortedPokemon(props.pokemon, props.columnToSort);
  const whichPage = getPage(sortedPokemon, props.page);

  return (
    <tbody>
      {whichPage.map(p => {
        return <PokeRow key={p.id} {...p} />;
      })}
    </tbody>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(PokeBody);
