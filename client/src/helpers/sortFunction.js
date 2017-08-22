export const sortColumn = (state, column) => {
  const sortedState = state.sort((a, b) => {
    return a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
  });

  return sortedState;
};

