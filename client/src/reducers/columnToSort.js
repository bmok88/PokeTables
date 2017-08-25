import { sortColumn } from '../helpers/sortColumn';
import pokemon from './pokemon';

const columns = (state = 'none', action) => {
  switch (action.type) {
    case 'SORT_COLUMN':
      return action.column;
    default:
      return state;
  }
};

export default columns;