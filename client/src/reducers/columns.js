const columns = (state = {hiding: [], sorting: 'none'}, action) => {
  switch (action.type) {
    case 'SORT_POKEMON':
      let sortedState = sortColumn(state, action.column);

      if (state.sortDirection === 'ASCENDING') {
        return sortedState.reverse();
      }

      return sortedState;
    default:
      return state;
  }
};

export default columns;