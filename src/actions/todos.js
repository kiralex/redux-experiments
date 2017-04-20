export function addTodo(text){
  return {
    type: "ADD_TODO",
    text
  }
}

export function removeTodo(index){
  return{
    type: "REMOVE_TODO",
    index
  }
}

export function toggleTodo(index){
  return{
    type: "TOGGLE_TODO",
    index
  }
}
