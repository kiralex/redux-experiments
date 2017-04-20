function todos(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
      const i = action.index;
      const toBeReturned = [...state];
      toBeReturned[i].completed = !toBeReturned[i].completed;
      return toBeReturned;
      break;
    case 'REMOVE_TODO':
      const index = action.index;
      return [... state].filter( (elem, i) => i!== index );
    default:
      return state;

  }
  return state;
}

export default todos;
