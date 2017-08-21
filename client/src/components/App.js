import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import AddPokemon from '../containers/AddPokemon';
import PokeTable from './PokeTable';
import { getAllPokemon } from '../actions/index';

class App extends React.Component {
  componentWillMount() {
    axios.get(this.props.pokeAPI + '/?limit=811')
      .then(results => {

        console.log('resultssds', results.data.results);
        this.props.dispatch(getAllPokemon(results.data.results));
      });
  }
  render() {
    return (
      <div>
        <h1>React-Redux PokéTable</h1>
        <AddPokemon class="add"/>
        <PokeTable pokemon={this.props.pokemon} pokeAPI={this.props.pokeAPI}/>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);