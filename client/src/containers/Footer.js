import React from 'react';
import { connect } from 'react-redux';
import { choosePage } from '../actions/index';

class Footer extends React.Component {
  render() {
    const { dispatch, pokemon, currentPage } = this.props;

    return (
      <div>
        <a href="#"
           onClick={e => {
             e.preventDefault();
             if (currentPage > 1) {
               dispatch(choosePage(e.target.innerHTML, currentPage));
             }
           }}
        >
          First
        </a>
        <a href="#"
           onClick={e => {
             e.preventDefault();
             if (currentPage > 1) {
               dispatch(choosePage(e.target.innerHTML, parseInt(currentPage)));
             }
           }}
        >
          Previous
        </a>
        <a href="#"
           onClick={e => {
             e.preventDefault();
             dispatch(choosePage(e.target.innerHTML, currentPage));
           }}
        >
          1
        </a>
        <a href="#"
           onClick={e => {
             e.preventDefault();
             dispatch(choosePage(e.target.innerHTML, currentPage));
           }}
        >
          2
        </a>
        <a href="#"
           onClick={e => {
             e.preventDefault();
             dispatch(choosePage(e.target.innerHTML, currentPage));
           }}
        >
          3
        </a>
        <a href="#"
          onClick={e => {
            e.preventDefault();
            dispatch(choosePage(e.target.innerHTML, currentPage));
          }}
        >
          4
        </a>
        <a href="#"
           onClick={e => {
             e.preventDefault();
             console.log('currentPage', e.target.value, e.target.innerHTML)
             if (currentPage > parseInt(e.target.innerHTML)) {
               e.target.innerHTML = 10;
             }
             dispatch(choosePage(e.target.innerHTML, currentPage));
           }}
        >
          5
        </a>
        <a href="#"
           className="hi"
           onClick={e => {
             e.preventDefault();
             e.target.classList.add('button-border');
             if (currentPage < pokemon.length / 10) {
               dispatch(choosePage(e.target.innerHTML, parseInt(currentPage)));
             }
           }}
        >
          Next
        </a>
        <a href="#"
           onClick={e => {
             e.preventDefault();
             dispatch(choosePage(e.target.innerHTML, parseInt(pokemon.length)));
           }}
        >
          Last
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Footer);