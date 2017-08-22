import pokemon from './pokemon';
import { combineReducers } from 'redux';

const pokeTable = combineReducers({
  pokemon
});

export default pokeTable;