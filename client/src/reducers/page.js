const page = (state = 'default', action) => {
  switch (action.type) {
    case 'CHOOSE_PAGE':
      return action.page;
    default:
      return state;
  }
};

export default page;