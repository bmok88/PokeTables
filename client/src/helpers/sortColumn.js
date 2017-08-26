export const sortColumn = (state, column) => {
  let sortedState;

  if (column.reverse) {
    let col = column.column;

    sortedState = state.slice().sort((a, b) => {
      if (col === 'types') {
        return a[col][0].type.name > b[col][0].type.name ? -1 : a[col][0].type.name > b[col][0].type.name ? 1 : 0;
      } else if (col !== 'none') {

        return a[col] > b[col] ? -1 : a[col] < b[col] ? 1 : 0;
      }

      return a.id > b.id ? -1 : a.id > b.id ? 1 : 0;
    });
  } else {
    sortedState = state.slice().sort((a, b) => {
      if (column !== 'reverse') {
        if (column === 'types') {

          return a[column][0].type.name < b[column][0].type.name ? -1 : a[column][0].type.name > b[column][0].type.name ? 1 : 0;
        } else if (column !== 'none') {
          return a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
        }

        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
      }
    });
  }

  return sortedState;
};

