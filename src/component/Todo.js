import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => (
  <li
    onClick={props.toggleTodo.bind(null, props.index)}
    style={{
      textDecoration: props.completed ? 'line-through' : 'none'
    }}
  >
    {props.text}
  </li>
)

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
