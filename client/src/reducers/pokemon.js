const eachPokemon = (state, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return {
        name: action.name,
        id: action.id,
        height: action.height,
        weight: action.weight
      }
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