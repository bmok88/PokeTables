import currentPage from './currentPage';
import pokemon from './pokemon';
import columnToSort from './columnToSort';

import { combineReducers } from 'redux';

const pokeTable = combineReducers({
  pokemon,
  columnToSort,
  currentPage
});

export default pokeTable;