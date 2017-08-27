import React from 'react';
import { connect } from 'react-redux';

import { getAllPokemon, chooseSortColumn, hideColumn } from '../actions/index';

class PokeHeaders extends React.Component {
  constructor(props) {
    super(props);

    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, columnToSort } = this.props;
    let rows = [];

    for (let i = 1; i < window.localStorage.length; i++) {
      let pokemon = JSON.parse(window.localStorage[i]);

      rows.push(pokemon);
    }
    dispatch(getAllPokemon(rows));
  }

  handleHeaderClick(e, header) {
    const { dispatch, pokemon, columnToHide } = this.props;
    e.preventDefault();
    dispatch(hideColumn(header));
    let columnCells = document.getElementsByClassName(header);
    let visibility;

    [...columnCells].forEach(cell => {
      cell.classList.contains('visibility') ? cell.classList.remove('visibility') : cell.classList.add('visibility');
    });
  }

  render() {
    const { dispatch, pokemon, columnToSort } = this.props;
    return (
      <tr>
        <th onClick={e => {
              this.handleHeaderClick(e, 'number')}
            }
        >Number
          <a href="#"
             onClick={e => {
               e.preventDefault();
               dispatch(chooseSortColumn('id'));
             }}
          >
          <img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img>
          </a>
        </th>
        <th onClick={e => this.handleHeaderClick(e, 'name')}>Name
          <a href="#"
             onClick={e => {
               e.preventDefault();
               dispatch(chooseSortColumn('name'));
             }}
          >
          <img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img>
          </a>
        </th>
        <th onClick={e => this.handleHeaderClick(e, 'height')}>Height(m)
          <a href="#"
             onClick={e => {
               e.preventDefault();
               dispatch(chooseSortColumn('height'));
             }}
          >
          <img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img>
          </a>
        </th>
        <th onClick={e => this.handleHeaderClick(e, 'weight')}>Weight(kg)
          <a href="#"
             onClick={e => {
               e.preventDefault();
               dispatch(chooseSortColumn('weight'));
             }}
          >
          <img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img>
          </a>
        </th>
        <th onClick={e => this.handleHeaderClick(e, 'types')}>Types
               <a href="#"
             onClick={e => {
               e.preventDefault();
               dispatch(chooseSortColumn('types'));
             }}
          >
          <img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img>
          </a>
        </th>
        <th onClick={e => this.handleHeaderClick(e, 'sprite')}>Sprite</th>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return dispatch;
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(PokeHeaders);
