function filters(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SHOW_ALL':
      return action.type;
      break;

    case 'SHOW_IN_PROGRESS':
      return action.type;
      break;

    case 'SHOW_DONE':
      return action.type;
      break;

    default:
      return state;
  }
}

export default filters;
