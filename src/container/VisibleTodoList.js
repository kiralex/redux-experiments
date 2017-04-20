import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todosActions from '../actions/todos';

import TodoList from '../component/TodoList';

function getVisibleTodo(todos, filters){
  switch (filters) {
    case 'SHOW_ALL':
      return todos;
      break;
    case 'SHOW_IN_PROGRESS':
      return todos.filter( (elem) => !elem.completed);
      break;
    case 'SHOW_DONE':
      return todos.filter( (elem) => elem.completed);
      break;
    default:
      return todos;
  }
  todos.filter
}

function mapStateToProps(state){
  return {
    todos: getVisibleTodo(state.todos, state.filters),
    filters: state.filters
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(todosActions, dispatch);

}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default VisibleTodoList;
