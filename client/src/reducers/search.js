const search = (state = [], action) => {
  switch(action.type) {
    case 'SEARCH_POKEMON':
      return action.pokemon;
    default:
      return state;
  }
};

export default search;