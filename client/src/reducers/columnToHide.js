const columnToHide = (state = 'none', action) => {
  switch(action.type) {
    case 'HIDE_COLUMN':
      return action.column;
    default:
      return state;
  }
};

export default columnToHide;