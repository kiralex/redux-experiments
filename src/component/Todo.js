import React from 'react';
import PropTypes from 'prop-types';

import Trash from '../../public/garbage.png';

const Todo = props => (
  <li>
    <span
      onClick={props.toggleTodo.bind(null, props.index)}
      style={{
        textDecoration: props.todo.completed ? 'line-through' : 'none',
      }}
    >
      {props.todo.text}
    </span>
    <img
      src={Trash}
      alt="delete"
      onClick={props.removeTodo.bind(null, props.index)}
    />
  </li>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Todo;
