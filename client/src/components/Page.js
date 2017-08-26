import React from 'react';

const Page = ({ active, page, onClick }) => {
  return (
    <a href="#"
       onClick={e => this.handlePageClick(e)}
    >
      {page}
    </a>
  );
};

export default Page;