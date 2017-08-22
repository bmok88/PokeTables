import pokemon from './pokemon';
import columns from './columns';

import { combineReducers } from 'redux';

const pokeTable = combineReducers({
  pokemon,
  columns
});

export default pokeTable;