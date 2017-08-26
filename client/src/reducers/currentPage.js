const page = (state = 1, action) => {
  switch (action.type) {
    case 'CHOOSE_PAGE':
      let page;

      if (action.choosePage === 'Next') {
        page = ++action.currentPage;
      } else if (action.choosePage === 'Previous') {
        page = --action.currentPage;
      } else if (action.choosePage === 'Last') {
        page = action.currentPage / 10;
      } else if (action.choosePage === 'First') {
        page = 1;
      } else {
        page = action.choosePage;
      }

      return page;
    default:
      return state;
  }
};

export default page;