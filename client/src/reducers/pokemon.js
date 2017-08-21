const eachPokemon = (state, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      let types;
      let pokemon = action.pokemon;

      if (pokemon.types.length > 1) {
        types = pokemon.types[0].name + ', ' + pokemon.types[1].name;
      } else {
        types = pokemon.types[0].name;
      }

      return {
        name: pokemon.name,
        id: pokemon.id,
        height: pokemon.height,
        weight: pokemon.weight,
        types: types
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
    default:
      return state;
  }
};

export default pokemon;