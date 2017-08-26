import { sortColumn } from '../helpers/sortColumn';
import pokemon from './pokemon';

const columns = (state = 'none', action) => {
  switch (action.type) {
    case 'CHOOSE_SORTCOLUMN':
      if (state === action.column) {
        return Object.assign({}, action, {
          reverse: true
        });
      }

      return action.column;
    default:
      return state;
  }
};

export default columns;