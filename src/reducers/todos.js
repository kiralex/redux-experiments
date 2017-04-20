function todos(state = [], action){
  switch (action.type) {
    case 'TOGGLE_TODO':
      const i = action.index;
      const toBeReturned = [ ...state];
      toBeReturned[i].completed = !toBeReturned[i].completed;
      return toBeReturned;
      break;
    default:
      return state;

  }
  return state;
}

export default todos;
