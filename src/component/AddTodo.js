import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.refs['todoTextInput'].value !== '') {
      this.props.addTodo(this.refs['todoTextInput'].value);
      this.refs.todoForm.reset();
    }
  }

  render() {
    return (
      <form ref="todoForm" onSubmit={this.handleSubmit}>
        <input type="text" ref="todoTextInput" />
        <input type="submit" />
      </form>
    );
  }
}

export default AddTodo;
