export const getAllPokemon = (pokemon) => ({
  type: 'GET_ALL',
  pokemon
});

export const addPokemon = (pokemon) => ({
  type: 'ADD_POKEMON',
  pokemon
});

export const sortColumn = (column) => ({
  type: 'SORT_POKEMON',
  column
});

// export const sortColumn = (direction) => ({
//   type: direction,
//   direction
// });