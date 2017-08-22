import React from 'react';
import { connect } from 'react-redux';

import { getAllPokemon, sortColumn } from '../actions/index';

class PokeHeaders extends React.Component {
  componentDidMount() {
    let rows = [];

    for (let i = 1; i < window.localStorage.length; i++) {
      let pokemon = JSON.parse(window.localStorage[i]);

      rows.push(pokemon);
    }
    this.props.dispatch(getAllPokemon(rows));
  }

  render() {
    return (
      <tr>
        <th>Number
          <a href="#"
             onClick={e => {
               e.preventDefault();
               this.props.dispatch(sortColumn('id'));
               // this.props.dispatch(sortDirection('ASCENDING'));
             }}
          >
            <img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img>
          </a>
        </th>
        <th>Name
          <a href="#"
             onClick={e => {
               e.preventDefault();
               this.props.dispatch(sortColumn('name'));
             }}
          >
          <img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img>
          </a>
        </th>
        <th>Height (m)
          <a href="#"
             onClick={e => {
               e.preventDefault();
               this.props.dispatch(sortColumn('height'));
             }}
          >
          <img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img>
          </a>
        </th>
        <th>Weight (kg)
          <a href="#"
             onClick={e => {
               e.preventDefault();
               this.props.dispatch(sortColumn('weight'));
             }}
          >
          <img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img>
          </a>
        </th>
        <th>Types
               <a href="#"
             onClick={e => {
               e.preventDefault();
               this.props.dispatch(sortColumn('types'));
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
