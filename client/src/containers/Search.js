import React from 'react';
import { connect } from 'react-redux';
import { getAllPokemon, search } from '../actions/index';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(node, copy) {
    const { dispatch } = this.props;
    const matches = [];

    copy.forEach(p => {
      for (let key in p) {
        if (p[key].toString().toLowerCase().indexOf(node) !== -1) {
          // console.log('node string', node)
          matches.push(p);
        } else if (node === p[key].toString()) {
          // console.log('node num', node)
          matches.push(p);
        }
      }
    });
    console.log('matches', matches)
    dispatch(search(matches));
  }

  render() {
    let input;
    const { pokemon } = this.props;
    let copy = pokemon.slice();
    return (
      <form onKeyUp={e => {
        e.preventDefault();
        this.handleSearch(input.value, copy);
      }}>
        <input type="text" ref={node => input = node}/>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Search);