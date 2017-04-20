import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todosAction from '../actions/todos';
import AddTodo from '../component/AddTodo';

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(todosAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
