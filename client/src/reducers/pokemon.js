const pokemon = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return {
        name: action.name,
        id: action.id,
        height: action.height,
        weight: action.weight,
      }
    case 'GET_ALL':
      return [
        ...state,
        action.pokemon
      ];
    default:
      return state;
  }
};

export default pokemon;