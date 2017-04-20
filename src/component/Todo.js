import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Trash from '../../public/garbage.png';


class Todo extends Component{
    constructor(props){
      super(props);
    }

    shouldComponentUpdate(nextProps, nextState){
      //props.todo connect to state through TodoListContainer
      const ShouldUpdate = (this.props.todo !== nextProps.todo);
      return ShouldUpdate;
    }

    render(){
      console.log(`==> Rendering ${this.props.todo.text}...`);
      return(
        <li>
          <span
            onClick={this.props.toggleTodo.bind(null, this.props.index)}
            style={{
              textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            }}
          >
            {this.props.todo.text}
          </span>
          <img
            src={Trash}
            alt="delete"
            onClick={this.props.removeTodo.bind(null, this.props.index)}
          />
        </li>
      )
    }
}

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
