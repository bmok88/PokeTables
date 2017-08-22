import { sortColumn } from '../helpers/sortColumn';

const eachPokemon = (state, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      let pokemon = action.pokemon;
      let typeOne = pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1);
      let typeTwo = pokemon.types[1] ? pokemon.types[1].type.name[0].toUpperCase() + pokemon.types[1].type.name.slice(1) : null;

      return {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        types: typeTwo ? typeOne + '/' + typeTwo : typeOne,
        sprite: pokemon.sprites.front_default
      };
    case 'DELETE_POKEMON':
      if (state.id !== action.id) {
        return p;
      }
    default:
      return state;
  }
}

const pokemon = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return [
        ...state,
        eachPokemon(undefined, action)
      ];
    case 'DELETE_POKEMON':
      return state.filter(p => eachPokemon(p, action));
    case 'GET_ALL':
      return action.pokemon;
    case 'SORT_POKEMON':
      return sortColumn(state, action.column);
    default:
      return state;
  }
};

export default pokemon;