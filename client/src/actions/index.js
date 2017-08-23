export const getAllPokemon = (pokemon) => ({
  type: 'GET_ALL',
  pokemon
});

export const addPokemon = (pokemon) => ({
  type: 'ADD_POKEMON',
  pokemon
});

export const sortColumn = (column) => ({
  type: 'SORT_COLUMN',
  column
});

