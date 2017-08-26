import React from 'react';
import { connect } from 'react-redux';

import Page from '../components/Page';
import { choosePage } from '../actions/index';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(e) {
    const { dispatch, pokemon, currentPage } = this.props;
    e.preventDefault();
    if (currentPage !== parseInt(e.target.innerHTML)) {
      e.target.classList.add('button-border');
    }

    if (e.target.innerHTML === 'Last') {
      dispatch(choosePage(e.target.innerHTML, parseInt(pokemon.length)));
    } else {
      dispatch(choosePage(e.target.innerHTML, parseInt(currentPage)));
    }

    if (currentPage !== parseInt(e.target.innerHTML)) {
      e.target.classList.remove('button-border');
    }
  }

  render() {
    const { pokemon, currentPage } = this.props;

    return (
      <div>
        <Page />
        <a href="#"
           onClick={e => this.handlePageClick(e)}
        >
          First
        </a>
        <a href="#"
           onClick={e => {
             if (currentPage > 1) {
               this.handlePageClick(e);
             }
           }}
        >
          Previous
        </a>
        <a href="#"
           className="button-border"
           onClick={e => this.handlePageClick(e)}
        >
          1
        </a>
        <a href="#"
           onClick={e => this.handlePageClick(e)}
        >
          2
        </a>
        <a href="#"
           onClick={e => this.handlePageClick(e)}
        >
          3
        </a>
        <a href="#"
          onClick={e => this.handlePageClick(e)}
        >
          4
        </a>
        <a href="#"
           onClick={e => this.handlePageClick(e)}
        >
          5
        </a>
        <a href="#"
           onClick={e => {
             if (currentPage < pokemon.length / 10) {
               this.handlePageClick(e);
             }
           }}
        >
          Next
        </a>
        <a href="#"
           onClick={e => this.handlePageClick(e)}
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

export default connect(mapStateToProps)(Footer);