import React from 'react';
import { connect } from 'react-redux';

import { getAllPokemon } from '../actions/index';

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
        <th>Number<img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img></th>
        <th>Name<img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img></th>
        <th>Height (m)<img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img></th>
        <th>Weight (kg)<img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img></th>
        <th>Types<img src="https://image.freepik.com/free-icon/sort-arrows-couple-pointing-up-and-down_318-42272.jpg" height="20" width="20"></img></th>
        <th>Sprite</th>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return dispatch;
};

export default connect(mapDispatchToProps)(PokeHeaders);
