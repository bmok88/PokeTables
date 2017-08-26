import React from 'react';
import { connect } from 'react-redux';

import { getAllPokemon, chooseSortColumn } from '../actions/index';

class PokeHeaders extends React.Component {
  componentDidMount() {
    const { dispatch, columnToSort } = this.props;
    let rows = [];

    for (let i = 1; i < window.localStorage.length; i++) {
      let pokemon = JSON.parse(window.localStorage[i]);

      rows.push(pokemon);
    }
    dispatch(getAllPokemon(rows));
  }

  render() {
    const { dispatch, pokemon, columnToSort } = this.props;
    console.log('pokeheaders props', this.props)
    return (
      <tr>
        <th>Number
          <a href="#"
             onClick={e => {
               e.preventDefault();
               dispatch(chooseSortColumn('id'));
             }}
          >
            <img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img>
          </a>
        </th>
        <th>Name
          <a href="#"
             onClick={e => {
               e.preventDefault();
               dispatch(chooseSortColumn('name'));
             }}
          >
          <img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img>
          </a>
        </th>
        <th>Height (m)
          <a href="#"
             onClick={e => {
               e.preventDefault();
               dispatch(chooseSortColumn('height'));

             }}
          >
          <img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img>
          </a>
        </th>
        <th>Weight (kg)
          <a href="#"
             onClick={e => {
               e.preventDefault();
               dispatch(chooseSortColumn('weight'));

             }}
          >
          <img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img>
          </a>
        </th>
        <th>Types
               <a href="#"
             onClick={e => {
               e.preventDefault();
               dispatch(chooseSortColumn('types'));

             }}
          >
          <img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img>
          </a>
        </th>
        <th>Sprite</th>
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

export default connect(
  mapStateToProps
)(PokeHeaders);
