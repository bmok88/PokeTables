export const getAllPokemon = (pokemon) => ({
  type: 'GET_ALL',
  pokemon
});

export const addPokemon = (pokemon) => ({
  type: 'ADD_POKEMON',
  pokemon
});

export const chooseSortColumn = (column) => ({
  type: 'CHOOSE_SORTCOLUMN',
  column
});

export const sortColumn = (column) => ({
  type: 'SORT_COLUMN',
  column
});

export const choosePage = (choosePage, currentPage) => ({
  type: 'CHOOSE_PAGE',
  choosePage,
  currentPage
});