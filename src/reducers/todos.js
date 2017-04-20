

function todos(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
      const toBeReturned = state.map((todo, index)=>{
        if (index === action.index){
          return Object.assign({},todo,{completed: !todo.completed});
        }
        return todo;
      });
      return toBeReturned;
      break;
    case 'REMOVE_TODO':
      const index = action.index;
      return [...state].filter((elem, i) => i !== index);
    case 'ADD_TODO':
      var tmp = state.map(function(o) {
        return o.id;
      });
      var maxId = Math.max.apply(Math, tmp);
      maxId = maxId < 0 ? 0 : maxId;

      return [
        ...state,
        { id: maxId+1, completed: false, text: action.text }
      ];
      break;
    default:
      return state;

  }
  return state;
}

export default todos;
