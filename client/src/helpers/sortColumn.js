export const sortColumn = (state, column) => {
  const sortedState = state.slice().sort((a, b) => {
    if (column === 'types') {

      return a[column][0].type.name < b[column][0].type.name ? -1 : a[column][0].type.name > b[column][0].type.name ? 1 : 0;
    }

    return a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
  });

  return sortedState;
};

