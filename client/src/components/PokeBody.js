import React from 'react';
import { connect } from 'react-redux';

import PokeRow from './PokeRow';
import { sortColumn } from '../helpers/sortColumn';

const getSortedPokemon = (pokemon, column) => {
  return sortColumn(pokemon, column);
};

const getPage = (pokemon, pageToGoTo) => {
  if (pageToGoTo === 'one') {
    pageToGoTo = 1;
  }

  let lastRow = (pokemon.length / 15) * pageToGoTo;

  return pokemon.slice(lastRow - 10, lastRow);
};

const PokeBody = ({ pokemon, columnToSort, currentPage }) => {
  const sortedPokemon = getSortedPokemon(pokemon, columnToSort);
  const whichPage = getPage(sortedPokemon, currentPage);

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
