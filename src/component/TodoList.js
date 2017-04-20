import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = props => (
  <ul>
    {props.todos.map( (todo, i) => (
      <Todo
        {...todo}
        {...props}
        index={i}
        key={todo.id} // Copy all props of todo element (text, id)
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TodoList;
