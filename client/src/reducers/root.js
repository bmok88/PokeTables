import pokemon from './pokemon';
import sort from './sort';
import { combineReducers } from 'redux';

const pokeTable = combineReducers({
  pokemon,
  sort
});

export default pokeTable;