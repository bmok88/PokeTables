import React from 'react';
import { connect } from 'react-redux';
import { choosePage } from '../actions/index';

class Footer extends React.Component {
  render() {
    const { dispatch } = this.props;

    return (
      <div>
        <a href="#"
          onClick={e => {
            e.preventDefault();
            dispatch(choosePage(e.target.innerHTML));
          }}
        >
          First
        </a>
        <a href="#"
          onClick={e => {
            e.preventDefault();
            dispatch(choosePage(e.target.innerHTML));
          }}
        >
          Previous
        </a>
        <a href="#"
          onClick={e => {
            e.preventDefault();
            dispatch(choosePage(e.target.innerHTML));
          }}
        >
          1
        </a>
        <a href="#"
          onClick={e => {
            e.preventDefault();
            dispatch(choosePage(e.target.innerHTML));
          }}
        >
          2
        </a>
        <a href="#"
          onClick={e => {
            e.preventDefault();
            dispatch(choosePage(e.target.innerHTML));
          }}
        >
          3
        </a>
        <a href="#"
          onClick={e => {
            e.preventDefault();
            dispatch(choosePage(e.target.innerHTML));
          }}
        >
          4
        </a>
        <a href="#"
          onClick={e => {
            e.preventDefault();
            dispatch(choosePage(e.target.innerHTML));
          }}
        >
          5
        </a>
        <a href="#"
          onClick={e => {
            e.preventDefault();
            dispatch(choosePage(e.target.innerHTML));
          }}
        >
          Next
        </a>
        <a href="#"
          onClick={e => {
            e.preventDefault();
            dispatch(choosePage(e.target.innerHTML));
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