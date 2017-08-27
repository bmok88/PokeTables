import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(node) {

    console.log(node);
  }

  render() {
    let input;

    return (
      <form onKeyUp={e => {
        e.preventDefault();
        this.handleSearch(input.value);
      }}>
        <input type="text" ref={node => input = node}/>
      </form>
    );
  }
}

// function makeAllUppercase(string) {
//   return string.split('').forEach((s, i) => {
//     if (i % 2 !== 0) {

//     }
//   })
// }