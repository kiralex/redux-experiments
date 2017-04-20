

function todos(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
      const toBeReturned = state.map((todo, index)=>{
        console.log(state);
        if (index === action.index){
          return Object.assign({},todo,{completed: !todo.completed});
        }
        return todo;
      });
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
