import currentPage from './currentPage';
import pokemon from './pokemon';
import columnToSort from './columnToSort';
import columnToHide from './columnToHide';

import { combineReducers } from 'redux';

const pokeTable = combineReducers({
  pokemon,
  columnToSort,
  columnToHide,
  currentPage
});

export default pokeTable;